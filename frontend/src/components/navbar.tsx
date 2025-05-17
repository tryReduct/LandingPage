'use client'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'

export default function Navbar() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const startPosition = window.scrollY;
      const targetPosition = pricingSection.getBoundingClientRect().top + startPosition;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration in milliseconds
      let start: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <main>
        <nav className="text-white flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Link href="/" className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:cursor-pointer">Reduct</Link>
        </div>
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="" className="hover:text-blue-400 transition">Use Cases</a>
          <a href="#pricing" onClick={scrollToPricing} className="hover:text-blue-400 transition">Pricing</a>
          <Link href="/manifesto" className="hover:text-blue-400 transition">Manifesto</Link>
          <div className="relative flex flex-col items-center">
            <Link href="/careers" className="hover:text-blue-400 transition relative">
              <span className="relative">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 -rotate-8 opacity-80">
                  <Badge  className="bg-gradient-to-br from-blue-400 to-purple-500 px-2 py-0.5 text-xs leading-none text-white shadow-md">we&apos;re hiring</Badge>
                </span>
                Careers
              </span>
            </Link>
          </div>
          <Link href="/help" className="hover:text-blue-400 transition">Help Center</Link>
        </div>
        <div className="flex gap-2">
          <Button className="text-white bg-black/10 hover:cursor-pointer">Log in</Button>
          <Button variant="outline" className="text-black bg-white hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-black transition-colors duration-300">Sign Up</Button>
        </div>
      </nav>
    </main>
  )
}