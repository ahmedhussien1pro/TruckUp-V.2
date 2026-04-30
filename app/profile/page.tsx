"use client"

import { useAuth } from "@/lib/auth-context"
import { useI18n } from "@/lib/i18n-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  User, LogOut, Zap, ArrowRight, Lock,
  CheckCircle2, BarChart2, Map, Clock
} from "lucide-react"

export default function ProfilePage() {
  const { user, logout, upgradeToPremium } = useAuth()
  const { t } = useI18n()
  const router = useRouter()
  const [hasResults, setHasResults] = useState(false)
  const [topTrack, setTopTrack] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }
    try {
      const saved = localStorage.getItem("trackup_results")
      if (saved) {
        const results = JSON.parse(saved)
        setHasResults(true)
        if (results[0]?.track) setTopTrack(results[0].track)
      }
    } catch (_) {}
  }, [user, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!user) return null

  const joinDate = new Date(user.joinedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })

  const trackColors: Record<string, string> = {
    power: "text-orange-400",
    embedded: "text-blue-400",
    communications: "text-purple-400",
  }
  const trackNames: Record<string, string> = {
    power: "Power Systems",
    embedded: "Embedded Systems",
    communications: "Communications Systems",
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Profile header */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-8 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 border border-accent/30">
                  <span className="text-2xl font-mono font-bold text-accent">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-mono font-bold">{user.name}</h1>
                    {user.isPremium && (
                      <span className="text-[10px] font-mono bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Joined {joinDate}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                {t.nav.signOut}
              </button>
            </div>
          </div>

          {/* Assessment status */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold font-mono">Assessment Status</h2>
            </div>
            {hasResults ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Assessment completed</span>
                  {topTrack && (
                    <span className={`text-sm font-semibold ${trackColors[topTrack] ?? ""}`}>
                      \u2014 Top match: {trackNames[topTrack] ?? topTrack}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild>
                    <Link href="/test/result">
                      View my results <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  {topTrack && (
                    <Button size="sm" variant="outline" className="bg-transparent" asChild>
                      <Link href={`/roadmap/${topTrack}`}>
                        <Map className="mr-1.5 h-3.5 w-3.5" /> View roadmap
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" asChild>
                    <Link href="/test">Retake assessment</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  You have not completed the assessment yet. Take the free 15-minute test to get your ranked results.
                </p>
                <Button size="sm" asChild>
                  <Link href="/test">
                    Start free assessment <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Premium status */}
          {user.isPremium ? (
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 mb-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <h2 className="text-sm font-semibold font-mono">Premium Active</h2>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                You have full access to your recommendation reasoning, the complete 90-day roadmap, and recorded preview sessions.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button size="sm" variant="outline" className="bg-transparent" asChild>
                  <Link href="/mentors">
                    Browse mentors <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border/50 bg-secondary/20 p-6 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold font-mono">Free Plan</h2>
              </div>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                Upgrade to Premium to unlock the full recommendation reasoning, complete 90-day roadmap, and recorded sessions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" asChild>
                  <Link href="/pricing">
                    Upgrade to Premium <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                {/* Dev helper to simulate upgrade */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-xs text-muted-foreground"
                  onClick={upgradeToPremium}
                >
                  Simulate upgrade
                </Button>
              </div>
            </div>
          )}

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Explore Tracks", href: "/tracks", icon: User },
              { label: "View Roadmap", href: topTrack ? `/roadmap/${topTrack}` : "/tracks", icon: Map },
              { label: "Browse Mentors", href: "/mentors", icon: Zap },
              { label: "Pricing", href: "/pricing", icon: Lock },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-secondary/20 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
