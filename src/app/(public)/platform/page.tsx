import { ArrowRight, FileJson, Database, Server, Cpu } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">The Intelligence Pipeline</h1>
        <p className="text-xl text-slate-600">
          Kasparro ingests your digital footprint, processes it through 7 specialized AI models, 
          and outputs a unified trust score for the LLM era.
        </p>
      </div>

      {/* Pipeline Visualization */}
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* STEP 1: INPUT */}
          <div className="bg-white p-8 border rounded-xl relative">
            <div className="absolute -top-6 left-8 bg-white border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500">
              Input Layer
            </div>
            <FileJson className="w-10 h-10 text-slate-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Data Ingestion</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Robots.txt & Sitemaps</li>
              <li>• Knowledge Graph Nodes</li>
              <li>• Tier 1 Media Citations</li>
              <li>• Social Sentiment Data</li>
            </ul>
          </div>

          {/* STEP 2: PROCESSING */}
          <div className="bg-slate-900 text-white p-8 border border-slate-800 rounded-xl relative shadow-xl">
            <div className="absolute -top-6 left-8 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
              Processing Core
            </div>
            <Cpu className="w-10 h-10 text-blue-400 mb-4 animate-pulse" />
            <h3 className="text-lg font-bold mb-2">7-Module Engine</h3>
            <p className="text-sm text-slate-400 mb-4">
              Contextual analysis using fine-tuned Llama-3 and GPT-4o models.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-blue-200/80">
              <div className="bg-slate-800 px-2 py-1 rounded">Crawlability</div>
              <div className="bg-slate-800 px-2 py-1 rounded">Entity Auth</div>
              <div className="bg-slate-800 px-2 py-1 rounded">Sentiment</div>
              <div className="bg-slate-800 px-2 py-1 rounded">Hallucination</div>
            </div>
          </div>

          {/* STEP 3: OUTPUT */}
          <div className="bg-white p-8 border rounded-xl relative">
             <div className="absolute -top-6 left-8 bg-white border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500">
              Output Surface
            </div>
            <Server className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Actionable Intelligence</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Prescriptive Fixes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Visibility Score
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Competitive Gaps
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}