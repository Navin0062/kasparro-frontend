'use client';

import { AuditModule } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

interface ModuleListProps {
  modules: AuditModule[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ModuleList({ modules, selectedId, onSelect }: ModuleListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-500 mb-4 px-2 uppercase tracking-wider">
        Audit Modules
      </h3>
      <div className="flex flex-col space-y-1">
        {modules.map((module) => {
          const isSelected = selectedId === module.id;
          
          // Determine Icon based on status
          let StatusIcon = CheckCircle2;
          let colorClass = "text-green-500";
          if (module.status === 'warning') { StatusIcon = AlertTriangle; colorClass = "text-yellow-500"; }
          if (module.status === 'critical') { StatusIcon = XCircle; colorClass = "text-red-500"; }

          return (
            <button
              key={module.id}
              onClick={() => onSelect(module.id)}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all text-left",
                isSelected 
                  ? "bg-white shadow-sm border-slate-200 border text-slate-900 ring-1 ring-slate-200" 
                  : "text-slate-600 hover:bg-slate-100/50 hover:text-slate-900"
              )}
            >
              <span className="flex items-center gap-3">
                <StatusIcon className={cn("w-4 h-4", colorClass)} />
                {module.name}
              </span>
              
              {/* Score Badge */}
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-bold",
                module.score < 50 ? "bg-red-100 text-red-700" :
                module.score < 80 ? "bg-yellow-100 text-yellow-700" :
                "bg-green-100 text-green-700"
              )}>
                {module.score}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}