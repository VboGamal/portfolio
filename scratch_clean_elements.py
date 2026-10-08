import os

with open("app/page.tsx", "r", encoding="utf-8") as f:
    page = f.read()

# 1. Remove the Notion UI mockup window which covers the screenshot
notion_window = '<div className="notion-window"><div className="flex gap-2"><span /><span /><span /></div><div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="notion-line w-4/5" /><div className="notion-line w-3/5" /><div className="notion-line w-2/3" /></div><div className="mt-8 grid grid-cols-3 gap-3"><div className="notion-card" /><div className="notion-card" /><div className="notion-card" /></div></div>'

page = page.replace(notion_window, '')

# 2. Remove the "BASED IN Giza, Egypt" overlapping box in the hero
giza_box = '<div className="absolute -bottom-5 -left-5 border border-foreground/20 bg-background px-5 py-4"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-foreground/50">Based in</p><p className="mt-1 text-sm font-bold">Giza, Egypt</p></div>'

page = page.replace(giza_box, '')

with open("app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page)

print("Removed overlapping elements.")
