'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { FULL_AUDIT_REPORT } from '@/data/mock-data';
import { ModuleList } from '@/components/features/audit/ModuleList';
import { ModuleDetail } from '@/components/features/audit/ModuleDetail';

export default function AuditPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // 1. Get Active Module ID from URL or default to first one
  const activeModuleId = searchParams.get('module') || FULL_AUDIT_REPORT.modules[0].id;
  
  // 2. Find the actual data object
  const activeModule = FULL_AUDIT_REPORT.modules.find(m => m.id === activeModuleId) 
    || FULL_AUDIT_REPORT.modules[0];

  // 3. Handler to update URL
  const handleSelectModule = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('module', id);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row gap-8">
      {/* Sidebar: Scrollable List */}
      <aside className="w-full md:w-80 flex-shrink-0 md:border-r md:pr-6 overflow-y-auto">
        <ModuleList 
          modules={FULL_AUDIT_REPORT.modules} 
          selectedId={activeModule.id}
          onSelect={handleSelectModule}
        />
      </aside>

      {/* Main Content: Scrollable Detail */}
      <main className="flex-1 overflow-y-auto pr-2">
        <ModuleDetail module={activeModule} />
      </main>
    </div>
  );
}