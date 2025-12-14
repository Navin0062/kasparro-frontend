'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname.includes('/app/audit');

  return (
    // 1. Updated base background to match Landing Page (Dark #030711 / White)
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#030711] transition-colors duration-300 font-sans selection:bg-blue-500/30">
      
      {/* 2. NEW: Background Grid & Glow Effects (Fixed Position) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Adaptive Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial Ambient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-500/20 blur-[120px] opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] opacity-30 mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* 3. Content Wrapper (Relative + z-10 to float above background) */}
      <div className="relative z-10 flex-1 flex flex-col">
        <DashboardHeader />

        {/* MOBILE IMPROVEMENT: Changed 'pt-8' to 'pt-4 md:pt-8' */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-12">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 animate-in fade-in duration-500">
               {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}