import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'isomorphic-unfetch'

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(404)

  const { token } = JSON.parse(req.body)
  if (!token) return res.status(400).json({ message: 'Missing captcha token.' })
  const captchaSecret = process.env.RECAPTCHA_SECRET_KEY
  if (!captchaSecret)
    return res.status(400).json({ message: 'Missing Secret Key.' })
  if (token) {
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${token}`,
        { method: 'POST' },
      )
      const message = await response.json()
      res.status(response.status).json(message)
    } catch (error) {
      res.status(400).json({ message: 'Error making request to recaptcha.' })
    }
  } else {
    res.status(400).json({ message: 'Token not found.' })
  }
  res.end()
}
