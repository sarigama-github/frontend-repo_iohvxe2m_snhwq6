import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Templates from './components/Templates'
import Contact from './components/Contact'
import VariantSwitcher from './components/VariantSwitcher'
import StyleVariants from './components/StyleVariants'

function App() {
  const [variant, setVariant] = useState('technical')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      {/* Top gradient and subtle grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(59,130,246,0.06),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148,163,184,0.25) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow ring-1 ring-blue-300/30" />
            <span className="text-white font-medium">O. A. Ogundipe</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-blue-100/80 hover:text-white">About</a>
            <a href="#skills" className="text-blue-100/80 hover:text-white">Skills</a>
            <a href="#projects" className="text-blue-100/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-blue-100/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Variant switcher and explanation */}
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-white font-semibold">Style Variants</h2>
          <VariantSwitcher variant={variant} onChange={setVariant} />
        </div>
        <div className="mt-4">
          <StyleVariants variant={variant} />
        </div>
      </section>

      {/* Content sections */}
      <About />
      <Skills />
      <Projects />
      <Templates />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-blue-300/60">
          Built for showcasing engineering work with multiple tone options. If you want, I can produce the full written text for all three styles.
        </div>
      </footer>
    </div>
  )
}

export default App
