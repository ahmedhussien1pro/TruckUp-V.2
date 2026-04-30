"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Activity,
  Lock,
  Target,
  ChevronRight,
} from "lucide-react"

export function HeroSection() {
  const [displayedText1, setDisplayedText1] = useState("")
  const [displayedText2, setDisplayedText2] = useState("")
  const [isTypingDone, setIsTypingDone] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const text1 = "Find your track."
  const text2 = "Own your future."

  // Typing animation — unchanged logic
  useEffect(() => {
    let currentIndex = 0
    const fullText = text1 + "|" + text2
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        const currentChar = fullText.substring(0, currentIndex)
        const parts = currentChar.split("|")
        setDisplayedText1(parts[0] || "")
        setDisplayedText2(parts[1] || "")
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsTypingDone(true)
      }
    }, 80)
    return () => clearInterval(typeInterval)
  }, [])

  // Canvas grid-dot animation — unchanged logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface GridDot {
      x: number; y: number
      direction: "horizontal" | "vertical"
      speed: number; size: number; opacity: number
      color: string; targetX: number; targetY: number
      trail: { x: number; y: number }[]
    }

    const colors = ["rgba(255, 255, 255, 0.5)"]
    const gridSize = 64
    const dotCount = 30
    const snapToGrid = (value: number) => Math.round(value / gridSize) * gridSize
    const gridDots: GridDot[] = []

    for (let i = 0; i < dotCount; i++) {
      const isHorizontal = Math.random() > 0.5
      const x = snapToGrid(Math.random() * canvas.offsetWidth)
      const y = snapToGrid(Math.random() * canvas.offsetHeight)
      gridDots.push({
        x, y,
        direction: isHorizontal ? "horizontal" : "vertical",
        speed: Math.random() * 9 + 7.5,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: x, targetY: y, trail: [],
      })
    }

    let animationId: number
    let lastTime = 0
    const frameInterval = 1000 / 30

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      lastTime = currentTime - (deltaTime % frameInterval)
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      gridDots.forEach((dot) => {
        dot.trail.unshift({ x: dot.x, y: dot.y })
        if (dot.trail.length > 10) dot.trail.pop()

        if (dot.direction === "horizontal") {
          if (Math.abs(dot.x - dot.targetX) < dot.speed) {
            dot.x = dot.targetX
            if (Math.random() > 0.7) {
              dot.direction = "vertical"
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 5) + 1) * gridSize
            } else {
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 8) + 2) * gridSize
            }
          } else {
            dot.x += dot.x < dot.targetX ? dot.speed : -dot.speed
          }
        } else {
          if (Math.abs(dot.y - dot.targetY) < dot.speed) {
            dot.y = dot.targetY
            if (Math.random() > 0.7) {
              dot.direction = "horizontal"
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 8) + 2) * gridSize
            } else {
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 5) + 1) * gridSize
            }
          } else {
            dot.y += dot.y < dot.targetY ? dot.speed : -dot.speed
          }
        }

        if (dot.x < -gridSize) { dot.x = canvas.offsetWidth + gridSize; dot.targetX = dot.x; dot.trail = [] }
        if (dot.x > canvas.offsetWidth + gridSize) { dot.x = -gridSize; dot.targetX = dot.x; dot.trail = [] }
        if (dot.y < -gridSize) { dot.y = canvas.offsetHeight + gridSize; dot.targetY = dot.y; dot.trail = [] }
        if (dot.y > canvas.offsetHeight + gridSize) { dot.y = -gridSize; dot.targetY = dot.y; dot.trail = [] }

        if (dot.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          for (let i = 0; i < dot.trail.length; i++) ctx.lineTo(dot.trail[i].x, dot.trail[i].y)
          ctx.strokeStyle = dot.color
          ctx.globalAlpha = dot.opacity * 0.4
          ctx.lineWidth = dot.size
          ctx.lineCap = "round"
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity * 0.15
        ctx.fill()

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }

    animationId = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // TrackUp data
  const trackData = [
    { label: "Power", value: 45, color: "#f97316" },
    { label: "Embedded", value: 32, color: "#3b82f6" },
    { label: "Communications", value: 23, color: "#a855f7" },
  ]
  const total = trackData.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercent = 0

  const journeySteps = [
    { label: "Career Assessment", status: "done" },
    { label: "View Results", status: "done" },
    { label: "Explore Track", status: "active" },
    { label: "Full Roadmap", status: "locked" },
    { label: "Recorded Sessions", status: "locked" },
    { label: "Book a Session", status: "locked" },
  ]

  const roadmapItems = [
    { day: "Day 1–7", title: "Understand the field", free: true },
    { day: "Day 8–14", title: "Core concepts overview", free: true },
    { day: "Day 15–21", title: "Starter tools & setup", free: true },
    { day: "Day 22–30", title: "First practical task", free: true },
    { day: "Day 31–45", title: "Deep dive: fundamentals", free: false },
    { day: "Day 46–60", title: "Project: circuit basics", free: false },
    { day: "Day 61–90", title: "Advanced applications", free: false },
  ]

  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero text */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Free career assessment — no account needed
          </div>

          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl relative">
            <span className="invisible" aria-hidden="true">
              <span className="text-balance">Find your track.</span>
              <br />
              <span className="text-balance">Own your future.</span>
            </span>
            <span className="absolute inset-0 flex flex-col items-center">
              <span className="text-balance bg-gradient-to-r from-[#FFEFBA] to-[#FFFFFF] bg-clip-text text-transparent">
                {displayedText1}
                {displayedText2 === "" && (
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-pulse" />
                )}
              </span>
              <span className="text-balance bg-gradient-to-r from-[#E44D26] to-[#F16529] bg-clip-text text-transparent">
                {displayedText2}
                {displayedText2 !== "" && (
                  <span className={`inline-block w-[3px] h-[0.9em] bg-accent ml-1 ${isTypingDone ? "animate-blink" : "animate-pulse"}`} />
                )}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            A structured assessment for electrical engineering students. Take a 15-minute test, get ranked results, and follow a clear roadmap to your specialization.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="/test">
                Start Free Test
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="/tracks">Explore Tracks</a>
            </Button>
          </div>
        </div>

        {/* Dashboard mock */}
        <div className="mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 blur-3xl opacity-50" />

          <div className="relative overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="relative rounded-xl border border-border/60 bg-[#141414] backdrop-blur-sm overflow-hidden shadow-2xl min-w-[900px] lg:min-w-0">

              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">trackup — your results</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Target className="h-3 w-3" />
                    <span>Power Systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>14 min test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">87% match</span>
                  </div>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-border/60 bg-[#181818]">
                {[
                  { icon: Activity, iconColor: "text-orange-400", bg: "bg-orange-500/10", value: "87%", label: "Top Match" },
                  { icon: Clock, iconColor: "text-blue-400", bg: "bg-blue-500/10", value: "14m", label: "Test Duration" },
                  { icon: CheckCircle2, iconColor: "text-green-400", bg: "bg-green-500/10", value: "3", label: "Tracks Ranked" },
                  { icon: Zap, iconColor: "text-accent", bg: "bg-accent/10", value: "Free", label: "No signup" },
                ].map((card, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#1c1c1c] border border-border/40">
                    <div className={`p-2 rounded-lg ${card.bg}`}>
                      <card.icon className={`h-4 w-4 ${card.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-lg font-mono font-bold">{card.value}</span>
                      <p className="text-[10px] text-muted-foreground">{card.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4-column content */}
              <div className="grid grid-cols-4 divide-x divide-border/60 min-h-[420px]">

                {/* Col 1: Track Rankings */}
                <div className="p-5">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Track Rankings</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Power Systems", score: 87, rank: 1, color: "bg-orange-500" },
                      { name: "Embedded Systems", score: 72, rank: 2, color: "bg-blue-500" },
                      { name: "Communications", score: 61, rank: 3, color: "bg-purple-500" },
                    ].map((track) => (
                      <div key={track.rank} className="p-2.5 rounded-lg bg-[#1c1c1c] border border-border/40">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {track.rank === 1 && (
                              <span className="text-[9px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded-full font-mono">
                                BEST MATCH
                              </span>
                            )}
                            <span className="text-xs font-mono">{track.name}</span>
                          </div>
                          <span className="text-xs font-mono font-bold">{track.score}%</span>
                        </div>
                        <div className="h-1.5 bg-[#141414] rounded-full overflow-hidden">
                          <div
                            className={`h-full ${track.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${track.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="mt-2 p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        Strong interest in physical systems, energy, and practical problem-solving.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Col 2: Match Distribution */}
                <div className="p-5">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Match Distribution</h3>
                  <div className="flex flex-col items-center">
                    <div className="relative w-36 h-36">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        {trackData.map((item, index) => {
                          const percent = (item.value / total) * 100
                          const dashArray = `${percent * 2.51327} ${251.327 - percent * 2.51327}`
                          const dashOffset = -cumulativePercent * 2.51327
                          cumulativePercent += percent
                          return (
                            <circle
                              key={index}
                              cx="50" cy="50" r="40"
                              fill="none"
                              stroke={item.color}
                              strokeWidth="12"
                              strokeDasharray={dashArray}
                              strokeDashoffset={dashOffset}
                              className="transition-all duration-1000"
                            />
                          )
                        })}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-mono font-bold">3</span>
                        <span className="text-[10px] text-muted-foreground">tracks</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {trackData.map((item, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-[10px] text-muted-foreground">{item.label}</span>
                          <span className="text-[10px] font-mono">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-medium text-muted-foreground">Profile Strengths</h4>
                    {[
                      { label: "Practical Thinking", value: 82, color: "bg-orange-500" },
                      { label: "Hardware Interest", value: 75, color: "bg-blue-500" },
                      { label: "Math Comfort", value: 68, color: "bg-purple-500" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-mono">{item.value}%</span>
                        </div>
                        <div className="h-1.5 bg-[#1c1c1c] rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Col 3: Journey Progress */}
                <div className="p-5">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Your Journey</h3>
                  <div className="space-y-2">
                    {journeySteps.map((step, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-2.5 rounded-lg border ${
                          step.status === "done"
                            ? "bg-green-500/5 border-green-500/20"
                            : step.status === "active"
                            ? "bg-accent/10 border-accent/30"
                            : "bg-[#1c1c1c] border-border/40"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {step.status === "done" ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                          ) : step.status === "active" ? (
                            <div className="h-3.5 w-3.5 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                          ) : (
                            <Lock className="h-3.5 w-3.5 text-muted-foreground/40" />
                          )}
                          <span className={`text-xs font-mono ${step.status === "locked" ? "text-muted-foreground/40" : ""}`}>
                            {step.label}
                          </span>
                        </div>
                        {step.status === "locked" && (
                          <span className="text-[9px] text-muted-foreground/40 border border-border/30 rounded px-1">PRO</span>
                        )}
                        {step.status === "active" && (
                          <ChevronRight className="h-3 w-3 text-accent" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-2.5 rounded-lg bg-[#1c1c1c] border border-border/40">
                    <div className="flex justify-between text-[10px] mb-1.5">
                      <span className="text-muted-foreground">Journey Progress</span>
                      <span className="font-mono">2 / 6</span>
                    </div>
                    <div className="h-1.5 bg-[#141414] rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "33%" }} />
                    </div>
                  </div>
                </div>

                {/* Col 4: Roadmap Preview */}
                <div className="p-5">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Roadmap Preview</h3>
                  <div className="rounded-lg bg-[#0d0d0d] border border-border/40 p-3 h-[340px] overflow-hidden">
                    <div className="space-y-1.5">
                      {roadmapItems.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 p-1.5 rounded ${!item.free ? "opacity-40" : ""}`}
                        >
                          <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${item.free ? "bg-accent" : "bg-muted-foreground/30"}`} />
                          <div className="flex-1 min-w-0">
                            <p className={`text-[10px] font-mono ${item.free ? "text-accent" : "text-muted-foreground/40"}`}>
                              {item.day}
                            </p>
                            <p className={`text-[11px] truncate ${item.free ? "text-foreground" : "text-muted-foreground/30"}`}>
                              {item.free ? item.title : "— Premium content —"}
                            </p>
                          </div>
                          {!item.free && <Lock className="h-3 w-3 text-muted-foreground/30 flex-shrink-0 mt-0.5" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-center mt-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Scroll to explore</span>
              <ArrowRight className="h-3 w-3 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
