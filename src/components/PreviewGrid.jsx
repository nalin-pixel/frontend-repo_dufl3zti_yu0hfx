import { useMemo } from 'react'

function Card({ item }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={item.thumb}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xs uppercase tracking-wider text-white/80">{item.style}</p>
        <h3 className="text-sm font-semibold">{item.title}</h3>
      </div>
    </div>
  )
}

export default function PreviewGrid() {
  const data = useMemo(() => {
    const styles = ['Cinematic', 'Documentary', 'Motion Graphics', 'TikTok']
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      title: `Edit Showcase #${i + 1}`,
      style: styles[i % styles.length],
      thumb: `https://images.unsplash.com/photo-${1582719478250 + i}?auto=format&fit=crop&w=900&q=60`,
    }))
  }, [])

  return (
    <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Trending Edits</h2>
          <p className="text-zinc-600 dark:text-zinc-400">A quick peek at what creators are crafting right now.</p>
        </div>
        <a href="#explore" className="text-rose-600 hover:text-rose-700">See all</a>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]
      *:mb-4">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
