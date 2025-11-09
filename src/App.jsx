import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PreviewGrid from './components/PreviewGrid'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <Hero />
      <PreviewGrid />
      <CTA />
      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} EditGrid — Built for editors and collaborators.
        </div>
      </footer>
    </div>
  )
}

export default App
