import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trackup.io"
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/test`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tracks`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tracks/power`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tracks/embedded`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tracks/communications`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/roadmap/power`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roadmap/embedded`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/roadmap/communications`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/mentors`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ]
}
