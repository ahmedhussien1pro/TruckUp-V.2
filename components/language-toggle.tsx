"use client"

import { useI18n } from "@/lib/i18n-context"

export function LanguageToggle() {
  const { lang, setLang } = useI18n()

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      aria-label="Toggle language"
      className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-xs font-mono font-semibold"
    >
      {lang === "en" ? "\u0639" : "EN"}
    </button>
  )
}
