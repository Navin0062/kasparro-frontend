import { MOCK_SNAPSHOT } from "@/data/mock-data";
import { SnapshotCard } from "@/components/features/dashboard/SnapshotCard";
import { Eye, ShieldCheck, Hash, Clock } from "lucide-react";

export default function DashboardPage() {
  // Format the date nicely
  const formattedDate = new Date(MOCK_SNAPSHOT.lastAudit).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <div className="space-y-8">
      {/* 1. Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
        <p className="text-slate-500">
          Real-time overview of your brand&apos;s AI search performance.
        </p>
      </div>

      {/* 2. Snapshot Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SnapshotCard
          title="AI Visibility Score"
          value={`${MOCK_SNAPSHOT.aiVisibilityScore}%`}
          subtext="+2.5% from last month"
          icon={Eye}
        />
        <SnapshotCard
          title="Trust / EEAT Score"
          value={MOCK_SNAPSHOT.trustScore}
          subtext="High Authority"
          icon={ShieldCheck}
        />
        <SnapshotCard
          title="Non-Branded Coverage"
          value={`${MOCK_SNAPSHOT.nonBrandedCoverage}%`}
          subtext="Keywords owned"
          icon={Hash}
        />
        <SnapshotCard
          title="Last Audit"
          value={formattedDate}
          subtext="Automated daily scan"
          icon={Clock}
        />
      </div>

      {/* 3. Placeholder for future charts (Optional Polish) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow h-[300px] flex items-center justify-center bg-white p-6">
          <p className="text-slate-400 text-sm">Visibility Trend Chart (Coming Soon)</p>
        </div>
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow h-[300px] flex items-center justify-center bg-white p-6">
          <p className="text-slate-400 text-sm">Recent Activity Feed</p>
        </div>
      </div>
    </div>
  );
}