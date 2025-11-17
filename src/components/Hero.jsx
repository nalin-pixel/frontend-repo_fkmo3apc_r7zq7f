import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#0b0b12]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Interactive Unity Projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Building playable worlds with a gamedev mindset
          </h1>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            A portfolio showcasing Unity scenes, gameplay systems, shaders, and tools—presented with a futuristic aesthetic inspired by neon-lit game interfaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="pointer-events-auto inline-flex items-center rounded-md bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-600/30 transition-colors">
              Explore Work
            </a>
            <a href="#showreel" className="pointer-events-auto inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold backdrop-blur">
              Watch Showreel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
