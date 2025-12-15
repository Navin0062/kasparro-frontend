import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
}

export function StatCard({ icon: Icon, label, value, delay }: StatCardProps) {
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