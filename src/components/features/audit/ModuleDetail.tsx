import { AuditModule } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, Activity, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ModuleDetail({ module }: { module: AuditModule }) {
  // Helper to get color based on score/severity
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return <Badge variant="destructive" className="uppercase text-[10px]">Critical</Badge>;
      case 'warning': return <Badge variant="outline" className="border-yellow-500 text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 uppercase text-[10px]">Warning</Badge>;
      case 'pass': return <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20 uppercase text-[10px]">Passed</Badge>;
      default: return null;
    }
  };

  // CONSTANTS FOR THE CIRCLE
  // Radius 32 + Stroke 4 (half of 8) = 36px from center. 
  // Container center is 40px. 
  // Result: 4px padding on all sides to prevent clipping.
  const radius = 32;
  const circumference = 2 * Math.PI * radius; 

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* 1. HEADER SECTION with Score Ring */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold tracking-tight text-foreground">{module.name}</h2>
             {getSeverityBadge(module.status)}
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Automated analysis of {module.name.toLowerCase()}. 
            {module.score < 50 ? " Immediate attention required to prevent visibility loss." : 
             module.score < 80 ? " Some optimizations available to boost performance." : 
             " Performing well within AI benchmarks."}
          </p>
        </div>

        {/* Circular Score Indicator */}
        <div className="flex items-center gap-4 bg-card p-4 rounded-2xl border shadow-sm">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Added viewBox="0 0 80 80" to ensure correct scaling */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
              {/* Background Circle */}
              <circle 
                cx="40" cy="40" r={radius} 
                stroke="currentColor" strokeWidth="8" 
                fill="transparent" 
                className="text-muted/20" 
              />
              {/* Progress Circle */}
              <circle 
                cx="40" cy="40" r={radius} 
                stroke="currentColor" strokeWidth="8" 
                fill="transparent" 
                strokeDasharray={circumference} 
                strokeDashoffset={circumference - (circumference * module.score) / 100}
                strokeLinecap="round"
                className={cn("transition-all duration-1000 ease-out", getScoreColor(module.score))} 
              />
            </svg>
            <span className={cn("absolute text-xl font-bold", getScoreColor(module.score))}>
              {module.score}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Impact Score</span>
            <span className="text-xs text-muted-foreground">Weighted by traffic</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT COL: INSIGHTS (Takes 2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-blue-500" />
            <h3 className="text-xl font-semibold">Analysis & Insights</h3>
          </div>

          {module.insights.map((insight) => (
            <Card key={insight.id} className="overflow-hidden border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base font-bold flex items-center gap-2">
                    {insight.severity === 'critical' ? <XCircle className="w-4 h-4 text-red-500" /> :
                     insight.severity === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-500" /> :
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                    }
                    {insight.title}
                  </CardTitle>
                  {getSeverityBadge(insight.severity)}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                  {insight.description}
                </CardDescription>
                
                <div className="mt-4 p-3 bg-muted/50 rounded-md text-xs font-mono text-muted-foreground">
                  Trace ID: {insight.id}_log_vector_alpha
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* RIGHT COL: ACTION PLAN (Takes 1/3 width) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-semibold">Optimization Checklist</h3>
          </div>

          <Card className="shadow-sm border-t-4 border-t-amber-500 h-fit">
            <CardContent className="pt-6">
              {module.recommendations.length > 0 ? (
                <div className="space-y-4">
                  {module.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex gap-3 items-start group">
                      <div className="mt-0.5 w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center shrink-0 text-xs font-medium text-muted-foreground group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="space-y-2 w-full">
                        <p className="text-sm font-medium leading-snug">{rec}</p>
                        <Button variant="outline" size="sm" className="w-full h-7 text-xs justify-between group-hover:border-blue-200">
                          Fix Automatically <ArrowRight className="w-3 h-3 ml-2 opacity-50" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t">
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
                      Apply All Fixes
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">All systems operational.</p>
                  <p className="text-xs text-muted-foreground">No recommendations at this time.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/20">
            <h4 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-2">Why this matters</h4>
            <p className="text-xs text-blue-600/80 dark:text-blue-300/80 leading-relaxed">
              Improving your {module.name.toLowerCase()} directly correlates with a higher citation frequency in GPT-4 and Claude 3 responses.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}