import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Zap, Cpu, Radio, Star } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const sessionTypes = [
  {
    id: "intro",
    title: "Track Introduction",
    description: "A 45-minute walkthrough of what the field actually looks like from the inside \u2014 daily work, tools, team structures, and what juniors are expected to know.",
    duration: "45 min",
    bestFor: "You completed the assessment and want to hear from someone in the field",
  },
  {
    id: "decision",
    title: "Decision Help",
    description: "You are stuck between two tracks. The mentor reviews your assessment results and helps you reason through the decision with real-world context.",
    duration: "45 min",
    bestFor: "Your assessment scores are close or you are genuinely unsure",
  },
  {
    id: "roadmap",
    title: "Roadmap Clarification",
    description: "You have started learning but feel lost or uncertain about your path. The mentor reviews where you are and helps you refocus your next 30 days.",
    duration: "45 min",
    bestFor: "You have started the roadmap but lack direction or momentum",
  },
]

const mentors = [
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    title: "Senior Power Systems Engineer",
    company: "National Grid \u2014 Egypt",
    experience: 8,
    track: "power",
    trackName: "Power Systems",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    TrackIcon: Zap,
    sessions: ["intro", "decision", "roadmap"],
    available: true,
    bio: "8 years in power system protection and substation design. Currently working on grid integration of renewable energy sources. Previously at ETAP training and power flow analysis consulting.",
    languages: ["Arabic", "English"],
    rating: 4.9,
    totalSessions: 34,
  },
  {
    id: "sara-mostafa",
    name: "Sara Mostafa",
    title: "Embedded Firmware Engineer",
    company: "Continental AG \u2014 Automotive",
    experience: 6,
    track: "embedded",
    trackName: "Embedded Systems",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    TrackIcon: Cpu,
    sessions: ["intro", "decision", "roadmap"],
    available: true,
    bio: "6 years writing safety-critical firmware in C for automotive ECUs. Deep experience in FreeRTOS, AUTOSAR, and CAN bus. Passionate about helping EE students transition into embedded without getting stuck in tutorial hell.",
    languages: ["Arabic", "English"],
    rating: 5.0,
    totalSessions: 21,
  },
  {
    id: "khaled-ibrahim",
    name: "Khaled Ibrahim",
    title: "RF and Communications Engineer",
    company: "Telecom Egypt",
    experience: 7,
    track: "communications",
    trackName: "Communications Systems",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    TrackIcon: Radio,
    sessions: ["intro", "decision"],
    available: false,
    bio: "7 years in RF link design, LTE network planning, and 5G NR. Started with OFDM research, moved into industry. Helps students understand the gap between academia and real telecom engineering.",
    languages: ["Arabic", "English"],
    rating: 4.8,
    totalSessions: 18,
  },
  {
    id: "nour-eldin",
    name: "Nour El-Din Youssef",
    title: "Embedded Systems Lead",
    company: "Robusta Studio \u2014 IoT",
    experience: 5,
    track: "embedded",
    trackName: "Embedded Systems",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    TrackIcon: Cpu,
    sessions: ["intro", "roadmap"],
    available: true,
    bio: "5 years leading embedded development for IoT products. STM32, ESP32, FreeRTOS, and edge AI. Particularly good at helping self-taught engineers build the structured foundation they missed.",
    languages: ["Arabic", "English"],
    rating: 4.9,
    totalSessions: 12,
  },
]

const sessionTypeMap: Record<string, string> = {
  intro: "Track Introduction",
  decision: "Decision Help",
  roadmap: "Roadmap Clarification",
}

export default function MentorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl mb-4">
              Book a Live Session
            </h1>
            <p className="text-muted-foreground text-lg">
              45 minutes with a working engineer in your matched track.
              Real answers, no fluff.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              $29 per session \u2014 no subscription
            </div>
          </div>

          {/* Session types */}
          <section className="mb-16">
            <h2 className="text-base font-semibold font-mono mb-6">Session types</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {sessionTypes.map((type) => (
                <div
                  key={type.id}
                  className="rounded-xl border border-border/40 bg-secondary/20 p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">{type.title}</h3>
                    <span className="text-[10px] font-mono text-muted-foreground border border-border/40 rounded px-1.5 py-0.5">
                      {type.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{type.description}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider flex-shrink-0 mt-0.5">Best for</span>
                    <span className="text-[11px] text-muted-foreground italic">{type.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentor cards */}
          <section>
            <h2 className="text-base font-semibold font-mono mb-6">Available mentors</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className={`rounded-xl border ${mentor.borderColor} ${mentor.bgColor} p-6 flex flex-col gap-5`}
                >
                  {/* Mentor header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar placeholder */}
                      <div className={`w-12 h-12 rounded-xl border ${mentor.borderColor} bg-secondary flex items-center justify-center flex-shrink-0`}>
                        <mentor.TrackIcon className={`h-5 w-5 ${mentor.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <p className="text-xs text-muted-foreground">{mentor.title}</p>
                        <p className="text-xs text-muted-foreground">{mentor.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          mentor.available
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-secondary text-muted-foreground/50 border-border/30"
                        }`}
                      >
                        {mentor.available ? "Available" : "Unavailable"}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-mono">{mentor.rating}</span>
                        <span className="text-xs text-muted-foreground">({mentor.totalSessions})</span>
                      </div>
                    </div>
                  </div>

                  {/* Track badge */}
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${mentor.badgeColor}`}>
                      {mentor.trackName}
                    </span>
                    <span className="text-xs text-muted-foreground">{mentor.experience} years experience</span>
                    <span className="text-xs text-muted-foreground">&bull;</span>
                    {mentor.languages.map((lang, i) => (
                      <span key={i} className="text-xs text-muted-foreground">{lang}</span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>

                  {/* Session types */}
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Available session types</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mentor.sessions.map((s, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border border-border/40 bg-secondary/50 text-muted-foreground"
                        >
                          {sessionTypeMap[s]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="sm"
                    disabled={!mentor.available}
                    className="mt-auto"
                    asChild={mentor.available}
                  >
                    {mentor.available ? (
                      <Link href={`/mentors/${mentor.id}`}>
                        Book a session \u2014 $29
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span>Currently unavailable</span>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom note */}
          <div className="mt-12 rounded-xl border border-border/40 bg-secondary/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-1">Not sure which session type to book?</h3>
              <p className="text-sm text-muted-foreground">Take the free assessment first. Your results will help the mentor prepare before your session.</p>
            </div>
            <Button variant="outline" className="bg-transparent flex-shrink-0" asChild>
              <Link href="/test">
                Take the Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
