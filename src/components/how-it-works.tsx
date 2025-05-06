import { Upload, MessageCircle, Video } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-purple-600" />,
      title: "Upload",
      description: "Upload your raw footage to Reduct's secure cloud platform.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
      title: "Describe",
      description: "Tell Reduct what you want using natural language or edit the transcript.",
    },
    {
      icon: <Video className="h-10 w-10 text-purple-600" />,
      title: "Get Your Edit",
      description: "Receive your professionally edited video in minutes, not hours.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-transparent">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">How It Works</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto leading-relaxed">
            Editing videos has never been this simple or intuitive.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative hover:cursor-pointer z-10 flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full shadow-md mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3 tracking-tight">{step.title}</h3>
                <p className="text-black/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
