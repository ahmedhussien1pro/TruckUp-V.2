export function StatsSection() {
  const stats = [
    { value: "3", label: "Engineering Tracks", sub: "Power · Embedded · Communications" },
    { value: "15", label: "Minutes Average", sub: "To complete the full assessment" },
    { value: "1,200+", label: "Students Guided", sub: "Since early access launch" },
    { value: "92%", label: "Clarity Rate", sub: "Students confirm a clear direction" },
  ]

  return (
    <section className="border-y border-border/40 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border/40 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-10 px-6 text-center">
              <span className="text-3xl font-mono font-bold tracking-tight">{stat.value}</span>
              <span className="mt-1 text-sm font-medium">{stat.label}</span>
              <span className="mt-1 text-xs text-muted-foreground">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
