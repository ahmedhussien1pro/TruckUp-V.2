import type { NotificationItem } from "./types"

/**
 * DUMMY IMPLEMENTATION. See docs/prd/06-notifications-admin.md.
 */

const DUMMY_LATENCY_MS = 150
const delay = () => new Promise((resolve) => setTimeout(resolve, DUMMY_LATENCY_MS))

const notifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: { en: "Assessment result is ready", ar: "\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u062c\u0627\u0647\u0632\u0629" },
    body: {
      en: "Your recommended track is now available.",
      ar: "\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0642\u062a\u0631\u062c \u0644\u0643 \u0645\u062a\u0627\u062d \u0627\u0644\u0622\u0646.",
    },
    createdAtIso: new Date().toISOString(),
    read: false,
    kind: "assessment",
  },
  {
    id: "notif-2",
    title: { en: "Roadmap step completed", ar: "\u062a\u0645 \u0625\u0646\u062c\u0627\u0632 \u062e\u0637\u0648\u0629 \u0641\u064a \u0627\u0644\u062e\u0631\u064a\u0637\u0629" },
    body: { en: "Great progress! Keep going.", ar: "\u062a\u0642\u062f\u0645 \u0645\u0645\u062a\u0627\u0632! \u0627\u0633\u062a\u0645\u0631." },
    createdAtIso: new Date().toISOString(),
    read: false,
    kind: "roadmap",
  },
]

export async function listNotifications(): Promise<NotificationItem[]> {
  await delay()
  return notifications
}

export async function markNotificationRead(id: string): Promise<void> {
  await delay()
  const item = notifications.find((notification) => notification.id === id)
  if (item) item.read = true
}
