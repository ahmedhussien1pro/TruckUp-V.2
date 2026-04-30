# TrackUp — Next.js Architecture Reference

## 1. Goal

Build TrackUp as a **Next.js app** that is:
- easy to extend
- clear for AI generation
- clear for any future developer
- structured around the product flow, not around random UI pages

TrackUp must stay a **career guidance product**, not a course platform.

---

## 2. Core Tech Decision

### Required Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Server Components where possible
- Server Actions or Route Handlers for write operations
- Database layer for persistence
- Auth layer only if needed for saving progress, bookings, and paid sessions

### Recommended Add-ons
- Prisma or Drizzle for DB access
- Zod for validation
- React Hook Form for interactive forms
- Zustand or Context only if client state becomes complex

---

## 3. Product Route Map

### Public Routes
- `/` → Landing page
- `/test` → Initial assessment
- `/results` → Top 3 track results
- `/tracks` → Track library
- `/tracks/[slug]` → Track details page
- `/tracks/[slug]/preview` → Recorded session preview
- `/roadmap/[slug]` → Roadmap page
- `/book/[mentorId]` → Live session booking flow
- `/pricing` → Monetization page
- `/about` → Product explanation
- `/faq` → Common questions

### Authenticated Routes
- `/dashboard` → User overview
- `/dashboard/progress` → Progress and history
- `/dashboard/bookings` → Session bookings
- `/dashboard/insights` → Premium explanations
- `/dashboard/settings` → Account settings

### Admin / Internal Routes
- `/admin` → Admin overview
- `/admin/tracks` → Track management
- `/admin/questions` → Test question management
- `/admin/mentors` → Mentor management
- `/admin/bookings` → Booking management
- `/admin/partners` → Affiliate / partner tracking

---

## 4. App Folder Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css

  (marketing)/
    about/page.tsx
    faq/page.tsx
    pricing/page.tsx

  test/
    page.tsx
    questions/[step]/page.tsx
    result/page.tsx

  tracks/
    page.tsx
    [slug]/page.tsx
    [slug]/preview/page.tsx

  roadmap/
    [slug]/page.tsx

  book/
    [mentorId]/page.tsx
    success/page.tsx

  dashboard/
    page.tsx
    progress/page.tsx
    bookings/page.tsx
    insights/page.tsx
    settings/page.tsx

  admin/
    page.tsx
    tracks/page.tsx
    questions/page.tsx
    mentors/page.tsx
    bookings/page.tsx
    partners/page.tsx

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
  db/
  auth/
  validation/
  scoring/
  recommendations/
  tracks/
  mentors/
  bookings/
  payments/
  analytics/

types/
  track.ts
  quiz.ts
  mentor.ts
  booking.ts
  user.ts
```

---

## 5. Page Responsibilities

### 5.1 Landing Page
Purpose:
- explain TrackUp in one sentence
- show the main value
- push user to start the test

Must contain:
- hero section
- short problem statement
- how it works
- trust / credibility section
- primary CTA: `Start Test`

Must NOT contain:
- heavy technical details
- full track catalog upfront
- long marketing copy

---

### 5.2 Test Page
Purpose:
- collect user profile and preference data

Must contain:
- progress indicator
- one question per step or small grouped steps
- clean navigation
- save answer behavior

Must NOT contain:
- unrelated content
- long explanations on each question
- too many choices per screen

---

### 5.3 Results Page
Purpose:
- return exactly 3 recommended tracks

Must contain:
- ranked recommendations
- reason for each recommendation
- confidence level
- next action CTA

Must NOT contain:
- more than 3 main tracks in the primary view
- generic “you may like this too” noise
- unclear ranking logic

---

### 5.4 Track Details Page
Purpose:
- explain one track clearly

Must contain:
- what the track is
- who it fits
- what it is not
- skills required
- sample work
- entry path
- preview CTA
- booking CTA

---

### 5.5 Recorded Preview Page
Purpose:
- let the user “try the track” before committing

Must contain:
- session title
- session duration
- speaker info
- summary points
- watch action

Must NOT contain:
- full course structure
- full curriculum
- unrelated clips

---

### 5.6 Roadmap Page
Purpose:
- provide a clear learning path after decision

Must contain:
- first 30 days
- first 90 days
- core skills
- tools
- external resources
- suggested order

Must NOT contain:
- too many resource links
- random recommendations
- hidden ambiguity about the path

---

### 5.7 Booking Page
Purpose:
- allow booking a live session with a mentor

Must contain:
- mentor details
- time slots
- session purpose
- price
- booking confirmation flow

---

## 6. Component Architecture

### 6.1 Shared Layout Components
- `Navbar`
- `Footer`
- `PageHeader`
- `SectionTitle`
- `PrimaryCTA`
- `SecondaryCTA`
- `Breadcrumbs`

### 6.2 Landing Components
- `Hero`
- `ProblemSection`
- `HowItWorks`
- `TrackHighlights`
- `SocialProof`
- `CTASection`

### 6.3 Test Components
- `QuestionCard`
- `OptionList`
- `ProgressBar`
- `StepNavigator`
- `TestSummary`

### 6.4 Results Components
- `RankedTrackCard`
- `RecommendationReason`
- `MatchScore`
- `NextStepPanel`

### 6.5 Track Components
- `TrackOverview`
- `TrackFitBox`
- `TrackNotFor`
- `SkillList`
- `PreviewSessionsList`
- `RoadmapPreview`

### 6.6 Booking Components
- `MentorCard`
- `AvailableSlots`
- `BookingForm`
- `PaymentSummary`
- `BookingSuccessPanel`

### 6.7 Dashboard Components
- `ProgressOverview`
- `SavedTracks`
- `UpcomingBookings`
- `InsightCard`

---

## 7. Server vs Client Rules

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
- filters
- dynamic slot selection
- any live state or animations that need interactivity

### Use Server Actions / Route Handlers for:
- saving test answers
- generating results
- booking a session
- updating progress
- subscribing to premium features

---

## 8. Data Flow

### Test Flow
1. User starts assessment
2. Answers are stored step by step or at the end
3. Scoring engine calculates track fit
4. Results page displays top 3 tracks
5. User can continue to track preview or roadmap

### Booking Flow
1. User chooses a mentor
2. User selects a slot
3. Payment or reservation is confirmed
4. Booking is saved
5. Confirmation is shown

### Premium Insight Flow
1. User reaches results
2. Summary is visible for free
3. Full explanation is gated
4. User unlocks advanced reasoning

---

## 9. Recommendation Logic Boundary

The app must only:
- recommend tracks based on stored answers
- explain why a track was recommended
- surface next steps

The app must NOT:
- pretend to teach the entire field
- give misleading career guarantees
- overload the user with unnecessary options

---

## 10. State Strategy

### Global State
Use sparingly for:
- authenticated user
- current test progress
- booking status
- pricing tier

### Local State
Use for:
- current question
- modal states
- slot selection
- tab switching
- preview expansion

### Persistent State
Store in DB:
- answers
- results
- saved tracks
- bookings
- premium unlocks
- follow-up status

---

## 11. Validation Rules

All forms and actions must use:
- typed schemas
- input validation
- safe error handling
- clear loading states

No silent failures.

---

## 12. Naming Rules

Use consistent names:
- `track`
- `mentor`
- `assessment`
- `result`
- `roadmap`
- `booking`
- `insight`

Avoid vague labels such as:
- `stuff`
- `data`
- `item`
- `info`

---

## 13. MVP Build Order

### Phase 1
- Landing page
- Assessment flow
- Result page
- Track details pages
- Roadmap pages

### Phase 2
- Recorded preview sessions
- Mentor booking
- Authentication
- Progress saving

### Phase 3
- Premium insights
- Admin panel
- Affiliate tracking
- Follow-up system

---

## 14. Product Guardrails

### Keep
- simple flow
- one purpose per page
- clear decision path
- track-focused structure

### Avoid
- turning TrackUp into a course website
- adding too many navigation levels
- mixing marketing and user flow badly
- building everything before the core flow works

---

## 15. Reference Principle

Any developer or AI should follow this rule:

> Build TrackUp around the decision journey first, then add monetization and support layers on top.

That is the architecture rule for every future change.
