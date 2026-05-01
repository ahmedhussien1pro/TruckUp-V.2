"use client"

import { CheckCircle2, Clock, Lock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n-context"
import Link from "next/link"

const SAMPLE_QUESTIONS = [
  {
    text: "When solving a problem, you prefer working with...",
    options: ["Physical systems & hardware", "Code & software logic", "Mathematical signals"],
  },
  {
    text: "Which project excites you most?",
    options: ["Designing a power substation", "Building a smart sensor device", "Designing a 5G antenna array"],
  },
]

export function AssessmentPreview() {
  const { t } = useTranslations("test")

  return (
    <section id="assessment-preview" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <span className="self-start text-xs font-mono px-3 py-1 rounded-full border border-green-500/30 text-green-400 bg-green-500/10">
              {t("free")}
            </span>
            <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
              A test built for electrical engineering students
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              15 carefully designed questions that map your thinking style, interests, and work preferences to a ranked engineering track.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                { icon: Clock, label: "15 minutes at your own pace" },
                { icon: Shield, label: "No account needed — fully private" },
                { icon: CheckCircle2, label: "Ranked results for all 3 tracks" },
              ].map(({ icon: Icon, label }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-foreground flex-shrink-0" />
                  {label}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="self-start mt-2">
              <Link href="/test">{t("startBtn")}</Link>
            </Button>
          </div>

          {/* Right — visual mock */}
          <div className="flex flex-col gap-4">
            {/* Progress bar mock */}
            <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Question 2 of 15</span>
                <span>13% complete</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[13%] rounded-full bg-foreground transition-all" />
              </div>
            </div>

            {/* Sample questions */}
            {SAMPLE_QUESTIONS.map((q, qi) => (
              <div
                key={qi}
                className="rounded-xl border border-border/50 bg-secondary/30 p-5 flex flex-col gap-3"
              >
                <p className="text-sm font-medium">{q.text}</p>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm cursor-default transition-colors
                        ${
                          qi === 0 && oi === 1
                            ? "border-foreground/40 bg-foreground/5 text-foreground"
                            : "border-border/40 bg-transparent text-muted-foreground"
                        }`}
                    >
                      <span
                        className={`h-3.5 w-3.5 rounded-full border-2 flex-shrink-0
                          ${
                            qi === 0 && oi === 1
                              ? "border-foreground bg-foreground"
                              : "border-border"
                          }`}
                      />
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Locked question */}
            <div className="rounded-xl border border-border/30 bg-secondary/10 p-5 flex items-center gap-3 opacity-50">
              <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground">13 more questions...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
