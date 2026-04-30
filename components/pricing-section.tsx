import { Button } from "@/components/ui/button"
import { CheckCircle2, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Start your assessment with no commitment.",
    cta: "Start Free Test",
    ctaHref: "/test",
    variant: "outline" as const,
    highlight: false,
    features: [
      { text: "Full 15-question career assessment", included: true },
      { text: "3 ranked track results with match scores", included: true },
      { text: "Track overview pages", included: true },
      { text: "Roadmap preview — first 30 days", included: true },
      { text: "Full recommendation reasoning", included: false },
      { text: "Full 90-day roadmap", included: false },
      { text: "Recorded preview sessions", included: false },
      { text: "Priority session booking", included: false },
    ],
  },
  {
    name: "Premium",
    price: "49",
    description: "Everything you need to make a confident decision.",
    cta: "Upgrade to Premium",
    ctaHref: "/pricing",
    variant: "default" as const,
    highlight: true,
    features: [
      { text: "Full 15-question career assessment", included: true },
      { text: "3 ranked track results with match scores", included: true },
      { text: "Track overview pages", included: true },
      { text: "Roadmap preview — first 30 days", included: true },
      { text: "Full recommendation reasoning", included: true },
      { text: "Full 90-day roadmap", included: true },
      { text: "Recorded preview sessions", included: true },
      { text: "Priority session booking", included: true },
    ],
  },
  {
    name: "Live Session",
    price: "29",
    priceSub: "per session",
    description: "1:1 with a specialist in your matched track.",
    cta: "Browse Mentors",
    ctaHref: "/mentors",
    variant: "outline" as const,
    highlight: false,
    features: [
      { text: "45-minute live 1:1 session", included: true },
      { text: "Choose session type: intro, decision, or clarification", included: true },
      { text: "Specialist in your top-matched track", included: true },
      { text: "Session summary with key takeaways", included: true },
      { text: "Recommended next step after session", included: true },
      { text: "Book as many sessions as needed", included: true },
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start for free. Upgrade when you are ready to go deeper.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                  <span className="text-[11px] font-mono bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-semibold font-mono">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-mono font-bold">${tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.priceSub ?? "one-time"}</span>
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
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.variant} className={`w-full ${tier.variant === "outline" ? "bg-transparent" : ""}`} asChild>
                <Link href={tier.ctaHref}>
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
