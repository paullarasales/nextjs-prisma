import { PrismaClient } from '@prisma/client'
import Cors from 'cors'

// Initialize Prisma Client
const prisma = new PrismaClient()

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST'], 
  origin: '*', // Adjust this in production
})

// Helper method to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors)

  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users)
    } catch (error) {
      console.error('Error fetching users:', error)
      res.status(500).json({ error: 'Failed to fetch users' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
