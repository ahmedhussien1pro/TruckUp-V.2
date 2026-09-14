import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const roots = [path.join(root, "locales"), path.join(root, "messages"), path.join(root, "public", "locales")]
const localeFiles = {}

for (const directory of roots) {
  if (!fs.existsSync(directory)) continue
  for (const locale of ["en", "ar"]) {
    const file = path.join(directory, `${locale}.json`)
    if (fs.existsSync(file)) localeFiles[locale] = file
  }
}

if (!localeFiles.en || !localeFiles.ar) {
  console.log("i18n check: no root en/ar JSON files found yet; skipping until locale files are introduced.")
  process.exit(0)
}

const flatten = (value, prefix = "") => Object.entries(value).reduce((result, [key, child]) => {
  const next = prefix ? `${prefix}.${key}` : key
  if (child && typeof child === "object" && !Array.isArray(child)) Object.assign(result, flatten(child, next))
  else result[next] = true
  return result
}, {})

const en = flatten(JSON.parse(fs.readFileSync(localeFiles.en, "utf8")))
const ar = flatten(JSON.parse(fs.readFileSync(localeFiles.ar, "utf8")))
const missingInArabic = Object.keys(en).filter((key) => !ar[key])
const missingInEnglish = Object.keys(ar).filter((key) => !en[key])

if (missingInArabic.length || missingInEnglish.length) {
  console.error(JSON.stringify({ missingInArabic, missingInEnglish }, null, 2))
  process.exit(1)
}

console.log(`i18n check passed: ${Object.keys(en).length} keys in en/ar.`)
