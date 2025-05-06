import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

// MongoDB connection string - you'll need to replace this with your actual MongoDB connection string
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const client = new MongoClient(uri)

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Both name and email are required' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await client.connect()
    const db = client.db('early-access')
    const collection = db.collection('users')

    // Insert the new signup
    await collection.insertOne({
      name,
      email,
      timestamp: new Date()
    })

    // Close the connection
    await client.close()

    return NextResponse.json(
      { message: 'Signup successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing signup:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 