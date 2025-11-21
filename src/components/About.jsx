import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            I started out as a regular software engineer — writing features, debugging, and wondering why some servers have personalities. Curiosity pulled me deeper into DevOps, Cloud, and Data Engineering.
          </p>
          <p>
            These days I architect AWS environments, write Terraform modules, design ETL pipelines, and stream data from APIs that never sleep. I enjoy the quiet satisfaction of watching an automated pipeline run smoothly — and the challenge of fixing it when it doesn’t.
          </p>
          <p>
            Operating in fintech, I experiment with ideas around payments, data transparency, and how technology can make life easier.
          </p>
        </div>
      </div>
    </section>
  )
}
