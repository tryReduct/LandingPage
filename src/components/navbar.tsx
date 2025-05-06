"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className=''>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-black hover:text-purple-600 transition-colors duration-300">Reduct</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <Link  
            href="#features" 
            className="text-sm font-medium text-black/80 hover:text-purple-600 transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'features')}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium text-black/80 hover:text-purple-600 transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'how-it-works')}
          >
            How It Works
          </Link>
          <Button 
            className="bg-purple-600 hover:cursor-pointer text-white hover:bg-purple-700 rounded-full px-6"
            onClick={() => window.location.href = '/early'}
          >
            Get Early Access
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-black hover:text-purple-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-purple-600/20 backdrop-blur-xl p-4 md:hidden border-b border-purple-600/20 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-black/80 hover:text-purple-600 transition-colors duration-300"
                onClick={(e) => handleScroll(e, 'features')}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-black/80 hover:text-purple-600 transition-colors duration-300"
                onClick={(e) => handleScroll(e, 'how-it-works')}
              >
                How It Works
              </a>
              <Button 
                className="bg-purple-600 text-white hover:cursor-pointer hover:bg-purple-700 w-full rounded-full"
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
