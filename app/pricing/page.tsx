import { Button } from "@/components/ui/button"
import { CheckCircle2, Lock, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const tiers = [
  {
    name: "Free",
    price: "0",
    priceSub: "forever",
    description: "Start your assessment with no commitment.",
    cta: "Start Free Test",
    ctaHref: "/test",
    variant: "outline" as const,
    highlight: false,
    features: [
      { text: "Full 15-question career assessment", included: true },
      { text: "3 ranked track results with match scores", included: true },
      { text: "Profile summary and match overview", included: true },
      { text: "Track overview pages for all 3 tracks", included: true },
      { text: "Roadmap preview \u2014 first 30 days", included: true },
      { text: "Full recommendation reasoning", included: false },
      { text: "Full 90-day roadmap with tasks", included: false },
      { text: "Recorded preview sessions", included: false },
      { text: "Priority session booking", included: false },
    ],
  },
  {
    name: "Premium",
    price: "49",
    priceSub: "one-time",
    description: "Everything you need to make a confident, informed decision.",
    cta: "Get Premium",
    ctaHref: "/checkout",
    variant: "default" as const,
    highlight: true,
    features: [
      { text: "Full 15-question career assessment", included: true },
      { text: "3 ranked track results with match scores", included: true },
      { text: "Profile summary and match overview", included: true },
      { text: "Track overview pages for all 3 tracks", included: true },
      { text: "Roadmap preview \u2014 first 30 days", included: true },
      { text: "Full recommendation reasoning", included: true },
      { text: "Full 90-day roadmap with tasks", included: true },
      { text: "Recorded preview sessions", included: true },
      { text: "Priority session booking", included: true },
    ],
  },
  {
    name: "Live Session",
    price: "29",
    priceSub: "per session",
    description: "45 minutes 1:1 with a specialist in your matched track.",
    cta: "Browse Mentors",
    ctaHref: "/mentors",
    variant: "outline" as const,
    highlight: false,
    features: [
      { text: "45-minute live 1:1 video session", included: true },
      { text: "Choose session type: intro, decision, or clarification", included: true },
      { text: "Specialist matched to your top track", included: true },
      { text: "Session summary with key takeaways", included: true },
      { text: "Recommended next step after session", included: true },
      { text: "Book as many sessions as needed", included: true },
      { text: "No subscription required", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Is the assessment really free?",
    a: "Yes. The full 15-question assessment, all 3 ranked results with scores, and a 30-day roadmap preview are completely free. No credit card, no account required.",
  },
  {
    q: "What does Premium actually unlock?",
    a: "Premium unlocks the full reasoning behind your match (why you scored higher in one track vs another), the complete 90-day roadmap with tasks for your top track, and access to recorded preview sessions from specialists.",
  },
  {
    q: "Is Premium a subscription?",
    a: "No. Premium is a one-time payment of $49. You pay once and get permanent access to your results, reasoning, and full roadmap.",
  },
  {
    q: "What is a Live Session?",
    a: "A 45-minute 1:1 video call with a working engineer who specializes in your top-matched track. You choose the session type: track introduction, decision help (if you are stuck between tracks), or roadmap clarification.",
  },
  {
    q: "Do I need Premium before booking a session?",
    a: "No. You can book a Live Session independently. However, Premium users get priority booking and the mentor receives your full result reasoning before the session.",
  },
  {
    q: "Can I retake the assessment?",
    a: "Yes, at any time. The assessment is stored locally on your device and you can reset and retake it whenever you want.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl mb-4">
              Simple, honest pricing
            </h1>
            <p className="text-muted-foreground text-lg">
              Start for free. Upgrade when you are ready to go deeper.
              No subscriptions, no tricks.
            </p>
          </div>

          {/* Tier cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-20">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  tier.highlight
                    ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/5"
                    : "border-border/50 bg-secondary/20"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-accent text-accent-foreground px-3 py-1 rounded-full">
                      <Zap className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-base font-semibold font-mono">{tier.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-4xl font-mono font-bold">${tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.priceSub}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "" : "text-muted-foreground/40"}`}>
                        {feature.text}
                        {!feature.included && (
                          <span className="ml-2 text-[10px] font-mono text-muted-foreground/40 border border-border/30 rounded px-1">PRO</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.variant}
                  className={`w-full ${tier.variant === "outline" ? "bg-transparent" : ""}`}
                  asChild
                >
                  <Link href={tier.ctaHref}>
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* What premium includes callout */}
          <div className="rounded-xl border border-border/50 bg-secondary/20 p-8 mb-20">
            <h2 className="text-lg font-semibold font-mono mb-6">What Premium unlocks in detail</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Full recommendation reasoning",
                  description:
                    "Not just a score. A full explanation of why your answers point to a specific track \u2014 covering your work style, math preference, hardware comfort, and interest areas.",
                },
                {
                  title: "Complete 90-day roadmap",
                  description:
                    "The free plan shows the first 30 days. Premium unlocks days 31\u201390 with specific tasks, tools, and learning milestones for your matched track.",
                },
                {
                  title: "Recorded preview sessions",
                  description:
                    "Short recorded sessions from working engineers covering: what the first year looks like, common mistakes new engineers make, and how to position yourself for the job market.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold font-mono mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border/40 bg-secondary/20 p-6">
                  <h3 className="text-sm font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
