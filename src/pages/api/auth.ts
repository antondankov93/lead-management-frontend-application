import { NextApiRequest, NextApiResponse } from 'next'
import { authSchema } from '@/schemas/authSchema'
import { User } from '@/types/common'

let auth: User = undefined

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = authSchema(req.body)

    if (!result) {
      return res.status(400).json({ error: 'Invalid request payload' })
    }

    auth = { id: crypto.randomUUID(), ...req.body }
    return res.status(201).json({ message: 'User authenticated successfully', user: auth })
  }

  if (req.method === 'GET') {
    return res.status(200).json(auth)
  }

  res.status(405).json({ message: 'Method Not Allowed' })
}
