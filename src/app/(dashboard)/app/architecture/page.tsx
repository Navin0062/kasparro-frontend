'use client';

import React from 'react';
import { 
  Database, FileCode, Cpu, Globe, Server, 
  Network, Activity 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">System Architecture</h2>
          <p className="text-muted-foreground mt-1">
            Visualization of the Kasparro Evaluation Pipeline (v1.0 Mock)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="h-8 px-3 gap-2 border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Simulation Active
          </Badge>
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> Latency: Simulated (500ms)</span>
            <span className="flex items-center gap-1"><Server className="w-3 h-3" /> State: Local Memory</span>
          </div>
        </div>
      </div>

      {/* 2. The Pipeline Visualization */}
      <div className="relative max-w-4xl mx-auto pt-4">
        
        {/* The Vertical Backbone Line */}
        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-amber-500/20" />

        <div className="space-y-12">

          {/* STAGE 1: DATA SOURCE */}
          <div className="relative pl-20">
            <div className="absolute left-[26px] top-6 w-4 h-4 bg-background rounded-full border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)] z-10" />
            
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              Stage 1: Data Definition
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <ArchitectureNode 
                title="Mock Data Layer" 
                icon={Database}
                color="blue"
                description="Static JSON structures representing brand entities and audit scenarios."
              >
                <div className="mt-4 pt-4 border-t border-dashed space-y-3">
                  <MetricRow label="Source" value="src/data/mock-data.ts" />
                  <MetricRow label="Entities" value="2 Brands" />
                  <div className="flex gap-2 mt-2">
                    <TechBadge>TypeScript</TechBadge>
                    <TechBadge>Static Config</TechBadge>
                  </div>
                </div>
              </ArchitectureNode>

              <ArchitectureNode 
                title="State Management" 
                icon={Globe}
                color="blue"
                description="Client-side state persistence for brand selection and user session."
              >
                <div className="mt-4 pt-4 border-t border-dashed space-y-3">
                  <MetricRow label="Storage" value="Zustand Store" />
                  <MetricRow label="Persistence" value="LocalStorage" />
                  <div className="flex gap-2 mt-2">
                    <TechBadge>Zustand</TechBadge>
                    <TechBadge>React Hooks</TechBadge>
                  </div>
                </div>
              </ArchitectureNode>
            </div>
          </div>

          {/* STAGE 2: PROCESSING LOGIC */}
          <div className="relative pl-20">
            <div className="absolute left-[26px] top-6 w-4 h-4 bg-background rounded-full border-4 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)] z-10" />
            
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
              Stage 2: Controller Logic
            </h3>

            <Card className="border-l-4 border-l-purple-500 shadow-sm bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-purple-500" /> 
                  Audit Engine (Client-Side)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modules retrieve specific datasets based on URL parameters. Analysis is deterministic based on mock scores.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                   <div className="bg-background/50 p-3 rounded-lg border text-center">
                      <div className="text-xs text-muted-foreground">Routing</div>
                      <div className="font-mono text-sm font-bold">Dynamic</div>
                   </div>
                   <div className="bg-background/50 p-3 rounded-lg border text-center">
                      <div className="text-xs text-muted-foreground">Params</div>
                      <div className="font-mono text-sm font-bold">?module=id</div>
                   </div>
                   <div className="bg-background/50 p-3 rounded-lg border text-center">
                      <div className="text-xs text-muted-foreground">Modules</div>
                      <div className="font-mono text-sm font-bold">7 Active</div>
                   </div>
                   <div className="bg-background/50 p-3 rounded-lg border text-center">
                      <div className="text-xs text-muted-foreground">Render</div>
                      <div className="font-mono text-sm font-bold text-green-500">~10ms</div>
                   </div>
                </div>

                <div className="flex gap-2">
                  <TechBadge>Next.js App Router</TechBadge>
                  <TechBadge>URLSearchParams</TechBadge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* STAGE 3: PRESENTATION */}
          <div className="relative pl-20">
            <div className="absolute left-[26px] top-6 w-4 h-4 bg-background rounded-full border-4 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)] z-10" />
            
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
              Stage 3: Output Surface
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <ArchitectureNode 
                title="Visual Components" 
                icon={Cpu}
                color="amber"
                description="Reusable UI library for displaying metrics, charts, and audit details."
              >
                <div className="mt-4 pt-4 border-t border-dashed space-y-3">
                  <MetricRow label="Library" value="shadcn/ui" />
                  <MetricRow label="Charts" value="Recharts" />
                  <div className="flex gap-2 mt-2">
                    <TechBadge>Radix UI</TechBadge>
                    <TechBadge>Tailwind</TechBadge>
                  </div>
                </div>
              </ArchitectureNode>

              <Card className="border-dashed flex items-center justify-center bg-muted/30">
                <div className="text-center p-6">
                  <Network className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-xs font-mono text-muted-foreground">
                    Responsive Master-Detail Layout
                  </p>
                  <Badge variant="secondary" className="mt-2 text-[10px]">Mobile Optimized</Badge>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- Helper Components with Proper Types ---

interface ArchitectureNodeProps {
  title: string;
  icon: React.ElementType;
  color: 'blue' | 'purple' | 'amber';
  description: string;
  children?: React.ReactNode;
}

function ArchitectureNode({ title, icon: Icon, color, description, children }: ArchitectureNodeProps) {
  const colorStyles = {
    blue: "text-blue-500 border-l-blue-500",
    purple: "text-purple-500 border-l-purple-500",
    amber: "text-amber-500 border-l-amber-500",
  };

  return (
    <Card className={cn("border-l-4 shadow-sm hover:shadow-md transition-all", colorStyles[color])}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2 text-foreground">
          <Icon className={cn("w-5 h-5", colorStyles[color].split(' ')[0])} /> 
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        {children}
      </CardContent>
    </Card>
  );
}

function MetricRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-muted-foreground font-medium">{label}</span>
      <span className="font-mono text-foreground font-bold">{value}</span>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="secondary" className="px-2 py-0 text-[10px] font-mono font-normal border-border/50 text-muted-foreground">
      {children}
    </Badge>
  );
}