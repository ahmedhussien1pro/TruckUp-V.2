"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useI18n } from "@/lib/i18n-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export default function RegisterPage() {
  const { t } = useI18n()
  const { register } = useAuth()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const result = await register(name, email, password)
    setLoading(false)
    if (result.success) {
      router.push("/test")
    } else {
      setError(result.error || "Something went wrong")
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative">

      {/* Top-right toggles */}
      <div className="absolute top-4 right-4 flex items-center gap-1">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/30">
              <Zap className="h-4 w-4 text-accent" />
            </div>
            <span className="text-lg font-semibold tracking-tight font-mono">TrackUp</span>
          </Link>
          <h1 className="text-2xl font-mono font-bold">{t.auth.registerTitle}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t.auth.registerSubtitle}</p>
        </div>

        {/* What you get note */}
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-3 mb-5 space-y-1.5">
          {[
            "Free 15-question assessment",
            "Ranked results for all 3 tracks",
            "30-day roadmap preview",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">{t.auth.name}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              className="w-full rounded-lg border border-border/60 bg-input px-3 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all placeholder:text-muted-foreground/50"
              placeholder="Ahmed Hassan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">{t.auth.email}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border/60 bg-input px-3 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all placeholder:text-muted-foreground/50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">{t.auth.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              minLength={6}
              className="w-full rounded-lg border border-border/60 bg-input px-3 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all placeholder:text-muted-foreground/50"
              placeholder="At least 6 characters"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5">
              <AlertCircle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
              <span className="text-xs text-red-400">{error}</span>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : t.auth.createAccount}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-3">
          By creating an account you agree to our terms.
        </p>

        <p className="text-center text-sm text-muted-foreground mt-5">
          {t.auth.hasAccount}{" "}
          <Link href="/login" className="text-foreground hover:underline font-medium">
            {t.auth.login}
          </Link>
        </p>
      </div>
    </main>
  )
}
