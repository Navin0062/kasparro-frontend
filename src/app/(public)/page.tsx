import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Search, BarChart3, Sparkles, Zap, Layers } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white text-slate-950 dark:bg-[#030711] dark:text-white overflow-hidden selection:bg-blue-500/30 relative">
      
      {/* --- DARK MODE BACKGROUND (Grid + Glow) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] opacity-40"></div>
      </div>

      {/* --- LIGHT MODE BACKGROUND (Grid Only - Subtle Gray) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none dark:opacity-0 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/40 blur-[120px] opacity-60"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8 animate-in fade-in slide-in-from-bottom-3">
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50 blur-sm"></span>
              <div className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-[#030711]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-200">
                <Sparkles className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                <span>Now supporting Gemini 1.5 & GPT-4o</span>
              </div>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] drop-shadow-sm dark:drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 text-slate-900 dark:text-white">
            Win the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              AI Search War
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-5">
            The first <span className="font-medium text-slate-900 dark:text-white">Brand Intelligence Platform</span> for the generative web. 
            Optimize how LLMs perceive, hallucinate, and cite your brand.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6">
            <Link href="/app/audit">
              <Button size="lg" className="h-12 px-8 text-base rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-400 text-white border-0 shadow-lg dark:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] transition-all scale-100 hover:scale-105 font-semibold">
                Run AI-SEO Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/platform">
               <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                How it Works
              </Button>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto perspective-1000 animate-in fade-in slide-in-from-bottom-8">
             <StatCard icon={Zap} label="Processing Speed" value="140ms" delay="0" />
             <StatCard icon={Layers} label="Vector Dimensions" value="1,536" delay="100" />
             <StatCard icon={Bot} label="Models Tracked" value="12+" delay="200" />
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="relative z-10 py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#030711]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why AI-SEO Matters</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Bot}
              title="LLM Crawlability"
              desc="Ensure GPTBot and CCBot can parse your context window without token overflow."
              color="blue"
            />
            <FeatureCard 
              icon={Search}
              title="Generative Visibility"
              desc="Measure your share of voice in direct, zero-click generated answers."
              color="purple"
            />
            <FeatureCard 
              icon={BarChart3}
              title="Sentiment Logic"
              desc="Detect and correct hallucinations before they become permanent training data."
              color="emerald"
            />
          </div>
        </div>
      </section>
      
      {/* 3. BOTTOM CTA SECTION - IMPROVED */}
      <section className="relative z-10 py-32 px-6 text-center border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#030711] overflow-hidden">
        
        {/* Background Spotlight for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            Ready to optimize for the machine?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join 500+ engineering teams building the future of search presence. <br className="hidden md:block"/>
            Get actionable insights in less than 30 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/app/audit">
               <Button size="lg" className="h-12 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
                  Start Free Audit
               </Button>
             </Link>
             <Link href="/contact">
               <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5">
                  Contact Sales
               </Button>
             </Link>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatCard({ icon: Icon, label, value, delay }: any) {
  return (
    <div 
      className="p-4 rounded-xl bg-white dark:bg-[#111827]/50 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-500 shadow-sm dark:shadow-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
        <Icon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
      </div>
      <div className="text-left">
        <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</div>
        <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc, color }: any) {
  const iconColors = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
  }

  const gradients = {
    blue: "from-blue-500/20 to-transparent",
    purple: "from-purple-500/20 to-transparent",
    emerald: "from-emerald-500/20 to-transparent",
  }

  const lightHoverStyles = {
    blue: "hover:border-blue-500/50 hover:shadow-blue-100/50",
    purple: "hover:border-purple-500/50 hover:shadow-purple-100/50",
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-100/50",
  }

  return (
    <div className={`group relative p-8 rounded-3xl bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 overflow-hidden ${lightHoverStyles[color as keyof typeof lightHoverStyles]} dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10`}>
      
      {/* Hover Gradient Effect (Dark Mode Only) */}
      <div className={`hidden dark:block absolute inset-0 bg-gradient-to-br ${gradients[color as keyof typeof gradients]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className={`w-6 h-6 ${iconColors[color as keyof typeof iconColors]}`} />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
          {desc}
        </p>
      </div>
    </div>
  )
}