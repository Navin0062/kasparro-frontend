'use client';

import { AuditModule } from '@/lib/types';
import { cn, getStatusColor } from '@/lib/utils'; // Import helper
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
          if (module.status === 'warning') StatusIcon = AlertTriangle;
          if (module.status === 'critical') StatusIcon = XCircle;

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
                {/* Use 'text' variant for icon color */}
                <StatusIcon className={cn("w-4 h-4", getStatusColor(module.status, 'text'))} />
                {module.name}
              </span>
              
              {/* Use 'bg' variant for badge style */}
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-bold",
                getStatusColor(module.status, 'bg')
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