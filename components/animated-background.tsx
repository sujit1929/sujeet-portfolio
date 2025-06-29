"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    const particleCount = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 6,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Animated blobs */}
      <div
        className="blob w-72 h-72 bg-purple-300 dark:bg-purple-600"
        style={{
          top: "10%",
          left: "10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob w-96 h-96 bg-blue-300 dark:bg-blue-600"
        style={{
          top: "50%",
          right: "10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="blob w-80 h-80 bg-pink-300 dark:bg-pink-600"
        style={{
          bottom: "10%",
          left: "50%",
          animationDelay: "4s",
        }}
      />
    </div>
  )
}
