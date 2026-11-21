import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}'

type RotatingTextProps = {
  words: string[]
  interval?: number
}

export default function RotatingText({ words, interval = 2800 }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState(words[0] ?? '')
  const [glitching, setGlitching] = useState(false)
  const frame = useRef(0)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => window.clearInterval(id)
  }, [words.length, interval, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const target = words[index] ?? ''
    let step = 0
    const total = 14

    const run = () => {
      if (step === 0) setGlitching(true)
      step += 1
      const settled = Math.floor((target.length * step) / total)
      setDisplay(
        target
          .split('')
          .map((char, i) =>
            char === ' ' || i < settled ? char : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(''),
      )

      if (step < total) {
        frame.current = requestAnimationFrame(run)
      } else {
        setDisplay(target)
        setGlitching(false)
      }
    }

    frame.current = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame.current)
  }, [index, words, reducedMotion])

  const text = reducedMotion ? (words[index] ?? '') : display

  return (
    <span className={`glitch text-mint ${glitching ? 'is-glitching' : ''}`} data-text={text} aria-label={words[index]}>
      {text}
    </span>
  )
}
