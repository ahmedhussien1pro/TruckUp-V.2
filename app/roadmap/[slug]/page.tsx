import { getRoadmap, roadmaps } from "@/lib/roadmap-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, CheckCircle2, Map } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return roadmaps.map((r) => ({ slug: r.slug }))
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const roadmap = getRoadmap(slug)
  if (!roadmap) notFound()

  const freeWeeks = roadmap.weeks.filter((w) => w.free)
  const premiumWeeks = roadmap.weeks.filter((w) => !w.free)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className={`rounded-xl border ${roadmap.borderColor} ${roadmap.bgColor} p-8 mb-10`}>
            <div className="flex items-center gap-2 mb-3">
              <Map className={`h-5 w-5 ${roadmap.color}`} />
              <span className={`text-sm font-mono ${roadmap.color}`}>{roadmap.trackName}</span>
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tight mb-3">90-Day Roadmap</h1>
            <p className="text-muted-foreground">
              A structured learning path from zero to job-ready. The first 30 days are free. Days 31–90 require Premium.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild>
                <Link href="/pricing">
                  Unlock full roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href={`/tracks/${slug}`}>Track details</Link>
              </Button>
            </div>
          </div>

          {/* Progress overview */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "Total duration", value: "90 days" },
              { label: "Free access", value: "30 days" },
              { label: "Premium access", value: "60 days" },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border border-border/40 bg-secondary/20 p-4 text-center">
                <p className="text-lg font-mono font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Free weeks */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <h2 className="text-base font-semibold font-mono">Free — Days 1–30</h2>
              <span className="text-[11px] font-mono bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">
                Included
              </span>
            </div>
            <div className="space-y-4">
              {freeWeeks.map((week, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-5 py-4 border-b border-green-500/20">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${roadmap.badgeColor}`}>
                        {week.range}
                      </span>
                      <h3 className="font-semibold text-sm">{week.title}</h3>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{week.description}</p>
                    <ul className="space-y-1.5">
                      {week.tasks.map((task, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 ${roadmap.accentColor}`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Premium weeks */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-base font-semibold font-mono">Premium — Days 31–90</h2>
              <span className="text-[11px] font-mono bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                Unlock with Premium
              </span>
            </div>
            <div className="space-y-4">
              {premiumWeeks.map((week, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/40 bg-secondary/20 overflow-hidden relative"
                >
                  {/* Blur overlay on content */}
                  <div className="absolute inset-0 backdrop-blur-[2px] bg-background/40 z-10 flex items-center justify-center rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4" />
                      <span className="font-mono">Premium — Unlock to access</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-border/40 bg-secondary text-muted-foreground">
                        {week.range}
                      </span>
                      <h3 className="font-semibold text-sm text-muted-foreground">{week.title}</h3>
                    </div>
                    <Lock className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-muted-foreground/50 mb-3">{week.description}</p>
                    <ul className="space-y-1.5">
                      {week.tasks.map((task, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs text-muted-foreground/40">
                          <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 bg-border" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upgrade CTA */}
          <div className={`rounded-xl border ${roadmap.borderColor} ${roadmap.bgColor} p-6`}>
            <h3 className="font-semibold mb-2">Unlock days 31–90</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium gives you the full 90-day roadmap, complete task lists, recorded preview sessions, and full reasoning behind your track match.
            </p>
            <Button asChild>
              <Link href="/pricing">
                Upgrade to Premium <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
