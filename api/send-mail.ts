import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { VercelRequest, VercelResponse } from '@vercel/node'
import LRU from 'lru-cache'

type Contact = {
  name: string
  email: string
  reason: string
  subject: string
  message: string
}

type RateLimitOptions = {
  uniqueTokenPerInterval?: number // Max users per second
  interval?: number
}

type CheckArgs = {
  res: VercelResponse
  limit: number // Max requests per minute
  token: string
}

const rateLimit = (options: RateLimitOptions) => {
  const tokenCache = new LRU({
    max: options.uniqueTokenPerInterval ?? 500,
    maxAge: options.interval ?? 60000,
  })

  return {
    check: ({ res, limit, token }: CheckArgs) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) || [0]) as number[]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit
        res.setHeader('Cache-Control', `s-maxage=${options.interval ?? 60000}`)
        res.setHeader('X-RateLimit-Limit', limit)
        res.setHeader(
          'X-RateLimit-Remaining',
          isRateLimited ? 0 : limit - currentUsage,
        )
        return isRateLimited ? reject() : resolve()
      }),
  }
}

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
})

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(404).send('Not found')
  const { name, email, reason, subject, message }: Contact = req.body

  if (!name || !email || !reason || !subject || !message) {
    return res.status(400).json({ message: 'Missing parameters.' })
  }
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) return res.status(400).json({ message: 'Missing Api Key.' })

  sgMail.setApiKey(apiKey)
  const msg: MailDataRequired = {
    from: 'wil.canti2697@gmail.com',
    replyTo: email,
    personalizations: [
      {
        to: 'will.canti2697@gmail.com',
        dynamicTemplateData: { name, email, reason, subject, message },
      },
    ],
    templateId: process.env.EMAIL_TEMPLATE_ID ?? '',
  }
  try {
    await limiter.check({ res, limit: 2, token: 'CACHE_TOKEN' })
    await sgMail.send(msg)
    res.status(200).json({ message: 'Message sent.' })
  } catch (error) {
    res.status(400).json({ error: 'Was not able to send.' })
  }

  res.end()
}
