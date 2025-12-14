import { 
  Users, Target, Lightbulb, Heart, 
  ArrowRight, Sparkles, Shield, Zap, Globe 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
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

      {/* 1. HERO SECTION: MISSION */}
      <section className="relative z-10 py-24 md:py-32 px-6 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-8 animate-in fade-in slide-in-from-bottom-3">
             <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50 blur-sm"></span>
              <div className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-[#030711]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-200">
                <Target className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                <span>Our Mission</span>
              </div>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">
            We are building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              Control Layer
            </span>{' '}
            for the AI Web.
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            The internet is shifting from "Search" to "Generation." 
            We exist to help brands survive and thrive in this new cognitive era.
          </p>
        </div>
      </section>

      {/* 2. THE MANIFESTO (Glass Card) */}
      <section className="relative z-10 py-24 px-6 bg-slate-50/50 dark:bg-[#030711]/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Kasparro?</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  For 25 years, SEO was about ten blue links. You optimized keywords, built backlinks, and Google sent you traffic.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">That world is ending.</strong>
                </p>
                <p>
                  Today, users ask ChatGPT, Claude, and Gemini for answers directly. If these models don't trust your brand entity, you don't just lose a click—you lose the conversation entirely.
                </p>
                <p>
                  We built Kasparro to give engineering and marketing teams the first dedicated toolkit to measure, monitor, and improve their standing in the "Latent Space."
                </p>
              </div>
            </div>

            {/* Right: Glass Card Graphic */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    K
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Kasparro Intelligence</div>
                    <div className="text-xs text-slate-500">System Status: Online</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-slate-100 dark:bg-white/10 rounded-full" />
                  <div className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full" />
                  <div className="h-2 w-5/6 bg-slate-100 dark:bg-white/10 rounded-full" />
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                      <Sparkles className="w-4 h-4" /> Optimization Complete
                    </div>
                    <div className="text-xs text-slate-500">Brand entity successfully injected into context window.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="relative z-10 py-24 px-6 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Operating Principles</h2>
            <p className="text-slate-600 dark:text-slate-400">How we approach the chaotic world of AI.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard 
              icon={Shield} 
              title="Radical Transparency" 
              desc="AI is a black box. We exist to pry it open and show you exactly what's inside." 
            />
            <ValueCard 
              icon={Zap} 
              title="Engineering First" 
              desc="We don't sell 'magic'. We sell reproducible, measurable engineering signals." 
            />
            <ValueCard 
              icon={Globe} 
              title="Platform Neutral" 
              desc="We don't play favorites. We optimize for OpenAI, Anthropic, Google, and Meta equally." 
            />
            <ValueCard 
              icon={Heart} 
              title="Human Centric" 
              desc="We believe AI should serve human intent, not replace human judgment." 
            />
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="relative z-10 py-24 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#030711]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">The Builders</h2>
            <p className="text-slate-600 dark:text-slate-400">Founded by ex-Google search engineers and AI researchers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Alex Chen" 
              role="Co-Founder & CEO" 
              desc="Ex-DeepMind. Previously led RAG infrastructure teams at enterprise scale." 
              initials="AC"
            />
            <TeamMember 
              name="Sarah Miller" 
              role="CTO" 
              desc="PhD in NLP from Stanford. Specialist in vector database optimization." 
              initials="SM"
            />
            <TeamMember 
              name="James Wilson" 
              role="Head of Product" 
              desc="Former SEO Director at Shopify. Bridging the gap between search and AI." 
              initials="JW"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="relative z-10 py-32 px-6 text-center border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#030711] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            Join the revolution.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are always looking for brilliant engineers and researchers to join our mission.
          </p>
          
          <div className="flex justify-center gap-6">
             <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
                View Open Roles
             </Button>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

// --- HELPER COMPONENTS ---

function ValueCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="group p-6 rounded-2xl bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10">
      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

function TeamMember({ name, role, desc, initials }: any) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
        <Avatar className="w-32 h-32 border-4 border-white dark:border-[#0A0F1C] shadow-xl">
          {/* Replace src with real images later */}
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${initials}`} />
          <AvatarFallback className="text-2xl font-bold bg-slate-100 dark:bg-white/10">{initials}</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{name}</h3>
      <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{role}</div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
        {desc}
      </p>
    </div>
  )
}