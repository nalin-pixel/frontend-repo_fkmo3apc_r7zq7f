import { useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30">
              <Gamepad2 className="h-5 w-5 text-violet-300" />
            </span>
            <span className="text-lg font-semibold tracking-wide">Unity Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 text-sm font-semibold transition-colors">
              Hire Me
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-md hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-zinc-300 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 text-sm font-semibold">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
