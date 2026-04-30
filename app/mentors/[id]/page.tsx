import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Star, CheckCircle2, Zap, Cpu, Radio } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const iconMap = { Zap, Cpu, Radio }

const sessionTypes = [
  {
    id: "intro",
    title: "Track Introduction",
    description: "A 45-minute walkthrough of what the field actually looks like from the inside.",
    duration: "45 min",
  },
  {
    id: "decision",
    title: "Decision Help",
    description: "Mentor reviews your assessment results and helps you reason through the decision.",
    duration: "45 min",
  },
  {
    id: "roadmap",
    title: "Roadmap Clarification",
    description: "Mentor reviews where you are and helps you refocus your next 30 days.",
    duration: "45 min",
  },
]

const mentors: Record<string, {
  name: string; title: string; company: string; experience: number
  track: string; trackName: string; color: string; borderColor: string
  bgColor: string; badgeColor: string; icon: string
  sessions: string[]; bio: string; languages: string[]; rating: number; totalSessions: number
}> = {
  "ahmed-hassan": {
    name: "Ahmed Hassan", title: "Senior Power Systems Engineer", company: "National Grid \u2014 Egypt",
    experience: 8, track: "power", trackName: "Power Systems",
    color: "text-orange-400", borderColor: "border-orange-500/30", bgColor: "bg-orange-500/5",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: "Zap", sessions: ["intro", "decision", "roadmap"],
    bio: "8 years in power system protection and substation design. Currently working on grid integration of renewable energy sources. Previously at ETAP training and power flow analysis consulting. IEEE member.",
    languages: ["Arabic", "English"], rating: 4.9, totalSessions: 34,
  },
  "sara-mostafa": {
    name: "Sara Mostafa", title: "Embedded Firmware Engineer", company: "Continental AG \u2014 Automotive",
    experience: 6, track: "embedded", trackName: "Embedded Systems",
    color: "text-blue-400", borderColor: "border-blue-500/30", bgColor: "bg-blue-500/5",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: "Cpu", sessions: ["intro", "decision", "roadmap"],
    bio: "6 years writing safety-critical firmware in C for automotive ECUs. Deep experience in FreeRTOS, AUTOSAR, and CAN bus. Passionate about helping EE students transition into embedded without getting stuck in tutorial hell.",
    languages: ["Arabic", "English"], rating: 5.0, totalSessions: 21,
  },
  "nour-eldin": {
    name: "Nour El-Din Youssef", title: "Embedded Systems Lead", company: "Robusta Studio \u2014 IoT",
    experience: 5, track: "embedded", trackName: "Embedded Systems",
    color: "text-blue-400", borderColor: "border-blue-500/30", bgColor: "bg-blue-500/5",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: "Cpu", sessions: ["intro", "roadmap"],
    bio: "5 years leading embedded development for IoT products. STM32, ESP32, FreeRTOS, and edge AI. Particularly good at helping self-taught engineers build the structured foundation they missed.",
    languages: ["Arabic", "English"], rating: 4.9, totalSessions: 12,
  },
}

export function generateStaticParams() {
  return Object.keys(mentors).map((id) => ({ id }))
}

export default async function MentorBookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const mentor = mentors[id]
  if (!mentor) notFound()

  const Icon = iconMap[mentor.icon as keyof typeof iconMap]
  const availableSessions = sessionTypes.filter((s) => mentor.sessions.includes(s.id))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Mentor header */}
          <div className={`rounded-xl border ${mentor.borderColor} ${mentor.bgColor} p-8 mb-8`}>
            <div className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-xl border ${mentor.borderColor} bg-secondary flex items-center justify-center flex-shrink-0`}>
                <Icon className={`h-7 w-7 ${mentor.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-mono font-bold">{mentor.name}</h1>
                    <p className="text-sm text-muted-foreground">{mentor.title}</p>
                    <p className="text-sm text-muted-foreground">{mentor.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-mono font-semibold">{mentor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{mentor.totalSessions} sessions</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${mentor.badgeColor}`}>
                    {mentor.trackName}
                  </span>
                  <span className="text-xs text-muted-foreground">{mentor.experience} years exp.</span>
                  {mentor.languages.map((l, i) => (
                    <span key={i} className="text-xs text-muted-foreground border border-border/40 rounded px-1.5 py-0.5">{l}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-5">{mentor.bio}</p>
          </div>

          {/* Session selection */}
          <div className="mb-8">
            <h2 className="text-base font-semibold font-mono mb-5">Choose a session type</h2>
            <div className="space-y-3">
              {availableSessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-xl border border-border/40 bg-secondary/20 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-sm font-semibold">{session.title}</h3>
                        <span className="text-[10px] font-mono text-muted-foreground border border-border/40 rounded px-1.5 py-0.5">
                          {session.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.description}</p>
                    </div>
                    <Button size="sm" className="flex-shrink-0" asChild>
                      <Link href={`/checkout?mentor=${id}&session=${session.id}`}>
                        Book \u2014 $29
                        <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What happens next */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6">
            <h3 className="text-sm font-semibold mb-4">What happens after you book</h3>
            <ol className="space-y-3">
              {[
                "You complete payment \u2014 $29 one-time for the session",
                "The mentor receives your TrackUp assessment results (if available)",
                "You receive a calendar invite with a video call link within 24 hours",
                "45-minute live session at your scheduled time",
                "You receive a written session summary with key takeaways and next steps",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
