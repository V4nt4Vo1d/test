
import { useEffect, useRef } from 'react'

export default function EmberParticles() {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      s: Math.random() * 0.8 + 0.2
    }))

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255,140,0,0.8)"
      particles.forEach(p => {
        p.y -= p.s
        if (p.y < 0) p.y = canvas.height
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={ref} className="particles"></canvas>
}
