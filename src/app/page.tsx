import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialSection from "@/components/testimonial-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    // Force the gradient background to be applied regardless of color scheme
    <div className="min-h-screen animated-gradient text-black">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}
