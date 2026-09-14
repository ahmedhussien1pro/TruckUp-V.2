import type { Plan, Subscription } from "./types"

/**
 * DUMMY IMPLEMENTATION. See docs/prd/05-subscriptions-payments.md for the
 * real, server-authoritative contract this will be replaced with.
 */

const DUMMY_LATENCY_MS = 200
const delay = () => new Promise((resolve) => setTimeout(resolve, DUMMY_LATENCY_MS))

const plans: Plan[] = [
  {
    id: "free",
    name: { en: "Free", ar: "\u0645\u062c\u0627\u0646\u064a" },
    priceCents: 0,
    currency: "EGP",
    interval: "month",
    features: [
      { en: "Career assessment", ar: "\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0647\u0646\u064a" },
      { en: "Basic roadmap steps", ar: "\u062e\u0637\u0648\u0627\u062a \u0645\u062d\u062f\u0648\u062f\u0629 \u0645\u0646 \u0627\u0644\u062e\u0631\u064a\u0637\u0629" },
    ],
  },
  {
    id: "pro",
    name: { en: "Pro", ar: "\u0628\u0631\u0648" },
    priceCents: 19900,
    currency: "EGP",
    interval: "month",
    isPopular: true,
    features: [
      { en: "Full roadmap access", ar: "\u0648\u0635\u0648\u0644 \u0643\u0627\u0645\u0644 \u0644\u0644\u062e\u0631\u064a\u0637\u0629" },
      { en: "Mentor sessions discount", ar: "\u062e\u0635\u0645 \u0639\u0644\u0649 \u062c\u0644\u0633\u0627\u062a \u0627\u0644\u0645\u0631\u0634\u062f\u064a\u0646" },
    ],
  },
]

let currentSubscription: Subscription = { planId: null, status: "none", currentPeriodEndIso: null }

export async function listPlans(): Promise<Plan[]> {
  await delay()
  return plans
}

export async function getSubscription(): Promise<Subscription> {
  await delay()
  return currentSubscription
}

export async function subscribeToPlan(planId: string): Promise<Subscription> {
  await delay()
  const plan = plans.find((item) => item.id === planId)
  if (!plan) throw new Error("PLAN_NOT_FOUND")
  const periodEnd = new Date()
  periodEnd.setMonth(periodEnd.getMonth() + 1)
  currentSubscription = { planId: plan.id, status: "active", currentPeriodEndIso: periodEnd.toISOString() }
  return currentSubscription
}

export async function cancelSubscription(): Promise<Subscription> {
  await delay()
  currentSubscription = { ...currentSubscription, status: "cancelled" }
  return currentSubscription
}
