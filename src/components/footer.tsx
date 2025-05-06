import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative backdrop-blur-xl bg-gradient-to-b from-transparent via-white/20 to-white/30">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-purple-600/2 to-transparent pointer-events-none" />
      <div className="container px-4 md:px-6 py-12 max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-black tracking-tight">Reduct</span>
            </Link>
            <p className="text-black/80 mb-6 max-w-md leading-relaxed">
              Reduct will revolutionize video editing with AI-powered tools that understand natural language and edit
              with precision.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-black/80 hover:text-black hover:cursor-pointer hover:bg-black/5">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-black/80 hover:text-black hover:cursor-pointer hover:bg-black/5">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-black/80 hover:text-black hover:cursor-pointer hover:bg-black/5">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4 tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4 tracking-tight">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/80 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/60 text-sm">© {new Date().getFullYear()} Reduct. All rights reserved.</p>
          <p className="text-black/60 text-sm mt-4 md:mt-0">
            Reduct is in early alpha.{" "}
            <Link href="#" className="text-black hover:underline">
              Learn more here
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
