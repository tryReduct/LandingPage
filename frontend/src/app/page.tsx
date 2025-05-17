'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// Minimal Card component
type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
};
const Card = ({ children, className = "", highlighted = false }: CardProps) => (
  <div
    className={`rounded-2xl p-8 shadow-xl transition-all duration-300 backdrop-blur-md relative overflow-hidden ${
      highlighted
        ? "bg-gradient-to-br from-blue-800/80 to-blue-900/60 border-2 border-blue-400/80"
        : "bg-white/5 border border-white/10"
    } ${className}`}
  >
    {highlighted && (
      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-blue-400/60" style={{boxShadow: '0 0 40px 0 rgba(80,150,255,0.15)'}}></div>
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#181848] to-[#0a0a23] text-white ">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <Badge variant="outline" className="mb-4 text-sm text-white translate-y-4 rotate-3 transform">demo video coming soon</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Edit videos at the speed of thought
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Reduct 
          </span>
          <span> is an AI-powered editor that lets you edit videos using natural language. You can cut, add effects, captions and more by simply <span className="italic underline">typing</span> what you want.</span>
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400"
            />
            <Button variant="outline" className="text-white bg-black/10 hover:cursor-pointer rounded-l-none" size="lg" >Join Waitlist</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Here&aposs How Reduct Makes Editing Effortless</h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <div className="mb-2 text-xl font-semibold">Prompt-Based Timeline Editing</div>
            <div className="text-gray-300 mb-4">Just type what you want changed — Reduct auto-edits your timeline with AI.</div>
            <Button variant="secondary" className="hover:cursor-pointer">Try It Now</Button>
          </Card>
          <Card className="hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <div className="mb-2 text-xl font-semibold">Generate AI Content</div>
            <div className="text-gray-300 mb-4">Reduct can generate AI content for your videos in case you want something you never recorded.</div>
            <Button variant="secondary" className="hover:cursor-pointer">Learn More</Button>
          </Card>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Reduct&aposs AI Tools Work Like Magic</h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <Card className="hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <div className="mb-2 font-semibold">Smart Captions</div>
            <div className="text-gray-300">Generate clean, timeline-aware subtitles — fully editable and export-ready.</div>
          </Card>
          <Card className="bg-blue-900/30 border-blue-400/30 hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <div className="mb-2 font-semibold">Instant Preview</div>
            <div className="text-gray-300">Watch the changes happen live as you edit with prompts.</div>
          </Card>
          <Card className="hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <div className="mb-2 font-semibold">Export Without Stress</div>
            <div className="text-gray-300">You can also export your video in for your favorite video editor — besides Reduct ofc ; )</div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Find Your Perfect Fit</h2>
        <div className="text-2xl md:text-4xl font-semibold text-center mb-8 text-gray-400">With Cluely Plans</div>
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="monthly" className="w-full flex  flex-col items-center" onValueChange={(value) => {
            const tabsList = document.querySelector('[role="tablist"]') as HTMLElement;
            if (tabsList) {
              tabsList.style.setProperty('--tab-position', value === 'yearly' ? '1' : '0');
            }
          }}>
            <TabsList className="bg-transparent rounded-full  p-1 gap-1 w-[220px] mb-12 relative">
              <div className="absolute inset-0 rounded-full bg-blue-700/30 transition-all duration-600 ease-in-out" 
                   style={{
                     transform: 'translateX(calc(var(--tab-position, 0) * 100%))',
                     width: 'calc(50% - 4px)',
                     margin: '2px'
                   }} />
              <TabsTrigger value="monthly" className="flex-1 rounded-full text-white font-semibold relative z-10 transition-colors duration-300 data-[state=active]:text-blue-400 [&[data-state=active]]:bg-transparent hover:cursor-pointer">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="flex-1 rounded-full text-white font-semibold relative z-10 transition-colors duration-300 data-[state=active]:text-blue-400 [&[data-state=active]]:bg-transparent hover:cursor-pointer">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {/* Free Card */}
                <Card className="items-center text-center min-h-[420px] flex flex-col justify-between">
                  <div>
                    <div className="text-lg font-semibold mb-2">Free</div>
                    <div className="text-5xl font-bold mb-2">$0<span className="text-lg font-normal">/month</span></div>
                    <ul className="text-gray-300 mb-8 space-y-1 text-left text-base">
                      <li> <span className="opacity-80">&#10003; Evaluate features</span></li>
                      <li> <span className="opacity-80">&#10003; Normal agent plans</span></li>
                      <li> <span className="opacity-80">&#10003; Limited to 100 videos</span></li>
                      <li> <span className="opacity-80">&#10003; Limited to 10 exports</span></li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-black font-semibold mt-auto">Download for Free</Button>
                </Card>
                {/* Pro Card (highlighted) */}
                <Card highlighted className="items-center text-center min-h-[420px] flex flex-col justify-between -translate-y-6 z-10">
                  <div>
                    <div className="text-lg font-semibold mb-2">Pro</div>
                    <div className="text-5xl font-bold mb-2">$20<span className="text-lg font-normal">/month</span></div>
                    <ul className="text-gray-100 mb-8 space-y-1 text-left text-base">
                      <li>&#10003; Unlimited usage</li>
                      <li>&#10003; Solving and debugging</li>
                      <li>&#10003; Most powerful agent models</li>
                      <li>&#10003; 24/7 customer support</li>
                    </ul>
                  </div>
                  <Button className="w-full font-semibold bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md mt-auto">Subscribe <span className="ml-2">→</span></Button>
                </Card>
                {/* Enterprise Card */}
                <Card className="items-center text-center min-h-[420px] flex flex-col justify-between">
                  <div>
                    <div className="text-lg font-semibold mb-2">Enterprise</div>
                    <div className="text-2xl font-bold mb-2">Contact us</div>
                    <ul className="text-gray-300 mb-8 space-y-1 text-left text-base">
                      <li> <span className="opacity-80">&#10003; All Pro features</span></li>
                      <li> <span className="opacity-80">&#10003; Customized agent models</span></li>
                      <li> <span className="opacity-80">&#10003; Dedicated support</span></li>
                      <li> <span className="opacity-80">&#10003; Customized agent models</span></li>
                    </ul>
                  </div>
                  <Button variant="outline" className="text-black w-full font-semibold mt-auto">Talk to Sales</Button>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Free Card */}
                <Card className="items-center text-center min-h-[420px] flex flex-col justify-between" >
                  <div>
                    <div className="text-lg font-semibold mb-2">Free</div>
                    <div className="text-5xl font-bold mb-2">$0<span className="text-lg font-normal">/month</span></div>
                    <ul className="text-gray-300 mb-8 space-y-1 text-left text-base">
                      <li> <span className="opacity-80">&#10003; Evaluate features</span></li>
                      <li> <span className="opacity-80">&#10003; Normal agent plans</span></li>
                      
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-black font-semibold">Download for Free</Button>
                </Card>
                {/* Pro Card (highlighted) */}
                <Card highlighted className="items-center text-center min-h-[420px] flex flex-col justify-between -translate-y-6 z-10">
                  <div>
                    <div className="text-lg font-semibold mb-2">Pro</div>
                    <div className="text-5xl font-bold mb-2">$200<span className="text-lg font-normal">/year</span></div>
                    <ul className="text-gray-100 mb-8 space-y-1 text-left text-base">
                      <li>&#10003; Unlimited usage</li>
                      <li>&#10003; Solving and debugging</li>
                      <li>&#10003; Most powerful agent models</li>
                      <li>&#10003; 24/7 customer support</li>
                    </ul>
                  </div>
                  <Button className="w-full font-semibold bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md mt-auto">Subscribe <span className="ml-2">→</span></Button>
                </Card>
                {/* Enterprise Card */}
                <Card className="items-center text-center min-h-[420px] flex flex-col justify-between">
                  <div>
                    <div className="text-lg font-semibold mb-2">Enterprise</div>
                    <div className="text-5xl font-bold mb-2">Contact us</div>
                    <ul className="text-gray-300 mb-8 space-y-1 text-left text-base">
                      <li> <span className="opacity-80">&#10003; Unlimited usage</span></li>
                      <li> <span className="opacity-80">&#10003; Solving and debugging</span></li>
                      <li> <span className="opacity-80">&#10003; Most powerful agent models</span></li>
                      <li> <span className="opacity-80">&#10003; 24/7 customer support</span></li>
                    </ul>
                  </div>
                  <Button variant="outline" className=" text-black w-full font-semibold">Talk to Sales</Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Got Questions? We&apos;ve Got Answers</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:cursor-pointer text-xl">Is Reduct really free?</AccordionTrigger>
            <AccordionContent>
              Yes, you can try prompt-based editing and smart captions on your videos with our free plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:cursor-pointer text-xl">What types of videos can I edit with Reduct?</AccordionTrigger>
            <AccordionContent>
              Reduct works with all major video formats and is optimized for content creators, YouTubers, and social media videos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:cursor-pointer text-xl">How does prompt editing work?</AccordionTrigger>
            <AccordionContent>
              Simply type what changes you want to make, and our AI will automatically edit your timeline accordingly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:cursor-pointer text-xl">Can I customize captions and output format?</AccordionTrigger>
            <AccordionContent>
              Yes, all captions are fully editable and you can export in various formats for different platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:cursor-pointer text-xl">What platforms can I export for?</AccordionTrigger>
            <AccordionContent>
              Reduct supports exports for all social media platforms.
              You can also export your video in for your favorite video editor — besides Reduct ofc ; )
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#0a0a23] via-[#181848] to-transparent py-10 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white">Reduct</span>
            <span className="text-xs">Reduct is an AI-powered video editing tool built for creators who want speed without sacrificing quality.</span>
            <div className="flex gap-2 mt-2">
              <span className="text-xs">© 2025 Reduct, Inc. All rights reserved.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white">Legal</span>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Refund Policy</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white">Explore</span>
              <a href="#" className="hover:text-blue-400">Help Center</a>
              <a href="#" className="hover:text-blue-400">Changelog</a>
              <a href="#" className="hover:text-blue-400">Join Discord</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}