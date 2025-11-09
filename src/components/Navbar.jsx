import { Rocket, Search, Briefcase, Compass, LogIn, UserPlus } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-white/60 dark:bg-zinc-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">EditGrid</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#explore" className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 transition-colors">
            <Compass size={16} /> Explore
          </a>
          <a href="#jobs" className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 transition-colors">
            <Briefcase size={16} /> Jobs
          </a>
          <a href="#search" className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 transition-colors">
            <Search size={16} /> Search
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <LogIn size={16} /> Login
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md text-white bg-rose-600 hover:bg-rose-700 shadow-sm">
            <UserPlus size={16} /> Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
