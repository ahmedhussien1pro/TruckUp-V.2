import type { EnrollmentState, StepProgressState } from "./types"

/**
 * DUMMY IMPLEMENTATION using localStorage so learner progress persists
 * across page reloads without a backend. See docs/prd/03-tracks-roadmaps-progress.md
 * for the real, server-authoritative contract this will be replaced with.
 */

const STORAGE_KEY = "trackup.dummy.enrollments"

function readAll(): Record<string, EnrollmentState> {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeAll(state: Record<string, EnrollmentState>) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export async function enroll(roadmapId: string): Promise<EnrollmentState> {
  const all = readAll()
  if (!all[roadmapId]) {
    all[roadmapId] = { roadmapId, enrolledAtIso: new Date().toISOString(), steps: [] }
    writeAll(all)
  }
  return all[roadmapId]
}

export async function getEnrollment(roadmapId: string): Promise<EnrollmentState | null> {
  const all = readAll()
  return all[roadmapId] ?? null
}

export async function setStepStatus(
  roadmapId: string,
  stepId: string,
  status: StepProgressState["status"],
): Promise<EnrollmentState> {
  const all = readAll()
  const enrollment = all[roadmapId] ?? { roadmapId, enrolledAtIso: new Date().toISOString(), steps: [] }
  const existing = enrollment.steps.find((step) => step.stepId === stepId)
  const updatedAtIso = new Date().toISOString()
  if (existing) {
    existing.status = status
    existing.updatedAtIso = updatedAtIso
  } else {
    enrollment.steps.push({ roadmapId, stepId, status, updatedAtIso })
  }
  all[roadmapId] = enrollment
  writeAll(all)
  return enrollment
}

export function calculateProgressPercent(enrollment: EnrollmentState, totalSteps: number): number {
  if (totalSteps <= 0) return 0
  const completed = enrollment.steps.filter((step) => step.status === "completed").length
  return Math.round((completed / totalSteps) * 100)
}
