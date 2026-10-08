import os

with open("app/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()

# Fix duplicates: The block starting with <section className="bg-card px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-14"><p className="eyebrow">Client Feedback</p>
# was inserted twice.
# Let's find the first occurrence and remove it, keeping the second occurrence.

duplicate_str = """      <section className="bg-card px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-14"><p className="eyebrow">Client Feedback</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">What they <span className="text-primary">say.</span></h2></div><Testimonials /></div></section>

      <section className="border-t border-foreground/10 px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[1fr_1fr]"><div className="flex flex-col justify-center"><p className="eyebrow">Estimator</p><h2 className="section-title mt-5 text-4xl sm:text-5xl">Numbers that <span className="text-primary">make sense.</span></h2><p className="mt-6 max-w-md text-lg leading-7 text-foreground/60">Based on industry standards and past performance, use this calculator to estimate the potential returns on your monthly ad spend.</p></div><div><ROICalculator /></div></div></div></section>"""

# Replace the first occurrence with empty string
if page.count(duplicate_str) > 1:
    page = page.replace(duplicate_str, "", 1)

# Fix absolute paths to relative to avoid GitHub Pages subdirectory issues
page = page.replace('href="/AHMED_GAMAL_ELDIN_CV.pdf"', 'href="./AHMED_GAMAL_ELDIN_CV.pdf"')
page = page.replace('beforeImage="/before-after/eye-before.jpg"', 'beforeImage="./before-after/eye-before.jpg"')
page = page.replace('afterImage="/before-after/eye-after.jpg"', 'afterImage="./before-after/eye-after.jpg"')

with open("app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

print("Page updated!")
