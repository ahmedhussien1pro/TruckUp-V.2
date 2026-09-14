import type { ReactNode } from "react"
import { Loader2, Inbox, AlertTriangle, RefreshCcw } from "lucide-react"

type BaseStateProps = {
  title: string
  description?: string
  className?: string
}

/**
 * Consistent, bilingual, RTL-safe loading state.
 * Usage: <LoadingState title={t("tracks.loading.title")} />
 */
export function LoadingState({ title, description, className }: BaseStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 px-6 py-12 text-center ${className ?? ""}`}
    >
      <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
      <p className="text-sm font-medium text-foreground">{title}</p>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </div>
  )
}

type EmptyStateProps = BaseStateProps & {
  action?: ReactNode
}

/**
 * Consistent empty state for tracks, roadmap steps, mentor lists, and bookings.
 */
export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-muted/20 px-6 py-12 text-center ${className ?? ""}`}
    >
      <Inbox className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm font-medium text-foreground">{title}</p>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
}

type ErrorStateProps = BaseStateProps & {
  retryLabel?: string
  onRetry?: () => void
}

/**
 * Consistent, accessible error state with an optional localized retry action.
 */
export function ErrorState({ title, description, retryLabel, onRetry, className }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-6 py-12 text-center ${className ?? ""}`}
    >
      <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
      <p className="text-sm font-medium text-destructive">{title}</p>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      {onRetry && retryLabel ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <RefreshCcw className="h-4 w-4" aria-hidden="true" />
          {retryLabel}
        </button>
      ) : null}
    </div>
  )
}
