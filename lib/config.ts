import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.enum(["en", "ar"]).default("en"),
  NEXT_PUBLIC_SUPPORTED_LOCALES: z.string().default("en,ar"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
})

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  NEXT_PUBLIC_SUPPORTED_LOCALES: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES,
  NODE_ENV: process.env.NODE_ENV,
})

if (!parsed.success && process.env.NODE_ENV === "production") {
  throw new Error(`Invalid environment configuration: ${parsed.error.message}`)
}

const values = parsed.success ? parsed.data : envSchema.parse({})

export const appConfig = {
  appUrl: values.NEXT_PUBLIC_APP_URL,
  defaultLocale: values.NEXT_PUBLIC_DEFAULT_LOCALE,
  supportedLocales: values.NEXT_PUBLIC_SUPPORTED_LOCALES.split(",").map((locale) => locale.trim()),
  nodeEnv: values.NODE_ENV,
} as const

export type AppLocale = "en" | "ar"

export function isSupportedLocale(value: string): value is AppLocale {
  return appConfig.supportedLocales.includes(value) && (value === "en" || value === "ar")
}
