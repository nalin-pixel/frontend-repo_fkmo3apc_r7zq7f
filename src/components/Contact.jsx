import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) setStatus('Message sent!')
      else setStatus(data.detail || 'Failed to send')
    } catch (err) {
      setStatus('Network error')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b0b12] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="text-zinc-400 mt-2">Tell me about your project—gameplay systems, tools, shaders, or full prototypes.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500" />
          <input name="email" required type="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500" />
          <textarea name="message" required placeholder="What are we making?" rows="5" className="md:col-span-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center rounded-md bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 text-sm font-semibold" type="submit">Send</button>
            <span className="text-sm text-zinc-400">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
