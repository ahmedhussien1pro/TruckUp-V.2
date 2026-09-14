# PRD 09 — Implementation Backlog and Execution Plan
# PRD 09 — خطة التنفيذ وقائمة المهام

## English

### Phase 0 — Decisions and baseline
- Confirm database, auth, payment, email, calendar/video, hosting, queue, and observability providers.
- Approve architecture and schema ADRs.
- Add `.env.example`, runtime validation, migrations, seed command, CI skeleton, i18n key validation, and RTL test utilities.

### Phase 1 — Foundation
- Users, profiles, roles, audit logs, locale data, real auth, guards, profile persistence.

### Phase 2 — Assessment
- Versioned schema, server scoring, attempts/results/recommendations, bilingual content and analytics.

### Phase 3 — Learning journey
- Tracks, translations, roadmaps, enrollment, progress, dashboard, editor publishing.

### Phase 4 — Monetization
- Plans, prices, checkout, webhook idempotency, subscriptions, invoices, refunds, entitlements, bilingual billing.

### Phase 5 — Mentors
- Approval, profiles, availability, time zones, holds, bookings, cancellation, meetings, reviews, bilingual notifications.

### Phase 6 — Operations
- Notifications, queues, preferences, admin, support, audit viewer, translation management.

### Phase 7 — Hardening and launch
- Security, privacy, test coverage, CI/CD, observability, backups, staging, production, release tags.

### First 12 issues
1. `[Foundation] Choose providers and approve ADRs`
2. `[Foundation] Add env validation, migrations, seeds, and i18n key checks`
3. `[Auth] Implement real registration/login/session lifecycle`
4. `[Auth] Add roles, authorization, profile persistence, and protected-route tests`
5. `[Assessment] Persist versioned attempts, answers, and results`
6. `[Assessment] Move scoring/recommendations server-side with bilingual content`
7. `[Tracks] Add published localized track catalog`
8. `[Roadmap] Add versioned enrollment and progress persistence`
9. `[Billing] Add plans, entitlements, and provider webhook contract`
10. `[Mentors] Add availability, slot holds, and booking state machine`
11. `[Quality] Add CI, bilingual E2E, RTL checks, and release gates`
12. `[Security] Add rate limiting, audit events, privacy flows, and security headers`

### Definition of done
- Code, migrations, tests, docs, security, and localization reviewed.
- English and Arabic UI, errors, emails, notifications, accessibility, and RTL behavior verified.
- Preview/staging verified, no secrets introduced, rollback notes documented.

## العربية

### المرحلة 0 — القرارات والأساس
- اختيار قاعدة البيانات والمصادقة والدفع والبريد والتقويم/الفيديو والاستضافة والـ queue والمراقبة.
- اعتماد ADRs للبنية ومخطط البيانات.
- إضافة `.env.example` والتحقق وقت التشغيل وmigrations وseed وCI والتحقق من مفاتيح الترجمة وأدوات اختبار RTL.

### المرحلة 1 — الأساس
- المستخدمون والملفات والأدوار وسجلات التدقيق واللغة والمصادقة الحقيقية والحماية وحفظ الملف الشخصي.

### المرحلة 2 — التقييم
- مخطط بإصدارات وحساب على الخادم وحفظ المحاولات والنتائج والتوصيات ومحتوى ثنائي اللغة وتحليلات.

### المرحلة 3 — رحلة التعلم
- المسارات والترجمات والـ roadmaps والتسجيل والتقدم ولوحة التحكم ونشر المحتوى.

### المرحلة 4 — تحقيق الدخل
- الخطط والأسعار وCheckout وIdempotency للـ webhooks والاشتراكات والفواتير والمرتجعات والصلاحيات وفوترة ثنائية اللغة.

### المرحلة 5 — المرشدون
- الاعتماد والملفات والتوافر والمناطق الزمنية والحجز المؤقت ودورة الحجز والإلغاء والاجتماعات والتقييمات والإشعارات الثنائية.

### المرحلة 6 — التشغيل
- الإشعارات والـ queues والتفضيلات والإدارة والدعم وسجل التدقيق وإدارة الترجمات.

### المرحلة 7 — التقوية والإطلاق
- الأمان والخصوصية والاختبارات وCI/CD والمراقبة والنسخ الاحتياطية وstaging والإنتاج وTags.

### أول 12 مهمة
1. اختيار الموردين واعتماد ADRs.
2. إضافة env validation وmigrations وseed والتحقق من مفاتيح اللغتين.
3. تنفيذ دورة التسجيل والدخول والجلسات الفعلية.
4. إضافة الأدوار والصلاحيات وحفظ الملف واختبارات المسارات.
5. حفظ محاولات وإجابات ونتائج التقييم بإصدارات.
6. نقل الحساب والتوصيات إلى الخادم مع محتوى عربي وإنجليزي.
7. إضافة كتالوج المسارات المنشور والمترجم.
8. إضافة التسجيل في roadmap وحفظ التقدم بإصدارات.
9. إضافة الخطط والصلاحيات وعقد webhook للدفع.
10. إضافة توافر المرشدين والحجز المؤقت ودورة الحجز.
11. إضافة CI واختبارات E2E ثنائية وفحوص RTL وبوابات الإصدار.
12. إضافة Rate limiting وسجلات التدقيق والخصوصية وSecurity headers.

### تعريف الإنجاز
- مراجعة الكود والـ migrations والاختبارات والوثائق والأمان والترجمة.
- التحقق من واجهة وأخطاء وبريد وإشعارات وإتاحة وRTL بالعربية والإنجليزية.
- اختبار Preview/Staging وعدم إضافة أسرار وتوثيق خطة التراجع.