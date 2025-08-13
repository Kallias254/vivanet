'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomerCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isIntersecting) {
      const duration = 2000 // 2 seconds
      const step = Math.ceil(target / (duration / 16)) // 60 fps

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + step >= target) {
            clearInterval(interval)
            return target
          }
          return prevCount + step
        })
      }, 16)

      return () => clearInterval(interval)
    }
  }, [isIntersecting, target])

  return (
    <div ref={ref} className="text-6xl font-bold text-emerald-600">
      {count.toLocaleString()}+
    </div>
  )
}
