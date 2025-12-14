'use client';

import { useAppStore } from '@/lib/store';
import { MOCK_BRANDS } from '@/data/mock-data';
import { ChevronDown, Globe } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export function DashboardHeader() {
  const { selectedBrand, setSelectedBrand } = useAppStore();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left: Breadcrumbs or Page Title could go here */}
        <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet>
                <SheetTrigger asChild>
                <button className="md:hidden p-2 -ml-2 text-slate-500">
                    <Menu size={20} />
                </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                {/* Reuse the Sidebar component inside the mobile sheet */}
                <Sidebar className="border-none" />
                </SheetContent>
            </Sheet>

            <div className="text-sm font-medium text-slate-500 hidden md:block">
                Platform Overview
            </div>
        </div>

      {/* Right: Brand Selector */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-md hover:bg-slate-50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
              {selectedBrand.name[0]}
            </div>
            <span className="text-sm font-medium">{selectedBrand.name}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>
          
          {/* Dropdown Mock */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {MOCK_BRANDS.map((brand) => (
              <div 
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm flex items-center gap-2"
              >
                <Globe size={12} className="text-slate-400" />
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}