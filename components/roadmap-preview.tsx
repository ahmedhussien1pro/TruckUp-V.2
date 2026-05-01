"use client"

import { CheckCircle2, Circle, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n-context"
import Link from "next/link"

const MOCK_ROADMAP = [
  {
    phase: "Phase 1",
    label: "Foundation — Days 1–30",
    free: true,
    steps: [
      { label: "C Programming Fundamentals", done: true },
      { label: "Microcontroller Architecture", done: true },
      { label: "GPIO & Peripheral Basics", done: false },
      { label: "First Embedded Project", done: false },
    ],
  },
  {
    phase: "Phase 2",
    label: "Core Skills — Days 31–60",
    free: false,
    steps: [
      { label: "RTOS Concepts", done: false },
      { label: "Communication Protocols", done: false },
      { label: "Debugging Techniques", done: false },
      { label: "Mid-project Milestone", done: false },
    ],
  },
  {
    phase: "Phase 3",
    label: "Advanced — Days 61–90",
    free: false,
    steps: [
      { label: "ARM Cortex-M Deep Dive", done: false },
      { label: "PCB Design Basics", done: false },
      { label: "Final Capstone Project", done: false },
    ],
  },
]

export function RoadmapPreview() {
  const { t } = useTranslations("roadmap")
  const { t: tCommon } = useTranslations("common")

  return (
    <section id="roadmap-preview" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">

          {/* Left — copy */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <span className="self-start text-xs font-mono px-3 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10">
              {tCommon("premium")}
            </span>
            <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
              {t("pageTitle")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("pageSubtitle")}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                {t("freePreview")} — Days 1–30 unlocked for free
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-amber-400 flex-shrink-0" />
                Full 90-day roadmap requires Premium
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/pricing">
                  {t("unlockBtn")} <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/roadmap">{t("pageTitle")}</Link>
              </Button>
            </div>
          </div>

          {/* Right — roadmap mock */}
          <div className="flex flex-col gap-4">
            {MOCK_ROADMAP.map((phase, pi) => (
              <div
                key={pi}
                className={`rounded-xl border p-5 flex flex-col gap-4 ${
                  phase.free
                    ? "border-border/50 bg-secondary/30"
                    : "border-border/20 bg-secondary/10 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      {phase.phase}
                    </p>
                    <p className="text-sm font-semibold mt-0.5">{phase.label}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    phase.free
                      ? "border-green-500/30 text-green-400 bg-green-500/10"
                      : "border-amber-500/30 text-amber-400 bg-amber-500/10"
                  }`}>
                    {phase.free ? t("freePreview") : t("premiumOnly")}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {phase.steps.map((step, si) => (
                    <div key={si} className="flex items-center gap-2.5">
                      {phase.free ? (
                        step.done ? (
                          <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 text-border flex-shrink-0" />
                        )
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-muted-foreground/40 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        !phase.free
                          ? "text-muted-foreground/40"
                          : step.done
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
