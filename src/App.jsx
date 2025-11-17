import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Showreel from './components/Showreel'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Showreel />
        <Contact />
        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Unity Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="/test" className="hover:text-white">System Check</a>
              <span className="text-zinc-700">•</span>
              <a href="#" className="hover:text-white">Download Resume</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
