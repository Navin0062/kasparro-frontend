'use client';

import { Area, AreaChart, ResponsiveContainer } from "recharts"

const data = [
  { value: 40 }, { value: 30 }, { value: 45 }, { value: 35 }, 
  { value: 55 }, { value: 45 }, { value: 60 }
]

export function Sparkline({ color = "#3b82f6" }: { color?: string }) {
  return (
    <div className="h-[40px] w-[80px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={`url(#gradient-${color})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}