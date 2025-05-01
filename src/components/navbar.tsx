"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/5">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">Reduct</span>
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            How It Works
          </Link>
          <Button 
            className="bg-white hover:cursor-pointer text-purple-600 hover:bg-white/90 hover:text-purple-700 rounded-full px-6"
            onClick={() => window.location.href = '/early'}
          >
            Get Early Access
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-purple-600/90 backdrop-blur-md p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Button 
                className="bg-white text-purple-600 hover:cursor-pointer hover:bg-white/90 w-full rounded-full"
                onClick={() => window.location.href = '/early-access'}
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
