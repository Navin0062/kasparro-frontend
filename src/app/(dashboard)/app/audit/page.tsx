'use client';

// This line forces the page to be dynamic, bypassing the static build error.
export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { AUDIT_REPORTS } from '@/data/mock-data';
import { ModuleDetail } from '@/components/features/audit/ModuleDetail';
import { MousePointerClick } from 'lucide-react';

export default function AuditPage() {
  const { selectedBrand } = useAppStore();
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('module');

  // Logic to find the active report
  const activeReport = AUDIT_REPORTS[selectedBrand.id] || AUDIT_REPORTS['b1'];
  const activeModule = activeReport.modules.find((m) => m.id === moduleId);

  if (!activeModule) {
    return (
      <div className="h-full flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6 animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center">
          <MousePointerClick className="w-10 h-10 text-slate-400" />
        </div>
        <div className="space-y-2 max-w-md">
          <h2 className="text-2xl font-bold text-foreground">Select a Module</h2>
          <p className="text-muted-foreground">
            Viewing audit for <span className="font-semibold text-foreground">{selectedBrand.name}</span>.
            Select an audit module from the sidebar to view detailed AI analysis.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ModuleDetail module={activeModule} />
    </div>
  );
}