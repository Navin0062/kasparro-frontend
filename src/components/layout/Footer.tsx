import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Boxes, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#030711] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Top Section: Brand + Newsletter + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* BRANDING & NEWSLETTER (Takes 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Boxes className="w-5 h-5" />
              </div>
              <span>Kasparro<span className="text-blue-600"></span></span>
            </Link>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              The first Brand Intelligence Platform for the generative web. Optimize how LLMs perceive, hallucinate, and cite your brand.
            </p>

            <div className="flex flex-col gap-2 max-w-sm">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Subscribe to our research
              </label>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500" 
                />
                <Button size="icon" className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[10px] text-slate-500">
                Weekly analysis of GPT-4 & Gemini search behaviors.
              </p>
            </div>
          </div>

          {/* LINKS COLUMNS (Takes 7 columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">Product</h4>
              <Link href="/platform" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Platform</Link>
              <Link href="/app/audit" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">AI Audit</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Knowledge Graph</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">Resources</h4>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API Reference</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Community</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">Company</h4>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Legal</Link>
              <Link href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright + Socials */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2024 Kasparro AI Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}