"use client"

import { Zap, Cpu, Radio, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n-context"
import Link from "next/link"

const MOCK_RESULTS = [
  {
    rank: 1,
    icon: Cpu,
    name: "Embedded Systems",
    score: 87,
    color: "text-blue-400",
    bar: "bg-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    locked: false,
    summary: "You show strong alignment with hardware-software integration and low-level thinking.",
  },
  {
    rank: 2,
    icon: Radio,
    name: "Communications",
    score: 71,
    color: "text-purple-400",
    bar: "bg-purple-400",
    border: "border-border/30",
    bg: "bg-secondary/20",
    locked: true,
    summary: "",
  },
  {
    rank: 3,
    icon: Zap,
    name: "Power Systems",
    score: 54,
    color: "text-orange-400",
    bar: "bg-orange-400",
    border: "border-border/30",
    bg: "bg-secondary/20",
    locked: true,
    summary: "",
  },
]

export function ResultsPreview() {
  const { t } = useTranslations("results")
  const { t: tCommon } = useTranslations("common")

  return (
    <section id="results-preview" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* Left — results mock */}
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-muted-foreground">{t("complete")}</p>
                <h3 className="text-lg font-mono font-bold">{t("title")}</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-green-500/30 text-green-400 bg-green-500/10">
                {tCommon("free")}
              </span>
            </div>

            {/* Result cards */}
            {MOCK_RESULTS.map((r) => (
              <div
                key={r.rank}
                className={`rounded-xl border ${r.border} ${r.bg} p-4 flex flex-col gap-3 ${
                  r.locked ? "opacity-60" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {r.locked ? (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <r.icon className={`h-4 w-4 ${r.color}`} />
                    )}
                    <span className={`text-sm font-semibold ${
                      r.locked ? "text-muted-foreground" : "text-foreground"
                    }`}>
                      {r.locked ? "Locked" : r.name}
                    </span>
                    {r.rank === 1 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-green-500/30 text-green-400 bg-green-500/10">
                        {t("bestMatch")}
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-mono font-bold ${r.locked ? "text-muted-foreground" : r.color}`}>
                    {r.score}%
                  </span>
                </div>

                {/* Score bar */}
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${r.locked ? "bg-border" : r.bar}`}
                    style={{ width: `${r.score}%` }}
                  />
                </div>

                {!r.locked && r.summary && (
                  <p className="text-xs text-muted-foreground">{r.summary}</p>
                )}
              </div>
            ))}

            {/* Upgrade prompt */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold">{t("unlockTitle")}</p>
              <p className="text-xs text-muted-foreground">{t("unlockDesc")}</p>
            </div>
          </div>

          {/* Right — copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
              Know exactly where you stand
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              After your assessment, you get a ranked score across all 3 tracks. Free users see their top match. Premium unlocks the full breakdown with reasoning.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/test">{tCommon("startAssessment")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">{tCommon("seePricing")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
