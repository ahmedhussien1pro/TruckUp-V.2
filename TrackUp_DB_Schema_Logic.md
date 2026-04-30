# TrackUp — DB Schema & Assessment Logic Reference

## 1. Purpose

This document defines the minimum database structure and assessment logic needed for TrackUp.

TrackUp is a career guidance and validation platform for electrical engineering students.  
It is not a course platform.

This document is intended to be used as:
- a reference for developers
- a reference for AI-generated implementation
- a stable product specification

---

## 2. Product Scope Covered Here

This document covers only:
- user identity and roles
- assessment and test flow
- answer storage
- scoring logic
- track recommendation
- recorded session access (premium)
- live session booking (paid)
- validation test
- roadmap display (free preview + premium full)
- follow-up tracking
- partner referral tracking

This document does not define:
- course delivery
- LMS functionality
- community or chat system
- full payment gateway logic
- partner dashboard logic

---

## 3. Approved Tracks

TrackUp supports exactly 3 tracks. No others should be added without a product decision:

1. Power Systems (slug: `power`)
2. Embedded Systems (slug: `embedded`)
3. Communications Systems (slug: `communications`)

---

## 4. Core Entities

TrackUp is built around these core entities:

1. User
2. Mentor
3. Assessment
4. Question
5. QuestionOption
6. Attempt
7. Answer
8. Track
9. TrackScore
10. Recommendation
11. RecordedSession
12. LiveSession
13. Booking
14. ValidationTest
15. RoadmapItem
16. FollowUp
17. PartnerReferral

---

## 5. Recommended Database Model

### 5.1 User

Represents anyone using the platform (student, mentor, or admin).

Fields:
- id
- fullName
- email
- passwordHash (or external auth id)
- role: `student` | `mentor` | `admin`
- universityName (optional)
- facultyName (optional)
- academicYear (optional)
- preferredLanguage: `ar` | `en`
- tier: `free` | `premium`
- createdAt
- updatedAt

Notes:
- Role determines access. Mentors are Users with role `mentor`.
- A student may complete multiple assessment attempts.
- A student may book multiple sessions.
- Tier controls access to premium content.

---

### 5.2 Mentor

Represents a specialist who offers recorded and live sessions.

Fields:
- id
- userId (foreign key → User with role `mentor`)
- trackId (foreign key → Track)
- bio
- profileImageUrl (optional)
- sessionRate (price per session)
- yearsOfExperience
- isActive
- createdAt
- updatedAt

Notes:
- A mentor is always linked to a User account.
- A mentor specializes in one track only for MVP.
- Admin controls mentor activation.

---

### 5.3 Assessment

Represents a versioned test definition.

Fields:
- id
- title
- version (integer, starts at 1)
- status: `draft` | `active` | `archived`
- description
- createdAt
- updatedAt

Notes:
- Only one assessment can be `active` at a time.
- Versioning is critical. The recommendation must always know which version produced it.
- Archived assessments are kept for historical record.

---

### 5.4 Question

Represents one question inside an assessment.

Fields:
- id
- assessmentId
- orderIndex
- text
- questionType: `single_choice` | `scale` | `binary`
- category
- weight: `high` | `medium` | `low`
- isActive
- createdAt
- updatedAt

category values:
- `hardware_preference`
- `power_interest`
- `embedded_interest`
- `communications_interest`
- `practical_style`
- `theory_style`
- `logic_strength`
- `math_comfort`
- `teamwork_style`
- `independent_work_style`

Notes:
- `weight` controls how strongly this question influences the final score.
- Keep questions focused on the 3 approved tracks only.

---

### 5.5 QuestionOption

Represents one selectable answer for a question.

Fields:
- id
- questionId
- label (display text)
- value (machine-readable key)
- orderIndex
- trackScores (JSON) — example: `{ "power": 2, "embedded": 1, "communications": 0 }`
- createdAt
- updatedAt

Notes:
- `trackScores` is the scoring map. Every option must define a score contribution for all 3 tracks.
- Scores are integers. Higher means stronger signal toward that track.
- This field allows the scoring engine to remain stateless and data-driven.

---

### 5.6 Attempt

Represents one full user run of an assessment.

Fields:
- id
- userId
- assessmentId
- assessmentVersion (mirrors Assessment.version at time of attempt)
- status: `in_progress` | `completed` | `abandoned`
- startedAt
- completedAt
- createdAt
- updatedAt

Notes:
- Every answer must belong to one attempt.
- Recommendation results must be tied to a specific attempt.
- `assessmentVersion` preserves traceability even if the Assessment is updated later.

---

### 5.7 Answer

Represents one answer selected by the user for one question.

Fields:
- id
- attemptId
- questionId
- optionId
- rawValue (stores the selected value or scale number)
- createdAt
- updatedAt

Notes:
- For MVP, keep answer types limited to `single_choice` and `scale`.
- `rawValue` is redundant storage for audit and debugging.

---

### 5.8 Track

Represents one of the 3 approved career tracks.

Fields:
- id
- slug: `power` | `embedded` | `communications`
- name
- shortDescription
- fullDescription
- trackType: `hardware` | `mixed`
- isActive
- createdAt
- updatedAt

Notes:
- Track is a specialization direction, not a course.
- There are exactly 3 tracks. Slug must be one of the 3 approved values.

---

### 5.9 TrackScore

Represents how well a user attempt matches each track.

Fields:
- id
- attemptId
- trackId
- rawScore (sum of option trackScores)
- normalizedScore (0–100)
- rank (1, 2, or 3)
- matchLevel: `high_match` | `medium_match` | `low_match`
- reasonSummary (human-readable explanation)
- createdAt
- updatedAt

Notes:
- One attempt produces exactly 3 TrackScore rows (one per track).
- Rank 1 = Best Match. All 3 ranks are always filled.
- If scores are very close between rank 1 and rank 2, mark as `needs_validation`.

---

### 5.10 Recommendation

Represents the final recommendation output shown to the user.

Fields:
- id
- attemptId
- assessmentVersion (mirrors the version used for this result)
- primaryTrackId
- secondaryTrackId
- tertiaryTrackId
- summary (short overall profile description)
- decisionStatus: `recommended` | `needs_validation` | `confirmed`
- createdAt
- updatedAt

Notes:
- This is the user-facing recommendation snapshot.
- `assessmentVersion` ensures that if the test changes, old results are still traceable.
- Do not recalculate silently. Any new calculation must create a new Recommendation row.

---

### 5.11 RecordedSession

Represents a short recorded preview session for a track.

Fields:
- id
- trackId
- title
- description
- videoUrl
- durationMinutes
- isBeginnnerFriendly
- isPremium (true = requires premium tier to watch)
- isActive
- createdAt
- updatedAt

Notes:
- These are NOT full courses. Max 5 sessions per track for MVP.
- Purpose: give the student a realistic feel for the field.
- Free users see the card and title but cannot play the video.

---

### 5.12 LiveSession

Represents a bookable live 1:1 mentorship session.

Fields:
- id
- trackId
- mentorId (foreign key → Mentor)
- title
- description
- sessionType: `introduction` | `decision_support` | `clarification` | `validation`
- price
- durationMinutes
- capacity (1 for 1:1 sessions)
- startAt
- endAt
- status: `available` | `booked_out` | `cancelled` | `completed`
- createdAt
- updatedAt

---

### 5.13 Booking

Represents a student's reservation for a live session.

Fields:
- id
- userId
- liveSessionId
- paymentStatus: `pending` | `paid` | `failed` | `refunded`
- bookingStatus: `reserved` | `confirmed` | `cancelled` | `completed`
- joinedAt (nullable)
- createdAt
- updatedAt

---

### 5.14 ValidationTest

Represents the confirmation test taken AFTER the student has explored a track.

Fields:
- id
- userId
- attemptId (the original career assessment attempt)
- trackId (the track being validated)
- status: `in_progress` | `completed`
- score
- result: `confirmed_track` | `confirmed_subtrack` | `needs_more_exploration`
- resultSummary
- createdAt
- updatedAt

Notes:
- This is NOT a repeat of the career assessment.
- This test confirms understanding and interest stability AFTER exposure to the track.
- It should reference the original attempt but not override it completely.

---

### 5.15 RoadmapItem

Represents one step inside a track roadmap.

Fields:
- id
- trackId
- phase: `first_30_days` | `first_90_days` | `foundation` | `practice` | `advanced`
- title
- description
- orderIndex
- resourceType: `video` | `article` | `book` | `course` | `project`
- resourceUrl
- isFree (true = visible to all users)
- isPremium (true = requires premium to unlock)
- createdAt
- updatedAt

Notes:
- `first_30_days` items must always have `isFree: true`.
- `first_90_days` and beyond require premium.
- Gating rule: premium gate hides the content but shows the title.

---

### 5.16 FollowUp

Represents a periodic progress check-in.

Fields:
- id
- userId
- trackId
- status: `on_track` | `falling_behind` | `just_starting`
- checkInDate
- notes (optional)
- createdAt
- updatedAt

Notes:
- Optional for Phase 1 MVP.
- Used later for engagement and retention.

---

### 5.17 PartnerReferral

Represents an affiliate or revenue-sharing tracking record.

Fields:
- id
- partnerName
- trackId
- refCode
- landingUrl
- commissionType: `flat` | `percentage`
- commissionValue
- isActive
- createdAt
- updatedAt

---

## 6. Relationship Map

### User
- has many Attempts
- has many Bookings
- has many ValidationTests
- has many FollowUps
- may have one Mentor profile (if role = `mentor`)

### Mentor
- belongs to one User
- belongs to one Track
- has many LiveSessions

### Assessment
- has many Questions
- has many Attempts

### Question
- belongs to one Assessment
- has many QuestionOptions

### Attempt
- belongs to one User
- belongs to one Assessment
- stores assessmentVersion at time of creation
- has many Answers
- has many TrackScores (exactly 3)
- has one Recommendation
- may have one ValidationTest

### Track
- has many TrackScores
- has many RecordedSessions
- has many LiveSessions (through Mentors)
- has many RoadmapItems
- has many PartnerReferrals

### LiveSession
- belongs to one Track
- belongs to one Mentor
- has many Bookings

---

## 7. Assessment Scoring Logic

The scoring must be deterministic, explainable, and versioned.

### 7.1 Core Goal

Estimate the student's fit with each of the 3 tracks:
- Power Systems
- Embedded Systems
- Communications Systems

### 7.2 How Scoring Works

1. For each answer, read `QuestionOption.trackScores`
2. Multiply the score values by the question's `weight` factor:
   - high = 3
   - medium = 2
   - low = 1
3. Accumulate scores per track across all answers
4. Normalize each track total to a 0–100 scale
5. Rank tracks 1 to 3
6. Assign `matchLevel` based on normalized score:
   - 70–100 → `high_match`
   - 40–69 → `medium_match`
   - 0–39 → `low_match`
7. If rank 1 and rank 2 normalized scores differ by less than 10 points → mark `decisionStatus: needs_validation`

### 7.3 Reason Generation

Reasons are derived from the strongest answer categories.

Example reason structures:
- "You showed strong interest in physical systems and power electronics."
- "Your answers suggest a preference for building and debugging embedded devices."
- "You showed consistent interest in signal processing and wireless systems."
- "Your scores were close — a validation session is recommended before committing."

### 7.4 Output Rules

Every completed attempt must produce:
- 3 TrackScore rows (one per track, ranked 1–3)
- 1 Recommendation row with top 3 tracks
- A summary of the student's overall profile
- A decisionStatus

---

## 8. Validation Test Logic

The Validation Test runs AFTER the student has:
- seen track details
- optionally watched recorded sessions
- optionally had a live session

### 8.1 Goal

Confirm whether the student:
- understands what the chosen track actually requires
- still feels aligned with it after real exposure
- can identify a sub-direction within the track
- is ready to start the roadmap

### 8.2 Validation Output

The validation test returns one of:
- `confirmed_track` → ready to follow the roadmap
- `confirmed_subtrack` → confirmed but needs a more specific sub-direction
- `needs_more_exploration` → should revisit another track or book a session

### 8.3 Validation Question Types

- Clarity of understanding about the track
- Interest stability after exposure
- Awareness of real daily tasks
- Comfort with the challenges mentioned
- Sub-track preference (where applicable)

### 8.4 Decision Logic

The final validation result is based on:
- Validation test score
- Original assessment TrackScore for this track
- Whether the student attended a live session

Do not override the original assessment result alone. The validation adds weight, not a full replacement.

---

## 9. Premium vs Free Gating Rules

| Content | Free | Premium |
|---|---|---|
| Full career assessment | Yes | Yes |
| Results summary (3 ranked tracks) | Yes | Yes |
| Full recommendation reasoning | No | Yes |
| Track overview page | Yes | Yes |
| Roadmap: first 30 days | Yes | Yes |
| Roadmap: full 90 days | No | Yes |
| Recorded session cards (title) | Yes | Yes |
| Recorded session playback | No | Yes |
| Live session booking | Paid | Paid |
| Validation test | Yes | Yes |
| Dashboard progress | Yes | Yes |

---

## 10. MVP Entity Priority

### Phase 1 — Must Have
- User
- Assessment
- Question
- QuestionOption
- Attempt
- Answer
- Track
- TrackScore
- Recommendation
- RoadmapItem

### Phase 2 — Add Next
- Mentor
- RecordedSession
- LiveSession
- Booking
- ValidationTest

### Phase 3 — Optional
- FollowUp
- PartnerReferral

### Never Add for MVP
- Community
- Messaging
- Advanced analytics
- AI chat advisor
- Course hosting
- Certificate system

---

## 11. Data Integrity Rules

1. An Attempt must belong to exactly one User and one Assessment.
2. An Attempt must store `assessmentVersion` at the time it is created.
3. An Answer must belong to exactly one Attempt and one Question.
4. TrackScore must always produce exactly 3 rows per Attempt (one per track).
5. Recommendation must store the exact `assessmentVersion` used.
6. A Booking must reference an existing LiveSession with status `available`.
7. A ValidationTest must reference a valid Attempt and an approved Track slug.
8. RoadmapItems with `isPremium: true` must never expose `resourceUrl` to free users.
9. A Mentor must always be linked to a User with role `mentor`.

---

## 12. API Behavior Reference

### Assessment
- `GET /assessments/active`
- `GET /assessments/:id/questions`

### Attempt
- `POST /attempts` — start a new attempt
- `PATCH /attempts/:id` — update status
- `POST /attempts/:id/answers` — save answers
- `POST /attempts/:id/complete` — trigger scoring

### Recommendation
- `GET /attempts/:id/recommendation`

### Tracks
- `GET /tracks` — returns all 3 active tracks
- `GET /tracks/:slug` — slug must be `power`, `embedded`, or `communications`

### Roadmap
- `GET /tracks/:slug/roadmap` — returns items based on user tier

### Recorded Sessions
- `GET /tracks/:slug/recorded-sessions` — returns cards; video URL gated by tier

### Mentors
- `GET /mentors` — list all active mentors
- `GET /mentors?track=embedded` — filter by track

### Live Sessions
- `GET /live-sessions` — available sessions
- `POST /bookings` — create a booking

### Validation
- `POST /validation-tests` — start validation
- `GET /validation-tests/:id` — get result

---

## 13. Product Rules for the AI / Developer

- Do not transform TrackUp into a course platform
- Do not add a 4th track without an explicit product decision
- Do not hide the reasoning behind recommendations from premium users
- Do not return only one track recommendation without explanation
- Do not skip versioning for assessment and recommendation
- Keep every entity purpose-specific and named clearly
- Always separate free content from premium content at the data level
- Never expose premium `resourceUrl` to free users at the API level

---

## 14. Final Reference Summary

TrackUp is built as:
- a structured assessment engine → Test + Scoring + Recommendation
- a track decision guide → Track details + Recorded sessions
- a mentorship booking layer → Mentors + Live sessions + Bookings
- a validation layer → Validation test + Confirmation
- a learning path pointer → Roadmap (external resources only)
- a progress tracker → Dashboard + FollowUp

The database must support these flows cleanly and without drift from the product vision.
