"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem("trackup_preloaded")
    if (shown) { setVisible(false); return }

    const fadeTimer = setTimeout(() => setFading(true), 1400)
    const hideTimer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem("trackup_preloaded", "1")
    }, 1900)

    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="relative flex flex-col items-center gap-5">
        {/* Logo */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border border-accent/20 animate-ping opacity-40" />
          <div className="absolute -inset-1.5 rounded-2xl border border-accent/30 animate-pulse" />
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/40 relative">
            <Zap className="h-8 w-8 text-accent" />
          </div>
        </div>

        {/* Brand name */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-mono font-bold tracking-tight">TrackUp</span>
          <span className="text-xs text-muted-foreground font-mono">Find your engineering track</span>
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-accent/70 animate-bounce"
              style={{ animationDelay: `${i * 0.18}s`, animationDuration: "0.8s" }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
