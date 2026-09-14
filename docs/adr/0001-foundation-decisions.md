# ADR 0001 — Foundation Decisions

## العربية

### الحالة
مسودة تنفيذية — يجب اعتماد مزودي الخدمات قبل تفعيل التكاملات الحقيقية.

### القرارات الحالية
- التطبيق يستخدم Next.js App Router وTypeScript.
- `en` و`ar` هما اللغتان المدعومتان.
- اللغة العربية تستخدم RTL والإنجليزية LTR.
- المعرفات وقيم قاعدة البيانات محايدة عن اللغة، بينما النصوص المعروضة مترجمة.
- مفاتيح الترجمة لا تظهر للمستخدم عند غياب المحتوى.
- لا يتم وضع أسرار providers في المستودع.

### قرارات معلقة
- مزود قاعدة البيانات.
- مزود المصادقة.
- مزود البريد.
- مزود الدفع.
- مزود التقويم/الفيديو.
- الاستضافة والمراقبة والـ queue.

## English

### Status
Implementation draft — providers must be approved before real integrations are enabled.

### Current decisions
- The application uses Next.js App Router and TypeScript.
- Supported locales are `en` and `ar`.
- Arabic uses RTL and English uses LTR.
- Database identifiers and enum values are locale-neutral; display content is localized.
- Translation keys must never be exposed to users.
- Provider secrets must never be committed.

### Pending decisions
- Database provider.
- Authentication provider.
- Email provider.
- Payment provider.
- Calendar/video provider.
- Hosting, observability, and queue provider.
