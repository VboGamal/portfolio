import os
import shutil
from PIL import Image

upload_dir = r"C:\Users\Ahmad Gamal\.gemini\antigravity\brain\8a8ffd52-f714-4f99-87e8-cb77a98863ec\.user_uploaded"
public_dir = r"d:\Career\portfolio-main\public"

# Copy PDF
pdf_path = os.path.join(upload_dir, "media_1791475316054_ef9ea87a.pdf")
shutil.copy(pdf_path, os.path.join(public_dir, "AHMED_GAMAL_ELDIN_CV.pdf"))

images = {
    "eye": "media_1791475292606_67934161.png",
    "color": "media_1791475292618_476787cc.png",
    "gold": "media_1791475292645_69f20a72.png"
}

os.makedirs(os.path.join(public_dir, "before-after"), exist_ok=True)

for name, filename in images.items():
    img_path = os.path.join(upload_dir, filename)
    if os.path.exists(img_path):
        img = Image.open(img_path).convert("RGB")
        width, height = img.size
        
        left = img.crop((0, 0, width//2, height))
        right = img.crop((width//2, 0, width, height))
        
        left.save(os.path.join(public_dir, "before-after", f"{name}-before.jpg"), "JPEG")
        right.save(os.path.join(public_dir, "before-after", f"{name}-after.jpg"), "JPEG")
        img.save(os.path.join(public_dir, "before-after", f"{name}-composite.jpg"), "JPEG")

print("Files processed successfully.")
