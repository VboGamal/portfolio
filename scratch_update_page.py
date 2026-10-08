import os

with open("app/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()

# 1. Imports
imports_to_add = """
import { ROICalculator } from "@/components/roi-calculator"
import { Testimonials } from "@/components/testimonials"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { ContactForm } from "@/components/contact-form"
import { Download, MessageCircle } from "lucide-react"
"""
page = page.replace('import { useState } from "react"\nimport { ThemeToggle } from "@/components/theme-toggle"', 'import { useState } from "react"\nimport { ThemeToggle } from "@/components/theme-toggle"' + imports_to_add)

# 2. Add Download CV to Header
page = page.replace(
    '<ThemeToggle />\n            <button className="grid size-10 place-items-center',
    '<a href="/AHMED_GAMAL_ELDIN_CV.pdf" target="_blank" className="grid size-10 place-items-center border border-foreground/15 text-foreground hover:bg-foreground/5 transition-colors" aria-label="Download CV"><Download className="size-4" /></a>\n            <ThemeToggle />\n            <button className="grid size-10 place-items-center'
)
page = page.replace(
    '<ThemeToggle />\n          <Link href="#contact" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary md:flex">',
    '<ThemeToggle />\n          <a href="/AHMED_GAMAL_ELDIN_CV.pdf" target="_blank" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground/70 hover:text-primary md:flex">Download CV <Download className="size-4" /></a>\n          <Link href="#contact" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary md:flex">'
)

# 3. Add WhatsApp to Hero buttons
page = page.replace(
    '<Link href="#portfolio" className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-foreground/70 transition hover:border-foreground hover:text-foreground">Explore work <ArrowDownRight className="size-4" /></Link></div>',
    '<Link href="#portfolio" className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-foreground/70 transition hover:border-foreground hover:text-foreground">Explore work <ArrowDownRight className="size-4" /></Link>\n              <a href="https://wa.me/201020004809" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-[#25D366]/20 bg-[#25D366]/10 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#25D366] transition hover:bg-[#25D366] hover:text-white"><MessageCircle className="size-4" /> WhatsApp</a>\n            </div>'
)

# 4. Insert Testimonials & ROI Calculator into About Section
page = page.replace(
    '</div></div></div></motion.section>',
    '</div></div></div></motion.section>\n\n      <section className="bg-card px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-14"><p className="eyebrow">Client Feedback</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">What they <span className="text-primary">say.</span></h2></div><Testimonials /></div></section>\n\n      <section className="border-t border-foreground/10 px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[1fr_1fr]"><div className="flex flex-col justify-center"><p className="eyebrow">Estimator</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">Numbers that <span className="text-primary">make sense.</span></h2><p className="mt-6 max-w-md text-lg leading-7 text-foreground/60">Based on industry standards and past performance, use this calculator to estimate the potential returns on your monthly ad spend.</p></div><div><ROICalculator /></div></div></div></section>'
)

# 5. Insert Before/After Slider into Vision/Services or Portfolio Section
# We'll put it right above Portfolio as a featured showcase
page = page.replace(
    '      <section id="portfolio"',
    '      <section className="px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Visual Case Study</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">From concept<br />to <span className="text-primary">reality.</span></h2></div><p className="max-w-xs text-sm leading-6 text-foreground/50">Drag the slider to compare the raw CGI setup with the final cinematic lighting and grading.</p></div><BeforeAfterSlider beforeImage="/before-after/eye-before.jpg" afterImage="/before-after/eye-after.jpg" alt="Dior CGI Showcase" /></div></section>\n\n      <section id="portfolio"'
)

# 6. Add Contact Form and WhatsApp to Contact Section
page = page.replace(
    '<a className="contact-link" href="tel:+201020004809"><Phone /> +20 102 000 4809</a><p className="contact-link"><MapPin /> Giza, Egypt</p></div></div></div></section>',
    '<a className="contact-link" href="tel:+201020004809"><Phone /> +20 102 000 4809</a><a className="contact-link text-[#25D366]" href="https://wa.me/201020004809" target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a><p className="contact-link mt-4"><MapPin /> Giza, Egypt</p></div><div className="lg:pl-10"><ContactForm /></div></div></div></section>'
)
# Fix grid cols on Contact section to accommodate the form
page = page.replace(
    '<div className="grid gap-14 lg:grid-cols-[1fr_.8fr]"><div><p className="text-xs font-black',
    '<div className="grid gap-14 lg:grid-cols-[1fr_.8fr_1.2fr]"><div><p className="text-xs font-black'
)

with open("app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

print("Page updated with new components!")
