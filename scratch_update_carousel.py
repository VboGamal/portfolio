import os

with open("app/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()

# Replace import
page = page.replace(
    'import { BeforeAfterSlider } from "@/components/before-after-slider"',
    'import { ShowcaseCarousel } from "@/components/showcase-carousel"'
)

# Replace component
page = page.replace(
    '<BeforeAfterSlider beforeImage="./before-after/eye-before.jpg" afterImage="./before-after/eye-after.jpg" alt="Dior CGI Showcase" />',
    '<div className="-mx-5 sm:mx-0"><ShowcaseCarousel /></div>'
)

with open("app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

print("Updated page.tsx with carousel.")
