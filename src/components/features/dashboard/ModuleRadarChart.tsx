'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useAppStore } from '@/lib/store'; // 1. Import Store
import { AUDIT_REPORTS } from '@/data/mock-data'; // 2. Import new dictionary

export function ModuleRadarChart() {
  const { selectedBrand } = useAppStore(); // 3. Get selected brand
  
  // 4. Get the correct report for the selected brand (fallback to 'b1' if missing)
  const activeReport = AUDIT_REPORTS[selectedBrand.id] || AUDIT_REPORTS['b1'];

  // Format data for Recharts using the ACTIVE report
  const data = activeReport.modules.map(m => ({
    subject: m.name.replace(' ', '\n'), // Add line break for long names
    score: m.score,
    fullMark: 100,
  }));

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#64748b', fontSize: 10 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#2563eb"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}