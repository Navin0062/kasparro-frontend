'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { MOCK_BRANDS } from '@/data/mock-data';
import { 
  ChevronDown, Globe, LayoutDashboard, FileSearch, Network, Menu, Boxes 
} from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Sidebar } from './Sidebar';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
  { label: 'AI Audit', href: '/app/audit', icon: FileSearch },
  { label: 'Architecture', href: '/app/architecture', icon: Network },
];

export function DashboardHeader() {
  const { selectedBrand, setSelectedBrand } = useAppStore();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    // Removed backdrop-blur to match landing page crispness if preferred, 
    // but kept sticky for utility.
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      {/* Container: Matches Landing Page (max-w-7xl + px-6) */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
            <Boxes className="text-blue-600" />
            <span className="hidden sm:inline-block">Kasparro<span className="text-blue-600"></span></span>
          </Link>
        </div>

        {/* 2. CENTER: Clean Text Navigation (Like Landing Page) */}
        {/* Removed icons and pill backgrounds for desktop */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive 
                    ? "text-blue-600 font-semibold" 
                    : "text-muted-foreground hover:text-blue-600"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. RIGHT: Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          
          {/* Brand Selector - Styled to look clean like a button */}
          <div className="relative group hidden sm:block">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors text-sm font-medium bg-background">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                {selectedBrand.name[0]}
              </div>
              <span className="max-w-[100px] truncate">{selectedBrand.name}</span>
              <ChevronDown size={14} className="text-muted-foreground" />
            </button>
            
            {/* Dropdown Content */}
            <div className="absolute right-0 top-full mt-2 w-52 bg-popover border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-1">
              {MOCK_BRANDS.map((brand) => (
                <div 
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className="px-3 py-2 rounded-lg hover:bg-muted cursor-pointer text-sm flex items-center gap-3 transition-colors"
                >
                  <Globe size={14} className="text-muted-foreground" />
                  {brand.name}
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl px-2" onClick={() => setOpen(false)}>
                  <Boxes className="text-blue-600" />
                  <span>Kasparro.ai</span>
                </Link>
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3",
                          isActive 
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20" 
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <item.icon size={18} />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
                {/* Mobile Sidebar for Audit */}
                {pathname.includes('/app/audit') && (
                  <div className="border-t pt-4">
                    <Sidebar forceMount={true} onItemClick={() => setOpen(false)} />
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}