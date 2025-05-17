'use client'
import Navbar from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const jobs = [
  {
    title: 'Founding Engineer',
    meta: 'Engineering · San Francisco · Full time · On-site',
    link: '#',
  },
  
  {
    title: 'Infrastructure Engineer',
    meta: 'Other · San Francisco · Full time · On-site',
    link: '#',
  },
  {
    title: 'Head of Growth',
    meta: 'Multiple · San Francisco · Full time · On-site',
    link: '#',
  },
  {
    title: 'Intern',
    meta: 'Designer · San Francisco · Full time · On-site',
    link: '#',
  }
  
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#181848] to-[#0a0a23] flex flex-col">
       <Navbar />
       

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6 text-center">Open Positions</h1>
        <div className="w-full max-w-xl mb-8">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#23243a] bg-[#181922]">
            <div className="flex justify-center items-center h-64">
              <Badge variant="outline" className="mb-4 text-sm text-white translate-y-4 rotate-3 transform">Video Coming Soon</Badge>
            </div>
            {/* <iframe
              width="100%"
              height="315"
              
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            ></iframe> */}
          </div>
        </div>
        <div className="w-full max-w-xl flex flex-col space-y-4">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex justify-between items-center bg-[#23243a] rounded-lg px-6 py-4 shadow border border-[#23243a]"
            >
              <div>
                <div className="text-white font-semibold text-lg">{job.title}</div>
                <div className="text-gray-400 text-xs mt-1">{job.meta}</div>
              </div>
              <a
                href={job.link}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md text-sm transition"
              >
                Apply Now
              </a>
            </div>
          ))}
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
