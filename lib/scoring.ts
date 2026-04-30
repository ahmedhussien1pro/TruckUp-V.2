import { questions } from "./assessment-data"

export interface TrackScore {
  track: "power" | "embedded" | "communications"
  name: string
  rawScore: number
  normalizedScore: number
  rank: number
  matchLevel: "high_match" | "medium_match" | "low_match"
  reasonSummary: string
  color: string
  accentColor: string
  borderColor: string
  bgColor: string
  badgeColor: string
}

export interface ScoringResult {
  tracks: TrackScore[]
  topTrack: TrackScore
  decisionStatus: "recommended" | "needs_validation"
  overallSummary: string
}

const TRACK_NAMES: Record<string, string> = {
  power: "Power Systems",
  embedded: "Embedded Systems",
  communications: "Communications Systems",
}

const TRACK_STYLES: Record<string, { color: string; accent: string; border: string; bg: string; badge: string }> = {
  power: {
    color: "text-orange-400",
    accent: "bg-orange-500",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  embedded: {
    color: "text-blue-400",
    accent: "bg-blue-500",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  communications: {
    color: "text-purple-400",
    accent: "bg-purple-500",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
}

const REASONS: Record<string, string> = {
  power: "Your answers show a strong interest in physical energy systems, large-scale infrastructure, and field work. You prefer tangible results you can see and touch.",
  embedded: "You showed consistent interest in hardware-software integration, low-level debugging, and building devices. You prefer working directly with physical circuits and microcontrollers.",
  communications: "Your profile shows strong interest in signal processing, wireless systems, and data transmission. You are comfortable with mathematical modeling and simulation.",
}

function getMatchLevel(score: number): "high_match" | "medium_match" | "low_match" {
  if (score >= 65) return "high_match"
  if (score >= 38) return "medium_match"
  return "low_match"
}

export function computeResults(answers: Record<number, string>): ScoringResult {
  const raw = { power: 0, embedded: 0, communications: 0 }

  for (const [qIdStr, optionId] of Object.entries(answers)) {
    const qId = parseInt(qIdStr)
    const question = questions.find((q) => q.id === qId)
    if (!question) continue
    const option = question.options.find((o) => o.id === optionId)
    if (!option) continue
    raw.power += option.scores.power
    raw.embedded += option.scores.embedded
    raw.communications += option.scores.communications
  }

  const maxPossible = questions.length * 3
  const normalized = {
    power: Math.round((raw.power / maxPossible) * 100),
    embedded: Math.round((raw.embedded / maxPossible) * 100),
    communications: Math.round((raw.communications / maxPossible) * 100),
  }

  const sorted = (["power", "embedded", "communications"] as const)
    .map((track) => ({ track, rawScore: raw[track], normalizedScore: normalized[track] }))
    .sort((a, b) => b.normalizedScore - a.normalizedScore)

  const tracks: TrackScore[] = sorted.map((item, index) => ({
    track: item.track,
    name: TRACK_NAMES[item.track],
    rawScore: item.rawScore,
    normalizedScore: item.normalizedScore,
    rank: index + 1,
    matchLevel: getMatchLevel(item.normalizedScore),
    reasonSummary: REASONS[item.track],
    color: TRACK_STYLES[item.track].color,
    accentColor: TRACK_STYLES[item.track].accent,
    borderColor: TRACK_STYLES[item.track].border,
    bgColor: TRACK_STYLES[item.track].bg,
    badgeColor: TRACK_STYLES[item.track].badge,
  }))

  const top = tracks[0]
  const second = tracks[1]
  const diff = top.normalizedScore - second.normalizedScore
  const decisionStatus = diff < 10 ? "needs_validation" : "recommended"

  const overallSummary =
    decisionStatus === "needs_validation"
      ? `Your scores for ${top.name} and ${second.name} are very close. We recommend exploring both tracks before committing.`
      : `Your profile shows a clear lean toward ${top.name}. Your preferences, work style, and interests align well with this specialization.`

  return { tracks, topTrack: top, decisionStatus, overallSummary }
}
