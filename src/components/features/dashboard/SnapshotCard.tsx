import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Sparkline } from "./Sparkline"; // Import the new component

interface SnapshotCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  trendColor?: string; // Add color prop
}

export function SnapshotCard({ title, value, subtext, icon: Icon, trendColor = "#3b82f6" }: SnapshotCardProps) {
  return (
    <Card className="overflow-hidden relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            {subtext && (
              <p className="text-xs text-muted-foreground mt-1">
                {subtext}
              </p>
            )}
          </div>
          {/* Add the Sparkline here */}
          <div className="pb-1">
            <Sparkline color={trendColor} />
          </div>
        </div>
      </CardContent>
      
      {/* Subtle background glow based on color */}
      <div 
        className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 pointer-events-none blur-2xl" 
        style={{ backgroundColor: trendColor }}
      />
    </Card>
  );
}