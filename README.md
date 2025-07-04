# Pulse Studio – Creative Agency Web Template

**Pulse Studio** is a sleek, single-page front-end template designed for creative agencies, freelancers, or digital portfolios. It's built with HTML, CSS, and JavaScript — lightweight, responsive, and ready to customize.

## 🌐 Demo Preview

[Live Preview (Paste in your hosting or local server)](#)

---

## 📁 Project Structure

```
pulse-studio-template/
│
├── index.html       # Main HTML file
├── styles.css       # All styling and animations
├── main.js          # Interactivity and transitions
└── assets/          # (Optional) Folder for custom images or fonts
```

---

## 🚀 Features

* 🎯 **Fullscreen Slideshow Hero** with animated transitions
* 📱 **Responsive Navigation** (hamburger menu on mobile)
* 🧩 **Modular Sections**: About, Work, Contact
* ✨ **Gradient Branding + Glassmorphism** effects
* 🔄 **Slide transitions** for content reveal
* ✅ **Client-side Form Validation**
* 🧠 Lightweight and dependency-free

---

## 🧠 How It Works

### 🔁 Slideshow

* 3 slides rotate every 7 seconds.
* Each includes an image, heading, description, and a CTA button.

```js
const slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 7000);
```

---

### 📱 Mobile Navigation

* Opens via hamburger icon
* Closes when a link is clicked
* Smooth vertical transition

```js
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('active');
}
```

---

### 📄 Sections

* `About`, `Work`, and `Contact` are full-screen overlays.
* They slide in when selected and slide up when "Home" is clicked.

```js
function openSection(sectionId) {
  toggleMenu();
  document.querySelectorAll('.section-wrapper').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}
```

---

### 📬 Contact Form

* Includes basic validation:

  * Name: Minimum 2 characters
  * Email: Valid format
  * Message: Minimum 10 characters
* On success: alert message (no real submission)

```js
if (isValid) {
  alert("Message sent successfully!");
}
```

---

## 🎨 Design Notes

* **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
* **Color Palette**:

  * Main: `#ff00cc`
  * Accent: `#3333ff`
  * Background: `#0c0c0c`
* **Effects**:

  * Glassmorphism headers
  * Gradient text
  * Animated button glow
  * Smooth fade/slide transitions

---

## 📦 Customization

* Replace images via the `.slide` and `.work-card` `background-image` / `src` attributes.
* Add more portfolio items by duplicating `.work-card` blocks.
* Hook the form into a backend service (e.g., Formspree, Netlify Forms, PHP handler) for real submissions.

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Custom properties + keyframes)
* Vanilla JavaScript (ES6+)

---

## 🧪 Browser Support

Tested on:

* Chrome ✅
* Firefox ✅
* Safari ✅
* Edge ✅
* Mobile Browsers ✅

---

## 🧑‍🎨 Author

**Mostafa Hana**
[Email](mailto:mostafahanawork@gmail.com)

---

## 📄 License

This template is free to use for personal and commercial projects, but attribution is appreciated.
