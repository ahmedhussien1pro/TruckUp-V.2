# PRD 01 — Foundation, Authentication, and Profile
# PRD 01 — الأساس والمصادقة والملف الشخصي

## English

### Objective
Establish the production foundation and secure user lifecycle.

### Scope
- Configure the selected database/auth stack.
- Add typed environment validation and API/error conventions.
- Implement users, profiles, roles, sessions, verification, reset, consent, export, and deletion.
- Replace demo auth with server-backed auth.
- Protect routes/actions with deny-by-default authorization.

### Functional requirements
1. Registration, email verification, login, logout, refresh, password reset.
2. Profile fields: name, avatar, bio, locale, timezone, preferences.
3. Roles: learner, mentor, content editor, support, admin.
4. Account export and deletion request.
5. Stable language-neutral error codes with localized English/Arabic messages.
6. Sensitive data is minimized in client responses.

### Data model
`users`, `profiles`, `roles`, `user_roles`, `sessions`, `email_verifications`, `password_reset_tokens`, `consents`, `deletion_requests`, `audit_logs`.

### Acceptance criteria
- Protected routes reject unauthenticated users.
- Object ownership and role authorization are tested.
- Tokens are single-use, expiring, and never logged.
- Locale/timezone/password/email validation exists in both UI languages.
- Switching locale does not lose profile form data.
- RTL/LTR, accessible labels, validation, loading, and error states exist for every auth screen.

## العربية

### الهدف
إنشاء الأساس الإنتاجي ودورة حياة آمنة للمستخدم مع دعم كامل للعربية والإنجليزية.

### النطاق
- إعداد قاعدة البيانات ومزود المصادقة المعتمد.
- إضافة التحقق من متغيرات البيئة ومعايير موحدة للـ API والأخطاء.
- تنفيذ المستخدمين والملفات الشخصية والأدوار والجلسات والتحقق واستعادة كلمة المرور والموافقات والتصدير والحذف.
- استبدال المصادقة التجريبية بمصادقة حقيقية على الخادم.
- حماية المسارات والإجراءات بصلاحيات تمنع الوصول افتراضيًا.

### المتطلبات الوظيفية
1. التسجيل، تأكيد البريد، الدخول، الخروج، تحديث الجلسة، واستعادة كلمة المرور.
2. حقول الملف الشخصي: الاسم، الصورة، النبذة، اللغة، المنطقة الزمنية، والتفضيلات.
3. الأدوار: متعلم، مرشد، محرر محتوى، دعم، ومدير.
4. طلب تصدير البيانات وحذف الحساب.
5. أكواد أخطاء ثابتة ومحايدة لغويًا مع رسائل عربية وإنجليزية.
6. تقليل البيانات الحساسة المرسلة للواجهة.

### معايير القبول
- المسارات المحمية ترفض المستخدم غير المسجل.
- توجد اختبارات للصلاحيات وملكية البيانات.
- الرموز مؤقتة وتستخدم مرة واحدة ولا تظهر في السجلات.
- توجد رسائل تحقق عربية وإنجليزية للغة والمنطقة الزمنية وكلمة المرور والبريد.
- تغيير اللغة لا يفقد بيانات النموذج.
- كل شاشة مصادقة تدعم RTL/LTR وAccessibility وحالات التحميل والخطأ.
