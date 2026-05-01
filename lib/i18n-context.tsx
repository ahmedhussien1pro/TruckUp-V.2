"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"

export type Language = "en" | "ar"

export type Namespace =
  | "common"
  | "nav"
  | "hero"
  | "test"
  | "results"
  | "tracks"
  | "roadmap"
  | "pricing"
  | "sessions"
  | "auth"
  | "profile"
  | "cta"

// Flat record of all loaded translations across namespaces
type TranslationStore = Record<string, Record<string, unknown>>

interface I18nContextType {
  lang: Language
  isRTL: boolean
  setLang: (lang: Language) => void
  /** Translate a key like "nav.test" or pass namespace explicitly */
  t: (key: string, vars?: Record<string, string | number>) => string
  /** Load a namespace on demand (called inside pages/components) */
  loadNS: (ns: Namespace) => Promise<void>
  /** Check if a namespace is already loaded */
  ready: (ns: Namespace) => boolean
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  isRTL: false,
  setLang: () => {},
  t: (key) => key,
  loadNS: async () => {},
  ready: () => false,
})

/** Interpolate {{variable}} placeholders in a string */
function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str
  return str.replace(/\{\{(\w+)\}\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{{${k}}}`
  )
}

/** Resolve a dotted key like "nav.test" against the store */
function resolve(
  store: TranslationStore,
  lang: Language,
  key: string,
  vars?: Record<string, string | number>
): string {
  const [ns, ...rest] = key.split(".")
  const nsData = store[`${lang}:${ns}`]
  if (!nsData) return key

  const value = rest.reduce<unknown>((acc, k) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[k]
    return undefined
  }, nsData)

  if (typeof value === "string") return interpolate(value, vars)
  return key
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")
  const [store, setStore] = useState<TranslationStore>({})
  const [loadedNS, setLoadedNS] = useState<Set<string>>(new Set())

  // Restore saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("trackup_lang") as Language
      if (saved === "ar" || saved === "en") {
        setLangState(saved)
        applyLangToDom(saved)
      }
    } catch (_) {}
  }, [])

  const applyLangToDom = (l: Language) => {
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = l
  }

  const setLang = useCallback(
    (l: Language) => {
      setLangState(l)
      try {
        localStorage.setItem("trackup_lang", l)
      } catch (_) {}
      applyLangToDom(l)
      // Re-load all already-loaded namespaces for new language
      loadedNS.forEach((nsKey) => {
        const ns = nsKey.split(":")[1] as Namespace
        fetchNS(l, ns)
      })
    },
    [loadedNS]
  )

  const fetchNS = useCallback(
    async (l: Language, ns: Namespace) => {
      const cacheKey = `${l}:${ns}`
      if (loadedNS.has(cacheKey)) return
      try {
        const res = await fetch(`/locales/${l}/${ns}.json`)
        if (!res.ok) return
        const data = await res.json()
        setStore((prev) => ({ ...prev, [cacheKey]: data }))
        setLoadedNS((prev) => new Set(prev).add(cacheKey))
      } catch (_) {}
    },
    [loadedNS]
  )

  const loadNS = useCallback(
    async (ns: Namespace) => {
      await fetchNS(lang, ns)
    },
    [lang, fetchNS]
  )

  const ready = useCallback(
    (ns: Namespace) => loadedNS.has(`${lang}:${ns}`),
    [lang, loadedNS]
  )

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      resolve(store, lang, key, vars),
    [store, lang]
  )

  // Always pre-load critical namespaces
  useEffect(() => {
    const critical: Namespace[] = ["common", "nav", "hero", "cta"]
    critical.forEach((ns) => fetchNS(lang, ns))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <I18nContext.Provider
      value={{ lang, isRTL: lang === "ar", setLang, t, loadNS, ready }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)

/** Convenience hook: load a namespace and return t() */
export function useTranslations(ns: Namespace) {
  const { t, loadNS, ready } = useI18n()
  useEffect(() => {
    loadNS(ns)
  }, [ns, loadNS])
  const tNS = useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      t(`${ns}.${key}`, vars),
    [t, ns]
  )
  return { t: tNS, ready: ready(ns) }
}
