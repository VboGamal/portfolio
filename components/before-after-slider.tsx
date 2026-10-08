"use client"

import { useState, useRef, useEffect } from "react"
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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchend", handleMouseUp)
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full cursor-ew-resize overflow-hidden select-none border border-foreground/15"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        setIsDragging(true)
        handleMove(e.clientX)
      }}
      onTouchStart={(e) => {
        setIsDragging(true)
        handleMove(e.touches[0].clientX)
      }}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt={`After ${alt}`} 
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      
      {/* Before Image (Foreground, Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt={`Before ${alt}`} 
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: "100vw", maxWidth: containerRef.current?.offsetWidth || "100%" }}
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute bottom-0 top-0 w-1 bg-primary/80"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <ArrowLeftRight className="size-4" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute left-4 top-4 bg-background/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
        Before
      </div>
      <div className="absolute right-4 top-4 bg-primary px-2 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground">
        After
      </div>
    </div>
  )
}
