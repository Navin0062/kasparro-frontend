'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assumes shadcn button
import { Boxes, ArrowRight } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

export function PublicHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Boxes className="text-blue-600" />
          <span>Kasparro<span className="text-blue-600">.ai</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/platform" className="hover:text-blue-600 transition-colors">Platform</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
            <ModeToggle />
          <Link href="/app/dashboard">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
          </Link>
          <Link href="/app/dashboard">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Launch Console <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}