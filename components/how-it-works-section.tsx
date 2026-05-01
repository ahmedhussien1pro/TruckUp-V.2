"use client"

import { ClipboardList, BarChart3, BookOpen, Map } from "lucide-react"
import { useTranslations } from "@/lib/i18n-context"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    titleKey: "step1Title",
    descKey: "step1Desc",
    tagKey: "tagFree",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    number: "02",
    icon: BarChart3,
    titleKey: "step2Title",
    descKey: "step2Desc",
    tagKey: "tagFree",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    number: "03",
    icon: BookOpen,
    titleKey: "step3Title",
    descKey: "step3Desc",
    tagKey: "tagPremium",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    number: "04",
    icon: Map,
    titleKey: "step4Title",
    descKey: "step4Desc",
    tagKey: "tagPremium",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
]

export function HowItWorksSection() {
  const { t } = useTranslations("common")

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
              <span className="font-mono text-4xl font-bold text-border/30 absolute top-4 right-5 rtl:right-auto rtl:left-5">
                {step.number}
              </span>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border/50">
                <step.icon className="h-5 w-5 text-foreground" />
              </div>
              <span className={`self-start text-[11px] font-mono px-2 py-0.5 rounded-full border ${step.tagColor}`}>
                {step.tagKey === "tagFree" ? t("free") : t("premium")}
              </span>
              <h3 className="text-base font-semibold">
                {[
                  "Take the Assessment",
                  "Get Ranked Results",
                  "Explore Your Track",
                  "Follow Your Roadmap",
                ][i]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {[
                  "Answer 15 structured questions about your preferences, work style, and field interests. No account needed. Takes about 15 minutes.",
                  "Receive a ranked list of all 3 tracks with match scores and a profile summary. Full reasoning unlocked with Premium.",
                  "Dive into your top-matched track: what it involves, who it fits, real-world tools, and recorded preview sessions.",
                  "Get a clear step-by-step learning path for the first 90 days. Free preview covers days 1–30. Full roadmap requires Premium.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
