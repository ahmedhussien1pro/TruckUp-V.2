"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useI18n } from "@/lib/i18n-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, AlertCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export default function LoginPage() {
  const { t } = useI18n()
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const result = await login(email, password)
    setLoading(false)
    if (result.success) {
      router.push("/")
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
          <h1 className="text-2xl font-mono font-bold">{t.auth.loginTitle}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t.auth.loginSubtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium">{t.auth.password}</label>
              <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t.auth.forgotPassword}
              </button>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-border/60 bg-input px-3 py-2.5 text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all placeholder:text-muted-foreground/50"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5">
              <AlertCircle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
              <span className="text-xs text-red-400">{error}</span>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : t.auth.signIn}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {t.auth.noAccount}{" "}
          <Link href="/register" className="text-foreground hover:underline font-medium">
            {t.auth.register}
          </Link>
        </p>

        <p className="text-center mt-8">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            \u2190 Back to TrackUp
          </Link>
        </p>
      </div>
    </main>
  )
}
