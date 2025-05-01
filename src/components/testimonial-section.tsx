import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white/5 backdrop-blur-md">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">What Creators Are Saying</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Hear from content creators who have transformed their workflow with Reduct.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 glass-card">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Avatar className="w-24 h-24 border-4 border-white/20">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Testimonial" />
                  <AvatarFallback className="bg-purple-100 text-purple-600">CR</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1">
                <Quote className="h-8 w-8 text-white/40 mb-4" />
                <blockquote className="text-lg md:text-xl text-white italic mb-6 leading-relaxed">
                  "Reduct has completely transformed my editing process. What used to take me hours now takes minutes,
                  and the quality is even better. It's like having a professional editor who understands exactly what I
                  want."
                </blockquote>
                <div>
                  <p className="font-semibold text-white">Casey Rodriguez</p>
                  <p className="text-white/80">Content Creator & Filmmaker</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
