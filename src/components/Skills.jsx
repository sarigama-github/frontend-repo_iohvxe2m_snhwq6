import React from 'react'

const groups = [
  {
    title: 'DevOps',
    items: ['CI/CD pipelines', 'Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'GitOps', 'Automated deployments']
  },
  {
    title: 'Cloud Engineering',
    items: ['AWS (EC2, S3, VPC, IAM, Lambda, CloudWatch)', 'Hybrid cloud', 'Orchestration', 'Scaling patterns']
  },
  {
    title: 'Data Engineering',
    items: ['Talend ETL', 'Snowflake', 'MongoDB', 'API ingestion', 'Real-time streaming', 'Analytics workflows']
  },
  {
    title: 'Fintech Engineering',
    items: ['Secure backend flows', 'Open Banking', 'Payment lifecycles', 'Prototyping', 'Compliance-aware design']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map(g => (
            <div key={g.title} className="rounded-xl border border-slate-700/80 bg-slate-800/50 p-5">
              <h3 className="text-blue-200 font-medium mb-3">{g.title}</h3>
              <ul className="space-y-1.5 text-sm text-blue-100/90">
                {g.items.map(i => (<li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
