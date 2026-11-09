## 1. Project Description
**Supra Tbilisi** is a responsive multi-page web application dedicated to authentic Georgian cuisine, wine culture, and hospitality. Developed as an interactive continuation of our Midterm website, this Endterm project extends the original HTML5, CSS3, and Bootstrap 5 layout with dynamic Vanilla JavaScript and jQuery functionality.

## 2. Group Members & Contributions
* **Member 1 Kabiev Imangali:** JavaScript Fundamentals & Dynamic Menu (`menu.html`, `js/menu.js`) — `menuItems` and `cart` arrays, `forEach` and `for...of` loops, dynamic table rendering, real-time dish search, and interactive cart counter/total calculation.
* **Member 2 Zhakiya Omar:** Form Validation & Global UI Features (`contact.html`, `index.html`, `js/validation.js`, `js/main.js`) — custom client-side booking form validation, `localStorage`-persisted Dark/Light theme switcher, and the interactive "Dish of the Day" showcase.
* **Member 3 Alimkhanov Aldiyar:** jQuery Integration, Interactive Media, Documentation & Deployment (`about.html`, `gallery.html`, `js/jquery-features.js`, `README.md`) — interactive heritage tabs, expandable Qvevri story section (`slideToggle`), category-filtered photo gallery, full-screen Lightbox modal (`fadeIn`/`fadeOut`), DOM traversal, and GitHub Pages deployment.

## 3. Live Demo Link
* **Published Website (GitHub Pages):** [https://ultradodoshka.github.io/endWEB/](https://ultradodoshka.github.io/endWEB/)
* **GitHub Repository:** [https://github.com/Ultradodoshka/endWEB](https://github.com/Ultradodoshka/endWEB)

## 4. Technical Features Implemented (Endterm)
* **JavaScript Fundamentals:**
  * Arrays of objects (`menuItems`, `cart` in `js/menu.js`, and `dishes` in `js/main.js`).
  * Loops (`forEach` for DOM rendering and event binding; `for...of` for calculating cart total).
  * Reusable functions with parameters and return values (`renderMenu`, `calculateTotal`, `addToCart`, `validateField`, `validateEmail`, `validatePhone`, `getTodayAsString`).
* **DOM Manipulation & Interactive UI Features (7 Features):**
  1. **Dark / Light Theme Switcher** with `localStorage` persistence across all 5 pages (`js/main.js`).
  2. **"Dish of the Day" Interactive Rotator** on the Home page (`index.html`, `js/main.js`).
  3. **Dynamic Menu Rendering & Live Search** by dish name (`menu.html`, `js/menu.js`).
  4. **Interactive Order Cart** with item counter and automatic price calculation in GEL (`menu.html`, `js/menu.js`).
  5. **Interactive Heritage Tabs** on the About page (`about.html`, `js/jquery-features.js`).
  6. **Expandable Qvevri Wine Story** using slide animation (`about.html`, `js/jquery-features.js`).
  7. **Category-Filtered Photo Gallery & Fullscreen Lightbox Modal** (`gallery.html`, `js/jquery-features.js`).
* **Events & Interaction:**
  * Native `addEventListener` (`DOMContentLoaded`, `input`, `click`) and jQuery event handlers (`click`, `submit`, `change`, `keydown`, `hover`), utilizing the `event` object and `event.preventDefault()`.
* **Custom Form Validation (`contact.html`, `js/validation.js`):**
  * Validates