import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users)  // Make sure this is returning the correct JSON
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to fetch users' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
