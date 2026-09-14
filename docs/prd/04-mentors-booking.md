# PRD 04 — Mentors, Availability, and Booking
# PRD 04 — المرشدون والتوافر والحجز

## English

### Objective
Turn mentor screens into a reliable time-zone-aware scheduling system.

### Requirements
- Approved mentor profiles with expertise, tracks, languages, pricing, timezone, and verification.
- Weekly availability, exceptions, buffers, minimum notice, and slot generation.
- Learner sees slots in their locale/timezone.
- Hold and confirm slots with concurrency protection.
- Booking states: `draft`, `held`, `pending_payment`, `confirmed`, `completed`, `cancelled`, `expired`, `no_show`.
- Cancellation, rescheduling, meeting link, reminders, and post-session review.
- All booking emails, notifications, policies, and errors in Arabic and English.
- Locale change never changes the stored instant; only presentation changes.

### Acceptance criteria
- DST/date-boundary tests pass.
- Two concurrent requests cannot book one slot.
- Cancellation policy is calculated server-side and localized.
- Reviews are allowed only after completion.

## العربية

### الهدف
تحويل شاشات المرشدين إلى نظام حجز موثوق يدعم المناطق الزمنية واللغتين.

### المتطلبات
- ملفات مرشدين معتمدين تشمل الخبرة والمسارات واللغات والأسعار والمنطقة الزمنية وحالة التحقق.
- توافر أسبوعي واستثناءات وفواصل ومدة إشعار وإنشاء المواعيد.
- عرض المواعيد للمتعلم حسب منطقته الزمنية ولغته.
- حجز مؤقت ثم تأكيد مع منع التعارض المتزامن.
- حالات الحجز: مسودة، محجوز مؤقتًا، في انتظار الدفع، مؤكد، مكتمل، ملغى، منتهي، وعدم حضور.
- الإلغاء وإعادة الجدولة ورابط الاجتماع والتذكيرات والتقييم بعد الجلسة.
- كل البريد والإشعارات والسياسات والأخطاء بالعربية والإنجليزية.
- تغيير اللغة لا يغير اللحظة المخزنة، بل يغير العرض فقط.

### معايير القبول
- اختبارات التوقيت الصيفي وحدود التاريخ ناجحة.
- لا يمكن لطلبين متزامنين حجز نفس الموعد.
- سياسة الإلغاء تحسب على الخادم وتظهر باللغتين.
- لا يسمح بالتقييم إلا بعد اكتمال الجلسة.
