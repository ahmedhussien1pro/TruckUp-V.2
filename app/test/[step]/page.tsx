"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { questions, TOTAL_QUESTIONS } from "@/lib/assessment-data"
import { Navbar } from "@/components/navbar"

export default function TestStepPage() {
  const params = useParams()
  const router = useRouter()
  const stepNum = parseInt(params.step as string)

  const question = questions.find((q) => q.id === stepNum)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem("trackup_answers")
      if (saved) {
        const parsed = JSON.parse(saved) as Record<number, string>
        setAnswers(parsed)
        if (parsed[stepNum]) setSelectedOption(parsed[stepNum])
      }
    } catch (_) {}
  }, [stepNum])

  if (!mounted || !question || isNaN(stepNum)) return null

  const progress = Math.round((stepNum / TOTAL_QUESTIONS) * 100)

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId)
    const updated = { ...answers, [stepNum]: optionId }
    setAnswers(updated)
    try {
      localStorage.setItem("trackup_answers", JSON.stringify(updated))
    } catch (_) {}
  }

  const handleNext = () => {
    if (!selectedOption) return
    if (stepNum >= TOTAL_QUESTIONS) {
      router.push("/test/result")
    } else {
      router.push(`/test/${stepNum + 1}`)
    }
  }

  const handleBack = () => {
    if (stepNum > 1) {
      router.push(`/test/${stepNum - 1}`)
    } else {
      router.push("/test")
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm text-muted-foreground font-mono">
                Question {stepNum} of {TOTAL_QUESTIONS}
              </span>
              <span className="text-sm font-mono text-muted-foreground">{progress}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step dots */}
            <div className="flex gap-1 mt-3">
              {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
                    i + 1 < stepNum
                      ? "bg-accent"
                      : i + 1 === stepNum
                      ? "bg-accent/60"
                      : "bg-border/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question card */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-8 mb-6">
            <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mb-4">
              {question.category.replace(/_/g, " ")}
            </p>
            <h2 className="text-xl font-semibold leading-relaxed mb-8">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-150 ${
                    selectedOption === option.id
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border/40 bg-secondary/30 text-muted-foreground hover:border-border/70 hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 h-4 w-4 rounded-full border-2 transition-all duration-150 ${
                        selectedOption === option.id
                          ? "border-accent bg-accent"
                          : "border-border/60"
                      }`}
                    />
                    <span className="text-sm leading-relaxed">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <Button
              size="sm"
              disabled={!selectedOption}
              onClick={handleNext}
              className="min-w-[130px]"
            >
              {stepNum >= TOTAL_QUESTIONS ? "See My Results" : "Next Question"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Answered count */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            {Object.keys(answers).length} of {TOTAL_QUESTIONS} answered
          </p>
        </div>
      </main>
    </>
  )
}
