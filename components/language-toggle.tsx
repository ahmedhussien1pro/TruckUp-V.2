"use client"

import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { lang, setLang } = useI18n()
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="h-8 gap-1.5 px-2 text-xs font-mono text-muted-foreground hover:text-foreground"
      aria-label="Toggle language"
    >
      <Languages className="h-3.5 w-3.5" />
      {lang === "en" ? "\u0639\u0631\u0628\u064a" : "EN"}
    </Button>
  )
}
