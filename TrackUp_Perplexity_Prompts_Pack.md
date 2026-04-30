# TrackUp — Perplexity Prompts Pack (Page-by-Page)

## How to use this file
Use each prompt separately inside Perplexity.  
Do not ask it to build the entire product at once.  
The goal is to keep the output **fixed, specific, and aligned with TrackUp only**.

---

## 0) Global Context Prompt
Use this once at the start of every conversation with Perplexity.

```text
You are helping me build TrackUp, a career guidance and validation platform for engineering students.

TrackUp is NOT a course platform.
TrackUp does NOT provide full courses.
TrackUp helps students:
- discover the most suitable engineering tracks
- understand why those tracks fit them
- preview tracks through recorded sessions
- book live mentorship sessions
- take a validation test
- receive a clear roadmap and external learning recommendations

Important product rules:
- Keep the experience focused on decision-making and clarity
- Do not add unrelated SaaS sections
- Do not add generic startup marketing content
- Do not add community/chat/forum features unless explicitly asked
- Do not turn the product into a learning marketplace
- Keep every page minimal, modern, and action-driven
- Use engineering-student language, not corporate language

The core tracks currently include:
- Embedded Systems
- Power Systems
- Communication Systems
- Software / Web Development

The user flow is:
Landing -> Test -> Results -> Track Details -> Recorded Preview -> Live Session Booking -> Validation Test -> Roadmap -> Follow-up

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
- Hero section
- One short explanation of the product
- 3 key benefits only
- CTA button: Start Test
- A short section that explains the user journey
- A simple trust section

Do NOT include:
- Generic startup fluff
- Long feature lists
- Random testimonials
- Course marketplace elements
- Community sections

Style:
- Minimal
- Modern SaaS look
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
Build the Career Test page for TrackUp.

Goal:
- Help the student answer short multiple-choice questions
- Detect whether the student leans more toward hardware or software
- Collect enough signals to rank the top 3 tracks

Must include:
- Progress indicator
- One question per step or a very short grouped flow
- Multiple-choice answers only
- A clear next button
- A final submit action

Question categories must cover:
- hardware vs software preference
- practical vs theoretical preference
- patience with debugging
- interest in circuits / devices / systems
- interest in logic / apps / interfaces
- preferred work style
- confidence with math / problem solving
- interest in team vs solo work

Do NOT include:
- Open-ended essay questions
- Long personality tests
- Irrelevant questions like hobbies or entertainment
- Anything that feels like a quiz game

Output:
- A structured test flow only
- Keep it simple and serious
```

---

## 3) Results Page Prompt

```text
Build the Results page for TrackUp.

Goal:
- Show exactly 3 recommended tracks
- Explain why each track was recommended
- Help the student decide the next action

Must include for each track:
- Track name
- Match score or rank
- Short reason for recommendation
- Key strengths
- One challenge to consider

Must include:
- "Best Match" label for the top result
- A short explanation of the overall profile
- CTA to explore track details
- CTA to continue to recorded sessions

Do NOT include:
- More than 3 tracks
- Confusing score systems
- Empty motivational text
- Too many charts or visual noise

Output:
- Clear recommendation layout only
```

---

## 4) Track Details Page Prompt

```text
Build the Track Details page for TrackUp.

Goal:
- Explain one engineering track deeply but clearly
- Help the student understand what the track actually means in real life

For each track page, include:
- What this track is
- What people in this field do
- Typical tools or technologies
- Required skills
- Who this track fits
- Who should avoid it
- Common misconceptions

Do NOT:
- Teach the full track as a course
- Add long lessons
- Overwhelm the user with technical depth
- Add unrelated business sections

Tone:
- Clear
- Practical
- Honest
- Student-friendly

Output:
- One track page structure that can be reused for every track
```

---

## 5) Recorded Preview Sessions Page Prompt

```text
Build the Recorded Preview Sessions page for TrackUp.

Goal:
- Let the student preview a track before booking anything
- Give them a realistic feel for the field

For each recorded session card, show:
- session title
- track name
- duration
- what the student will learn from it
- whether it is beginner-friendly

The session content should focus on:
- real-world work
- daily tasks
- field expectations
- pros and cons
- decision support

Do NOT include:
- Full course curriculum
- Deep technical training
- Random video library behavior
- Entertainment-style thumbnails or irrelevant media

Output:
- A clean grid or list of sessions
```

---

## 6) Live Session Booking Page Prompt

```text
Build the Live Session Booking page for TrackUp.

Goal:
- Let the student book a paid 1:1 mentorship session with a specialist
- Make the booking flow simple and trustworthy

Must include:
- Mentor card
- Track specialty
- Session purpose
- Available time slots
- Price placeholder
- Booking button

The page should support session types such as:
- track introduction
- decision support
- detailed clarification
- confirmation before final choice

Do NOT include:
- Full marketplace behavior
- Complex search filters
- Unrelated freelancer features
- Messaging/chat system unless required later

Output:
- Booking page structure only
```

---

## 7) Validation Test Page Prompt

```text
Build the Validation Test page for TrackUp.

Goal:
- Confirm the student truly understands the track
- Help them decide whether to commit to a single direction

Must evaluate:
- understanding of the field
- confidence level
- clarity of interest
- readiness to continue

The result should show:
- confirmed track or sub-track
- whether the student is still uncertain
- suggested next step

Do NOT make it feel like a school exam.
Do NOT focus on memorization.

Output:
- A simple validation flow and result layout
```

---

## 8) Roadmap Page Prompt

```text
Build the Roadmap page for TrackUp.

Goal:
- Give the student a practical starting path after choosing a track
- Recommend external resources instead of in-platform courses

Must include:
- first 30 days
- first 90 days
- key skills in order
- recommended learning path
- free resource section
- paid resource section if needed

Do NOT:
- Sell courses directly
- Add long curriculum blocks
- Add unrelated career advice outside the chosen track

Output:
- A structured roadmap page for one track
```

---

## 9) Follow-up Page Prompt

```text
Build the Follow-up page for TrackUp.

Goal:
- Help the student stay consistent after choosing a track
- Track progress lightly without becoming a full LMS

Must include:
- weekly check-in
- progress status
- next recommended action
- option to retake validation later

Do NOT include:
- Heavy dashboards
- Social/community features
- Course progress tracking like a school LMS

Output:
- Minimal follow-up page structure
```

---

## 10) Session Summary Prompt

```text
Build the Session Summary page for TrackUp.

Goal:
- Show what happened after a mentorship session
- Turn the session into a useful decision record

Must include:
- mentor name
- session date
- topics discussed
- key takeaways
- final suggestion
- next step

Do NOT include:
- Chat logs
- Long transcripts
- Noise from unrelated booking features

Output:
- A clean summary page structure
```

---

## 11) Product Safety Prompt

Use this whenever Perplexity starts drifting away from the product.

```text
Check whether the current page or feature still fits TrackUp.

TrackUp rules:
- career guidance first
- validation second
- external learning recommendations third
- no full courses
- no community-first design
- no generic SaaS fluff
- no unrelated dashboard complexity

If anything is out of scope, remove it and replace it with a simpler TrackUp-aligned alternative.
```

---

## 12) Recommended Working Order

Use the prompts in this order:
1. Global Context
2. Landing Page
3. Career Test Page
4. Results Page
5. Track Details Page
6. Recorded Preview Sessions Page
7. Live Session Booking Page
8. Validation Test Page
9. Roadmap Page
10. Follow-up Page
11. Session Summary Page

---

## 13) Final Rule

If the prompt output is not helping the student:
- narrow the scope
- remove unrelated sections
- keep only what supports decision-making

TrackUp must always feel like a **career guidance product**, not a generic learning platform.
