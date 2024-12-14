'use client'

import { useThreePerformance } from '@/src/presentation/hooks/useThreePerformance'
import { Canvas } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Suspense } from 'react'
import { LoadingState } from '../LoadingState'
import { PerformanceOptimizer } from '../PerformanceOptimizer'
import { ParticleField } from './DynamicBackground'

/**
 * HeroScene Component
 * Renders a dynamic 3D scene with particle effects and post-processing
 * - Uses React Three Fiber for 3D rendering
 * - Implements post-processing effects (Bloom and Depth of Field)
 * - Includes performance optimization with useThreePerformance hook
 */
export function HeroScene() {
  const { dpr, performance } = useThreePerformance()

  return (
    <div className="absolute inset-0 w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'black' }}
        dpr={dpr}
      >
        <Suspense fallback={<LoadingState />}>
          <PerformanceOptimizer />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 0, 5]} intensity={0.4} />
          <ParticleField />
          <EffectComposer enabled={performance !== 'low'}>
            <DepthOfField 
              focusDistance={0.01} 
              focalLength={0.02} 
              bokehScale={1.2} 
            />
            <Bloom 
              intensity={0.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 pointer-events-none" />
    </div>
  )
} 