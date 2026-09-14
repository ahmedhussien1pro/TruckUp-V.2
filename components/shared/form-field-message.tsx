type FormFieldMessageProps = {
  id: string
  message?: string
  tone?: "error" | "hint"
}

/**
 * Bilingual, RTL-safe form field message for validation errors and hints.
 * Pass the localized string from your i18n dictionary as `message`.
 * Wire the returned element's `id` to the input's `aria-describedby`.
 */
export function FormFieldMessage({ id, message, tone = "error" }: FormFieldMessageProps) {
  if (!message) return null

  return (
    <p
      id={id}
      role={tone === "error" ? "alert" : undefined}
      className={tone === "error" ? "mt-1 text-sm text-destructive" : "mt-1 text-sm text-muted-foreground"}
    >
      {message}
    </p>
  )
}
