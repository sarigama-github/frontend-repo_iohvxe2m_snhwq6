import React from 'react'

function TemplateCard() {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-5">
      <h3 className="text-white font-medium">Project Title</h3>
      <p className="text-blue-200/90 text-sm mt-1">Short one-liner describing what the project solves.</p>
      <p className="text-blue-100/80 text-sm mt-2">Quick story of why you built it and what problem it addresses.</p>
      <p className="text-blue-200/80 text-xs mt-3">Tools Used: AWS, Terraform, Docker, X, Y…</p>
    </div>
  )
}

function ExampleCard() {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-5">
      <h3 className="text-white font-medium">AI FX Trading Bot</h3>
      <p className="text-blue-200/90 text-sm mt-1">A real-time trading system for XAUUSD with cloud deployment and alerting.</p>
      <p className="text-blue-100/80 text-sm mt-2">Built it to test strategy logic and improve automated decision systems.</p>
      <p className="text-blue-200/80 text-xs mt-3">Tools Used: Python, AWS Lambda, DynamoDB, Alerting Engine</p>
    </div>
  )
}

export default function Templates() {
  return (
    <section id="templates" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-xl font-semibold text-white mb-6">Structured Project Card Templates</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <TemplateCard />
          <ExampleCard />
        </div>
      </div>
    </section>
  )
}
