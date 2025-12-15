import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: 'blue' | 'purple' | 'emerald';
}

export function FeatureCard({ icon: Icon, title, desc, color }: FeatureCardProps) {
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
    <div className={`group relative p-8 rounded-3xl bg-white dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 overflow-hidden ${lightHoverStyles[color]} dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10`}>
      <div className={`hidden dark:block absolute inset-0 bg-gradient-to-br ${gradients[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className={`w-6 h-6 ${iconColors[color]}`} />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
          {desc}
        </p>
      </div>
    </div>
  )
}