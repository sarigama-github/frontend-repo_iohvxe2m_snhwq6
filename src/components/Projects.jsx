import React from 'react'

const projects = [
  {
    title: 'AWS DevOps CI/CD for a Flask App',
    oneLiner: 'End-to-end CI/CD with Docker, Jenkins, and Terraform to deliver to AWS without drama.',
    story: 'A practical demonstration of modern DevOps flow: push code and watch it flow to AWS reliably.',
    tools: ['AWS', 'Terraform', 'Docker', 'Jenkins']
  },
  {
    title: 'Financial ETL Pipeline with Talend',
    oneLiner: 'Robust Talend pipeline for extracting, transforming, and loading financial datasets.',
    story: 'The real win was reliability and repeatability for analytics.',
    tools: ['Talend', 'Snowflake', 'AWS']
  },
  {
    title: 'Reddit API Streaming into MongoDB',
    oneLiner: 'Streaming live Reddit data into MongoDB for real-time analysis.',
    story: 'A good mix of API handling, automation, and data patterns.',
    tools: ['Python', 'MongoDB', 'Streaming']
  },
  {
    title: 'AI-Powered FX Trading Bot',
    oneLiner: 'Cloud-deployed bot for XAUUSD strategies with alerts and automation.',
    story: 'Taught a lot about building and operating live trading systems.',
    tools: ['Python', 'AWS Lambda', 'DynamoDB']
  },
  {
    title: 'Hybrid Cloud with Azure Arc',
    oneLiner: 'Unified governance and control across environments via Azure Arc.',
    story: 'Explored hybrid patterns for compliance and management.',
    tools: ['Azure Arc', 'Kubernetes']
  },
  {
    title: 'Fintech Concept: BillSplit UK',
    oneLiner: 'Fair, simple group bill sharing with Open Banking for UK users.',
    story: 'Evolving idea focused on natural UX and transparency.',
    tools: ['Open Banking', 'Prototype']
  }
]

function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-5 hover:border-blue-500/40 transition group">
      <h3 className="text-white font-medium mb-1">{p.title}</h3>
      <p className="text-blue-200/90 text-sm mb-2">{p.oneLiner}</p>
      <p className="text-blue-100/80 text-sm mb-3">{p.story}</p>
      <div className="flex flex-wrap gap-2">
        {p.tools.map(t => (
          <span key={t} className="px-2 py-1 rounded-md text-xs bg-slate-900/60 border border-slate-700 text-blue-200">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <a href="#templates" className="text-sm text-blue-300 hover:text-white transition">See templates</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
