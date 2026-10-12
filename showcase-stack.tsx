"use client"

import { BeforeAfterSlider } from "./before-after-slider"
import { Sparkles, Video, Layers } from "lucide-react"

const showcases = [
  {
    number: "01",
    tag: "3D CGI Commercial",
    icon: Sparkles,
    title: "Cinematic Eye Reflection Concept",
    description:
      "Transforming raw 3D geometry and unlit clay models into high-impact commercial visuals with photorealistic lighting, cornea refraction, and neon reflections.",
    tools: ["Blender 3D", "Cycles Render", "Procedural Shaders"],
    before: "./before-after/eye-before.jpg",
    after: "./before-after/eye-after.jpg",
    alt: "3D CGI Eye Commercial Study",
  },
  {
    number: "02",
    tag: "Color Grading & Post-Production",
    icon: Video,
    title: "Cinematic Mood & Contrast Styling",
    description:
      "Balancing flat studio footage into deep cinematic shadows, controlled saturation, and stylized color harmonies tailored to grab attention on social feeds.",
    tools: ["DaVinci Resolve", "Color Wheels", "Film Emulation"],
    before: "./before-after/color-before.jpg",
    after: "./before-after/color-after.jpg",
    alt: "Color Grading & Post Production",
  },
  {
    number: "03",
    tag: "Luxury Product Modeling",
    icon: Layers,
    title: "Fine Jewelry 3D Gold Simulation",
    description:
      "Engineering realistic micro-scratches, precious metal roughness, and multi-facet diamond dispersion to produce high-ticket commercial renders.",
    tools: ["Blender 3D", "PBR Shaders", "Studio Lighting"],
    before: "./before-after/gold-before.jpg",
    after: "./before-after/gold-after.jpg",
    alt: "Luxury Gold Chain 3D Simulation",
  },
]

export function ShowcaseStack() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {showcases.map((item) => {
        const Icon = item.icon
        return (
          <article
            key={item.number}
            className="grid gap-8 border border-foreground/15 bg-card/60 p-6 sm:p-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-center lg:gap-12"
          >
            {/* Info Column */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary">
                  <Icon className="size-4" />
                  <span>{item.number} / {item.tag}</span>
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground/60 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Tools chips */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-foreground/10 pt-4">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-foreground/15 bg-background/50 px-2.5 py-1 text-[11px] font-bold text-foreground/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Slider Column */}
            <div className="relative overflow-hidden shadow-2xl">
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                alt={item.alt}
              />
            </div>
          </article>
        )
      })}
    </div>
  )
}
