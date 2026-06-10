import { useMemo } from 'react'
import './BackgroundAnimation.css'

type ShapeType = 'circle' | 'square' | 'triangle' | 'ring' | 'cross'

interface Star {
  id: number
  left: number
  top: number
  size: number
  driftDuration: number
  twinkleDuration: number
  driftDelay: number
  twinkleDelay: number
  driftX: number
  driftY: number
}

interface Shape {
  id: number
  type: ShapeType
  left: number
  top: number
  size: number
  duration: number
  delay: number
  dx1: number
  dy1: number
  dx2: number
  dy2: number
  dx3: number
  dy3: number
  rotation: number
  opacity: number
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function createStars(count: number): Star[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: randomBetween(2, 98),
    top: randomBetween(2, 98),
    size: randomBetween(1.5, 3.5),
    driftDuration: randomBetween(12, 28),
    twinkleDuration: randomBetween(2, 5),
    driftDelay: randomBetween(0, 10),
    twinkleDelay: randomBetween(0, 4),
    driftX: randomBetween(-40, 40),
    driftY: randomBetween(-50, 50),
  }))
}

const shapeTypes: ShapeType[] = ['circle', 'square', 'triangle', 'ring', 'cross']

function createShapes(count: number): Shape[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
    left: randomBetween(5, 95),
    top: randomBetween(5, 95),
    size: randomBetween(14, 42),
    duration: randomBetween(18, 40),
    delay: randomBetween(0, 12),
    dx1: randomBetween(-60, 60),
    dy1: randomBetween(-70, 70),
    dx2: randomBetween(-80, 80),
    dy2: randomBetween(-90, 90),
    dx3: randomBetween(-50, 50),
    dy3: randomBetween(-60, 60),
    rotation: randomBetween(0, 360),
    opacity: randomBetween(0.08, 0.22),
  }))
}

export function BackgroundAnimation() {
  const stars = useMemo(() => createStars(35), [])
  const shapes = useMemo(() => createShapes(14), [])

  return (
    <div className="bg-animation" aria-hidden>
      {stars.map((star) => (
        <span
          key={`star-${star.id}`}
          className="bg-animation__star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            ['--drift-x' as string]: `${star.driftX}px`,
            ['--drift-y' as string]: `${star.driftY}px`,
            animationDuration: `${star.driftDuration}s, ${star.twinkleDuration}s`,
            animationDelay: `${star.driftDelay}s, ${star.twinkleDelay}s`,
          }}
        />
      ))}

      {shapes.map((shape) => (
        <span
          key={`shape-${shape.id}`}
          className={`bg-animation__shape bg-animation__shape--${shape.type}`}
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            ['--dx1' as string]: `${shape.dx1}px`,
            ['--dy1' as string]: `${shape.dy1}px`,
            ['--dx2' as string]: `${shape.dx2}px`,
            ['--dy2' as string]: `${shape.dy2}px`,
            ['--dx3' as string]: `${shape.dx3}px`,
            ['--dy3' as string]: `${shape.dy3}px`,
            ['--rotation' as string]: `${shape.rotation}deg`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
