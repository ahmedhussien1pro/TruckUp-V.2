# PRD 06 — Notifications and Administration
# PRD 06 — الإشعارات والإدارة

## English

### Objective
Provide the operational layer required to run TrackUp safely.

### Requirements
- In-app and email notifications with localized templates.
- Preferences, retries, delivery logs, and event idempotency.
- Admin workflows for tracks, roadmaps, assessments, mentors, bookings, plans, users, translations, and support.
- Publishing validates required English/Arabic fields and records author/time/version.
- RBAC, safe search/filter/pagination, and audit logs.
- Security and transaction notices cannot be silently disabled.
- Admin UI switches RTL/LTR and localizes labels, dates, statuses, validation, and destructive-action confirmations.

### Acceptance criteria
- Notification delivery is idempotent per event and recipient.
- Both locales render correctly in email, in-app, and admin surfaces.
- Sensitive admin mutations are auditable.
- Destructive actions require localized confirmation.

## العربية

### الهدف
توفير طبقة التشغيل اللازمة لإدارة TrackUp بأمان.

### المتطلبات
- إشعارات داخل التطبيق وبالبريد بقوالب مترجمة.
- تفضيلات ومحاولات إعادة وسجلات تسليم وIdempotency للأحداث.
- إدارة المسارات والخرائط والتقييمات والمرشدين والحجوزات والخطط والمستخدمين والترجمات والدعم.
- النشر يتحقق من حقول العربية والإنجليزية ويسجل المنفذ والوقت والإصدار.
- RBAC وبحث وتصفية وترقيم صفحات وسجلات تدقيق.
- لا يمكن تعطيل إشعارات الأمان والمعاملات المهمة بصمت.
- لوحة الإدارة تغير RTL/LTR وتترجم العناوين والتواريخ والحالات والتحقق وتأكيدات الحذف.

### معايير القبول
- التسليم Idempotent لكل حدث ومستلم.
- اللغتان تعملان في البريد والتطبيق ولوحة الإدارة.
- كل تعديل إداري حساس قابل للتدقيق.
- العمليات الخطرة تحتاج تأكيدًا مترجمًا.
