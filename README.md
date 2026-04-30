# TrackUp

**Decision-guidance product for electrical engineering students.**

TrackUp helps confused EE students move from uncertainty to a clear specialization decision through a structured 15-minute assessment, ranked results, track details, and a 90-day roadmap.

---

## Approved tracks

- **Power Systems** — energy generation, transmission, and distribution
- **Embedded Systems** — microcontrollers, firmware, hardware-software integration
- **Communications Systems** — signal processing, wireless, RF

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/test` | Assessment intro |
| `/test/[1-15]` | 15-question test flow |
| `/test/result` | Ranked results + premium CTA |
| `/tracks` | Tracks overview |
| `/tracks/[slug]` | Track detail page |
| `/roadmap/[slug]` | 90-day roadmap (free + locked) |
| `/pricing` | Pricing tiers + FAQ |
| `/mentors` | Mentor listing |
| `/mentors/[id]` | Session booking |

---

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide Icons**
- **shadcn/ui**
- No backend — assessment state stored in `localStorage`

---

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel in one click. No environment variables required for the base MVP.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ahmedhussien1pro/TruckUp-V.2)
