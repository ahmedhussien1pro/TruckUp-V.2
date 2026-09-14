# PRD 03 — Tracks, Roadmaps, Enrollment, and Progress
# PRD 03 — المسارات والخرائط والتسجيل والتقدم

## English

### Objective
Deliver a persistent learning journey from recommendation to roadmap completion.

### Requirements
- Database-backed localized tracks with skills, tools, roles, outcomes, prerequisites, search, and filters.
- Versioned roadmaps containing stages, steps, resources, dependencies, estimates, and premium flags.
- Enrollment uses a roadmap snapshot/version.
- Start/complete/undo step progress, bookmarks, notes, dashboard, and resume-next-step.
- Editors draft, review, publish, archive, and version content.
- Arabic and English content can be edited separately; missing required translations block publishing.
- RTL/LTR layouts, localized dates/numbers, and localized empty/error/locked states.

### Acceptance criteria
- Only published and locale-valid content is public.
- Enrollment remains stable after a new roadmap version is published.
- Progress mutations are idempotent and ownership-protected.
- Premium locks are enforced server-side and explain the required action in both languages.

## العربية

### الهدف
تقديم رحلة تعلم محفوظة تبدأ من التوصية وتنتهي بإكمال الـ roadmap.

### المتطلبات
- مسارات محفوظة في قاعدة البيانات وبها مهارات وأدوات ووظائف ونتائج ومتطلبات وبحث وتصفية.
- خرائط طريق بإصدارات تحتوي على مراحل وخطوات ومصادر وتبعيات وتقديرات وعلامات Premium.
- التسجيل يعتمد على نسخة ثابتة من الـ roadmap.
- بدء وإكمال وإلغاء إكمال الخطوات والإشارات والملاحظات ولوحة التحكم والاستكمال من آخر خطوة.
- المحرر ينشئ Draft ويراجع وينشر ويؤرشف ويصدر المحتوى.
- يمكن تحرير العربية والإنجليزية منفصلتين، ومنع النشر عند نقص الترجمات المطلوبة.
- دعم RTL/LTR وتنسيق التواريخ والأرقام وحالات الفراغ والخطأ والقفل باللغتين.

### معايير القبول
- لا يظهر للعامة إلا المحتوى المنشور والصالح لغويًا.
- يظل تسجيل المستخدم ثابتًا بعد نشر إصدار جديد.
- تعديلات التقدم Idempotent ومحمية بملكية المستخدم.
- أقفال Premium تفرض على الخادم وتشرح المطلوب بالعربية والإنجليزية.
