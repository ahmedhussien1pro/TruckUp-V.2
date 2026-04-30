import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="mx-auto max-w-md px-4 text-center">
          {/* Grid background */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-2xl [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]" />
            <div className="relative py-12">
              <span className="text-[80px] font-mono font-bold text-border/20 leading-none">404</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl border border-border/50 bg-secondary/50">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-semibold font-mono mb-2">Page not found</h1>
          <p className="text-sm text-muted-foreground mb-8">
            This page does not exist or was moved. Your journey is still on track.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">
                Back to home <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="bg-transparent" asChild>
              <Link href="/test">Start Assessment</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
