# Supra Tbilisi - Georgian Restaurant Website

**Midterm project** - multi-page responsive website built with HTML5, CSS3 and Bootstrap 5.

## Topic
A website for *Supra Tbilisi*, a fictional Georgian restaurant. It presents the restaurant, its menu and atmosphere, and lets guests send a booking request.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home - hero, signature dishes, why dine with us |
| `about.html` | Story of the restaurant and timeline |
| `menu.html` | Menu table, dietary notes, wine list |
| `gallery.html` | Image gallery |
| `contact.html` | Booking form, address and opening hours |

## Features Implemented
- **Navigation:** Bootstrap navbar on every page (collapses on mobile), active page highlighted.
- **Semantic HTML5:** `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `address`, `footer`.
- **HTML elements:** headings, paragraphs, ordered/unordered lists, links, images, `div` and `span`.
- **Table:** menu table with caption, `thead`/`tbody`, `scope` attributes (`menu.html`).
- **Form:** booking form with text, email, date, time, select and textarea (`contact.html`).
- **CSS:** custom properties, class and ID selectors, consistent colors (wine red + gold) and fonts (Playfair Display, Lato).
- **Flexbox:** hero, timeline. **Grid:** features section and gallery.
- **Positioning:** `fixed` header and booking button, `relative`/`absolute` hero overlay and gallery captions.
- **Responsive:** media queries at 992px (tablet) and 576px (mobile); Bootstrap grid (`row`, `col-*`) and utilities (spacing, text alignment, buttons, containers).

## Structure
```
supra/
  index.html  about.html  menu.html  gallery.html  contact.html
  css/style.css
  images/*.jpg
  README.md
```

## Deployment
Published with GitHub Pages
Bootstrap and Google Fonts load from CDN, so an internet connection is required.
