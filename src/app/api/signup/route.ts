import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Both name and email are required' },
        { status: 400 }
      )
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir)
    }

    const csvPath = path.join(dataDir, 'signups.csv')
    const timestamp = new Date().toISOString()
    const csvRow = `${timestamp},${name},${email}\n`

    // Check if file exists, if not create it with headers
    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, 'timestamp,name,email\n')
    }

    // Append the new signup
    fs.appendFileSync(csvPath, csvRow)

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