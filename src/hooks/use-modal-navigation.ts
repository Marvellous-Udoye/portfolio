"use client"

import { useState } from "react"

export const useModalNavigation = (dataLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextItem = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % dataLength)
  }

  const prevItem = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + dataLength) % dataLength)
  }

  return {
    currentIndex,
    direction,
    nextItem,
    prevItem,
  }
}
