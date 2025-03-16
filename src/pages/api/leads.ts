import { NextApiRequest, NextApiResponse } from 'next'
import { leadSchema } from '@/schemas/leadSchema'

const leads: (typeof leadSchema)[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = leadSchema(req.body)
    if (!result.problems) {
      leads.push(req.body)
      return res.status(201).json({ message: 'Lead submitted successfully' })
    }
    return res.status(400).json({ error: result.problems })
  }
  if (req.method === 'GET') {
    return res.status(200).json(leads)
  }
  res.status(405).json({ message: 'Method Not Allowed' })
}
