export default function PageLoader() {
  return (
    <div className="min-h-[50vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-5 w-40 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-20 max-w-3xl rounded-[2rem] bg-slate-200 dark:bg-slate-800" />
          <div className="grid gap-6 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-64 rounded-[2rem] bg-slate-200 dark:bg-slate-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
