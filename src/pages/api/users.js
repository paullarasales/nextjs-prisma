import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }

  else if (req.method === 'POST') {
    const { name, email } = req.body; 

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      res.status(201).json(newUser); 
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); 
  }
}
