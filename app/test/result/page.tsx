"use client"

import { useEffect, useState } from "react"
import { computeResults, type ScoringResult } from "@/lib/scoring"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, CheckCircle2, RotateCcw, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function ResultPage() {
  const [result, setResult] = useState<ScoringResult | null>(null)
  const [mounted, setMounted] = useState(false)
  const [noData, setNoData] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem("trackup_answers")
      if (saved) {
        const answers = JSON.parse(saved) as Record<number, string>
        const computed = computeResults(answers)
        setResult(computed)
      } else {
        setNoData(true)
      }
    } catch (_) {
      setNoData(true)
    }
  }, [])

  if (!mounted) return null

  if (noData) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <div className="text-center max-w-sm px-4">
            <AlertTriangle className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
            <h2 className="font-semibold mb-2">No assessment data found</h2>
            <p className="text-sm text-muted-foreground mb-6">You need to complete the assessment before viewing results.</p>
            <Button asChild>
              <Link href="/test">Start Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </main>
      </>
    )
  }

  if (!result) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <p className="text-muted-foreground font-mono text-sm">Computing your results...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 mb-4">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Assessment Complete
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl mb-4">
              Your Results
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              {result.overallSummary}
            </p>
            {result.decisionStatus === "needs_validation" && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                <AlertTriangle className="h-3.5 w-3.5" />
                Scores are close — a validation session is recommended
              </div>
            )}
          </div>

          {/* Track result cards */}
          <div className="space-y-4 mb-10">
            {result.tracks.map((track) => (
              <div
                key={track.track}
                className={`rounded-xl border p-6 ${track.borderColor} ${track.bgColor}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    {track.rank === 1 && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${track.badgeColor}`}>
                        BEST MATCH
                      </span>
                    )}
                    <span className={`font-mono font-semibold text-lg ${track.color}`}>
                      {track.name}
                    </span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${track.badgeColor} opacity-70`}>
                      #{track.rank}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-2xl ml-4 flex-shrink-0">
                    {track.normalizedScore}%
                  </span>
                </div>

                {/* Score bar */}
                <div className="h-2 bg-background/50 rounded-full overflow-hidden mb-4">
                  <div
                    className={`h-full ${track.accentColor} rounded-full transition-all duration-1000`}
                    style={{ width: `${track.normalizedScore}%` }}
                  />
                </div>

                {/* Reason */}
                {track.rank === 1 ? (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {track.reasonSummary}
                  </p>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground/50 mb-4">
                    <Lock className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Full reasoning unlocked with Premium</span>
                    <span className="text-[10px] font-mono border border-border/30 rounded px-1">PRO</span>
                  </div>
                )}

                {/* CTAs for top track */}
                {track.rank === 1 && (
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm" asChild>
                      <Link href={`/tracks/${track.track}`}>
                        Explore this track <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent" asChild>
                      <Link href={`/roadmap/${track.track}`}>
                        View roadmap
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Premium CTA */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1">Unlock the full picture</h3>
                <p className="text-sm text-muted-foreground">
                  Premium gives you full reasoning for all 3 tracks, a complete 90-day roadmap, and access to recorded preview sessions.
                </p>
              </div>
            </div>
            <Button className="mt-4" asChild>
              <Link href="/pricing">
                Upgrade to Premium <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Retake */}
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                try { localStorage.removeItem("trackup_answers") } catch (_) {}
                window.location.href = "/test"
              }}
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />
              Retake assessment
            </Button>
          </div>

        </div>
      </main>
    </>
  )
}
