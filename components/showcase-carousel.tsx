"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BeforeAfterSlider } from './before-after-slider'

const items = [
  {
    before: "./before-after/eye-before.jpg",
    after: "./before-after/eye-after.jpg",
    alt: "Dior CGI Showcase"
  },
  {
    before: "./before-after/color-before.jpg",
    after: "./before-after/color-after.jpg",
    alt: "Color Grading"
  },
  {
    before: "./before-after/gold-before.jpg",
    after: "./before-after/gold-after.jpg",
    alt: "Gold Chain Render"
  }
]

export function ShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item, index) => (
            <div className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_80%] md:flex-[0_0_60%]" key={index}>
              <BeforeAfterSlider 
                beforeImage={item.before} 
                afterImage={item.after} 
                alt={item.alt} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollPrev}
        className="absolute -left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-foreground/15 bg-background text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground md:-left-12"
        aria-label="Previous showcase"
      >
        <ChevronLeft className="size-5" />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute -right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-foreground/15 bg-background text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground md:-right-12"
        aria-label="Next showcase"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  )
}
