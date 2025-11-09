export default function CTA() {
  return (
    <section id="dashboard" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-900 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Share your edit or post a job in minutes
            </h3>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">
              Upload a video showcase, add tags like Cinematic or Motion Graphics, and get discovered by editors and clients.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90">
                Upload Project
              </button>
              <button className="px-6 py-3 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
