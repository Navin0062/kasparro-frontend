import { Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <div className="space-y-16">
        
        {/* 1. Mission */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Built for the Algorithmic Web</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our mission is to help brands survive the transition from "10 blue links" to <span className="font-semibold text-blue-600">zero-click generated answers</span>.
          </p>
        </section>

        {/* 2. Philosophy [cite: 57] */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Engineering Philosophy</h2>
            <p className="text-slate-600">
              We don't guess. We reverse-engineer. Kasparro treats Large Language Models not as magic boxes, but as predictable probabilistic systems.
            </p>
            <p className="text-slate-600">
              By analyzing vector embeddings and attention weights, we can mathematically predict brand visibility.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <Quote className="text-blue-200 w-12 h-12 mb-4" />
            <p className="text-lg font-medium text-slate-800 italic">
              "The future of SEO isn't about keywords. It's about becoming a fundamental entity in the model's training data."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
              <div>
                <div className="text-sm font-bold text-slate-900">Alex K.</div>
                <div className="text-xs text-slate-500">Founder & Lead Engineer</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vision [cite: 58] */}
        <section className="bg-slate-900 text-white rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">The Vision for AI-First Search</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            By 2026, 70% of search traffic will be handled by generative agents. Kasparro provides the infrastructure to ensure your brand remains visible in this new reality.
          </p>
        </section>

      </div>
    </div>
  );
}