import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Variant = 'up' | 'left' | 'right' | 'scale'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: Variant
}

export default function Reveal({ children, className = '', delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-in={shown ? '' : undefined}
      style={{ '--i': delay } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  )
}
