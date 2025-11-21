import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(600px_300px_at_110%_10%,rgba(59,130,246,0.2),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:py-28">
        <p className="text-blue-300/90 text-sm tracking-widest uppercase mb-5">Hero</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Oluwasijibomi Albert Ogundipe</span>.
        </h1>
        <p className="mt-5 text-blue-100/90 text-lg max-w-3xl">
          I build things that actually work in the real world… cloud platforms, data systems, automation pipelines, and the occasional fintech idea that won’t leave my head.
        </p>
        <p className="mt-3 text-blue-100/80 max-w-3xl">
          I’ve spent a little over 8 years in IT across telecom, fintech, and cloud engineering — solving messy problems and turning them into something structured. Something dependable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Get in touch</a>
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-slate-800/70 text-blue-100 border border-slate-700 hover:border-blue-400/60 transition">See projects</a>
        </div>
      </div>
    </section>
  )
}
