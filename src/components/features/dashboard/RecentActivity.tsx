import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    source: "GPT-4o",
    action: "Citation Found",
    desc: "Your brand was cited as a primary source for 'Enterprise SEO'.",
    time: "2m ago",
    score: "+2.4",
  },
  {
    source: "Perplexity",
    action: "Sentiment Shift",
    desc: "Negative sentiment detected in follow-up queries regarding pricing.",
    time: "15m ago",
    score: "-0.5",
    alert: true
  },
  {
    source: "Claude 3",
    action: "Entity Link",
    desc: "Brand entity successfully linked to 'Digital Marketing' node.",
    time: "1h ago",
    score: "+1.2",
  },
  {
    source: "Google SGE",
    action: "Snapshot",
    desc: "Appeared in top carousel for transactional queries.",
    time: "3h ago",
    score: "+5.0",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map((item, i) => (
        <div key={i} className="flex items-start gap-4 group">
          <Avatar className="h-9 w-9 border">
            <AvatarImage src={`/avatars/0${i+1}.png`} alt="Avatar" />
            <AvatarFallback className="text-[10px] font-bold bg-primary/10 text-primary">AI</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">
                {item.source}
                {item.alert && <Badge variant="destructive" className="ml-2 text-[10px] h-4 px-1">Alert</Badge>}
              </p>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
              {item.desc}
            </p>
          </div>
          <div className={`text-xs font-bold ${item.score.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {item.score}
          </div>
        </div>
      ))}
    </div>
  )
}