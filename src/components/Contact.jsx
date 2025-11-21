import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
        <p className="text-blue-100/80 mb-6">If you want to collaborate, build something serious, or explore an idea — I’m around.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:hello@example.com" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Email me</a>
          <a href="#" className="px-5 py-2.5 rounded-lg bg-slate-800/70 text-blue-100 border border-slate-700 hover:border-blue-400/60 transition">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
