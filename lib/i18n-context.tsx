"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "ar"

export interface Translations {
  dir: "ltr" | "rtl"
  nav: {
    test: string; tracks: string; roadmap: string; pricing: string
    signIn: string; signOut: string; profile: string; startTest: string
  }
  hero: {
    badge: string; line1: string; line2: string; subtitle: string
    ctaPrimary: string; ctaSecondary: string
  }
  test: {
    free: string; title: string
    subtitle: (n: number) => string
    duration: string; durationSub: string
    questions: (n: number) => string; questionsSub: string
    private: string; privateSub: string; startBtn: string; privacyNote: string
    questionOf: (n: number, total: number) => string
    back: string; next: string; seeResults: string
    answered: (n: number, total: number) => string
  }
  results: {
    complete: string; title: string; bestMatch: string; retake: string
    unlockTitle: string; unlockDesc: string; upgradePremium: string
    closedReason: string; noData: string; noDataDesc: string
    startAssessment: string; validationWarning: string
    exploreTrack: string; viewRoadmap: string
  }
  common: {
    free: string; premium: string; pro: string
    bookSession: string; startAssessment: string; browseMentors: string
    seePricing: string; backToHome: string
  }
  pricing: {
    title: string; subtitle: string; oneTime: string; forever: string
    perSession: string; mostPopular: string; faqTitle: string
  }
  cta: { title: string; subtitle: string; primary: string; secondary: string }
  auth: {
    loginTitle: string; loginSubtitle: string; registerTitle: string; registerSubtitle: string
    email: string; password: string; name: string
    signIn: string; createAccount: string; noAccount: string; hasAccount: string
    register: string; login: string; forgotPassword: string
  }
}

const en: Translations = {
  dir: "ltr",
  nav: {
    test: "Test", tracks: "Tracks", roadmap: "Roadmap", pricing: "Pricing",
    signIn: "Sign in", signOut: "Sign out", profile: "Profile", startTest: "Start Free Test",
  },
  hero: {
    badge: "Free career assessment \u2014 no account needed",
    line1: "Find your track.", line2: "Own your future.",
    subtitle: "A structured assessment for electrical engineering students. Take a 15-minute test, get ranked results, and follow a clear roadmap to your specialization.",
    ctaPrimary: "Start Free Test", ctaSecondary: "Explore Tracks",
  },
  test: {
    free: "Free \u2014 No account needed",
    title: "Career Assessment",
    subtitle: (n) => `${n} questions to identify your top engineering track. Takes about 15 minutes.`,
    duration: "~15 minutes", durationSub: "at your own pace",
    questions: (n) => `${n} questions`, questionsSub: "multiple choice only",
    private: "Private", privateSub: "stored locally on your device",
    startBtn: "Start Assessment",
    privacyNote: "Your answers are saved locally on your device only.",
    questionOf: (n, t) => `Question ${n} of ${t}`,
    back: "Back", next: "Next Question", seeResults: "See My Results",
    answered: (n, t) => `${n} of ${t} answered`,
  },
  results: {
    complete: "Assessment Complete", title: "Your Results", bestMatch: "BEST MATCH",
    retake: "Retake assessment",
    unlockTitle: "Unlock the full picture",
    unlockDesc: "Premium gives you full reasoning for all 3 tracks, a complete 90-day roadmap, and access to recorded preview sessions.",
    upgradePremium: "Upgrade to Premium",
    closedReason: "Full reasoning unlocked with Premium",
    noData: "No assessment data found",
    noDataDesc: "You need to complete the assessment before viewing results.",
    startAssessment: "Start Assessment",
    validationWarning: "Scores are close \u2014 a validation session is recommended",
    exploreTrack: "Explore this track", viewRoadmap: "View roadmap",
  },
  common: {
    free: "Free", premium: "Premium", pro: "PRO",
    bookSession: "Book a Session", startAssessment: "Start Assessment",
    browseMentors: "Browse Mentors", seePricing: "See Pricing", backToHome: "Back to home",
  },
  pricing: {
    title: "Simple, honest pricing",
    subtitle: "Start for free. Upgrade when you are ready to go deeper. No subscriptions, no tricks.",
    oneTime: "one-time", forever: "forever", perSession: "per session",
    mostPopular: "Most Popular", faqTitle: "Frequently asked questions",
  },
  cta: {
    title: "Stop guessing. Start knowing.",
    subtitle: "Take the free 15-minute assessment and get a ranked result for all 3 tracks. No account. No pressure.",
    primary: "Start Free Test", secondary: "See Pricing",
  },
  auth: {
    loginTitle: "Welcome back", loginSubtitle: "Sign in to your TrackUp account",
    registerTitle: "Create your account", registerSubtitle: "Start your engineering career journey",
    email: "Email address", password: "Password", name: "Full name",
    signIn: "Sign in", createAccount: "Create account",
    noAccount: "Don't have an account?", hasAccount: "Already have an account?",
    register: "Register", login: "Sign in", forgotPassword: "Forgot password?",
  },
}

const ar: Translations = {
  dir: "rtl",
  nav: {
    test: "\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631", tracks: "\u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a",
    roadmap: "\u062e\u0627\u0631\u0637\u0629 \u0627\u0644\u0637\u0631\u064a\u0642", pricing: "\u0627\u0644\u0623\u0633\u0639\u0627\u0631",
    signIn: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", signOut: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    profile: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a", startTest: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0646\u064a",
  },
  hero: {
    badge: "\u062a\u0642\u064a\u064a\u0645 \u0645\u0647\u0646\u064a \u0645\u062c\u0627\u0646\u064a \u2014 \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u062d\u0633\u0627\u0628\u064b\u0627",
    line1: "\u0627\u0643\u062a\u0634\u0641 \u062a\u062e\u0635\u0635\u0643.", line2: "\u0627\u0645\u062a\u0644\u0643 \u0645\u0633\u062a\u0642\u0628\u0644\u0643.",
    subtitle: "\u062a\u0642\u064a\u064a\u0645 \u0645\u0646\u0638\u0645 \u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629. \u0623\u062c\u0628 \u0639\u0644\u0649 15 \u0633\u0624\u0627\u0644\u0627\u064b\u060c \u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c \u0645\u0631\u062a\u0628\u0629\u060c \u0648\u0627\u062a\u0628\u0639 \u062e\u0627\u0631\u0637\u0629 \u0637\u0631\u064a\u0642 \u0648\u0627\u0636\u062d\u0629 \u0646\u062d\u0648 \u062a\u062e\u0635\u0635\u0643.",
    ctaPrimary: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0646\u064a", ctaSecondary: "\u0627\u0633\u062a\u0639\u0631\u0636 \u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a",
  },
  test: {
    free: "\u0645\u062c\u0627\u0646\u064a \u2014 \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u062d\u0633\u0627\u0628\u064b\u0627",
    title: "\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0647\u0646\u064a",
    subtitle: (n) => `${n} \u0633\u0624\u0627\u0644\u0627\u064b \u0644\u062a\u062d\u062f\u064a\u062f \u062a\u062e\u0635\u0635\u0643 \u0627\u0644\u0647\u0646\u062f\u0633\u064a. \u064a\u0633\u062a\u063a\u0631\u0642 \u062d\u0648\u0627\u0644\u064a 15 \u062f\u0642\u064a\u0642\u0629.`,
    duration: "~\u0661\u0665 \u062f\u0642\u064a\u0642\u0629", durationSub: "\u0628\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u062a\u064a \u062a\u0646\u0627\u0633\u0628\u0643",
    questions: (n) => `${n} \u0633\u0624\u0627\u0644\u0627\u064b`, questionsSub: "\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0646 \u0645\u062a\u0639\u062f\u062f \u0641\u0642\u0637",
    private: "\u062e\u0627\u0635", privateSub: "\u0645\u062d\u0641\u0648\u0638 \u0645\u062d\u0644\u064a\u064b\u0627 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643",
    startBtn: "\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0642\u064a\u064a\u0645",
    privacyNote: "\u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u0645\u062d\u0641\u0648\u0638\u0629 \u0645\u062d\u0644\u064a\u064b\u0627 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643 \u0641\u0642\u0637.",
    questionOf: (n, t) => `\u0633\u0624\u0627\u0644 ${n} \u0645\u0646 ${t}`,
    back: "\u0631\u062c\u0648\u0639", next: "\u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062a\u0627\u0644\u064a", seeResults: "\u0634\u0627\u0647\u062f \u0646\u062a\u0627\u0626\u062c\u064a",
    answered: (n, t) => `${n} \u0645\u0646 ${t} \u062a\u0645 \u0627\u0644\u0625\u062c\u0627\u0628\u0629`,
  },
  results: {
    complete: "\u0627\u0643\u062a\u0645\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645", title: "\u0646\u062a\u0627\u0626\u062c\u0643",
    bestMatch: "\u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u0643", retake: "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0642\u064a\u064a\u0645",
    unlockTitle: "\u0627\u0641\u062a\u062d \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",
    unlockDesc: "\u0627\u0644\u0645\u064a\u0632 \u064a\u0645\u0646\u062d\u0643 \u0627\u0644\u062a\u0641\u0633\u064a\u0631 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a \u0648\u062e\u0627\u0631\u0637\u0629 \u0637\u0631\u064a\u0642 90 \u064a\u0648\u0645\u064b\u0627.",
    upgradePremium: "\u062a\u0631\u0642\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u064a\u0632",
    closedReason: "\u0627\u0644\u062a\u0641\u0633\u064a\u0631 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u062a\u0627\u062d \u0645\u0639 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0627\u0644\u0645\u064a\u0632",
    noData: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0642\u064a\u064a\u0645",
    noDataDesc: "\u064a\u062c\u0628 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0623\u0648\u0644\u0627\u064b \u0642\u0628\u0644 \u0639\u0631\u0636 \u0627\u0644\u0646\u062a\u0627\u0626\u062c.",
    startAssessment: "\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0642\u064a\u064a\u0645",
    validationWarning: "\u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0645\u062a\u0642\u0627\u0631\u0628\u0629 \u2014 \u064a\u064f\u0646\u0635\u062d \u0628\u062c\u0644\u0633\u0629 \u062a\u062d\u0642\u0642",
    exploreTrack: "\u0627\u0633\u062a\u0639\u0631\u0636 \u0647\u0630\u0627 \u0627\u0644\u062a\u062e\u0635\u0635",
    viewRoadmap: "\u0639\u0631\u0636 \u062e\u0627\u0631\u0637\u0629 \u0627\u0644\u0637\u0631\u064a\u0642",
  },
  common: {
    free: "\u0645\u062c\u0627\u0646\u064a", premium: "\u0645\u064a\u0632", pro: "PRO",
    bookSession: "\u0627\u062d\u062c\u0632 \u062c\u0644\u0633\u0629",
    startAssessment: "\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0642\u064a\u064a\u0645",
    browseMentors: "\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u062f\u0631\u0628\u064a\u0646",
    seePricing: "\u0639\u0631\u0636 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",
    backToHome: "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
  },
  pricing: {
    title: "\u0623\u0633\u0639\u0627\u0631 \u0628\u0633\u064a\u0637\u0629 \u0648\u0648\u0627\u0636\u062d\u0629",
    subtitle: "\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u064b\u0627. \u0642\u0645 \u0628\u0627\u0644\u062a\u0631\u0642\u064a\u0629 \u062d\u064a\u0646 \u062a\u0643\u0648\u0646 \u0645\u0633\u062a\u0639\u062f\u064b\u0627. \u0644\u0627 \u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a.",
    oneTime: "\u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629", forever: "\u0644\u0644\u0623\u0628\u062f", perSession: "\u0644\u0643\u0644 \u062c\u0644\u0633\u0629",
    mostPopular: "\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u064a\u0648\u0639\u064b\u0627", faqTitle: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
  },
  cta: {
    title: "\u062a\u0648\u0642\u0641 \u0639\u0646 \u0627\u0644\u062a\u062e\u0645\u064a\u0646. \u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u0645\u0639\u0631\u0641\u0629.",
    subtitle: "\u0623\u062c\u0631\u0650 \u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u062c\u0627\u0646\u064a \u0641\u064a 15 \u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0646\u062a\u064a\u062c\u0629 \u0645\u0631\u062a\u0628\u0629 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a. \u0628\u062f\u0648\u0646 \u062d\u0633\u0627\u0628.",
    primary: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0646\u064a", secondary: "\u0639\u0631\u0636 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",
  },
  auth: {
    loginTitle: "\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0639\u0648\u062f\u062a\u0643", loginSubtitle: "\u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644\u0643 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0641\u064a TrackUp",
    registerTitle: "\u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u0643", registerSubtitle: "\u0627\u0628\u062f\u0623 \u0631\u062d\u0644\u062a\u0643 \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0641\u064a \u0627\u0644\u0647\u0646\u062f\u0633\u0629",
    email: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", password: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", name: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
    signIn: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", createAccount: "\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628",
    noAccount: "\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628\u061f", hasAccount: "\u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061f",
    register: "\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628", login: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", forgotPassword: "\u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061f",
  },
}

export const translations = { en, ar }

interface I18nContextType {
  lang: Language
  t: Translations
  setLang: (lang: Language) => void
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType>({
  lang: "en", t: en, setLang: () => {}, isRTL: false,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trackup_lang") as Language
      if (saved === "ar" || saved === "en") {
        setLangState(saved)
        applyLang(saved)
      }
    } catch (_) {}
  }, [])

  const applyLang = (l: Language) => {
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = l
  }

  const setLang = (l: Language) => {
    setLangState(l)
    try { localStorage.setItem("trackup_lang", l) } catch (_) {}
    applyLang(l)
  }

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang, isRTL: lang === "ar" }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
