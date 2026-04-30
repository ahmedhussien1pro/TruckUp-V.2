import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle2, Lock } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { TOTAL_QUESTIONS } from "@/lib/assessment-data"

export default function TestIntroPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Free — No account needed
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl mb-4">
              Career Assessment
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {TOTAL_QUESTIONS} questions to identify your top engineering track.
              Takes about 15 minutes.
            </p>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-3">
            {[
              { Icon: Clock, label: "~15 minutes", sub: "at your own pace" },
              { Icon: CheckCircle2, label: `${TOTAL_QUESTIONS} questions`, sub: "multiple choice only" },
              { Icon: Lock, label: "Private", sub: "stored locally on your device" },
            ].map(({ Icon, label, sub }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-secondary/20 p-5 text-center"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-xs text-muted-foreground">{sub}</span>
              </div>
            ))}
          </div>

          {/* What it covers */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 mb-8">
            <h3 className="text-sm font-semibold mb-3">What this test covers</h3>
            <ul className="space-y-2">
              {[
                "Your preference between power, embedded, and communications",
                "How you like to work — field, lab, or office environment",
                "Your comfort with different types of engineering math",
                "What kind of real-world problems excite you most",
                "Your ideal engineering output and long-term direction",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Result preview */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 mb-8">
            <h3 className="text-sm font-semibold mb-3">What you will get</h3>
            <div className="space-y-3">
              {[
                { label: "3 ranked tracks with match scores", free: true },
                { label: "Your profile summary", free: true },
                { label: "Roadmap preview — first 30 days", free: true },
                { label: "Full recommendation reasoning", free: false },
                { label: "Full 90-day roadmap", free: false },
                { label: "Recorded preview sessions", free: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {item.free ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${item.free ? "" : "text-muted-foreground/50"}`}>
                    {item.item}
                    {item.label}
                    {!item.free && <span className="ml-2 text-[10px] font-mono text-muted-foreground/40 border border-border/30 rounded px-1">PRO</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full" asChild>
            <Link href="/test/1">
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Your answers are saved locally on your device only.
          </p>
        </div>
      </main>
    </>
  )
}
