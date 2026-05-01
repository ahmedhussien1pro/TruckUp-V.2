"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n-context"
import Link from "next/link"

export function CTASection() {
  const { t } = useTranslations("cta")

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-secondary/30 p-10 sm:p-14 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-mono font-bold tracking-tight sm:text-4xl max-w-2xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button asChild size="lg">
              <Link href="/test">{t("primary")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">
                {t("secondary")} <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
