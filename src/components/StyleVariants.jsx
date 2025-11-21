import React from 'react'

export default function StyleVariants({ variant }) {
  if (variant === 'technical') {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-3">More Technical</h3>
          <ul className="list-disc list-inside text-sm text-blue-100/90 space-y-2">
            <li>Architecture-first narrative: decisions, tradeoffs, and measured outcomes.</li>
            <li>Compact sections with bullet points for capabilities and throughput.</li>
            <li>Emphasis on automation depth, reliability, and SLOs.</li>
          </ul>
        </section>
      </div>
    )
  }

  if (variant === 'creative') {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-3">More Creative</h3>
          <p className="text-blue-100/90 text-sm">
            A touch of metaphor, breathing room in the layout, and a tone that balances craft with imagination.
          </p>
        </section>
      </div>
    )
  }

  if (variant === 'corporate') {
    return (
      <div className="space-y-10">
        <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-3">More Serious / Corporate</h3>
          <ul className="list-disc list-inside text-sm text-blue-100/90 space-y-2">
            <li>Polished, outcome-driven language.</li>
            <li>Clear sections, measurable achievements, and compliance awareness.</li>
            <li>Concise calls-to-action and executive-friendly layout.</li>
          </ul>
        </section>
      </div>
    )
  }

  return null
}
