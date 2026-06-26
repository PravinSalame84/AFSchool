import { useEffect, useRef, useState } from 'react'

/**
 * Animates a numeric value from 0 up to `target` over `duration` ms,
 * starting only when `start` becomes true. Used by <StatCounter />.
 */
export default function useCountUp(target = 0, start = false, duration = 1400) {
  const [value, setValue] = useState(0)
  const frame = useRef(null)
  const startTime = useRef(null)

  useEffect(() => {
    if (!start) return

    const tick = (now) => {
      if (!startTime.current) startTime.current = now
      const progress = Math.min((now - startTime.current) / duration, 1)
      // ease-out cubic for a pleasant deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => frame.current && cancelAnimationFrame(frame.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, duration])

  return value
}
