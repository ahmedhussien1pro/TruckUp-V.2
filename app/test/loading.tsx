export default function TestLoading() {
  return (
    <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-border/30" />
          <div className="absolute inset-0 rounded-full border-2 border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <p className="text-sm font-mono text-muted-foreground">Preparing your assessment...</p>
      </div>
    </main>
  )
}
