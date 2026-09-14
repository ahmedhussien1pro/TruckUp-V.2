# Bilingual i18n Rules

## العربية

- كل نص ظاهر للمستخدم يجب أن يكون له مفتاح في `en` و`ar`.
- استخدم مفاتيح ثابتة ومحايدة مثل `auth.login.title`، ولا تستخدم النص المترجم كمعرف.
- العربية تحتاج `dir="rtl"`، والإنجليزية تحتاج `dir="ltr"`.
- لا يتم تبديل اللغة عن طريق إعادة تحميل تفقد بيانات النموذج أو التقييم أو الحجز.
- رسائل الأخطاء والتحميل والفراغ والنجاح والإشعارات يجب أن تكون باللغتين.
- المحتوى الديناميكي مثل المسارات والأسئلة والـ roadmaps يخزن كترجمات منفصلة عن الـ IDs.
- أي fallback يجب تسجيله ومراجعته، ولا يجوز عرض مفتاح الترجمة الخام.

## English

- Every user-facing string must have a key in both `en` and `ar`.
- Use stable locale-neutral keys such as `auth.login.title`; never use translated text as an identifier.
- Arabic uses `dir="rtl"`; English uses `dir="ltr"`.
- Switching locale must not lose form, assessment, or booking state.
- Loading, empty, success, error, and notification messages must be bilingual.
- Dynamic content such as tracks, questions, and roadmaps is stored separately from locale-neutral IDs.
- Any fallback must be observable and reviewed; raw translation keys must never be rendered.
