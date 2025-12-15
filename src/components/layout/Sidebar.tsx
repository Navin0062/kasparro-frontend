'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { AUDIT_REPORTS } from '@/data/mock-data';
import { cn, getStatusColor } from '@/lib/utils';
import { CheckCircle2, AlertTriangle, XCircle, Search } from 'lucide-react';

interface SidebarProps {
  className?: string;
  forceMount?: boolean;
  onItemClick?: () => void;
}

export function Sidebar({ className, forceMount, onItemClick }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { selectedBrand } = useAppStore();

  // 1. Safety Guard: Only show on audit page (unless forced by mobile menu)
  if (!forceMount && !pathname.includes('/app/audit')) {
    return null;
  }

  // 2. Get the correct report for the currently selected brand
  const activeReport = AUDIT_REPORTS[selectedBrand.id] || AUDIT_REPORTS['b1'];

  // 3. Get active module from URL (or default to the first one)
  const activeModuleId = searchParams.get('module') || activeReport.modules[0]?.id;

  const handleSelectModule = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('module', id);
    router.push(`?${params.toString()}`);
    
    // Close mobile menu if callback exists
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <aside className={cn("flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-white/5 overflow-y-auto", className)}>
      <div className="p-4">
        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider px-2">
          Audit Modules
        </h3>
        
        <div className="flex flex-col space-y-1">
          {activeReport.modules.map((module) => {
            const isSelected = activeModuleId === module.id;
            
            // Resolve Icon based on status
            let StatusIcon = CheckCircle2;
            if (module.status === 'warning') StatusIcon = AlertTriangle;
            if (module.status === 'critical') StatusIcon = XCircle;
            if (module.status === 'pass') StatusIcon = CheckCircle2; // Explicit for clarity

            return (
              <button
                key={module.id}
                onClick={() => handleSelectModule(module.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all text-left",
                  isSelected 
                    ? "bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-white/5" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <span className="flex items-center gap-3">
                  <StatusIcon className={cn("w-4 h-4", getStatusColor(module.status, 'text'))} />
                  <span className="truncate max-w-[140px]">{module.name}</span>
                </span>
                
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[24px] text-center",
                  getStatusColor(module.status, 'bg')
                )}>
                  {module.score}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}