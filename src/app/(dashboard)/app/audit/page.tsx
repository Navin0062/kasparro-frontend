import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { AuditClient } from '@/components/features/audit/AuditClient';

// This forces dynamic rendering to prevent the build error
export const dynamic = 'force-dynamic';

export default function AuditPage() {
  return (
    <Suspense fallback={
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    }>
      <AuditClient />
    </Suspense>
  );
}