# PRD 05 — Plans, Payments, and Entitlements
# PRD 05 — الخطط والدفع والصلاحيات

## English

### Objective
Implement server-authoritative premium access and monetization.

### Requirements
- Localized products/plans/prices, billing intervals, currency, and features.
- Checkout for subscriptions and eligible mentor bookings.
- Signed, idempotent provider webhooks.
- Entitlements granted/revoked from trusted payment events.
- Subscription, payment, invoice, refund, cancellation, and reconciliation records.
- EGP and selected settlement currency using integer minor units.
- No raw card data stored.
- Arabic and English checkout, billing, receipts, emails, failures, and cancellation policy.
- Currency/date/number formatting uses locale without changing stored values.

### Acceptance criteria
- Client state or URL manipulation cannot unlock premium content.
- Duplicate webhooks do not duplicate access or invoices.
- Refund/cancellation behavior is tested.
- Billing UI is accessible and RTL-safe.

## العربية

### الهدف
تنفيذ الوصول المدفوع والصلاحيات على الخادم وليس اعتمادًا على الواجهة.

### المتطلبات
- منتجات وخطط وأسعار وفترات وفئات عملات ومميزات مترجمة.
- Checkout للاشتراكات وحجوزات المرشدين المؤهلة.
- Webhooks موقعة وIdempotent.
- منح وسحب الصلاحيات من أحداث دفع موثوقة.
- سجلات للاشتراكات والمدفوعات والفواتير والمرتجعات والإلغاء والمطابقة.
- استخدام أصغر وحدة للعملة بدل الأرقام العشرية العائمة.
- عدم تخزين بيانات البطاقات.
- واجهات الدفع والفواتير والإيصالات والبريد والأخطاء وسياسة الإلغاء باللغتين.
- تنسيق العملة والتاريخ والأرقام حسب اللغة دون تغيير القيم المخزنة.

### معايير القبول
- لا يمكن فتح Premium بتعديل حالة الواجهة أو الرابط.
- تكرار webhook لا يكرر الصلاحيات أو الفواتير.
- توجد اختبارات للمرتجعات والإلغاء.
- واجهة الدفع متاحة وتدعم RTL.
