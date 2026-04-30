"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RotateCcw, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-red-500/30 bg-red-500/5 mx-auto mb-6">
          <AlertTriangle className="h-6 w-6 text-red-400" />
        </div>

        <h1 className="text-xl font-semibold font-mono mb-2">Something went wrong</h1>
        <p className="text-sm text-muted-foreground mb-2">
          An unexpected error occurred. Your progress is saved locally.
        </p>
        {error.digest && (
          <p className="text-[11px] font-mono text-muted-foreground/50 mb-8">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button variant="outline" className="bg-transparent" asChild>
            <Link href="/">
              Go home <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
