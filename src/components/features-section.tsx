import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Edit, Wand2 } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Natural Prompt Editing",
      description:
        "Simply describe your desired edit in plain language. Ask for a 'Casey Neistat style' or 'remove all filler' and watch Reduct transform your footage.",
    },
    {
      icon: <Edit className="h-10 w-10 text-purple-600" />,
      title: "Transcript-Based Precision",
      description:
        "Edit your video by modifying the transcript. Cut, rearrange, or emphasize sections with text-based precision that automatically updates your video.",
    },
    {
      icon: <Wand2 className="h-10 w-10 text-purple-600" />,
      title: "Style-Aware Automation",
      description:
        "Reduct understands cinematic styles and can apply them to your footage, maintaining consistency while adapting to your unique content.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">Powerful Features</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto leading-relaxed">
            Reduct combines AI intelligence with intuitive controls to revolutionize video editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:cursor-pointer border-0 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-black tracking-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black/80 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
