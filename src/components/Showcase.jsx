import { motion } from 'framer-motion'
import { Badge } from 'lucide-react'

const projects = [
  {
    title: 'Procedural Dungeon Generator',
    description: 'Cellular automata, A* pathfinding, and modular rooms with dynamic lighting.',
    tags: ['Unity', 'C#', 'Procedural'],
    media: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1968&auto=format&fit=crop',
  },
  {
    title: 'Holographic UI Toolkit',
    description: 'Runtime UI system with shaders, data binding, and tweened interactions.',
    tags: ['UI', 'Shaders', 'Toolkit'],
    media: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Physics-Based Grapple System',
    description: 'Rope simulation with constraints, camera assists, and traversal metrics.',
    tags: ['Physics', 'Systems', 'Gameplay'],
    media: 'https://images.unsplash.com/photo-1546447147-3fc2b8181aa5?q=80&w=1973&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#0b0b12] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">A curated selection of gameplay systems and tooling I built for prototypes and shipped titles.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-semibold">Request a Demo</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.media} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-zinc-300 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wide rounded-full bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
