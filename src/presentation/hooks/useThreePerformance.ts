'use client'

import { useEffect, useState } from 'react'

export const useThreePerformance = () => {
  const [dpr, setDpr] = useState(1)
  const [performance, setPerformance] = useState('high')

  useEffect(() => {
    const checkPerformance = () => {
      const fps = 60 // You can implement actual FPS measurement if needed
      
      if (fps < 30) {
        setDpr(1)
        setPerformance('low')
      } else if (fps < 45) {
        setDpr(1.5)
        setPerformance('medium')
      } else {
        setDpr(2)
        setPerformance('high')
      }
    }

    checkPerformance()
  }, [])

  return { dpr, performance }
} 