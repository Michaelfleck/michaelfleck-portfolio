# Michael Fleck — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS v4**.

Dark, editorial single-page design featuring an interactive particle-mesh hero,
animated typing role, scroll-reveal sections, a work timeline, project cards, and
a contact form.

## Tech stack

- **React 18** (function components, hooks)
- **Vite 6** (dev server + build)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- Plain CSS design system in `src/index.css` (design tokens, layout, components)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
portfolio-react/
├─ index.html               # Vite entry; loads fonts (Space Grotesk + JetBrains Mono)
├─ vite.config.js           # React + Tailwind plugins
├─ public/
│  ├─ favicon.svg
│  └─ resume/Michael_Fleck_Resume.pdf
└─ src/
   ├─ main.jsx              # React root
   ├─ App.jsx               # page composition
   ├─ index.css             # full design system + component styles
   └─ components/
      ├─ Navbar.jsx         # sticky nav + active-section highlight
      ├─ MobileMenu.jsx     # full-screen mobile menu
      ├─ ScrollProgress.jsx # top scroll-progress bar
      ├─ RevealOnScroll.jsx # fade/slide-in-on-scroll wrapper
      ├─ ImageSlot.jsx      # image / placeholder component
      ├─ Footer.jsx
      └─ sections/
         ├─ Home.jsx        # hero, particle canvas, typed role, marquee
         ├─ About.jsx       # statement, skills grid, experience/education timeline
         ├─ Projects.jsx    # project cards
         └─ Contact.jsx     # contact channels + form
```

## Adding your own images

The portrait and project thumbnails are already wired to these paths — just drop
the files into `public/` and they appear (a styled placeholder shows until then):

| Image | Put it here |
| --- | --- |
| Portrait | `public/portrait.jpg` |
| Project 1 | `public/projects/reddit-spotify.png` |
| Project 2 | `public/projects/swine-app.png` |
| Project 3 | `public/projects/plant-shop.png` |

To change a path, edit the `src` prop in `src/components/sections/Home.jsx`
(portrait) or the `image` field in the `projects` array in
`src/components/sections/Projects.jsx`.

## Contact form (EmailJS)

The form sends real email via [EmailJS](https://www.emailjs.com) — no backend
needed. To enable it:

1. Create a free EmailJS account and add an **Email Service** and an **Email
   Template**. In the template, use these variables (they match the form field
   `name`s): `{{name}}`, `{{email}}`, `{{message}}`.
2. Copy `.env.example` to `.env` and fill in your three values:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
3. Restart `npm run dev`. Submissions now send; the form shows a success or
   error message. (`.env` is git-ignored so your keys stay out of the repo — set
   the same three variables in your host's dashboard when you deploy.)

## Things to personalize

- **Email** address and **LinkedIn** link in `src/components/sections/Contact.jsx`
  (LinkedIn currently points to `#`).

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages). Build with `npm run build`
and deploy the `dist/` folder. For GitHub Pages under a sub-path, set `base` in
`vite.config.js` to your repo name.
