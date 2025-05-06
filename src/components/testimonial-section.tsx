import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-purple-600/5 to-transparent pointer-events-none" />
      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight hover:text-purple-600 transition-colors duration-300">What Creators Are Saying</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto leading-relaxed">
            Hear from content creators who have transformed their workflow with Reduct.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-transparent rounded-3xl blur-2xl" />
          <Card className="max-w-4xl mx-auto border-0 backdrop-blur-xl bg-white/30 border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <Avatar className="w-24 h-24 border-4 border-purple-100 hover:border-purple-200 transition-colors duration-300">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Testimonial" />
                    <AvatarFallback className="bg-purple-100 hover:bg-purple-200 transition-colors duration-300 text-purple-600">AB</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-purple-600/40 mb-4" />
                  <blockquote className="text-lg hover:cursor-default md:text-xl text-black italic mb-6 leading-relaxed">
                    "Reduct has completely transformed my editing process. What used to take me hours now takes minutes,
                    and the quality is even better. It's like having a professional editor who understands exactly what I
                    want."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-black hover:cursor-default hover:text-purple-600 transition-colors duration-300">Amaan Bilwar</p>
                    <p className=" hover:cursor-default text-black/80">Content Creator & Filmmaker</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
