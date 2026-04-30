import { tracks } from "@/lib/tracks-data"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Cpu, Radio } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const iconMap = { Zap, Cpu, Radio }

export const metadata = {
  title: "Engineering Tracks",
  description: "Explore the 3 electrical engineering specializations: Power Systems, Embedded Systems, and Communications Systems.",
}

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl mb-4">
              The 3 tracks
            </h1>
            <p className="text-muted-foreground text-lg">
              TrackUp covers three core specializations. Take the free assessment to find which one fits your profile.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/test">
                Take the Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Track cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tracks.map((track) => {
              const Icon = iconMap[track.icon as keyof typeof iconMap]
              return (
                <div
                  key={track.slug}
                  className={`rounded-xl border ${track.borderColor} ${track.bgColor} p-8 flex flex-col gap-6`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-secondary border ${track.borderColor}`}>
                      <Icon className={`h-5 w-5 ${track.color}`} />
                    </div>
                    <h2 className={`font-mono font-bold text-xl ${track.color}`}>{track.name}</h2>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {track.shortDescription}
                  </p>

                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-3">This fits you if</p>
                    <ul className="space-y-2">
                      {track.fitsYouIf.slice(0, 3).map((fit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5 ${track.accentColor}`} />
                          {fit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-3">Key tools</p>
                    <div className="flex flex-wrap gap-1.5">
                      {track.tools.slice(0, 4).map((tool, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border border-border/50 bg-secondary/50 text-muted-foreground"
                        >
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="mt-auto bg-transparent" asChild>
                    <Link href={`/tracks/${track.slug}`}>
                      Full track details <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
