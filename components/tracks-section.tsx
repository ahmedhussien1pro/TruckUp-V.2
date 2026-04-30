"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Cpu, Radio } from "lucide-react"

const tracks = [
  {
    icon: Zap,
    name: "Power Systems",
    slug: "power",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    iconBg: "bg-orange-500/10",
    description:
      "Energy generation, transmission, and distribution. Work with grids, motors, transformers, and power electronics.",
    fits: ["Strong math background", "Interest in energy systems", "Preference for large-scale infrastructure"],
    tools: ["MATLAB", "ETAP", "AutoCAD Electrical", "PLC programming"],
  },
  {
    icon: Cpu,
    name: "Embedded Systems",
    slug: "embedded",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    iconBg: "bg-blue-500/10",
    description:
      "Programming microcontrollers and designing hardware-software interfaces. Build devices that operate in the real world.",
    fits: ["Enjoys debugging at a low level", "Likes building physical devices", "Comfortable with C/C++"],
    tools: ["Arduino", "STM32", "FreeRTOS", "Keil / PlatformIO"],
  },
  {
    icon: Radio,
    name: "Communications Systems",
    slug: "communications",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    iconBg: "bg-purple-500/10",
    description:
      "Signal processing, wireless transmission, and networking. Design systems that move information reliably across any medium.",
    fits: ["Strong interest in mathematics", "Fascination with wireless tech", "Enjoys signal analysis"],
    tools: ["MATLAB / Simulink", "GNU Radio", "Wireshark", "OFDM / 5G concepts"],
  },
]

// Duplicate for seamless scroll
const allTracks = [...tracks, ...tracks]

export function TracksSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animId: number
    let pos = 0
    const speed = 0.4

    const animate = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animId)
    const resume = () => { animId = requestAnimationFrame(animate) }
    el.addEventListener("mouseenter", pause)
    el.addEventListener("mouseleave", resume)

    return () => {
      cancelAnimationFrame(animId)
      el.removeEventListener("mouseenter", pause)
      el.removeEventListener("mouseleave", resume)
    }
  }, [])

  return (
    <section id="tracks" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
            The 3 approved tracks
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            TrackUp covers three core specializations in electrical engineering.
            The test tells you which one fits you best.
          </p>
        </div>
      </div>

      {/* Scrolling track cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-8 pb-4"
        style={{ cursor: "default" }}
      >
        {allTracks.map((track, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[340px] rounded-xl border ${track.borderColor} ${track.bgColor} p-6 flex flex-col gap-4`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${track.iconBg}`}>
                <track.icon className={`h-5 w-5 ${track.color}`} />
              </div>
              <h3 className={`font-mono font-semibold ${track.color}`}>{track.name}</h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>

            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">This fits you if</p>
              <ul className="space-y-1">
                {track.fits.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${track.color.replace("text", "bg")}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Key tools</p>
              <div className="flex flex-wrap gap-1.5">
                {track.tools.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-border/50 bg-secondary/50 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="mt-auto bg-transparent" asChild>
              <a href={`/tracks/${track.slug}`}>
                Explore track <ArrowRight className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
