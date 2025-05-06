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
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-purple-600/5 to-transparent pointer-events-none" />
      <div className="min-h-screen backdrop-blur-xl bg-gradient-to-b from-white/40 to-white/20 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Link href="/" className="flex items-center text-black/70 hover:text-black mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-black mb-2 hover:cursor-default hover:text-purple-600 transition-colors duration-300">Join the Early Access List</h1>
                <p className="text-black/70 hover:cursor-default">Be among the first to experience Reduct's AI-powered video editing revolution.</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/50 border-black/10 text-black placeholder:text-black/50 backdrop-blur-sm"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border-black/10 text-black placeholder:text-black/50 backdrop-blur-sm"
                      required
                    />
                    {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 text-white hover:cursor-pointer hover:bg-purple-700 rounded-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Join Early Access'}
                  </Button>
                </form>
              ) : (
                <div className="text-center text-black">
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-black/80">We've received your interest. We'll be in touch soon with early access details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}