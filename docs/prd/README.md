# TrackUp PRD Documentation

## العربية
هذه الوثائق تحدد ما ينقص مشروع `TruckUp-V.2` لتحويله من MVP للواجهة الأمامية إلى منصة TrackUp كاملة: اكتشاف المسار المهني، التقييم، خارطة الطريق، متابعة التقدم، المرشدون، الاشتراكات، والإدارة التشغيلية.

كل ملف PRD مكتوب بالإنجليزية والعربية داخل نفس الملف. اللغة الإنجليزية تأتي أولًا لتسهيل التنفيذ البرمجي، ثم النسخة العربية للمراجعة والتوافق مع المنتج ثنائي اللغة.

## English
These documents define the missing work required to turn `TruckUp-V.2` from a frontend MVP into the complete TrackUp platform: career discovery, assessment, roadmaps, progress tracking, mentors, subscriptions, and operations.

Every PRD is bilingual inside the same file. English appears first for implementation consistency, followed by the Arabic product version.

## Documents
- `00-product-gap-analysis.md` — Product-wide gap analysis / تحليل الفجوات الشامل.
- `01-foundation-auth-profile.md` — Foundation, authentication, and profiles / الأساس والمصادقة والملفات الشخصية.
- `02-assessment-engine.md` — Assessment and recommendation engine / التقييم ومحرك التوصيات.
- `03-tracks-roadmaps-progress.md` — Tracks, roadmaps, enrollment, and progress / المسارات والخرائط والتقدم.
- `04-mentors-booking.md` — Mentors and booking / المرشدون والحجز.
- `05-subscriptions-payments.md` — Plans, payments, and entitlements / الخطط والدفع والصلاحيات.
- `06-notifications-admin.md` — Notifications and administration / الإشعارات والإدارة.
- `07-security-privacy.md` — Security, privacy, and abuse prevention / الأمان والخصوصية ومنع الإساءة.
- `08-quality-deployment-observability.md` — Quality, deployment, and observability / الجودة والنشر والمراقبة.
- `09-implementation-backlog.md` — Implementation phases and backlog / مراحل التنفيذ وقائمة المهام.

## Bilingual product rules
- Every user-facing string must exist in `en` and `ar`.
- Arabic content must be rendered with RTL direction; English content with LTR direction.
- Store locale-neutral identifiers in the database and store localized content separately.
- Do not use translated text as a slug, enum, database key, or authorization value.
- API error codes remain stable and language-neutral; messages are localized at the presentation layer.
- Dates, times, numbers, currency, emails, and URLs must be formatted using the active locale.
- Users can switch language without losing form data, assessment progress, booking state, or checkout state.
- Translation fallback must be explicit, observable, and never expose raw translation keys.
- Admin content publishing must validate both locales or mark a locale intentionally unavailable.

## Language acceptance checklist
- [ ] `en` and `ar` namespaces are defined for every feature.
- [ ] Every page has localized loading, empty, error, and success states.
- [ ] Arabic layout is tested for RTL, mixed Arabic/English text, icons, tables, and forms.
- [ ] Screen-reader labels and validation messages exist in both languages.
- [ ] E2E tests switch between `en` and `ar` during core journeys.
- [ ] Emails and notifications have both localized templates.
