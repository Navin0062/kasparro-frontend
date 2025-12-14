'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileSearch, Network, Boxes } from 'lucide-react';
import { cn } from '@/lib/utils'; // Standard shadcn utility

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
  { label: 'AI Audit', href: '/app/audit', icon: FileSearch },
  { label: 'Architecture', href: '/app/architecture', icon: Network },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col h-full bg-slate-950 text-white border-r border-slate-800", className)}>
      <div className="p-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          <Boxes className="text-blue-500" />
          <span>Kasparro<span className="text-blue-500">.ai</span></span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-blue-600/10 text-blue-500" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-900 rounded-lg p-3">
          <p className="text-xs text-slate-500 font-mono">V1.0.2 Stable</p>
        </div>
      </div>
    </aside>
  );
}