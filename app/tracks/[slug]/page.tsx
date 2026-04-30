import { getTrack, tracks } from "@/lib/tracks-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, XCircle, Wrench, Zap, Cpu, Radio } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const iconMap = { Zap, Cpu, Radio }

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }))
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const track = getTrack(slug)
  if (!track) notFound()

  const Icon = iconMap[track.icon as keyof typeof iconMap]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Track header */}
          <div className={`rounded-xl border ${track.borderColor} ${track.bgColor} p-8 mb-10`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2.5 rounded-lg bg-secondary border ${track.borderColor}`}>
                <Icon className={`h-6 w-6 ${track.color}`} />
              </div>
              <div>
                <span className={`text-[11px] font-mono uppercase tracking-wider ${track.color}`}>Engineering Track</span>
                <h1 className="text-3xl font-mono font-bold tracking-tight">{track.name}</h1>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{track.fullDescription}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild>
                <Link href="/test">
                  Take the Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href={`/roadmap/${track.slug}`}>View Roadmap</Link>
              </Button>
            </div>
          </div>

          {/* Daily work */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold font-mono mb-5">What you actually do day to day</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {track.dailyWork.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/40 bg-secondary/20"
                >
                  <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 mt-2 ${track.accentColor}`} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold font-mono mb-5">
              <Wrench className="inline h-4 w-4 mr-2 text-muted-foreground" />
              Tools & technologies
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {track.tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/40 bg-secondary/20"
                >
                  <span className={`text-sm font-mono font-semibold ${track.color} flex-shrink-0 w-32`}>
                    {tool.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{tool.purpose}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fits you / Think twice */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
            <section>
              <h2 className="text-lg font-semibold font-mono mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                This fits you if
              </h2>
              <ul className="space-y-3">
                {track.fitsYouIf.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg border border-green-500/20 bg-green-500/5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold font-mono mb-4 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-400" />
                Think twice if
              </h2>
              <ul className="space-y-3">
                {track.thinkTwiceIf.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg border border-red-500/20 bg-red-500/5"
                  >
                    <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Misconceptions */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold font-mono mb-5">Common misconceptions</h2>
            <div className="space-y-4">
              {track.misconceptions.map((item, i) => (
                <div key={i} className="rounded-lg border border-border/40 bg-secondary/20 overflow-hidden">
                  <div className="flex items-start gap-3 p-4 border-b border-border/40 bg-red-500/5">
                    <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground line-through opacity-70">{item.myth}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Entry path */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold font-mono mb-5">How to get started</h2>
            <ol className="space-y-3">
              {track.entryPath.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border/40 bg-secondary/20"
                >
                  <span className={`text-sm font-mono font-bold ${track.color} flex-shrink-0 w-6`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Bottom CTAs */}
          <div className={`rounded-xl border ${track.borderColor} ${track.bgColor} p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
            <div>
              <h3 className="font-semibold mb-1">Ready to confirm this is your track?</h3>
              <p className="text-sm text-muted-foreground">Take the free assessment and see your ranked results.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/test">
                  Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/mentors">Book a Session</Link>
              </Button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
