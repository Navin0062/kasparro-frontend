import { 
  Database, Server, Cpu, Globe, ShieldCheck, Zap, 
  ArrowRight, Search, Code2, Layers, Bot, BrainCircuit, 
  LineChart, Check, Sparkles, FileJson, Share2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PlatformPage() {
  return (
    // Adaptive Container: White in Light Mode, Deep Black in Dark Mode
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white text-slate-950 dark:bg-[#030711] dark:text-white overflow-hidden selection:bg-blue-500/30 relative">
      
      {/* --- DARK MODE BACKGROUND (Grid + Glow) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] opacity-40"></div>
      </div>

      {/* --- LIGHT MODE BACKGROUND (Subtle Grid) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none dark:opacity-0 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/40 blur-[120px] opacity-60"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 py-24 px-6 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-8 animate-in fade-in slide-in-from-bottom-3">
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50 blur-sm"></span>
              <div className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-[#030711]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-200">
                <Sparkles className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                <span>System Architecture V2.1</span>
              </div>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">
            The Intelligence <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              Pipeline
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Kasparro acts as the middleware between your content and the Large Language Models 
            that shape public perception.
          </p>
        </div>
      </section>

      {/* 2. THE PIPELINE SCHEMATIC */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">From Pixels to Predictions</h2>
            <p className="text-slate-600 dark:text-slate-400">Our 3-stage audit process simulates a complete LLM retrieval cycle.</p>
          </div>
          
          <div className="relative grid md:grid-cols-3 gap-8 items-start">
            
            {/* GLOWING CONNECTOR LINE (Desktop Only) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-500/50 to-transparent -z-10" />
            
            {/* STAGE 1: INGESTION */}
            <div className="group relative">
               {/* Connector Node */}
               <div className="hidden md:block absolute top-[52px] -right-4 w-3 h-3 bg-white dark:bg-[#030711] border-2 border-blue-500 rounded-full z-10" />
               
               <div className="bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-3xl p-1 relative hover:border-blue-500/30 transition-colors duration-300 shadow-lg dark:shadow-none">
                 <div className="bg-slate-50/50 dark:bg-[#030711]/50 rounded-[20px] p-8 h-full backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-8">
                       <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 shadow-sm dark:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
                          <FileJson className="w-8 h-8" />
                       </div>
                       <div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                          Input Layer
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Ingestion</h3>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3">
                       <TechSpecRow icon={Globe} label="Robots.txt & Sitemaps" />
                       <TechSpecRow icon={Share2} label="Knowledge Graph Nodes" />
                       <TechSpecRow icon={Search} label="Tier 1 Media Citations" />
                       <TechSpecRow icon={Database} label="Vector Embeddings" />
                    </div>
                 </div>
               </div>
            </div>

            {/* STAGE 2: PROCESSING */}
            <div className="group relative transform md:-translate-y-6">
               {/* Glow Effect (Dark Mode only) */}
               <div className="hidden dark:block absolute inset-0 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />
               
               <div className="bg-white dark:bg-[#0A0F1C] border border-purple-200 dark:border-purple-500/30 rounded-3xl p-1 relative shadow-2xl shadow-purple-900/10 dark:shadow-purple-900/20">
                 <div className="bg-gradient-to-b from-slate-50 to-white dark:from-[#1a1f2e] dark:to-[#030711] rounded-[20px] p-8 h-full">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-8">
                       <div className="w-20 h-20 rounded-2xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 shadow-sm dark:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] animate-pulse">
                          <Cpu className="w-10 h-10" />
                       </div>
                       <div className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
                          Processing Core
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 dark:text-white">7-Module Engine</h3>
                       <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 px-4">
                          Contextual analysis using fine-tuned Llama-3 and GPT-4o models.
                       </p>
                    </div>

                    {/* Active Modules Grid */}
                    <div className="grid grid-cols-2 gap-2">
                       <ModuleBadge label="Crawlability" active />
                       <ModuleBadge label="Entity Auth" active />
                       <ModuleBadge label="Sentiment" active />
                       <ModuleBadge label="Hallucination" active />
                    </div>
                 </div>
               </div>
            </div>

            {/* STAGE 3: OUTPUT */}
            <div className="group relative">
               {/* Connector Node */}
               <div className="hidden md:block absolute top-[52px] -left-4 w-3 h-3 bg-white dark:bg-[#030711] border-2 border-emerald-500 rounded-full z-10" />

               <div className="bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-3xl p-1 relative hover:border-emerald-500/30 transition-colors duration-300 shadow-lg dark:shadow-none">
                 <div className="bg-slate-50/50 dark:bg-[#030711]/50 rounded-[20px] p-8 h-full backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-8">
                       <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
                          <Server className="w-8 h-8" />
                       </div>
                       <div className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                          Output Surface
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white">Actionable Intel</h3>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3">
                       <TechSpecRow icon={Check} label="Prescriptive Code Fixes" color="emerald" />
                       <TechSpecRow icon={LineChart} label="Visibility Forecast" color="emerald" />
                       <TechSpecRow icon={ShieldCheck} label="Competitive Gaps" color="emerald" />
                       <TechSpecRow icon={Zap} label="Trust Score Calculation" color="emerald" />
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="relative z-10 py-24 px-6 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Traditional SEO Tools Fail</h2>
            <p className="text-slate-600 dark:text-slate-400">The rules of the game have changed. Don't bring a keyword tracker to a neural network fight.</p>
          </div>

          <div className="border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-[#0A0F1C]/80 backdrop-blur-md">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5 p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <div className="col-span-1 pl-4">Capability</div>
              <div className="col-span-1 text-center">Traditional SEO</div>
              <div className="col-span-1 text-center text-blue-600 dark:text-blue-400">Kasparro AI-SEO</div>
            </div>
            
            <ComparisonRow feature="Core Metric" oldTool="Keyword Rankings (1-10)" newTool="Share of Voice / Citations" />
            <ComparisonRow feature="Optimization Target" oldTool="Google Search Algorithm" newTool="LLM Context Windows" />
            <ComparisonRow feature="Content Analysis" oldTool="Keyword Density" newTool="Semantic Vector Distance" />
            <ComparisonRow feature="Technical Focus" oldTool="Page Speed & Meta Tags" newTool="Token Efficiency & Knowledge Graph" />
            <ComparisonRow feature="Outcome" oldTool="Blue Link Clicks" newTool="Direct Answer Citations" isLast />
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="relative z-10 py-32 px-6 text-center border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#030711] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            Ready to optimize for the machine?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join 500+ engineering teams building the future of search presence. <br className="hidden md:block"/>
            Get actionable insights in less than 30 seconds.
          </p>
          
          <div className="flex justify-center gap-6">
             <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
                Start Free Audit
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function TechSpecRow({ icon: Icon, label, color = "slate" }: any) {
  const colors = {
    slate: "text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400",
    emerald: "text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
  };
  
  return (
    <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-default">
       <Icon className={`w-4 h-4 ${colors[color as keyof typeof colors]} transition-colors`} />
       <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{label}</span>
    </div>
  )
}

function ModuleBadge({ label, active }: { label: string, active?: boolean }) {
  return (
    <div className={`
      px-2 py-2 rounded-md text-[11px] font-mono text-center border transition-all
      ${active 
        ? "bg-purple-50 border-purple-100 text-purple-700 dark:bg-purple-500/20 dark:border-purple-500/30 dark:text-purple-200" 
        : "bg-slate-50 border-slate-100 text-slate-500 dark:bg-white/5 dark:border-white/5 dark:text-slate-500"}
    `}>
      {label}
    </div>
  )
}

function ComparisonRow({ feature, oldTool, newTool, isLast }: { feature: string, oldTool: string, newTool: string, isLast?: boolean }) {
  return (
    <div className={`grid grid-cols-3 p-5 items-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${!isLast ? 'border-b border-slate-100 dark:border-white/5' : ''}`}>
      <div className="col-span-1 pl-4 font-bold text-sm text-slate-900 dark:text-white">{feature}</div>
      <div className="col-span-1 text-center text-sm text-slate-500">
        {oldTool}
      </div>
      <div className="col-span-1 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
        {newTool}
      </div>
    </div>
  );
}