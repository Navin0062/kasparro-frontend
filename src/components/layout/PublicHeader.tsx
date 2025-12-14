'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Boxes, Menu, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Platform', href: '/platform' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '#' },
];

export function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled 
          ? "border-b border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-[#030711]/60 backdrop-blur-md shadow-sm" 
          : "border-transparent bg-transparent"
      )}
    >
      {/* Added 'relative' here to act as the anchor for the absolute centering */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <Boxes className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Kasparro<span className="text-blue-600"></span>
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION - ABSOLUTE CENTERED */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all hover:text-blue-600 dark:hover:text-blue-400",
                scrolled 
                  ? "text-slate-600 dark:text-slate-300" 
                  : "text-slate-700 dark:text-slate-200"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 3. ACTIONS (Right Side) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
             <ModeToggle />
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-transparent">
                Log in
              </Button>
            </Link>
            <Link href="/app/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
                Launch Console <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-slate-900 dark:text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] bg-white dark:bg-[#030711] border-slate-200 dark:border-white/10 p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-xl flex items-center gap-2 text-slate-900 dark:text-white">
                    <Boxes className="w-6 h-6 text-blue-600" /> Kasparro
                  </span>
                  <ModeToggle />
                </div>

                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-slate-600 dark:text-slate-300 py-4 border-b border-slate-100 dark:border-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" size="lg" className="w-full rounded-full h-12 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/app/dashboard" onClick={() => setMobileOpen(false)}>
                    <Button size="lg" className="w-full rounded-full h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20">
                      Launch Console
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}