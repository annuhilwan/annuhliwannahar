import { useEffect, useState, type CSSProperties } from 'react'

const corners = ['top-6 left-6', 'top-6 right-6 rotate-90', 'bottom-6 right-6 rotate-180', 'bottom-6 left-6 -rotate-90']

const rays = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * Math.PI) / 4
  return {
    x1: 200 + Math.cos(angle) * 80,
    y1: 200 + Math.sin(angle) * 80,
    x2: 200 + Math.cos(angle) * 126,
    y2: 200 + Math.sin(angle) * 126,
    i,
  }
})

export default function Splash() {
  const [hidden, setHidden] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('al-splash') === '1',
  )

  useEffect(() => {
    if (hidden) return
    const id = window.setTimeout(() => {
      setHidden(true)
      sessionStorage.setItem('al-splash', '1')
    }, 1700)
    return () => window.clearTimeout(id)
  }, [hidden])

  return (
    <div
      data-hidden={hidden ? '' : undefined}
      className={`splash fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-deep ${hidden ? 'pointer-events-none' : ''}`}
      aria-hidden="true"
    >
      {corners.map((position, i) => (
        <svg
          key={position}
          viewBox="0 0 100 100"
          className={`absolute w-24 h-24 text-mint/50 ${position}`}
          fill="none"
        >
          <path
            d="M0 74 L26 74 L40 60 L74 60"
            stroke="currentColor"
            strokeWidth="1"
            className="splash-trace"
            style={{ '--i': i } as CSSProperties}
          />
          <circle cx="74" cy="60" r="2.5" fill="#a78bfa" className="splash-pulse" style={{ '--i': i } as CSSProperties} />
        </svg>
      ))}

      <svg viewBox="0 0 400 400" className="w-56 h-56 sm:w-72 sm:h-72 overflow-visible" fill="none">
        {rays.map((ray) => (
          <g key={ray.i}>
            <line
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#5eead4"
              strokeOpacity=".3"
              strokeWidth="1"
              className="splash-trace"
              style={{ '--i': ray.i } as CSSProperties}
            />
            <circle
              cx={ray.x2}
              cy={ray.y2}
              r="2"
              fill="#5eead4"
              className="splash-pulse"
              style={{ '--i': ray.i } as CSSProperties}
            />
          </g>
        ))}

        <g className="splash-ring" style={{ transformOrigin: '200px 200px' }}>
          <polygon points="200,140 252,170 252,230 200,260 148,230 148,170" stroke="#5eead4" strokeOpacity=".75" strokeWidth="1.5" />
          <polygon points="200,152 241,176 241,224 200,248 159,224 159,176" stroke="#5eead4" strokeOpacity=".15" strokeWidth="1" />
        </g>

        <g className="splash-runner" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="140" r="4" fill="#a78bfa" />
        </g>

        <text
          x="200"
          y="210"
          textAnchor="middle"
          className="fill-white font-display text-2xl font-medium"
        >
          &lt;AL/&gt;
        </text>
      </svg>

      <p className="splash-word mt-6 font-display text-[.7rem] text-white/75">ANNUH LIWAN</p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-mint/15">
        <div className="splash-bar h-full w-full bg-gradient-to-r from-teal via-mint to-violet" />
      </div>
    </div>
  )
}
