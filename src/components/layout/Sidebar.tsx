'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { FULL_AUDIT_REPORT } from '@/data/mock-data';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export function Sidebar({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // ONLY show this sidebar if we are on the /app/audit page
  if (!pathname.includes('/app/audit')) {
    return null;
  }

  // Get active module from URL
  const activeModuleId = searchParams.get('module') || FULL_AUDIT_REPORT.modules[0].id;

  const handleSelectModule = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('module', id);
    router.push(`?${params.toString()}`);
  };

  return (
    <aside className={cn("flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/50 border-r border-border overflow-y-auto", className)}>
      <div className="p-4">
        <h3 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
          Audit Modules
        </h3>
        <div className="flex flex-col space-y-1">
          {FULL_AUDIT_REPORT.modules.map((module) => {
            const isSelected = activeModuleId === module.id;
            
            let StatusIcon = CheckCircle2;
            let colorClass = "text-green-500";
            if (module.status === 'warning') { StatusIcon = AlertTriangle; colorClass = "text-yellow-500"; }
            if (module.status === 'critical') { StatusIcon = XCircle; colorClass = "text-red-500"; }

            return (
              <button
                key={module.id}
                onClick={() => handleSelectModule(module.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all text-left",
                  isSelected 
                    ? "bg-white dark:bg-slate-800 shadow-sm border border-border text-foreground ring-1 ring-border" 
                    : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800/50"
                )}
              >
                <span className="flex items-center gap-3">
                  <StatusIcon className={cn("w-4 h-4", colorClass)} />
                  <span className="truncate max-w-[120px]">{module.name}</span>
                </span>
                
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  module.score < 50 ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                  module.score < 80 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
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