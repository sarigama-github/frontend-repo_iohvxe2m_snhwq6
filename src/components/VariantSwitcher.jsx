import React from 'react'

const variants = [
  { key: 'technical', label: 'More Technical' },
  { key: 'creative', label: 'More Creative' },
  { key: 'corporate', label: 'More Serious / Corporate' },
]

export default function VariantSwitcher({ variant, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map(v => (
        <button
          key={v.key}
          onClick={() => onChange(v.key)}
          className={[
            'px-3 py-1.5 rounded-full text-sm transition-colors border',
            variant === v.key
              ? 'bg-blue-500 text-white border-blue-400'
              : 'bg-slate-800/60 text-blue-100 border-slate-700 hover:border-blue-400/60 hover:text-white'
          ].join(' ')}
        >
          {v.label}
        </button>
      ))}
    </div>
  )
}
