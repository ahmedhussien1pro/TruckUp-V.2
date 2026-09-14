"use client"

type SkipToContentProps = {
  label: string
  targetId?: string
}

/**
 * Bilingual, RTL-safe "skip to main content" link for keyboard and screen-reader users.
 * Pass the localized label (English or Arabic) from your i18n dictionary.
 * Render it as the very first child inside <body>, before the navbar.
 */
export function SkipToContent({ label, targetId = "main-content" }: SkipToContentProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {label}
    </a>
  )
}
