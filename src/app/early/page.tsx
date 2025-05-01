'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <Link href="/" className="flex items-center text-white/70 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Join the Early Access List</h1>
          <p className="text-white/70">Be among the first to experience Reduct's AI-powered video editing revolution.</p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-purple-600 hover:bg-white/90 rounded-full"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Join Early Access'}
            </Button>
          </form>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>We've received your interest. We'll be in touch soon with early access details.</p>
          </div>
        )}
      </div>
    </div>
  )
}