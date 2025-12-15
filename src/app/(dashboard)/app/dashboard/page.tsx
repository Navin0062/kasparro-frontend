'use client';

import { useAppStore } from '@/lib/store'; // 1. Import Store
import { MOCK_SNAPSHOTS } from "@/data/mock-data"; // 2. Import Dictionary
import { SnapshotCard } from "@/components/features/dashboard/SnapshotCard";
import { ModuleRadarChart } from "@/components/features/dashboard/ModuleRadarChart";
import { VisibilityTrendChart } from "@/components/features/dashboard/VisibilityTrendChart";
import { RecentActivity } from "@/components/features/dashboard/RecentActivity";
import { Eye, ShieldCheck, Hash, Clock, TrendingUp, Radar, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DashboardPage() {
  // 3. Get Selected Brand from Store
  const { selectedBrand } = useAppStore();

  // 4. Select the correct data based on ID
  const activeSnapshot = MOCK_SNAPSHOTS[selectedBrand.id] || MOCK_SNAPSHOTS['b1'];

  const handleDownload = () => {
    toast.success("Report generation started", {
      description: `Preparing PDF audit for ${selectedBrand.name}...`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const formattedDate = new Date(activeSnapshot.lastAudit).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">
            {/* 5. Dynamic Brand Name */}
            Overview of <span className="font-semibold text-foreground">{selectedBrand.name}</span> AI search performance.
          </p>
        </div>
        <Button onClick={handleDownload}>Download Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SnapshotCard
          title="AI Visibility Score"
          value={`${activeSnapshot.aiVisibilityScore}%`}
          subtext={selectedBrand.id === 'b1' ? "+2.5% vs last week" : "-1.2% vs last week"}
          icon={Eye}
          trendColor="#3b82f6"
        />
        <SnapshotCard
          title="Trust / EEAT Score"
          value={activeSnapshot.trustScore}
          subtext="Top 5% of industry"
          icon={ShieldCheck}
          trendColor="#22c55e"
        />
        <SnapshotCard
          title="Non-Branded Coverage"
          value={`${activeSnapshot.nonBrandedCoverage}%`}
          subtext="Keywords tracked"
          icon={Hash}
          trendColor="#a855f7"
        />
        <SnapshotCard
          title="Last Audit"
          value="Today"
          subtext={formattedDate}
          icon={Clock}
          trendColor="#f59e0b"
        />
      </div>

      {/* ... Rest of the Charts (You can also make these dynamic later if you want) ... */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              Visibility Trend
            </CardTitle>
            <CardDescription>Share of voice across all LLMs (6 Months)</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <VisibilityTrendChart />
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1 lg:col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Radar className="w-4 h-4 text-purple-500" />
              Module Performance
            </CardTitle>
            <CardDescription>Current strengths vs weaknesses</CardDescription>
          </CardHeader>
          <CardContent>
            <ModuleRadarChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}