import { ClipboardList, BarChart3, BookOpen, Map } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Take the Assessment",
    description:
      "Answer 15 structured questions about your preferences, work style, and field interests. No account needed. Takes about 15 minutes.",
    tag: "Free",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Get Ranked Results",
    description:
      "Receive a ranked list of all 3 tracks with match scores and a summary of your profile. Top reasoning is unlocked with Premium.",
    tag: "Free",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Explore Your Track",
    description:
      "Dive into your top-matched track: what it involves, who it fits, real-world tools, and recorded preview sessions from specialists.",
    tag: "Premium",
    tagColor: "text-accent bg-accent/10 border-accent/20",
  },
  {
    number: "04",
    icon: Map,
    title: "Follow Your Roadmap",
    description:
      "Get a clear step-by-step learning path for the first 90 days. Free preview covers day 1–30. Full roadmap requires Premium.",
    tag: "Premium",
    tagColor: "text-accent bg-accent/10 border-accent/20",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
            How TrackUp works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Four steps from confusion to clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-4 rounded-xl border border-border/50 bg-secondary/30 p-6 hover:border-border/80 transition-colors"
            >
              {/* Step number */}
              <span className="font-mono text-4xl font-bold text-border/40 absolute top-4 right-5">
                {step.number}
              </span>

              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border/50">
                <step.icon className="h-5 w-5 text-foreground" />
              </div>

              {/* Tag */}
              <span className={`self-start text-[11px] font-mono px-2 py-0.5 rounded-full border ${step.tagColor}`}>
                {step.tag}
              </span>

              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
