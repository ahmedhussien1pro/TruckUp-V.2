# PRD 10 — Dummy-Data-First Strategy
# PRD 10 — استراتيجية البيانات التجريبية اولا

## English

### Goal
Show the complete TrackUp product experience now, without waiting for the real backend, by isolating every future server dependency behind a small service layer with a stable contract. Replace the dummy internals with real API calls later in one focused pass, without touching UI components.

### Why this is safe
Every function in `lib/services/*` already matches the parameter and return shape described in the corresponding PRD (mentors, billing, notifications, progress). UI components should only import from `lib/services/*`, never call fetch/localStorage directly. When the backend is ready, only the function bodies change.

### What is mocked now
- `lib/services/mentors.service.ts`: mentor list, availability slots, booking creation (in-memory).
- `lib/services/billing.service.ts`: plans, subscription state (in-memory).
- `lib/services/notifications.service.ts`: notification feed (in-memory).
- `lib/services/progress.service.ts`: roadmap enrollment/progress (persisted in `localStorage` so it survives refresh).
- Existing `lib/tracks-data.ts`, `lib/roadmap-data.ts`, `lib/assessment-data.ts`, `lib/scoring.ts` already act as the tracks/roadmap/assessment dummy layer and should be wrapped the same way if not already.

### What is intentionally NOT mocked
- Authentication identity/session (kept as-is in `lib/auth-context.tsx` until a real provider is chosen; do not fake login security).
- Payment capture (no real card data is ever handled, even in dummy mode).

### Swap plan (single pass later)
1. Introduce the real database/auth/payment providers behind environment variables.
2. Reimplement each function in `lib/services/*` to call real API routes/server actions instead of in-memory arrays or `localStorage`.
3. Keep exported function names and return types identical so components require no changes.
4. Add integration tests hitting the real implementations before removing the dummy fallback.
5. Remove `localStorage` progress persistence only after server-side enrollment/progress is confirmed working end-to-end.

### Acceptance criteria
- No UI component imports `localStorage`, mock arrays, or `setTimeout` directly; they only import from `lib/services/*`.
- All dummy content exists in both `en` and `ar`.
- Swapping one service file to a real implementation does not require edits in more than that one file plus its test file.

## العربية

### الهدف
عرض تجربة TrackUp كاملة دلوقتي بدون انتظار الباك الإند، عن طريق فصل أي اعتماد مستقبلي على السيرفر خلف طبقة خدمات صممت بعقد ثابت، ليتم استبدالها لاحقًا بمرة واحدة مركزة بدون لمس مكونات الواجهة.

### لماذا هذا آمن
كل دالة في `lib/services/*` مطابقة للعقد الموصوف في الـ PRD المقابل. المكونات لا يفترض استدعاء أي شيء غير هذه الدوال. عند جهوزية الباك انتند، نعدل محتوى الدالة فقط.

### الموجود حاليًا كDummy
- المرشدون والمواعيد والحجز.
- الخطط والاشتراك.
- الإشعارات.
- التسجيل والتقدم في الـ roadmap محفوظ في localStorage.
- المسارات والـ roadmap والاختبار الموجودة مسبقًا تعتبر بالفعل طبقة dummy ويفضل تلف نفس المبدأ.

### ما لا يتم عمله dummy عمدًا
- هوية المستخدم/الجلسة الحقيقية (تبقى كما هي حتى اختيار مزود حقيقي).
- قبض الدفع الحقيقي (لا يتم تخزين أي بيانات بطاقات حتى في الوضع الدمي).

### خطة الاستبدال لاحقًا
1. اختيار مزودي البيانات والمصادقة والدفع.
2. إعادة بناء كل دالة داخل `lib/services/*` لتنادي API حقيقي بدل المصفوفات الوهمية.
3. الحفاظ على نفس أسماء الدوال والمخرجات بحيث لا يحتاج المكون لأي تعديل.
4. إضافة اختبارات تكامل قبل إزالة الـ dummy fallback.
5. التخلي عن localStorage للتقدم فقط بعد التأكد من عمل التسجيل الحقيقي على السيرفر.

### معايير القبول
- لا يوجد استدعاء مباشر لـ localStorage أو setTimeout داخل مكونات الواجهة.
- كل محتوى dummy موجود باللقتين.
- استبدال دالة واحدة بتنفيذ حقيقي لا يكسر ملفات أخرى.