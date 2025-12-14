import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Assumes shadcn badge
import { ArrowRight, Bot, Search, BarChart3 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <Badge variant="outline" className="mb-6 py-1.5 px-4 text-blue-600 border-blue-200 bg-blue-50/50">
            Now supporting Gemini & Perplexity
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Win the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Search</span> War.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kasparro is the first Brand Intelligence platform for the AI-native web. 
            Optimize how LLMs perceive, hallucinate, and cite your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/app/audit">
              <Button size="lg" className="h-12 px-8 text-base bg-slate-900 hover:bg-slate-800">
                Run AI-SEO Audit
              </Button>
            </Link>
            <Link href="/platform">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base gap-2">
                How it works <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      </section>

      {/* 2. VALUE PROP (Why AI-SEO?) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Search has changed. Have you?</h2>
            <p className="mt-4 text-slate-500">Traditional SEO tools track links. We track neural weights.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Bot}
              title="LLM Crawlability"
              desc="Ensure GPTBot, CCBot, and Google-Extended can actually read and process your content context window."
            />
            <FeatureCard 
              icon={Search}
              title="Generative Visibility"
              desc="Move beyond blue links. Measure your share of voice in chat-based answers and citations."
            />
            <FeatureCard 
              icon={BarChart3}
              title="Sentiment Analysis"
              desc="Understand the 'mood' of AI models when they discuss your brand entity vs competitors."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component for Features
function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}