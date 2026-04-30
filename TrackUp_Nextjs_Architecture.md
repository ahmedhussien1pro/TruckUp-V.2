# TrackUp — Next.js Architecture Reference

## 1. Goal

Build TrackUp as a **Next.js app** that is:
- easy to extend
- clear for AI generation
- clear for any future developer
- structured around the product flow, not around random UI pages

TrackUp must stay a **career decision-guidance product**, not a course platform.

---

## 2. Core Tech Decision

### Required Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Server Components where possible
- Server Actions or Route Handlers for write operations
- Database layer for persistence (Prisma recommended)
- Auth layer for saving progress, bookings, and paid sessions

### Recommended Add-ons
- Prisma for DB access
- Zod for validation
- React Hook Form for interactive forms
- Zustand or Context only if client state becomes complex

---

## 3. Product Route Map

### Public Routes
- `/` → Landing page
- `/test` → Career assessment
- `/test/[step]` → Single step inside the assessment
- `/results` → Top 3 track results
- `/tracks` → Track overview (all 3 tracks)
- `/tracks/[slug]` → Track details page
- `/tracks/[slug]/preview` → Recorded session preview (premium)
- `/roadmap/[slug]` → Roadmap page (free: 30 days / premium: full)
- `/mentors` → Mentor listing
- `/book/[mentorId]` → Live session booking flow
- `/pricing` → Monetization page
- `/about` → Product explanation
- `/faq` → Common questions

### Authenticated Routes
- `/dashboard` → User journey overview
- `/dashboard/progress` → Progress and completed steps
- `/dashboard/bookings` → Session bookings
- `/dashboard/insights` → Premium reasoning and explanations
- `/dashboard/settings` → Account settings

### Admin Routes (Phase 3 only — not MVP)
- `/admin` → Admin overview
- `/admin/tracks` → Track content management
- `/admin/questions` → Assessment question management
- `/admin/mentors` → Mentor management
- `/admin/bookings` → Booking management

---

## 4. App Folder Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  middleware.ts              ← protects /dashboard and /admin routes

  (marketing)/
    about/page.tsx
    faq/page.tsx
    pricing/page.tsx

  test/
    page.tsx
    [step]/page.tsx
    result/page.tsx

  tracks/
    page.tsx
    [slug]/page.tsx
    [slug]/preview/page.tsx

  roadmap/
    [slug]/page.tsx

  mentors/
    page.tsx

  book/
    [mentorId]/page.tsx
    success/page.tsx

  dashboard/
    page.tsx
    progress/page.tsx
    bookings/page.tsx
    insights/page.tsx
    settings/page.tsx

  admin/                     ← Phase 3 only
    page.tsx
    tracks/page.tsx
    questions/page.tsx
    mentors/page.tsx
    bookings/page.tsx

components/
  layout/
  ui/
  landing/
  test/
  results/
  tracks/
  roadmap/
  booking/
  dashboard/
  admin/

lib/
  db/              ← Prisma client
  auth/            ← Auth helpers
  validation/      ← Zod schemas
  scoring/         ← Assessment scoring engine
  recommendations/ ← Track recommendation logic

types/
  track.ts
  assessment.ts
  mentor.ts
  booking.ts
  user.ts
  recommendation.ts
```

---

## 5. Middleware

Create `app/middleware.ts` to protect authenticated routes.

```ts
// app/middleware.ts
export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}
```

This ensures `/dashboard` and `/admin` are only accessible to authenticated users.

---

## 6. Page Responsibilities

### 6.1 Landing Page `/`
Purpose:
- explain TrackUp in one sentence
- show the main value for engineering students
- push user to start the test

Must contain:
- hero section with one clear headline
- short problem statement
- how it works (4 steps)
- track highlights (Power / Embedded / Communications)
- pricing teaser (free test + premium unlock)
- primary CTA: `Start Test`

Must NOT contain:
- heavy technical details
- full track catalog
- long marketing copy

---

### 6.2 Test Page `/test`
Purpose:
- collect user preferences and profile data

Must contain:
- progress indicator (step X of Y)
- one question per screen
- multiple-choice only
- save answer behavior per step
- final submit action

Must NOT contain:
- unrelated content
- long explanations per question
- too many choices per screen (max 4)

---

### 6.3 Results Page `/results`
Purpose:
- return exactly 3 ranked track recommendations

Must contain:
- ranked tracks with match score
- short reason per track
- free summary (always visible)
- premium full reasoning (locked behind upgrade)
- CTA to pricing page
- CTA to explore top track

Must NOT contain:
- more than 3 tracks
- unclear ranking logic
- generic motivational text

---

### 6.4 Pricing Page `/pricing`
Purpose:
- show clearly what is free and what is paid
- convert free users to premium
- surface session booking as an additional paid layer

Must contain:
- Free tier contents
- Premium tier contents with upgrade CTA
- Paid session card with price and booking CTA

Must NOT contain:
- fake urgency or dark patterns
- team or enterprise plans
- irrelevant SaaS pricing patterns

---

### 6.5 Track Details Page `/tracks/[slug]`
Purpose:
- explain one specific track in depth

Must contain:
- what the track is
- who it fits
- what it is not
- tools and skills required
- recorded session preview CTA (premium)
- booking CTA (paid)

---

### 6.6 Roadmap Page `/roadmap/[slug]`
Purpose:
- provide a clear learning path after track decision

Must contain:
- first 30 days (free)
- first 90 days (premium gate)
- core skills in order
- external resources (free + paid)
- upgrade CTA to unlock full roadmap

---

### 6.7 Mentors Page `/mentors`
Purpose:
- list available mentors by track

Must contain:
- mentor cards (name, track, short bio)
- session type offered
- booking CTA per mentor

---

### 6.8 Booking Page `/book/[mentorId]`
Purpose:
- allow booking a live paid session with a mentor

Must contain:
- mentor details
- session type selection
- time slots
- price display
- booking confirmation flow

---

### 6.9 Dashboard `/dashboard`
Purpose:
- show the student exactly where they are in their journey

Must contain:
- journey progress bar (Test → Results → Track → Roadmap → Sessions)
- current track (if decided)
- next recommended action (one clear CTA)
- upcoming bookings
- tier status (Free / Premium)

Must NOT contain:
- course progress tracking
- social feed
- complex analytics

---

## 7. Component Architecture

### 7.1 Shared Layout
- `Navbar`
- `Footer`
- `PageHeader`
- `SectionTitle`
- `PrimaryCTA`
- `SecondaryCTA`
- `PremiumGate` ← wraps any premium-locked content
- `JourneyProgressBar` ← used in dashboard and navbar

### 7.2 Landing Components
- `Hero`
- `ProblemSection`
- `HowItWorks`
- `TrackHighlights`
- `PricingTeaser`
- `CTASection`

### 7.3 Test Components
- `QuestionCard`
- `OptionList`
- `ProgressBar`
- `StepNavigator`
- `TestSummary`

### 7.4 Results Components
- `RankedTrackCard`
- `RecommendationReason` ← premium locked
- `MatchScore`
- `NextStepPanel`
- `UpgradeCTA`

### 7.5 Track Components
- `TrackOverview`
- `TrackFitBox`
- `TrackNotFor`
- `SkillList`
- `PreviewSessionsList` ← premium locked
- `RoadmapPreview`

### 7.6 Booking Components
- `MentorCard`
- `AvailableSlots`
- `BookingForm`
- `PaymentSummary`
- `BookingSuccessPanel`

### 7.7 Dashboard Components
- `JourneyOverview`
- `NextActionCard`
- `UpcomingBookings`
- `TierStatusBadge`
- `InsightCard` ← premium locked

---

## 8. Server vs Client Rules

### Prefer Server Components for:
- landing content
- track pages
- roadmap pages
- mentor listings
- static sections
- initial data loading

### Use Client Components for:
- test interaction
- booking forms
- slot selection
- any live state or animations
- progress bar updates

### Use Server Actions / Route Handlers for:
- saving test answers
- generating results and recommendation
- booking a session
- updating progress
- premium upgrade

---

## 9. Data Flow

### Test Flow
1. User starts assessment
2. Answers saved step by step
3. Scoring engine calculates track fit per track
4. Results page displays top 3 ranked tracks
5. Free summary shown — full reasoning gated
6. User continues to pricing or track details

### Premium Unlock Flow
1. User reaches results or roadmap
2. Free preview is visible
3. Premium content is locked with upgrade CTA
4. User upgrades — content unlocks

### Booking Flow
1. User browses mentors
2. Selects session type and slot
3. Payment is confirmed
4. Booking is saved
5. Confirmation shown and saved to dashboard

---

## 10. State Strategy

### Global State
Use sparingly for:
- authenticated user
- current test step and answers
- pricing tier
- booking status

### Local State
Use for:
- current question
- modal states
- slot selection
- tab switching

### Persistent State
Store in DB:
- answers and attempts
- recommendation results
- saved tracks
- bookings
- premium status
- validation test results
- follow-up check-ins

---

## 11. Validation Rules

All forms and actions must use:
- Zod typed schemas
- input validation before any DB write
- safe error handling with user-facing messages
- clear loading states

No silent failures.

---

## 12. Naming Rules

Use consistent names everywhere:
- `track`
- `mentor`
- `assessment`
- `attempt`
- `result`
- `recommendation`
- `roadmap`
- `booking`
- `insight`
- `validation`

Avoid:
- `stuff`, `data`, `item`, `info`, `thing`

---

## 13. MVP Build Order

### Phase 1 — Core Decision Flow
- Landing page
- Assessment flow (test + results)
- Track details pages (Power / Embedded / Communications)
- Roadmap pages (free preview)
- Pricing page

### Phase 2 — Engagement and Monetization
- Premium gating (results reasoning + full roadmap)
- Recorded preview sessions
- Mentor listing
- Mentor booking (paid)
- Authentication
- Dashboard and progress tracking

### Phase 3 — Operations and Growth
- Validation test
- Admin panel
- Follow-up system
- Affiliate / partner tracking

---

## 14. Product Guardrails

### Keep
- simple flow from Landing to Decision
- one clear purpose per page
- free/premium split visible everywhere it matters
- track-focused structure (Power, Embedded, Communications only)

### Avoid
- turning TrackUp into a course website
- adding navigation levels that break the journey
- mixing marketing copy and user flow
- building admin or analytics before the core flow works
- adding a 4th track without explicit product decision

---

## 15. Reference Principle

> Build TrackUp around the student's decision journey first.  
> Add monetization and support layers on top of that foundation.  
> Every page must answer one of these questions for the student:  
> **Where am I? What did I complete? What should I do next?**
