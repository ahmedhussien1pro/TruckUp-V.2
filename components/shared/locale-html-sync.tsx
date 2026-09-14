"use client"

import { useEffect } from "react"

type LocaleHtmlSyncProps = {
  locale: "en" | "ar"
}

/**
 * Keeps <html lang> and <html dir> in sync with the active app locale.
 * Mount once near the root of the app (inside the i18n provider) so that
 * RTL/LTR direction and assistive-technology language hints are always correct,
 * even right after a client-side language toggle.
 */
export function LocaleHtmlSync({ locale }: LocaleHtmlSyncProps) {
  useEffect(() => {
    const html = document.documentElement
    const dir = locale === "ar" ? "rtl" : "ltr"
    html.setAttribute("lang", locale)
    html.setAttribute("dir", dir)
    html.style.colorScheme = html.style.colorScheme || "light dark"
  }, [locale])

  return null
}
