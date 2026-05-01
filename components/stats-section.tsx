"use client"

import { ClipboardList, Users, BookOpen, Calendar } from "lucide-react"

const STATS = [
  { icon: ClipboardList, value: "15", label: "Questions", sub: "structured & weighted" },
  { icon: BookOpen, value: "3", label: "Tracks", sub: "Power · Embedded · Comms" },
  { icon: Users, value: "90", label: "Day Roadmap", sub: "for Premium users" },
  { icon: Calendar, value: "45", label: "Min Sessions", sub: "with real engineers" },
]

export function StatsSection() {
  return (
    <section className="py-12 border-y border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary border border-border/50 mb-1">
                <s.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-2xl font-mono font-bold tracking-tight">{s.value}</span>
              <span className="text-sm font-medium">{s.label}</span>
              <span className="text-xs text-muted-foreground">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
