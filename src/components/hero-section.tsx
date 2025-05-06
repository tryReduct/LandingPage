'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-block px-4 py-1 bg-black/5 backdrop-blur-md rounded-full text-black text-sm font-medium mb-2 cursor-default hover:bg-black/10 transition-colors duration-300">
            Reduct Alpha
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight hover:cursor-default text-black leading-tight">
              Don't <span className="font-semibold text-purple-600">Rawdog</span> your videos. <br />
              Just Say the Word
            </h1>
            <div className="relative group">
              <p className="text-lg md:text-xl hover:cursor-default text-white max-w-2xl mx-auto leading-relaxed bg-purple-600/90 backdrop-blur-sm px-4 py-2 inline-block relative overflow-hidden">
                (or the sentence)
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl hover:cursor-default text-black/80 max-w-2xl mx-auto leading-relaxed">
            Reduct is an AI-powered video editor that transforms natural language prompts into professional edits. Edit
            faster, smarter, and more intuitively than ever before.
          </p>

          <div className="relative w-full max-w-xl mt-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <p className="text-black mb-6 text-lg hover:cursor-default hover:text-purple-600 transition-colors duration-300">Let Reduct do it for you</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button
                  size="lg"
                  className="bg-purple-600 text-white hover:cursor-pointer hover:bg-purple-700 flex-1 rounded-full text-base font-medium"
                  onClick={() => window.location.href = '/early'}
                >
                  Get Early Access
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:cursor-pointer border-black/20 text-black hover:bg-black/5 flex-1 rounded-full text-base font-medium"
                >
                  See it in action
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
