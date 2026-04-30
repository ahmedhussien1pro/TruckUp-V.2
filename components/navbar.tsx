"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, User, LogOut, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { useAuth } from "@/lib/auth-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { t } = useI18n()
  const { user, logout } = useAuth()
  const router = useRouter()

  const navLinks = [
    { label: t.nav.test, href: "/test" },
    { label: t.nav.tracks, href: "/tracks" },
    { label: t.nav.roadmap, href: "/roadmap/power" },
    { label: t.nav.pricing, href: "/pricing" },
  ]

  const handleLogout = () => {
    logout()
    setProfileOpen(false)
    router.push("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
              <Zap className="h-4 w-4 text-accent" />
            </div>
            <span className="text-lg font-semibold tracking-tight font-mono">TrackUp</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop right: toggles + auth */}
        <div className="hidden items-center gap-1 md:flex">
          <LanguageToggle />
          <ThemeToggle />

          <div className="w-px h-4 bg-border/50 mx-1" />

          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 border border-accent/30">
                  <span className="text-xs font-mono font-bold text-accent">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium max-w-[100px] truncate">{user.name}</span>
                {user.isPremium && (
                  <span className="text-[9px] font-mono bg-accent/20 text-accent border border-accent/30 px-1 rounded">PRO</span>
                )}
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-1 w-48 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-xl z-50 overflow-hidden">
                  <div className="px-3 py-2.5 border-b border-border/40">
                    <p className="text-xs font-medium truncate">{user.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <div className="p-1">
                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-secondary/50 transition-colors"
                    >
                      <User className="h-4 w-4 text-muted-foreground" />
                      {t.nav.profile}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      {t.nav.signOut}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">{t.nav.signIn}</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/test">{t.nav.startTest}</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground py-2.5 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 pt-4 border-t border-border/40 mt-2 px-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm hover:bg-secondary/50"
                  >
                    <User className="h-4 w-4 text-muted-foreground" />
                    {t.nav.profile}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false) }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-red-400"
                  >
                    <LogOut className="h-4 w-4" />
                    {t.nav.signOut}
                  </button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>{t.nav.signIn}</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/test" onClick={() => setIsOpen(false)}>{t.nav.startTest}</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
