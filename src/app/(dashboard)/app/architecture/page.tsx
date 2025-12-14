import { Database, FileCode, Cpu, ArrowRight, Layers, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">System Architecture</h2>
        <p className="text-slate-500">Live visualization of the Kasparro Intelligence Pipeline.</p>
      </div>

      {/* The Diagram Container */}
      <div className="relative border-l-2 border-dashed border-slate-200 ml-6 pb-12 space-y-12">
        
        {/* STAGE 1: INPUT ASSEMBLER [cite: 87] */}
        <div className="relative pl-12">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">Stage 1: Input Assembler</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <SystemNode 
              title="Crawler Service" 
              icon={Globe} 
              status="active" 
              details="Headless chrome cluster fetching rendered DOM & Robots.txt."
            />
            <SystemNode 
              title="SERP Scraper" 
              icon={Database} 
              status="active" 
              details="Retrieves live Search Generative Experience (SGE) snapshots."
            />
          </div>
        </div>

        {/* STAGE 2: CONTEXT PACK [cite: 88] */}
        <div className="relative pl-12">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">Stage 2: ContextPack (Normalization)</h3>
          
          <Card className="bg-slate-50 border-dashed">
            <CardContent className="pt-6 flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold">
                  <FileCode size={16} /> JSON-LD Processor
                </div>
                <div className="flex items-center gap-2 font-mono text-sm font-semibold">
                  <Layers size={16} /> Text Chunker (4k tokens)
                </div>
              </div>
              <ArrowRight className="text-slate-300" />
              <div className="text-right text-xs font-mono text-slate-500">
                Output: Normalized Context Vector
              </div>
            </CardContent>
          </Card>
        </div>

        {/* STAGE 3: AUDIT MODULES [cite: 89] */}
        <div className="relative pl-12">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-4">Stage 3: Inference Engine (7 Modules)</h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Cpu className="text-purple-400" /> 
              <span className="font-mono font-bold">Model Inference Layer</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              {['Crawlability', 'Context Window', 'Entity Auth', 'Citation Flow', 'Hallucination', 'Sentiment', 'Competitor Gap'].map((m) => (
                <div key={m} className="bg-slate-800 p-2 rounded border border-slate-700 text-center text-slate-400">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Nodes
function SystemNode({ title, icon: Icon, status, details }: { title: string, icon: any, status: 'active' | 'idle', details: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-slate-100 rounded-md">
            <Icon size={16} className="text-slate-600" />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            {details}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}