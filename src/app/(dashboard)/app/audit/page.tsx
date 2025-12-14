'use client';

import { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, XCircle, CheckCircle2, 
  Search, RefreshCw, Zap, ArrowRight, Activity, 
  Terminal, Globe, Cpu, ChevronRight, LayoutDashboard,
  Clock, Sparkles, ArrowUpRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

// --- MOCK DATA ---
const MODULES = [
  { 
    id: 'crawl', 
    label: 'LLM Crawlability', 
    score: 45, 
    status: 'critical',
    desc: 'Automated analysis of llm crawlability. Immediate attention required to prevent visibility loss.',
    metrics: { latency: '120ms', confidence: '99.9%', model: 'GPT-4o' },
    issues: [
      { id: 'ERR-01', title: 'Robots.txt Blocking', text: 'GPTBot and CCBot are disallowed in robots.txt.', severity: 'critical', trace: 'Trace ID: i1_log_vector_alpha' },
      { id: 'WARN-02', title: 'Sitemap Accessibility', text: 'Sitemap is accessible but lacks lastmod tags.', severity: 'warning', trace: 'Trace ID: i2_log_vector_alpha' }
    ],
    checklist: [
      { id: 'fix-1', text: 'Remove "Disallow: /" for GPTBot', auto: true },
      { id: 'fix-2', text: 'Add lastmod dates to sitemap.xml', auto: true }
    ]
  },
  { 
    id: 'context', 
    label: 'Content Context Window', 
    score: 88, 
    status: 'pass',
    desc: 'Token density optimization for 128k windows.',
    metrics: { latency: '85ms', confidence: '98.5%', model: 'Claude-3' },
    issues: [],
    checklist: []
  },
  { 
    id: 'auth', 
    label: 'Entity Authority', 
    score: 72, 
    status: 'warning',
    desc: 'Knowledge Graph validation across 12 nodes.',
    metrics: { latency: '340ms', confidence: '85.0%', model: 'Gemini-1.5' },
    issues: [
      { id: 'WARN-01', title: 'Wikidata Mismatch', text: 'Wikidata entry mismatch for "Founder" property.', severity: 'warning', trace: 'Trace ID: k4_graph_node_beta' }
    ],
    checklist: [
      { id: 'fix-3', text: 'Update Schema.org "SameAs" links', auto: false }
    ]
  },
  { id: 'citation', label: 'Citation Flow', score: 95, status: 'pass', desc: 'Backlink authority from AI-search sources.', checklist: [] },
  { id: 'fact', label: 'Factuality & Hallucination', score: 60, status: 'warning', desc: 'Consistency check against ground truth.', checklist: [] },
  { id: 'sentiment', label: 'Sentiment Analysis', score: 82, status: 'pass', desc: 'Tone analysis of brand mentions.', checklist: [] },
  { id: 'share', label: 'Competitor Share', score: 30, status: 'critical', desc: 'Share of voice vs. top 3 rivals.', checklist: [] },
];

export default function AuditPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const activeModuleData = MODULES.find(m => m.id === selectedModuleId);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2500);
  };

  

  return (
    <div className="relative min-h-screen pb-20 animate-in fade-in duration-700   transition-colors">
      
      {/* --- BACKGROUND --- */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div> */}

      <div className="relative z-10 max-w-[1600px] mx-auto grid lg:grid-cols-[340px_1fr] gap-8 p-6">
        

        
        {/* ================= LEFT SIDEBAR (Audit Modules List) ================= */}
        <aside className="hidden lg:block space-y-6">
          <div className="sticky top-24">
            
            {/* 1. MODULE LIST CARD */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f1623] shadow-xl overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Audit Modules
                </h3>
                <Badge variant="outline" className="bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-0 text-[10px] h-5">
                  {MODULES.length} Active
                </Badge>
              </div>
              <div className="p-3 space-y-1">
                 {/* Overview Link */}
                 <div 
                    onClick={() => setSelectedModuleId(null)}
                    className={cn(
                      "flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all cursor-pointer font-medium mb-2",
                      selectedModuleId === null
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5"
                    )}
                  >
                    <LayoutDashboard size={18} />
                    <span className="text-[15px]">Overview Dashboard</span>
                  </div>

                {/* Module Items */}
                {MODULES.map((mod) => {
                  const isActive = selectedModuleId === mod.id;
                  return (
                    <div 
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={cn(
                        "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all cursor-pointer",
                        isActive 
                          ? "bg-slate-100 dark:bg-[#1e293b]" 
                          : "hover:bg-slate-50 dark:hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-3.5">
                        <StatusIcon status={mod.status} size={20} />
                        <span className={cn(
                          "text-[15px] font-medium transition-colors",
                          isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                        )}>
                          {mod.label}
                        </span>
                      </div>
                      <span className={cn(
                        "text-xs font-bold px-2 py-0.5 rounded-md min-w-[32px] text-center transition-all",
                        getStatusColor(mod.status, 'badge-minimal'),
                        isActive && "bg-white dark:bg-black/20"
                      )}>
                        {mod.score}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. PRO TIP CARD */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full pointer-events-none -mr-10 -mt-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                  <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Pro Insight
                </div>
                <p className="text-xs text-blue-50 leading-relaxed opacity-90">
                  Fixing <span className="font-bold border-b border-white/30">Crawlability</span> errors typically yields a 15% visibility lift within 48 hours.
                </p>
                <div className="mt-3 flex items-center justify-between">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-blue-600" />
                      <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-blue-600" />
                   </div>
                   <span className="text-[10px] opacity-75">Used by 400+ teams</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {selectedModuleId ? activeModuleData?.label : 'AI Visibility Audit'}
                </h1>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-200 dark:border-blue-500/30">
                  LIVE
                </Badge>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-2xl text-lg">
                {selectedModuleId 
                  ? 'Real-time analysis details and remediation steps.'
                  : 'Real-time analysis of how Large Language Models perceive your brand entity.'
                }
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Last Scan</div>
                <div className="text-sm font-mono font-medium text-slate-700 dark:text-slate-300">Today, 10:42 AM</div>
              </div>
              <Button 
                onClick={handleScan}
                disabled={isScanning}
                className="h-11 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 font-bold transition-all"
              >
                {isScanning ? (
                  <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Analyzing...</>
                ) : (
                  <><Zap className="w-4 h-4 mr-2" /> {selectedModuleId ? 'Re-Scan Module' : 'Run Full Audit'}</>
                )}
              </Button>
            </div>
          </div>

          {/* VIEW SWITCHER: OVERVIEW vs DETAIL */}
          {selectedModuleId === null ? (
            
            // --- VIEW 1: DASHBOARD OVERVIEW ---
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               {/* Health Score + Stats */}
               <div className="grid xl:grid-cols-3 gap-6">
                 {/* Main Health Card */}
                 <div className="xl:col-span-2 relative overflow-hidden rounded-3xl bg-[#0B1121] text-white shadow-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-800 dark:border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none group-hover:opacity-75 transition-opacity" />
                    <div className="relative z-10 space-y-6 max-w-md">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-2">Overall Health Score</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          Your brand is performing well in technical retrieval but struggling with semantic authority in GPT-4o.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Badge className="bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-3 py-1.5 h-8">
                          <Globe className="w-3.5 h-3.5 mr-2 text-blue-400" /> Global Index
                        </Badge>
                        <Badge className="bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-3 py-1.5 h-8">
                          <Cpu className="w-3.5 h-3.5 mr-2 text-purple-400" /> Multi-Model
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Radial Progress Gauge */}
                    <div className="relative z-10 flex-shrink-0">
                       <div className="relative w-40 h-40 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" stroke="#1e293b" strokeWidth="8" fill="transparent" />
                            <circle 
                              cx="50" cy="50" r="42" 
                              stroke="#3b82f6" strokeWidth="8" 
                              fill="transparent" 
                              strokeDasharray="264" 
                              strokeDashoffset="74" 
                              strokeLinecap="round" 
                              className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <span className="text-5xl font-black tracking-tighter text-white">72</span>
                             <span className="text-[10px] font-bold uppercase text-blue-400 mt-1 bg-blue-400/10 px-2 py-0.5 rounded-full">Good</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Stacked Stats */}
                 <div className="flex flex-col gap-6">
                   <StatCard label="Crawl Success Rate" value="98.5%" trend="+2.4%" isPositive={true} icon={Activity} />
                   <StatCard label="Citation Flow" value="Low" trend="-14%" isPositive={false} icon={AlertTriangle} />
                 </div>
               </div>

               {/* Grid of All Modules */}
               <div>
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Active Modules</h3>
                    <Button variant="link" className="text-slate-500">View All <ArrowRight className="w-4 h-4 ml-1"/></Button>
                 </div>
                 <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                   {MODULES.slice(0, 6).map((mod) => (
                     <div 
                       key={mod.id} 
                       onClick={() => setSelectedModuleId(mod.id)}
                       className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300"
                     >
                       <div className="flex justify-between items-start mb-4">
                         <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{mod.label}</h3>
                         <StatusIcon status={mod.status} size={20} />
                       </div>
                       <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 h-10 leading-relaxed">{mod.desc}</p>
                       <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Score</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">{mod.score}/100</span>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

          ) : (

            // --- VIEW 2: MODULE DETAIL VIEW ---
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               
               {/* 1. Detail Header (Hero for Module) */}
               <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-[#0A0F1C] shadow-2xl p-8 relative overflow-hidden group">
                  <div className={cn("absolute inset-0 bg-gradient-to-r opacity-20 transition-opacity", getStatusColor(activeModuleData?.status || 'pass', 'gradient'))} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                     <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                             <StatusIcon status={activeModuleData?.status || 'pass'} size={24} />
                           </div>
                           <Badge variant="outline" className={cn("uppercase tracking-wider font-bold border-0 bg-white/10 text-white")}>
                              {activeModuleData?.status}
                           </Badge>
                        </div>
                        <h2 className="text-2xl font-bold text-white">{activeModuleData?.label}</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                           {activeModuleData?.desc}
                        </p>
                     </div>

                     <div className="flex items-center gap-6 bg-black/20 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <div className="text-right">
                           <div className="text-xs font-bold uppercase text-slate-400 mb-1">Impact Score</div>
                           <div className="text-xs text-slate-500">Weighted by traffic</div>
                        </div>
                        <div className="relative w-20 h-20 flex items-center justify-center">
                           <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                             <circle 
                               cx="50" cy="50" r="42" 
                               stroke={activeModuleData?.score && activeModuleData.score < 50 ? '#ef4444' : '#10b981'} 
                               strokeWidth="8" 
                               fill="transparent" 
                               strokeDasharray="264" 
                               strokeDashoffset={264 - (264 * (activeModuleData?.score || 0)) / 100} 
                               strokeLinecap="round" 
                             />
                           </svg>
                           <span className={cn("text-xl font-bold", activeModuleData?.score && activeModuleData.score < 50 ? 'text-red-500' : 'text-emerald-500')}>
                              {activeModuleData?.score}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 2. Analysis & Checklist Columns */}
               <div className="grid xl:grid-cols-[1.5fr_1fr] gap-8">
                  
                  {/* LEFT: Analysis & Insights */}
                  <div className="space-y-6">
                     <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Analysis & Insights</h3>
                     </div>

                     {activeModuleData?.issues && activeModuleData.issues.length > 0 ? (
                        activeModuleData.issues.map((issue: any) => (
                           <div key={issue.id} className="relative overflow-hidden rounded-2xl bg-[#0F1623] border border-slate-800 dark:border-white/10 p-6 group">
                              <div className={cn("absolute left-0 top-0 bottom-0 w-1", issue.severity === 'critical' ? 'bg-red-500' : 'bg-amber-500')} />
                              
                              <div className="flex justify-between items-start mb-4">
                                 <div className="flex items-center gap-3">
                                    <StatusIcon status={issue.severity} size={18} />
                                    <h4 className="font-bold text-white">{issue.title}</h4>
                                 </div>
                                 <Badge variant="outline" className={cn("uppercase text-[10px] border-0", getStatusColor(issue.severity, 'badge-minimal'))}>
                                    {issue.severity}
                                 </Badge>
                              </div>
                              
                              <p className="text-slate-400 mb-6 pl-8">{issue.text}</p>
                              
                              <div className="pl-8">
                                 <div className="bg-black/40 rounded-lg p-3 border border-white/5 font-mono text-xs text-slate-500 flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    {issue.trace}
                                 </div>
                              </div>
                           </div>
                        ))
                     ) : (
                        <div className="p-12 rounded-2xl bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 text-center">
                           <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                           </div>
                           <h4 className="font-bold text-slate-900 dark:text-white mb-2">All Systems Nominal</h4>
                           <p className="text-slate-500">No critical issues detected in this module.</p>
                        </div>
                     )}
                  </div>

                  {/* RIGHT: Optimization Checklist */}
                  <div className="space-y-6">
                     <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Optimization Checklist</h3>
                     </div>

                     <div className="rounded-2xl bg-[#0F1623] border border-slate-800 dark:border-white/10 p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-amber-500 to-transparent" />
                        
                        <div className="space-y-6 relative z-10">
                           {activeModuleData?.checklist && activeModuleData.checklist.length > 0 ? (
                              activeModuleData.checklist.map((item: any, idx: number) => (
                                 <div key={item.id} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-mono text-slate-400 mt-0.5 shrink-0">
                                       {idx + 1}
                                    </div>
                                    <div className="space-y-3 w-full">
                                       <p className="text-sm font-medium text-white">{item.text}</p>
                                       {item.auto && (
                                          <Button variant="secondary" size="sm" className="w-full justify-between bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 h-8 text-xs">
                                             Fix Automatically
                                             <ArrowRight className="w-3 h-3" />
                                          </Button>
                                       )}
                                    </div>
                                 </div>
                              ))
                           ) : (
                              <p className="text-slate-500 text-sm text-center py-4">No actions required.</p>
                           )}

                           <div className="pt-4 mt-4 border-t border-white/5">
                              <Button className="w-full bg-white text-black hover:bg-slate-200 font-bold">
                                 Apply All Fixes
                              </Button>
                           </div>
                        </div>
                     </div>

                     {/* Context Card */}
                     <div className="rounded-2xl bg-blue-900/10 border border-blue-500/10 p-6">
                        <h4 className="text-xs font-bold uppercase text-blue-500 mb-2">Why This Matters</h4>
                        <p className="text-sm text-blue-200/70 leading-relaxed">
                           Improving your LLM crawlability directly correlates with a higher citation frequency in GPT-4 and Claude 3 responses.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatusIcon({ status, size = 16 }: { status: string, size?: number }) {
  if (status === 'pass') return <CheckCircle2 size={size} className="text-emerald-500" />;
  if (status === 'warning') return <AlertTriangle size={size} className="text-amber-500" />;
  if (status === 'critical') return <XCircle size={size} className="text-red-500" />;
  return <Search size={size} className="text-slate-400" />;
}

function getStatusColor(status: string, type: 'text' | 'bg' | 'badge' | 'badge-minimal' | 'gradient') {
  if (status === 'pass') {
    if (type === 'badge-minimal') return "bg-emerald-500/10 text-emerald-500";
    if (type === 'gradient') return "from-emerald-600 to-transparent";
  }
  if (status === 'warning') {
    if (type === 'badge-minimal') return "bg-amber-500/10 text-amber-500";
    if (type === 'gradient') return "from-amber-600 to-transparent";
  }
  if (status === 'critical') {
    if (type === 'badge-minimal') return "bg-red-500/10 text-red-500";
    if (type === 'gradient') return "from-red-600 to-transparent";
  }
  return "";
}

function StatCard({ label, value, trend, isPositive, icon: Icon }: any) {
  return (
    <Card className="flex-1 flex items-center justify-between p-6 border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A0F1C] hover:border-blue-500/30 transition-colors shadow-xl shadow-black/5 dark:shadow-none">
       <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">{label}</div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">{value}</div>
       </div>
       <div className="flex flex-col items-center gap-2">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", isPositive ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500")}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={cn("text-xs font-bold", isPositive ? "text-emerald-500" : "text-red-500")}>{trend}</span>
       </div>
    </Card>
  )
}