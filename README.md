# Airforce School Educational & Cultural Society — React Website

A fast, modular, fully responsive React + Vite + Tailwind website for a K‑12
school network, built in the visual style of the layout you referenced
(podareducation.org) — same kind of structure (hero, stats, enquiry form,
programs, initiatives, awards carousel, FAQs, locations, etc.) — but with
**original placeholder content/branding** so you can safely make it your own
without any copyright concerns. Swap in your real brand name, copy, and
images using the steps below and it becomes "your" site.

Colors are taken directly from your screenshot (`#6789A6 → #161E25`) plus the
`#BAE2EE` background you specified.

---

## 1. Requirements

- Node.js 18+ and npm (check with `node -v` / `npm -v`)

## 2. Setup

```bash
# 1. Unzip the project, then cd into it
cd Airforce School-edu

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build      # outputs static files into /dist
npm run preview    # preview the production build locally
```

The `/dist` folder can be deployed to any static host (Vercel, Netlify,
Cloudflare Pages, GitHub Pages, S3, your own server, etc.) — no Node.js
server is needed in production, it's a static SPA.

---

## 4. Project Structure

```
src/
  data/             ← ALL editable content lives here (no JSX!)
    siteConfig.js    – brand name, contact info, socials, CTAs, feature flags
    navigation.js    – the entire header menu (add/remove/rename items here)
    stats.js          – homepage counters
    studentJourney.js – the 6 "signature programs" feature cards
    initiatives.js    – sister-venture cards
    achievements.js   – awards carousel
    news.js            – blog/news posts
    faqs.js             – FAQ accordion content
    locations.js        – state → city → campus data (powers the enquiry
                            form's cascading dropdowns AND the Locations page)
    whyUsTabs.js         – the 5 tabs on the "Why Us" page
    admissionSteps.js    – the 5-step admissions timeline
    testimonials.js       – alumni quotes

  hooks/
    useOnScreen.js     – IntersectionObserver hook (scroll-reveal + counters)
    useCountUp.js       – animates numbers counting up

  components/
    ui/        ← small, generic, reusable building blocks
                  (Button, Card, Input, Select, Modal, Accordion, Carousel,
                  SectionHeading, StatCounter, BlobIcon, PageHero, etc.)
    layout/    ← Header, Navbar, Footer, FloatingButtons, Logo, Layout
    forms/     ← EnquiryFormFields.jsx (the shared lead form used both
                  inline on pages AND inside the global popup modal)
    sections/  ← homepage sections, each self-contained & data-driven
                  (Hero, AboutSnapshot, EnquiryForm, StudentJourney,
                  Initiatives, Achievements, Philosophy, InnovationCentre,
                  LatestNews, FAQSection, LocationsStrip, etc.)

  pages/      ← one file per route (Home, About, WhyUs, Admissions,
                  Locations, Blog, Alumni, Contact, PrivacyPolicy, Terms,
                  NotFound)

  context/
    EnquiryModalContext.jsx  – global state so ANY button anywhere
                                 (header, floating button, brochure link)
                                 can open the same enquiry popup

  App.jsx        – route table
  main.jsx       – React + Router root
  index.css      – global CSS tokens + shared utility classes
```

This separation means:
- **Rebrand the whole site** → edit `src/data/siteConfig.js` only.
- **Change the menu** → edit `src/data/navigation.js` only.
- **Add a campus / state** → edit `src/data/locations.js` only.
- **Restyle colors globally** → edit `src/theme/muiTheme.js` and the CSS
  tokens in `src/index.css`. Shared surfaces and page backgrounds are
  centralized there.
- **Add a brand-new page** → create `src/pages/NewPage.jsx`, add one
  `<Route>` in `App.jsx`, add one entry in `src/data/navigation.js`.

## 5. Replacing placeholder content with real content

1. **Brand name & contact info** → `src/data/siteConfig.js`
2. **Real logo** → replace the inline SVG in
   `src/components/layout/Logo.jsx` with an `<img src="/logo.png" />`
   (drop your logo file into the `public/` folder first).
3. **Photos instead of abstract illustrations** → the site currently uses a
   custom `<BlobIcon />` illustration system (no external images at all —
   keeps the site extremely fast and avoids any copyright/licensing risk
   from stock photography). To use real photos instead, drop images into
   `public/images/` and swap `<BlobIcon ... />` for an `<img>` tag wherever
   you'd like — most are inside `src/components/sections/*.jsx`.
4. **Real campus list** → `src/data/locations.js`
5. **Real news/blog posts** → `src/data/news.js` (or later wire this up to a
   CMS / API instead of static data — the `news` array is the only thing a
   `Blog.jsx`/`LatestNews.jsx` component needs).
6. **Form backend** → `src/components/forms/EnquiryFormFields.jsx` and the
   contact form in `src/pages/Contact.jsx` currently simulate a submission
   (client-side validation + success state, no data is sent anywhere). Wire
   the `handleSubmit` function to your real backend, a service like
   Formspree, or an API route once you have one.

## 6. Notes on dependencies

- **react-router-dom** – client-side routing
- **lucide-react** – icon set (tree-shaken, very light)
- **framer-motion** – used for page motion, carousels, and staggered
  reveals while keeping interactions smooth
- **@mui/material** – the UI system, theme tokens, component primitives,
  and responsive behavior

## 7. Accessibility & performance notes

- All interactive elements have visible focus states (`.focus-ring`) and
  `aria-*` attributes where relevant.
- Respects `prefers-reduced-motion`.
- No external image requests at all by default → fast first paint.
- Fully responsive from 320px mobile up through large desktop.
