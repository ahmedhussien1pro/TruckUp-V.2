import type { Booking, Mentor, MentorSlot } from "./types"

/**
 * DUMMY IMPLEMENTATION.
 * Function signatures match the intended production API contract
 * (see docs/prd/04-mentors-booking.md). Swap the internals of each
 * function with real fetch()/server-action calls when the backend
 * is ready; consuming components should not need to change.
 */

const DUMMY_LATENCY_MS = 250

const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: { en: "Sara Ahmed", ar: "\u0633\u0627\u0631\u0629 \u0623\u062d\u0645\u062f" },
    title: { en: "Senior Security Engineer", ar: "\u0645\u0647\u0646\u062f\u0633\u0629 \u0623\u0645\u0646 \u0623\u0648\u0644\u0649" },
    trackIds: ["cybersecurity"],
    languages: ["ar", "en"],
    pricePerSessionCents: 30000,
    currency: "EGP",
    timezone: "Africa/Cairo",
    rating: 4.9,
    reviewsCount: 128,
    bio: {
      en: "10+ years in application security and penetration testing.",
      ar: "\u0623\u0643\u062b\u0631 \u0645\u0646 10 \u0633\u0646\u0648\u0627\u062a \u0641\u064a \u0623\u0645\u0627\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0642\u064a.",
    },
  },
  {
    id: "mentor-2",
    name: { en: "Omar Khaled", ar: "\u0639\u0645\u0631 \u062e\u0627\u0644\u062f" },
    title: { en: "Full-Stack Engineering Mentor", ar: "\u0645\u0631\u0634\u062f Full-Stack" },
    trackIds: ["web-development"],
    languages: ["ar", "en"],
    pricePerSessionCents: 25000,
    currency: "EGP",
    timezone: "Africa/Cairo",
    rating: 4.8,
    reviewsCount: 94,
    bio: {
      en: "Helps learners ship production-ready full-stack projects.",
      ar: "\u064a\u0633\u0627\u0639\u062f \u0627\u0644\u0645\u062a\u0639\u0644\u0645\u064a\u0646 \u0639\u0644\u0649 \u0628\u0646\u0627\u0621 \u0645\u0634\u0627\u0631\u064a\u0639 \u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u0625\u0646\u062a\u0627\u062c.",
    },
  },
]

const slots: MentorSlot[] = Array.from({ length: 6 }).map((_, index) => {
  const start = new Date()
  start.setDate(start.getDate() + index + 1)
  start.setHours(10 + (index % 4), 0, 0, 0)
  const end = new Date(start.getTime() + 45 * 60 * 1000)
  return {
    id: `slot-${index + 1}`,
    mentorId: index % 2 === 0 ? "mentor-1" : "mentor-2",
    startsAtIso: start.toISOString(),
    endsAtIso: end.toISOString(),
    status: "available",
  }
})

const bookings: Booking[] = []

const delay = () => new Promise((resolve) => setTimeout(resolve, DUMMY_LATENCY_MS))

export async function listMentors(): Promise<Mentor[]> {
  await delay()
  return mentors
}

export async function getMentorSlots(mentorId: string): Promise<MentorSlot[]> {
  await delay()
  return slots.filter((slot) => slot.mentorId === mentorId && slot.status === "available")
}

export async function createBooking(input: { mentorId: string; slotId: string; learnerName: string }): Promise<Booking> {
  await delay()
  const slot = slots.find((item) => item.id === input.slotId)
  if (!slot || slot.status !== "available") {
    throw new Error("SLOT_UNAVAILABLE")
  }
  slot.status = "held"
  const booking: Booking = {
    id: `booking-${bookings.length + 1}`,
    mentorId: input.mentorId,
    slotId: input.slotId,
    learnerName: input.learnerName,
    status: "confirmed",
    createdAtIso: new Date().toISOString(),
  }
  slot.status = "booked"
  bookings.push(booking)
  return booking
}

export async function listBookings(): Promise<Booking[]> {
  await delay()
  return bookings
}
