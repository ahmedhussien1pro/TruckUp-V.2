# TrackUp — Perplexity Prompts Pack (Page-by-Page)

## How to use this file
Use each prompt separately inside Perplexity.  
Do not ask it to build the entire product at once.  
The goal is to keep the output **fixed, specific, and aligned with TrackUp only**.

---

## 0) Global Context Prompt
Use this once at the start of every conversation with Perplexity.

```text
You are helping me build TrackUp, a career guidance and decision platform for electrical engineering students.

TrackUp is NOT a course platform.
TrackUp does NOT provide full courses.
TrackUp helps students:
- discover the most suitable engineering track for them
- understand why a specific track fits their profile
- preview tracks through short recorded sessions
- book live 1:1 mentorship sessions
- take a structured career assessment
- receive a clear roadmap with external learning recommendations
- track their progress lightly after committing to a track

Important product rules:
- Keep the experience focused on decision-making and career clarity
- Do not add unrelated SaaS sections
- Do not add generic startup marketing content
- Do not add community, chat, or forum features unless explicitly asked
- Do not turn the product into a learning marketplace
- Keep every page minimal, modern, and action-driven
- Use engineering-student language, not corporate language
- Free tier gives access to: test, results summary, track overview, roadmap preview
- Premium tier unlocks: full recommendation reasoning, full roadmap, recorded sessions
- Paid sessions: live 1:1 mentorship booked directly

The three approved tracks are:
- Power Systems
- Embedded Systems
- Communications Systems

Do NOT introduce other tracks unless I explicitly ask.

The user flow is:
Landing → Test → Results → Pricing (free vs premium) → Track Details → Recorded Preview → Live Session Booking → Validation Test → Roadmap → Dashboard / Progress

Always stay within this context.
```

---

## 1) Landing Page Prompt

```text
Build the Landing Page for TrackUp.

Goal:
- Explain the product in one glance
- Make the main CTA "Start Test"
- Make the page feel like a serious career guidance product for engineering students

Must include:
- Hero section with one clear headline about finding the right track
- One short explanation of what TrackUp actually does
- 3 key benefits focused on decision clarity, not feature listing
- CTA button: Start Test (free)
- A short section that explains the user journey in 4 steps
- A simple trust section (number of students, tracks available)
- Pricing teaser: free test + premium unlock

Do NOT include:
- Generic startup fluff
- Long feature lists
- Random testimonials without context
- Course marketplace elements
- Community sections
- More than 3 tracks mentioned

Style:
- Minimal, modern, dark theme
- Clear hierarchy
- Strong spacing
- Fast to scan

Output:
- Only the landing page structure
- No code unless I ask for it
```

---

## 2) Career Test Page Prompt

```text
Build the Career Assessment page for TrackUp.

Goal:
- Help the student answer short multiple-choice questions
- Detect whether the student leans toward Power, Embedded, or Communications
- Collect enough signals to rank all 3 tracks with scores

Must include:
- Progress indicator showing current step out of total
- One question per step (no grouping)
- Multiple-choice answers only (2 to 4 options)
- A clear Next button
- A final Submit action with a brief confirmation message

Question categories must cover:
- hardware vs signal vs power preference
- practical vs theoretical preference
- patience with long debugging cycles
- interest in circuits, devices, control systems
- interest in wireless, signal processing, antennas
- interest in energy, grids, motors, power electronics
- preferred work environment (lab, field, office)
- math comfort level
- interest in team vs solo work

Do NOT include:
- Open-ended essay questions
- Long personality tests
- Irrelevant questions like hobbies or entertainment
- Anything that feels like a quiz game
- Questions about software or programming preference

The test should have 10 to 15 questions maximum.

Output:
- A structured test flow only
- Keep it simple and serious
```

---

## 3) Results Page Prompt

```text
Build the Results page for TrackUp.

Goal:
- Show exactly 3 recommended tracks ranked by match score
- Explain why each track was recommended
- Help the student decide the next action
- Introduce the free vs premium split clearly

The 3 tracks are always: Power Systems, Embedded Systems, Communications Systems.

Must include for each track:
- Track name
- Match percentage or rank
- Short reason for recommendation (1 to 2 lines)
- Key strengths matched
- One honest challenge to consider

Must include:
- "Best Match" label for the top result
- A short explanation of the overall student profile
- CTA to explore the top track (free)
- CTA to unlock full reasoning and roadmap (premium)
- Clear free/premium split: summary is free, full explanation is paid

Do NOT include:
- More than 3 tracks
- Confusing score systems
- Empty motivational text
- Too many charts or visual noise
- Fake confidence scores

Output:
- Clear recommendation layout only
```

---

## 4) Pricing Page Prompt

```text
Build the Pricing page for TrackUp.

Goal:
- Show the difference between free and premium clearly
- Make the premium value obvious without fake urgency
- Make paid sessions feel like a natural next step

Must include:
- Free tier: what is always free
- Premium tier: what it unlocks
- Paid sessions: what they include, price placeholder, booking CTA
- Clear upgrade CTA

Free tier must include:
- Career assessment (full test)
- Results summary with 3 ranked tracks
- Basic track overview
- Roadmap preview (first 30 days only)

Premium tier must unlock:
- Full recommendation reasoning
- Full roadmap (90 days)
- Access to recorded preview sessions
- Priority session booking

Paid sessions must show:
- Session duration
- Session purpose (track decision, clarification, validation)
- Price placeholder
- Booking action

Do NOT include:
- Fake discounts
- Annual/monthly toggle unless explicitly asked
- Enterprise or team plans
- Unrelated SaaS pricing patterns

Style:
- Clean and direct
- Premium card should feel noticeably more valuable
- No dark patterns

Output:
- Pricing page structure only
```

---

## 5) Track Details Page Prompt

```text
Build the Track Details page for TrackUp.
This page will be reused for all 3 tracks: Power Systems, Embedded Systems, Communications Systems.

Goal:
- Explain one engineering track clearly and honestly
- Help the student understand what working in this field actually means

For each track page, include:
- What this track is (1 short paragraph)
- What engineers in this field do day to day
- Typical tools, technologies, and equipment
- Required skills (hard and soft)
- Who this track fits (profile description)
- Who should reconsider it (honest warnings)
- Common misconceptions about the track
- Entry path after deciding
- CTA to watch recorded preview session
- CTA to book a live session

Do NOT:
- Teach the full track as a course
- Add long lessons or textbook sections
- Overwhelm the user with technical depth
- Add unrelated business sections

Tone:
- Clear
- Practical
- Honest
- Student-friendly

Output:
- One reusable track page structure
```

---

## 6) Recorded Preview Sessions Page Prompt

```text
Build the Recorded Preview Sessions page for TrackUp.
This page is premium — users must upgrade to access full sessions.

Goal:
- Let the student preview what working in a track actually looks and feels like
- Give them a realistic feel for the field before booking a live session

For each recorded session card, show:
- Session title
- Track name (Power / Embedded / Communications)
- Duration
- What the student will understand after watching
- Whether it is beginner-friendly
- Lock icon with "Premium" label if not unlocked

The session content should focus on:
- A day in the life of a professional in this field
- Real tools and tasks shown or explained
- Field expectations and common surprises
- Honest pros and cons
- A closing suggestion for next steps

Do NOT include:
- Full course curriculum
- Deep technical training
- Random video library behavior
- Entertainment-style thumbnails
- More than 5 sessions per track for MVP

Output:
- A clean card grid layout for sessions
- With premium gating logic described
```

---

## 7) Live Session Booking Page Prompt

```text
Build the Live Session Booking page for TrackUp.
This is a paid feature — the student pays to book a 1:1 session with a specialist.

Goal:
- Let the student book a live mentorship or clarification session
- Make the booking flow simple, clear, and trustworthy

Must include:
- Mentor profile card (name, track specialty, short bio)
- Session purpose options:
  - Track introduction
  - Decision support
  - Detailed field clarification
  - Pre-commitment validation
- Available time slots (calendar or list)
- Price display
- Booking confirmation step
- What happens after booking (confirmation email placeholder)

Do NOT include:
- Full mentor marketplace behavior
- Complex search or filter system
- Messaging or chat system
- Unrelated freelancer platform features

Output:
- Booking page structure only
- Simple and linear flow
```

---

## 8) Validation Test Page Prompt

```text
Build the Validation Test page for TrackUp.

IMPORTANT: This is NOT a repeat of the Career Assessment.
The Career Assessment detects track preference.
The Validation Test confirms that the student truly understands and accepts the chosen track.

This test runs AFTER the student has:
- seen the track details page
- watched recorded sessions (if premium)
- optionally had a live session

Goal:
- Confirm the student understands what the chosen track involves
- Confirm their interest is stable and not based on confusion
- Help them identify a sub-direction within the track if possible

Must evaluate:
- Understanding of what the field actually requires
- Stability of interest after exposure
- Clarity about what they liked and disliked from the sessions
- Readiness to follow the roadmap

The result must show one of:
- Confirmed — ready to follow the roadmap
- Partially Confirmed — needs more exploration of a sub-area
- Not Confirmed — should revisit another track

Do NOT:
- Repeat career preference questions from the first test
- Make it feel like a school exam
- Focus on technical knowledge or memorization
- Override the original assessment result alone

Output:
- A simple validation flow (5 to 8 questions)
- A clear result with one recommended next step
```

---

## 9) Roadmap Page Prompt

```text
Build the Roadmap page for TrackUp.
The first 30 days are visible for free. The full 90-day roadmap requires premium.

Goal:
- Give the student a practical starting path after choosing a track
- Recommend external resources instead of in-platform courses

Must include:
- First 30 days (free): key starting skills, 2 to 3 free resources
- First 90 days (premium): full learning path, tools to master, practice suggestions
- Core skills section: what must be learned in order
- Free resource section (YouTube, PDFs, open courseware)
- Paid resource section if relevant (courses, books)
- Premium lock on the full roadmap with clear upgrade CTA

Do NOT:
- Sell courses directly inside TrackUp
- Add long curriculum blocks
- Add unrelated career advice outside the chosen track
- Show all content without the free/premium split

Output:
- A structured roadmap page for one track
- Reusable for all 3 tracks
```

---

## 10) Dashboard / Progress Page Prompt

```text
Build the Dashboard and Progress page for TrackUp.

Goal:
- Give the student a clear view of where they are in their journey
- Show completed steps and what comes next
- Keep it lightweight, not a full LMS dashboard

Must include:
- Current track (confirmed or in progress)
- Journey progress bar: Test → Results → Track Decision → Roadmap → Sessions
- Completed steps marked clearly
- Next recommended action (one clear CTA)
- Upcoming bookings (if any)
- Quick access to: roadmap, recorded sessions, validation test
- Tier status: Free or Premium

Do NOT include:
- Course progress tracking
- Social activity feed
- Complex analytics
- Gamification badges unless explicitly asked
- Notifications center unless explicitly asked

Style:
- Clean, minimal
- One dominant next action at the top
- Journey feeling, not dashboard complexity

Output:
- Dashboard page structure only
```

---

## 11) Follow-up Page Prompt

```text
Build the Follow-up page for TrackUp.

Goal:
- Help the student stay consistent after choosing a track
- Track progress lightly without becoming a full LMS

Must include:
- Weekly check-in prompt (one question)
- Progress status (on track / falling behind / just starting)
- Next recommended action based on status
- Option to retake validation test
- Option to book another session

Do NOT include:
- Heavy dashboard views
- Social or community features
- Course progress tracking
- Long forms or surveys

Output:
- Minimal follow-up page structure
```

---

## 12) Session Summary Page Prompt

```text
Build the Session Summary page for TrackUp.

Goal:
- Show what happened after a mentorship session
- Turn the session into a useful decision record for the student

Must include:
- Mentor name and track specialty
- Session date and duration
- Topics discussed (editable list)
- Key takeaways (3 to 5 points)
- Mentor's final suggestion
- Recommended next step with CTA

Do NOT include:
- Chat logs or full transcripts
- Rating or review system unless explicitly asked
- Noise from unrelated booking features

Output:
- A clean, printable summary page structure
```

---

## 13) Product Safety Prompt

Use this whenever Perplexity starts drifting away from the product.

```text
Check whether the current page or feature still fits TrackUp.

TrackUp rules:
- Career guidance and track decision first
- Validation and confirmation second
- External learning recommendations third
- No full courses inside the platform
- No community-first design
- No generic SaaS fluff
- No dashboard complexity beyond journey tracking
- Only 3 tracks: Power Systems, Embedded Systems, Communications Systems
- Free tier: test + summary + roadmap preview
- Premium tier: full reasoning + full roadmap + recorded sessions
- Paid: live 1:1 sessions

If anything is out of scope, remove it and replace it with a simpler TrackUp-aligned alternative.
```

---

## 14) Recommended Working Order

Use the prompts in this order:
1. Global Context (use at start of every session)
2. Landing Page
3. Career Assessment Page
4. Results Page
5. Pricing Page
6. Track Details Page
7. Recorded Preview Sessions Page
8. Live Session Booking Page
9. Validation Test Page
10. Roadmap Page
11. Dashboard / Progress Page
12. Follow-up Page
13. Session Summary Page

---

## 15) Final Rule

If the prompt output is not helping the student make a decision:
- narrow the scope
- remove unrelated sections
- keep only what supports the decision-guidance journey

TrackUp must always feel like a **career GPS for engineering students**, not a generic learning platform.
