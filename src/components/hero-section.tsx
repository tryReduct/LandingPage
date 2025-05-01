'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-2">
            Reduct Alpha
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Edit Videos. <br />
            Just Say the <span className="text-black">Word</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Reduct is an AI-powered video editor that transforms natural language prompts into professional edits. Edit
            faster, smarter, and more intuitively than ever before.
          </p>

          <div className="glass-card p-8 w-full max-w-xl mt-4">
            <p className="text-white mb-6 text-lg">Let Reduct do it for you</p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:cursor-pointer hover:bg-white/90 flex-1 rounded-full text-base font-medium"
                onClick={() => window.location.href = '/early'}
              >
                Get Early Access
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:cursor-pointer border-white/30 text-white hover:bg-white/10 flex-1 rounded-full text-base font-medium"
              >
                See it in action
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-w-xl mt-8">
            <Button variant="ghost" className="hover:cursor-pointer flex flex-col items-center text-white hover:bg-white/10 rounded-lg p-4">
              <span className="text-sm">Research</span>
            </Button>
            <Button variant="ghost" className="hover:cursor-pointer flex flex-col items-center text-white hover:bg-white/10 rounded-lg p-4">
              <span className="text-sm">Create</span>
            </Button>
            <Button variant="ghost" className="hover:cursor-pointer flex flex-col items-center text-white hover:bg-white/10 rounded-lg p-4">
              <span className="text-sm">Plan</span>
            </Button>
            <Button variant="ghost" className="hover:cursor-pointer flex flex-col items-center text-white hover:bg-white/10 rounded-lg p-4">
              <span className="text-sm">Analyze</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
