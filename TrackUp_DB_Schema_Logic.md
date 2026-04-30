# TrackUp — DB Schema & Test Logic Reference

## 1. Purpose

This document defines the minimum database structure and assessment logic needed for TrackUp.

TrackUp is a career guidance and validation platform for engineering students.  
It is not a course platform.

This document is intended to be used as:
- a reference for developers
- a reference for AI-generated implementation
- a stable product specification

---

## 2. Product Scope Covered Here

This document covers only:
- user identity
- assessment/test flow
- answer storage
- scoring
- track recommendation
- recorded session access
- live session booking
- validation test
- roadmap display support
- follow-up tracking
- partner referral tracking

This document does not define:
- course delivery
- LMS functionality
- community/chat system
- full payment gateway logic
- partner dashboard logic

---

## 3. Core Entities

TrackUp should be built around these core entities:

1. User
2. Assessment
3. Question
4. QuestionOption
5. Attempt
6. Answer
7. Track
8. TrackScore
9. Recommendation
10. RecordedSession
11. LiveSession
12. Booking
13. ValidationTest
14. RoadmapItem
15. FollowUp
16. PartnerReferral

---

## 4. Recommended Database Model

The schema below is intentionally minimal and modular.

### 4.1 User

Represents a student using the platform.

Fields:
- id
- fullName
- email
- passwordHash or external auth id
- universityName (optional)
- facultyName (optional)
- academicYear (optional)
- preferredLanguage
- createdAt
- updatedAt

Notes:
- A user may complete multiple assessment attempts.
- A user may book multiple sessions.
- A user may receive multiple recommendations over time.

---

### 4.2 Assessment

Represents a test definition.

Fields:
- id
- title
- version
- status (`draft`, `active`, `archived`)
- description
- createdAt
- updatedAt

Notes:
- Versioning is important because questions and scoring may evolve.
- The recommendation logic should always know which version produced a result.

---

### 4.3 Question

Represents a question inside an assessment.

Fields:
- id
- assessmentId
- orderIndex
- text
- questionType
- category
- isActive
- createdAt
- updatedAt

questionType examples:
- `single_choice`
- `multiple_choice`
- `scale`
- `binary`

category examples:
- `hardware_preference`
- `software_preference`
- `logic_style`
- `practical_style`
- `theory_style`
- `teamwork_style`
- `problem_solving_style`
- `interest_area`

---

### 4.4 QuestionOption

Represents one possible answer for a question.

Fields:
- id
- questionId
- label
- value
- orderIndex
- createdAt
- updatedAt

Notes:
- Options may contain score metadata in the admin layer or in a scoring table.
- Keep option values stable and machine-readable.

---

### 4.5 Attempt

Represents one full user completion of an assessment.

Fields:
- id
- userId
- assessmentId
- status (`in_progress`, `completed`, `abandoned`)
- startedAt
- completedAt
- createdAt
- updatedAt

Notes:
- Every answer must belong to one attempt.
- Recommendation results should be tied to a specific attempt.

---

### 4.6 Answer

Represents one answer selected by the user for one question.

Fields:
- id
- attemptId
- questionId
- optionId (nullable if free text exists later)
- rawValue
- createdAt
- updatedAt

Notes:
- rawValue can store the selected value, scale number, or text.
- For MVP, keep answer types limited and structured.

---

### 4.7 Track

Represents a career track or specialization.

Fields:
- id
- slug
- name
- shortDescription
- fullDescription
- trackType
- isActive
- createdAt
- updatedAt

trackType examples:
- `software`
- `hardware`
- `mixed`

Notes:
- Track is a broad category, not a course.
- Example: Embedded Systems, Web Development, Power Engineering, Communications.

---

### 4.8 TrackScore

Represents how well a user attempt matches a track.

Fields:
- id
- attemptId
- trackId
- score
- rank
- reasonSummary
- createdAt
- updatedAt

Notes:
- One attempt can have multiple track scores.
- Exactly top 3 should be surfaced to the user.
- Keep score explanation human-readable.

---

### 4.9 Recommendation

Represents the final recommendation output shown to the user.

Fields:
- id
- attemptId
- primaryTrackId
- secondaryTrackId
- tertiaryTrackId
- summary
- decisionStatus (`recommended`, `needs_validation`, `confirmed`)
- createdAt
- updatedAt

Notes:
- This is the user-facing recommendation snapshot.
- It should not be recalculated silently without tracking version changes.

---

### 4.10 RecordedSession

Represents a recorded intro session for a track.

Fields:
- id
- trackId
- title
- description
- videoUrl
- durationMinutes
- isActive
- createdAt
- updatedAt

Notes:
- These are not full courses.
- These sessions exist to help the student understand the track.

---

### 4.11 LiveSession

Represents a bookable live mentorship or clarification session.

Fields:
- id
- trackId
- mentorId
- title
- description
- price
- durationMinutes
- capacity
- startAt
- endAt
- status
- createdAt
- updatedAt

status examples:
- `available`
- `booked_out`
- `cancelled`
- `completed`

---

### 4.12 Booking

Represents a user's reservation for a live session.

Fields:
- id
- userId
- liveSessionId
- paymentStatus
- bookingStatus
- joinedAt
- createdAt
- updatedAt

paymentStatus examples:
- `pending`
- `paid`
- `failed`
- `refunded`

bookingStatus examples:
- `reserved`
- `confirmed`
- `cancelled`
- `completed`

---

### 4.13 ValidationTest

Represents the final confirmation test after exposure to sessions or explanations.

Fields:
- id
- userId
- attemptId
- trackId
- status
- score
- resultSummary
- createdAt
- updatedAt

Notes:
- This test should confirm understanding and direction.
- It should not just repeat the original assessment.

---

### 4.14 RoadmapItem

Represents one learning step inside a track roadmap.

Fields:
- id
- trackId
- phase
- title
- description
- orderIndex
- resourceType
- resourceUrl
- isPremium
- createdAt
- updatedAt

phase examples:
- `first_30_days`
- `first_90_days`
- `foundation`
- `practice`
- `advanced`

---

### 4.15 FollowUp

Represents periodic progress checking.

Fields:
- id
- userId
- trackId
- status
- checkInDate
- notes
- createdAt
- updatedAt

Notes:
- Optional for MVP.
- Useful later for engagement and retention.

---

### 4.16 PartnerReferral

Represents tracking for external paid platforms or partner offers.

Fields:
- id
- partnerName
- trackId
- refCode
- landingUrl
- commissionType
- commissionValue
- isActive
- createdAt
- updatedAt

Notes:
- Used for affiliate or revenue-sharing tracking.
- Should be simple and auditable.

---

## 5. Recommended Relationship Map

### User
- has many Attempts
- has many Bookings
- has many ValidationTests
- has many FollowUps

### Assessment
- has many Questions

### Question
- has many QuestionOptions

### Attempt
- belongs to one User
- belongs to one Assessment
- has many Answers
- has one Recommendation
- has one ValidationTest

### Track
- has many TrackScores
- has many RecordedSessions
- has many LiveSessions
- has many RoadmapItems
- has many PartnerReferrals

### LiveSession
- belongs to one Track
- belongs to one Mentor
- has many Bookings

---

## 6. Assessment Logic

The assessment logic should be deterministic, explainable, and versioned.

### 6.1 Core Logic Goal

The test should estimate:
- preference toward hardware or software
- work style
- thinking style
- practical vs theoretical inclination
- suitability for specific tracks

### 6.2 Output Rules

The logic must output:
- top 3 tracks
- score for each track
- short reason for each track
- optional confidence level

### 6.3 Scoring Categories

Every question should map to one or more scoring categories.

Examples:
- `hardware_preference`
- `software_preference`
- `embedded_interest`
- `web_interest`
- `power_interest`
- `communications_interest`
- `logic_strength`
- `practical_strength`
- `theory_strength`
- `teamwork_strength`
- `independent_work_strength`

### 6.4 Scoring Approach

Each answer contributes points to one or more tracks.

Example:
- A question about liking physical devices may add points to `embedded` and `power`
- A question about building interfaces may add points to `web`
- A question about signal processing may add points to `communications`

### 6.5 Weighting Rules

Use weights to keep the test balanced:
- high-impact questions: stronger weight
- medium-impact questions: normal weight
- low-impact questions: small weight

Weights should be adjustable in admin/config, not hardcoded only in UI.

### 6.6 Recommendation Thresholds

Use thresholds to classify results:
- `high_match`
- `medium_match`
- `low_match`

Only the top 3 tracks should be shown.
If scores are too close, the system should mark the result as:
- `needs_validation`

### 6.7 Reason Generation

Reasons should be derived from:
- strongest answer groups
- strongest categories
- contradictions between answers
- explicit preferences

Example reason structure:
- "You showed strong interest in practical problem solving."
- "Your answers suggest comfort with structured technical tasks."
- "You prefer building and debugging more than theory-heavy analysis."

---

## 7. Validation Test Logic

The validation test is a separate layer after the user has seen:
- recorded sessions
- mentor guidance
- track previews

### 7.1 Goal

Confirm whether the user:
- understands the chosen field
- still feels aligned with it
- can identify a sub-track
- is ready to continue with external learning

### 7.2 Validation Output

The validation test should return one of:
- `confirmed_track`
- `confirmed_subtrack`
- `needs_more_exploration`

### 7.3 Validation Question Types

Use questions that test:
- clarity of understanding
- interest stability
- practical awareness
- sub-track preference
- confidence in decision

### 7.4 Validation Decision Logic

A final result should be based on:
- validation score
- mentor session notes
- prior assessment score
- user confidence

The validation test should not override all previous information by itself.

---

## 8. Minimal MVP Rules

For MVP, keep the system limited to:

### Include
- User
- Assessment
- Question
- QuestionOption
- Attempt
- Answer
- Track
- TrackScore
- Recommendation
- RecordedSession
- RoadmapItem

### Optional for MVP
- LiveSession
- Booking
- ValidationTest
- FollowUp
- PartnerReferral

### Exclude from MVP
- community
- messaging
- advanced analytics
- AI chat advisor
- course hosting
- certificate system

---

## 9. Data Integrity Rules

These rules must be respected:

1. An Attempt must belong to exactly one user and one assessment.
2. An Answer must belong to exactly one attempt and one question.
3. TrackScore must always be tied to a single attempt.
4. Recommendation must store the exact top 3 tracks used at that time.
5. Session booking must reference an existing live session.
6. Validation tests must reference a real attempt or chosen track.
7. Roadmap items must belong to one track only.

---

## 10. API Behavior Reference

A developer may implement these endpoints:

### Assessment
- `GET /assessments/active`
- `GET /assessments/:id/questions`

### Attempt
- `POST /attempts`
- `PATCH /attempts/:id`
- `POST /attempts/:id/answers`
- `POST /attempts/:id/complete`

### Recommendation
- `GET /attempts/:id/recommendation`

### Tracks
- `GET /tracks`
- `GET /tracks/:slug`

### Sessions
- `GET /tracks/:id/recorded-sessions`
- `GET /live-sessions`
- `POST /bookings`

### Validation
- `POST /validation-tests`
- `GET /validation-tests/:id`

### Roadmap
- `GET /tracks/:id/roadmap`

---

## 11. Product Rules for the AI / Developer

The implementation must follow these rules:
- Do not transform TrackUp into a course platform
- Do not hide the reasoning behind recommendations
- Do not return only one track without explanation
- Do not add unnecessary complexity early
- Do not skip versioning for assessment and recommendation logic
- Do not make the schema too generic
- Keep every entity purpose-specific

---

## 12. Final Reference Summary

TrackUp should be built as:
- a structured assessment engine
- a track recommendation system
- a track preview experience
- a mentorship booking layer
- a validation and follow-up layer

The database and logic must support these flows cleanly and without drift from the product vision.
