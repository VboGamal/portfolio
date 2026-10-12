"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ArrowLeftRight } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  alt: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }, [])

  useEffect(() => {
    if (!isDragging) return

    const handleWindowMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX)
    }

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX)
      }
    }

    const handleWindowEnd = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleWindowMouseMove)
    window.addEventListener("mouseup", handleWindowEnd)
    window.addEventListener("touchmove", handleWindowTouchMove, { passive: true })
    window.addEventListener("touchend", handleWindowEnd)

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
      window.removeEventListener("mouseup", handleWindowEnd)
      window.removeEventListener("touchmove", handleWindowTouchMove)
      window.removeEventListener("touchend", handleWindowEnd)
    }
  }, [isDragging, handleMove])

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true)
    handleMove(clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] sm:aspect-video w-full cursor-ew-resize overflow-hidden select-none border border-foreground/15 bg-card"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          handlePointerDown(e.touches[0].clientX)
        }
      }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`After ${alt}`}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before Image (Foreground, Clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={`Before ${alt}`}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute bottom-0 top-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-xl transition-transform active:scale-95">
          <ArrowLeftRight className="size-4" />
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute left-3 top-3 border border-foreground/20 bg-background/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-foreground shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
        Before
      </div>
      <div className="pointer-events-none absolute right-3 top-3 border border-primary/20 bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm sm:right-4 sm:top-4">
        After
      </div>
    </div>
  )
}
