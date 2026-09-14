export type Locale = "en" | "ar"

export type LocalizedText = {
  en: string
  ar: string
}

export type Mentor = {
  id: string
  name: LocalizedText
  title: LocalizedText
  trackIds: string[]
  languages: Locale[]
  pricePerSessionCents: number
  currency: "EGP" | "USD"
  timezone: string
  rating: number
  reviewsCount: number
  avatarUrl?: string
  bio: LocalizedText
}

export type MentorSlot = {
  id: string
  mentorId: string
  startsAtIso: string
  endsAtIso: string
  status: "available" | "held" | "booked"
}

export type BookingStatus =
  | "draft"
  | "held"
  | "pending_payment"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "expired"
  | "no_show"

export type Booking = {
  id: string
  mentorId: string
  slotId: string
  learnerName: string
  status: BookingStatus
  createdAtIso: string
}

export type Plan = {
  id: string
  name: LocalizedText
  priceCents: number
  currency: "EGP" | "USD"
  interval: "month" | "year"
  features: LocalizedText[]
  isPopular?: boolean
}

export type SubscriptionStatus = "none" | "active" | "past_due" | "cancelled"

export type Subscription = {
  planId: string | null
  status: SubscriptionStatus
  currentPeriodEndIso: string | null
}

export type NotificationItem = {
  id: string
  title: LocalizedText
  body: LocalizedText
  createdAtIso: string
  read: boolean
  kind: "system" | "assessment" | "roadmap" | "booking" | "billing"
}

export type StepProgressState = {
  roadmapId: string
  stepId: string
  status: "not_started" | "in_progress" | "completed"
  updatedAtIso: string
}

export type EnrollmentState = {
  roadmapId: string
  enrolledAtIso: string
  steps: StepProgressState[]
}
