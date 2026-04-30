import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { AuthProvider } from "@/lib/auth-context"
import { I18nProvider } from "@/lib/i18n-context"
import { Preloader } from "@/components/preloader"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://trackup.io"),
  title: {
    default: "TrackUp — Find Your Engineering Track",
    template: "%s | TrackUp",
  },
  description:
    "A structured career assessment for electrical engineering students. Take a 15-minute test, get ranked results, and follow a clear roadmap to your specialization — Power, Embedded, or Communications.",
  keywords: [
    "electrical engineering career",
    "engineering track assessment",
    "power systems engineer",
    "embedded systems engineer",
    "communications engineering",
    "engineering specialization",
    "career guidance engineering",
    "engineering roadmap",
  ],
  authors: [{ name: "TrackUp" }],
  creator: "TrackUp",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://trackup.io",
    title: "TrackUp — Find Your Engineering Track",
    description:
      "A structured career assessment for electrical engineering students. Power, Embedded, or Communications — know which track fits you in 15 minutes.",
    siteName: "TrackUp",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackUp — Find Your Engineering Track",
    description:
      "A structured career assessment for electrical engineering students. Know which track fits you in 15 minutes.",
    creator: "@trackup_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${
          geistSans.variable
        } ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <I18nProvider>
              <Preloader />
              {children}
            </I18nProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
