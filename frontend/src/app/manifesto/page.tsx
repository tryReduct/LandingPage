'use client'
import Navbar from '@/components/navbar';
import React from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#181848] to-[#0a0a23] flex flex-col">
       <Navbar />
    <main>
    <div className="flex  text-white  flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold  text-center mb-8">Our Manifesto</h1>
      
      <div className="max-w-3xl space-y-12">
        <div className="bg-white/5 rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">The Future of Video Editing</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe that video editing should be as natural as having a conversation. 
            The current tools force creators to think like machines - learning complex interfaces, 
            memorizing keyboard shortcuts, and spending hours on repetitive tasks. This is backwards.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            Reduct is building the future where you simply describe what you want, and AI handles the technical details. 
            No more fighting with timelines. No more tedious manual edits. Just pure creative expression.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">The Promise</h2>
          <p className="text-gray-300 leading-relaxed">
            We&apos;re committed to making video editing accessible to everyone. Whether you&apos;re a professional creator 
            or just starting out, Reduct will help you bring your vision to life faster and easier than ever before.
          </p>
        </div>

        <div className="flex justify-center mt-8 hover:cursor-pointer hover:underline">
        <HoverCard>
  <HoverCardTrigger>Join the Movement</HoverCardTrigger>
  <HoverCardContent className='bg-white/5 rounded-xl p-8 border text-white border-white/10'>
            Sign up for the waitlist to be the first to try Reduct.
          </HoverCardContent>
        </HoverCard>
        </div>
      </div>
    </div>
    </main>

{/* Footer */}
<footer className="bg-gradient-to-t from-[#0a0a23] via-[#181848] to-transparent py-10 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white">Reduct</span>
            <span className="text-xs">Reduct is an AI-powered video editing tool built for creators who want speed without sacrificing quality.</span>
            <div className="flex gap-2 mt-2">
              <span className="text-xs">© 2025 Reduct, Inc. All rights reserved.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white">Legal</span>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Refund Policy</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white">Explore</span>
              <a href="#" className="hover:text-blue-400">Help Center</a>
              <a href="#" className="hover:text-blue-400">Changelog</a>
              <a href="#" className="hover:text-blue-400">Join Discord</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
}
