import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-zinc-950/70 dark:via-zinc-950/30 dark:to-zinc-950/80 pointer-events-none" />
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Showcase, Connect, Collaborate</h1>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl">A visual hub for video editors. Share stunning edits in a Pinterest-style grid and find or post editing jobs in one place.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#explore" className="px-6 py-3 rounded-md bg-rose-600 text-white hover:bg-rose-700 shadow">Explore Edits</a>
            <a href="#dashboard" className="px-6 py-3 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">Post a Job</a>
          </div>
        </div>
      </div>
    </section>
  )
}
