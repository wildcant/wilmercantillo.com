import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'isomorphic-unfetch'

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(404)

  const { token } = JSON.parse(req.body)

  if (token) {
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        { method: 'POST' },
      )

      res.status(response.status).json(await response.json())
    } catch (error) {
      res.status(400).json({ message: 'Error making request to recaptcha.' })
    }
  } else {
    res.status(400)
    res.json({ message: 'Token not found.' })
  }
  res.end()
}
