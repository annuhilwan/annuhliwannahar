import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-14 md:mb-20 ${centered ? 'text-center' : ''}`}>
      <p className={`eyebrow mb-5 ${centered ? '' : 'eyebrow--start'}`}>{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
      <div className={`mt-7 flex ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-24 bg-gradient-to-r from-violet to-transparent" />
      </div>
    </Reveal>
  )
}
