# PRD 02 — Assessment and Recommendation Engine
# PRD 02 — التقييم ومحرك التوصيات

## English

### Objective
Turn the current assessment UI into a persisted, versioned, tamper-resistant career assessment.

### Requirements
- Versioned assessments, questions, options, dimensions, rules, and track mappings.
- Authenticated attempts with optional anonymous preview and account conversion.
- Start, save, resume, submit, retry, and expire abandoned attempts.
- Server-side scoring from immutable rules.
- Primary/secondary recommendations with explanations.
- Historical results never change when content is edited.
- Arabic and English question, option, explanation, and error content.
- Locale switching preserves answers and current step.

### Data model
`assessments`, `assessment_versions`, `questions`, `question_options`, `scoring_dimensions`, `scoring_rules`, `track_recommendations`, `assessment_attempts`, `assessment_answers`, `assessment_results`.

### Acceptance criteria
- Client-side score manipulation cannot alter stored results.
- Submission is idempotent.
- Results are reproducible from version plus answers.
- Tests cover boundaries, missing answers, invalid options, ties, locale changes, and version changes.

## العربية

### الهدف
تحويل واجهة التقييم الحالية إلى تقييم مهني محفوظ ومُرقم بالإصدارات ومقاوم للتلاعب.

### المتطلبات
- نسخ من التقييم والأسئلة والاختيارات والأبعاد والقواعد وربط المسارات.
- محاولات للمستخدم المسجل مع إمكانية المعاينة المجهولة وتحويلها لحساب.
- بدء وحفظ واستكمال وإرسال وإعادة التقييم وانتهاء المحاولات المهجورة.
- حساب النتيجة على الخادم من قواعد ثابتة.
- توصية أساسية وثانوية مع تفسير واضح.
- النتائج القديمة لا تتغير عند تعديل المحتوى.
- محتوى الأسئلة والاختيارات والتفسيرات والأخطاء بالعربية والإنجليزية.
- تغيير اللغة يحافظ على الإجابات والخطوة الحالية.

### معايير القبول
- لا يمكن تغيير النتيجة بتعديل الواجهة.
- الإرسال Idempotent ولا ينشئ نتيجتين نهائيتين.
- يمكن إعادة إنتاج النتيجة من الإصدار والإجابات.
- توجد اختبارات للحدود والإجابات الناقصة والاختيارات غير الصحيحة والتعادلات وتغيير اللغة والإصدار.
