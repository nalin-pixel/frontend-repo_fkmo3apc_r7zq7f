import { motion } from 'framer-motion'

export default function Showreel() {
  return (
    <section id="showreel" className="relative bg-[#0b0b12] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-white">Showreel</motion.h2>
        <p className="mt-2 text-zinc-400">Highlights from prototypes, tools, and shipped work.</p>

        <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1"
            title="Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
