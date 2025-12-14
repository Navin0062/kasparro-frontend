import { AuditModule } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

export function ModuleDetail({ module }: { module: AuditModule }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{module.name}</h2>
          <p className="text-slate-500 mt-1">Automated analysis of {module.name.toLowerCase()}.</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-4xl font-bold tracking-tight text-slate-900">{module.score}/100</div>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Impact Score</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Col: Insights */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-blue-500" />
            Key Insights
          </h3>
          {module.insights.map((insight) => (
            <Card key={insight.id} className="border-l-4 border-l-blue-500">
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent className="py-0 px-4 pb-3 text-sm text-slate-600">
                {insight.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Col: Recommendations */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Action Plan
          </h3>
          <div className="bg-white rounded-xl border p-4 space-y-3">
             {module.recommendations.length > 0 ? (
               module.recommendations.map((rec, idx) => (
                 <div key={idx} className="flex gap-3 text-sm text-slate-700">
                   <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-xs font-bold text-slate-500">
                     {idx + 1}
                   </div>
                   {rec}
                 </div>
               ))
             ) : (
               <div className="text-sm text-slate-500 italic flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-green-500" />
                 No critical actions required.
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}