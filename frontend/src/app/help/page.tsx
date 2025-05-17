import Navbar from '@/components/navbar'
import { Badge } from '@/components/ui/badge'
import React from 'react'


const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#181848] to-[#0a0a23] text-white ">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
            <Badge variant="outline" className="mb-4 text-sm text-white translate-y-4 rotate-3 transform">Work in progress</Badge>
            <h1 className="text-4xl font-bold">Help Center</h1>
        </div>
    </div>
  )
}

export default page