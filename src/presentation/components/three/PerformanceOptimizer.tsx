'use client'

import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function PerformanceOptimizer() {
  const { gl } = useThree()

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }, [gl])

  return null
} 