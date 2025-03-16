import { NextApiRequest, NextApiResponse } from 'next'
import { authSchema } from '@/schemas/authSchema'
import { User } from '@/types/common'

const auth: User = undefined

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = authSchema(req.body)
    if (!result.problems) {
      auth.push(req.body)
      return res.status(201).json({ message: 'Lead submitted successfully' })
    }
    return res.status(400).json({ error: result.problems })
  }
  if (req.method === 'GET') {
    return res.status(200).json(auth)
  }
  res.status(405).json({ message: 'Method Not Allowed' })
}
