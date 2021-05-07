import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { VercelRequest, VercelResponse } from '@vercel/node'

type Contact = {
  name: string
  email: string
  reason: string
  subject: string
  message: string
}

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(404).end()
  }

  const { name, email, reason, subject, message }: Contact = req.body

  if (!name || !email || !reason || !subject || !message) {
    res.status(400).json({ message: 'Missing parameters.' }).end()
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg: MailDataRequired = {
    from: 'wil.canti2697@gmail.com',
    replyTo: email,
    personalizations: [
      {
        to: 'will.canti2697@gmail.com',
        dynamicTemplateData: { name, email, reason, subject, message },
      },
    ],
    templateId: process.env.EMAIL_TEMPLATE_ID,
  }
  try {
    const resp = await sgMail.send(msg)
    res.status(200).json({ message: 'Message sent.' })
  } catch (error) {
    res.status(400).json({ error: 'Was not able to send.' })
  }
  res.end()
}
