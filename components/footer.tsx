import Link from "next/link"
import { Zap } from "lucide-react"

const links = {
  Product: [
    { label: "Take the Test", href: "/test" },
    { label: "Tracks", href: "/tracks" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Pricing", href: "/pricing" },
  ],
  Tracks: [
    { label: "Power Systems", href: "/tracks/power" },
    { label: "Embedded Systems", href: "/tracks/embedded" },
    { label: "Communications", href: "/tracks/communications" },
  ],
  Support: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Book a Session", href: "/mentors" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/30">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <span className="text-lg font-semibold tracking-tight font-mono">TrackUp</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
              Career guidance for electrical engineering students. Find your track. Start your journey.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold mb-4">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TrackUp. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
