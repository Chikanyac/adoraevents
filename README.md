Adora Events - Multi-file version

Structure:
- index.html (Home)
- about.html
- services.html
- gallery.html (this has the alternating text on top / bottom + small texts ON pictures)
- contact.html
- contract.html
- css/style.css (shared)
- js/main.js (shared)
- images/ -> put your gallery-1.webp ... gallery-10.webp here

How alternating works:
- .work-item = text on top, image below
- .work-item.alt = image on top, text below
- The grid automatically alternates by index
- Small texts ON pictures: .on-image.tl (top-left) and .on-image.br (bottom-right)

To use your local images:
Replace Unsplash URLs in gallery.html and index.html with:
images/gallery-1.webp etc.

All pages share same header/footer for consistency.
