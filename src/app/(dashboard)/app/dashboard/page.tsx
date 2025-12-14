'use client';

import { MOCK_SNAPSHOT } from "@/data/mock-data";
import { SnapshotCard } from "@/components/features/dashboard/SnapshotCard";
import { ModuleRadarChart } from "@/components/features/dashboard/ModuleRadarChart";
import { VisibilityTrendChart } from "@/components/features/dashboard/VisibilityTrendChart";
import { RecentActivity } from "@/components/features/dashboard/RecentActivity"; // Import new component
import { Eye, ShieldCheck, Hash, Clock, TrendingUp, Radar, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const formattedDate = new Date(MOCK_SNAPSHOT.lastAudit).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      
      {/* 1. Header with Quick Action */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of <span className="font-semibold text-foreground">TechFlow's</span> AI search performance.
          </p>
        </div>
        <Button>Download Report</Button>
      </div>

      {/* 2. Snapshot Grid (With Sparklines) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SnapshotCard
          title="AI Visibility Score"
          value={`${MOCK_SNAPSHOT.aiVisibilityScore}%`}
          subtext="+2.5% vs last week"
          icon={Eye}
          trendColor="#3b82f6" // Blue
        />
        <SnapshotCard
          title="Trust / EEAT Score"
          value={MOCK_SNAPSHOT.trustScore}
          subtext="Top 5% of industry"
          icon={ShieldCheck}
          trendColor="#22c55e" // Green
        />
        <SnapshotCard
          title="Non-Branded Coverage"
          value={`${MOCK_SNAPSHOT.nonBrandedCoverage}%`}
          subtext="12 new keywords"
          icon={Hash}
          trendColor="#a855f7" // Purple
        />
        <SnapshotCard
          title="Last Audit"
          value="Today" // Simplified for visual punch
          subtext={formattedDate}
          icon={Clock}
          trendColor="#f59e0b" // Amber
        />
      </div>

      {/* 3. MAIN CONTENT GRID (Denser Layout) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* COLUMN 1: Trend Chart (4 cols) */}
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

        {/* COLUMN 2: Radar Chart (3 cols) */}
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

        {/* COLUMN 3: Live Intelligence Feed (Full width or split) */}
        {/* We'll put this in a new row for mobile, or side-by-side on very large screens */}
        <Card className="col-span-full lg:col-span-3 shadow-sm h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Activity className="w-4 h-4 text-amber-500" />
              Live Intelligence Feed
            </CardTitle>
            <CardDescription>Real-time mentions and hallucinations</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>

        {/* COLUMN 4: Action Items (Remaining space) */}
         <Card className="col-span-full lg:col-span-4 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-100 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-base font-medium text-blue-900 dark:text-blue-100">
              Recommended Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg border shadow-sm">
              <div className="space-y-1">
                <p className="text-sm font-medium">Fix Robots.txt for GPTBot</p>
                <p className="text-xs text-muted-foreground">Critical • Impact: High</p>
              </div>
              <Button size="sm" variant="outline">Fix</Button>
            </div>
             <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg border shadow-sm">
              <div className="space-y-1">
                <p className="text-sm font-medium">Update Pricing Page Schema</p>
                <p className="text-xs text-muted-foreground">Warning • Impact: Medium</p>
              </div>
              <Button size="sm" variant="outline">Review</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}