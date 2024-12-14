'use client'

import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Mesh, Points } from 'three'

/**
 * BrandShape Component
 * Renders a subtle branded background plane with animation
 * - Rotates slowly over time
 * - Uses additive blending for a glowing effect
 */
const BrandShape = () => {
  const mesh = useRef<Mesh>(null)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current!.rotation.y = time * 0.1
  })

  return (
    <mesh ref={mesh} scale={[15, 15, 1]} position={[0, 0, -5]}>
      <planeGeometry />
      <meshBasicMaterial 
        color="#29d1e0"
        transparent
        opacity={0.05}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

/**
 * ParticleField Component
 * Creates an animated field of colored particles
 * - Uses brand colors for particles
 * - Implements spherical distribution with inner radius
 * - Animates rotation and movement
 */
export const ParticleField = () => {
  const points = useRef<Points>(null)
  const particleCount = 1000

  // Memoized particle positions and colors
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const brandColors = [
      new THREE.Color('#29d1e0').multiplyScalar(0.8), // Cyan
      new THREE.Color('#a2d719').multiplyScalar(0.8), // Green
      new THREE.Color('#f29b1b').multiplyScalar(0.8), // Orange
      new THREE.Color('#ee0672').multiplyScalar(0.8)  // Pink
    ]

    // Generate spherical particle distribution
    for (let i = 0; i < particleCount; i++) {
      const radius = 10
      const innerRadius = 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      const r = Math.max(innerRadius, radius * Math.random())
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const color = brandColors[i % brandColors.length]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  // Animate particle field
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    points.current!.rotation.y = time * 0.05
    points.current!.rotation.x = Math.sin(time * 0.1) * 0.1
  })

  return (
    <group>
      <BrandShape />
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={particlePositions.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
} 