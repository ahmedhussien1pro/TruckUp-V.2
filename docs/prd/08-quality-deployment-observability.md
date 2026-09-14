# PRD 08 — Quality, Deployment, and Observability
# PRD 08 — الجودة والنشر والمراقبة

## English

### Requirements
- Unit tests for scoring, entitlements, progress, time zones, policies, validation, and i18n fallback.
- Integration tests for auth, repositories, webhooks, booking races, and authorization.
- E2E tests for core learner, mentor, payment, admin, and locale-switch journeys.
- CI: lint, typecheck, tests, build, migration checks, dependency/security scans.
- Preview/staging/prod environments with isolated credentials and seed data.
- Migration review, rollback/repair procedures, backups, and restore tests.
- Error tracking with correlation IDs and redaction.
- Metrics for auth, assessment, recommendations, progress, payments, booking, notifications, latency, and errors.
- Release tags, changelog, health/readiness checks, and runbooks.

### Bilingual acceptance criteria
- Every E2E critical journey passes in English and Arabic.
- Visual/interaction checks include RTL alignment, icons, tables, forms, dates, numbers, currency, and mixed-script text.
- CI fails when required translation keys are missing or duplicate locale keys exist.
- Emails and notification snapshots are tested for both locales.

## العربية

### المتطلبات
- اختبارات Unit للتقييم والصلاحيات والتقدم والمناطق الزمنية والسياسات والتحقق وFallback الخاص بالترجمة.
- اختبارات Integration للمصادقة والمستودعات والـ webhooks وتعارض الحجز والصلاحيات.
- اختبارات E2E للمستخدم والمرشد والدفع والإدارة وتغيير اللغة.
- CI تشمل lint وtypecheck والاختبارات وbuild وmigrations وفحص التبعيات والأمان.
- بيئات Preview وStaging وProduction ببيانات اعتماد منفصلة وبيانات seed.
- مراجعة migrations وإجراءات rollback/backups واختبار الاستعادة.
- تتبع الأخطاء بمعرفات طلب وتنظيف البيانات الحساسة.
- مؤشرات للمصادقة والتقييم والتوصيات والتقدم والدفع والحجز والإشعارات والأداء والأخطاء.
- Tags وChangelog وفحوص health/readiness وRunbooks.

### معايير قبول اللغتين
- كل رحلة E2E حرجة تنجح بالعربية والإنجليزية.
- فحص RTL للمحاذاة والأيقونات والجداول والنماذج والتواريخ والأرقام والعملات والنص المختلط.
- يفشل CI عند نقص مفاتيح الترجمة أو تكرارها.
- اختبار لقطات البريد والإشعارات باللغتين.
