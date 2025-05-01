import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10">
      <div className="container px-4 md:px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">Reduct</span>
            </Link>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Reduct will revolutionize video editing with AI-powered tools that understand natural language and edit
              with precision.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:cursor-pointer hover:bg-white/10">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:cursor-pointer hover:bg-white/10">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:cursor-pointer hover:bg-white/10">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 tracking-tight">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Reduct. All rights reserved.</p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Reduct is in early alpha.{" "}
            <Link href="#" className="text-white hover:underline">
              Learn more here
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
