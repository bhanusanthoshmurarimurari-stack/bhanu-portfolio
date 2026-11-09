# Bhanu Santhosh Murari — Premium Full Stack Developer Portfolio

A world-class, production-ready developer portfolio website crafted for **Bhanu Santhosh Murari**, Full Stack Developer. Designed with an editorial luxury aesthetic combining Warm Ivory, Cream, Champagne Gold, Deep Navy, and Charcoal.

---

## ✦ Luxury Design Direction & Palette
- **Warm Ivory:** `#FAF8F3`
- **Cream:** `#F3EDE2`
- **Champagne Gold:** `#C5A46D`
- **Deep Navy:** `#17233B`
- **Charcoal:** `#252525`
- **Pure White:** `#FFFFFF`
- **Typography:** Serif display headers (*Playfair Display* / *Cormorant Garamond*) paired with modern sans-serif body (*Plus Jakarta Sans*) and monospace code accents (*JetBrains Mono*).

---

## ✦ Features & Architecture

1. **Navigation Bar**
   - Custom luxury **BS Monogram** brand badge.
   - Smooth navigation with active section indicator pills.
   - Sticky frosted glass effect with fine gold border upon scrolling.
   - Mobile responsive slide-down menu.
   - Prominent *"Let's Talk"* CTA.

2. **Hero Section**
   - Headline: *"Building Digital Experiences That Make an Impact."*
   - Asymmetrical editorial 2-column layout.
   - Live availability badge: *"Available for New Opportunities"*.
   - Interactive developer code window with syntax highlighting and tab switching (`DeveloperProfile.ts` / `Architecture.config`).
   - One-click snippet copying and direct CTA triggers.

3. **About Me Section**
   - Heading: *"A Little About Me"*.
   - Editorial quote statement framing Bhanu's full-stack philosophy.
   - 3 Core Engineering Pillars: *Code as Craft*, *User-Centric Architecture*, and *Modern Scalability*.
   - Technical focus breakdown with verified foundations.

4. **Technical Skills Section**
   - Editable categories: *Frontend Development*, *Backend Development*, *Database & Storage*, *Programming & Logic*, and *Tools & Technologies*.
   - Interactive category filter tabs.
   - Verified entry tags without artificial percentage bars or fabricated proficiency metrics.

5. **Selected Works (Projects) Section**
   - Heading: *"Selected Works"*.
   - Asymmetric project showcases featuring full-stack architecture previews.
   - Interactive **Project Detail Modal** revealing architectural breakdown, component hierarchies, and GitHub links.
   - Pre-configured editable project placeholders ready for Bhanu's custom repositories.

6. **Academic Journey (Education) Section**
   - Heading: *"Academic Journey"*.
   - Elegant vertical timeline with continuous gold connector line and milestone badges:
     - **Narayana College (2025)**
     - **Sri Chaitanya School (2023)**

7. **Contact Section**
   - Heading: *"Have an Idea? Let's Build Something Together."*
   - Interactive contact form with client-side validation for Full Name, Email Address, Subject, and Message.
   - Functional mailto fallback to `muraribhanusanthosh@gmail.com`.
   - One-click copy email button with instant toast notification.
   - Verified LinkedIn and GitHub cards.
   - Particle confetti celebration effect on message dispatch.

8. **Minimalist Luxury Footer**
   - Monogram emblem, copyright with dynamic year generation, social channels, and the statement:
     *"Designed with creativity. Built with code."*
   - Back to Top smooth scroll button.

9. **Animations & Micro-Interactions**
   - Page load monogram animation.
   - Subtle custom gold trailing cursor for desktop.
   - Framer Motion scroll-reveal and hover effects.
   - Full `prefers-reduced-motion` accessibility support.

---

## ✦ Centralized Data Configuration

All portfolio content is centralized in **`src/data/portfolioData.ts`**. Bhanu can update personal info, skills, projects, or education by simply editing this single file:

```typescript
// src/data/portfolioData.ts
export const personalInfo = {
  name: 'Bhanu Santhosh Murari',
  title: 'Full Stack Developer',
  email: 'muraribhanusanthosh@gmail.com',
  github: 'https://github.com/bhanusanthoshmurari-stack',
  linkedin: 'https://www.linkedin.com/in/bhanu-santhosh-murari-251934368/',
  // ...
};
```

---

## ✦ Getting Started & Commands

### Development Server
```bash
npm run dev
```
Runs the development server locally at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Compiles TypeScript and generates optimized production assets in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## ✦ Deployment

### GitHub Pages
1. In `vite.config.ts`, you can set `base: '/<repository-name>/'`.
2. Push the code to GitHub.
3. Deploy to GitHub Pages or use the GitHub Actions workflow.

### Vercel / Netlify
1. Connect your GitHub repository `bhanusanthoshmurari-stack`.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
