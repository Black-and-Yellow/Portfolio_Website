import { useEffect, useRef } from 'react'

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
