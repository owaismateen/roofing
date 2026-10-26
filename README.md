# Roofing Company — High-Converting Next.js Website

> **Tagline:** Roofs Built to Last 30+ Years.

A modern, high-converting, fully responsive web application built for **Roofing Company** using Next.js 14+ / 16 (App Router), TypeScript, and Tailwind CSS. Fully optimized and deploy-ready for **Vercel**.

---

## 🚀 How to Deploy to Vercel

There are two easy methods to deploy this website to Vercel:

### Method 1: Deploy via GitHub (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Roofing Company website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** -> **"Project"**.
   - Select your GitHub repository.
   - Framework Preset will automatically detect **Next.js**.
   - Build and Output Settings are configured automatically (`next build`).
   - (Optional) In **Environment Variables**, you can add:
     - `NEXT_PUBLIC_SITE_URL`: Your custom production domain (e.g. `https://yourdomain.com`). If omitted, Vercel automatically uses your `.vercel.app` deployment URL.
   - Click **"Deploy"**. Your website will be live with free SSL in less than 2 minutes!

---

### Method 2: Deploy directly via Vercel CLI

1. Install the Vercel CLI globally if you haven't already:
   ```bash
   npm install -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the simple prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your personal or team account.
   - Link to existing project? `N`
   - What's your project's name? `roofing-company`
   - In which directory is your code located? `./`
   - Want to modify settings? `N`
4. To deploy straight to production:
   ```bash
   vercel --prod
   ```

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand palette & 10px rounded corners
- **Typography:** `next/font` with Barlow Condensed (bold uppercase modern headings) and Inter (body)
- **Icons:** `lucide-react`
- **Animation:** `framer-motion` (subtle scroll fade-in only)
- **Images:** `next/image` with WebP/AVIF formatting, local authentic before/after pairs, responsive sizes, and lazy loading
- **Forms & Validation:** `react-hook-form` + `zod` submitting to `/api/quote`
- **SEO & Structured Data:** Next.js Metadata API, dynamic `sitemap.xml`, `robots.txt`, `RoofingContractor` LocalBusiness JSON-LD, and `FAQPage` JSON-LD schema
- **Deployment:** Vercel-ready with zero additional configuration required

---

## 🎨 Brand Design System

| Element | Specification | Hex / Value |
|---|---|---|
| Primary Navy | Hero background, brand accent, text | `#0F2A43` |
| Accent Orange | Action buttons & key highlights only | `#F26B21` |
| Dark Slate | Secondary dark background, footer | `#1E2A35` |
| Light Surface | Page background, card backgrounds | `#F5F7FA` |
| Pure White | Card surfaces, clean containers | `#FFFFFF` |
| Trust Green | Badges, checkmarks, guarantee indicators | `#2E9E6B` |
| Border Radius | Consistent brand curvature | `10px` |
| Font (Headings) | Barlow Condensed (600, 700, 800, 900) | Bold, strong, architectural |
| Font (Body) | Inter (400, 500, 600, 700) | Crisp, highly legible |

---

## 🛡 Strict Imagery Rules Compliance

This codebase strictly adheres to:
- **No living things:** No people, men, women, children, faces, hands, silhouettes, or avatars.
- **No animals or pets.**
- **Used exclusively:** Finished roof exteriors, architectural shingle textures, standing seam metal panels, clay and concrete tile roofs, gutter drainage systems, and abstract architectural schematics.
- **Reviews:** Use 5-star ratings, quote icons, and male initial badges ("Mark T.", "James L.", "David K."). No profile photos.

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── quote/
│   │       └── route.ts          # Quote submission API route with Zod validation
│   ├── globals.css               # Global Tailwind directives & architectural clip paths
│   ├── layout.tsx                # Root layout with fonts, JSON-LD schema, TopBar & Header
│   ├── page.tsx                  # Home page with all required sections in order
│   ├── robots.ts                 # Dynamic robots.txt with auto-detected Vercel URL
│   └── sitemap.ts                # Dynamic sitemap.xml with auto-detected Vercel URL
├── components/
│   ├── BeforeAfterSlider.tsx     # Client component: interactive comparison slider
│   ├── FAQ.tsx                   # Client component: accordion FAQ with JSON-LD schema
│   ├── FinalCTA.tsx              # Orange-to-navy banner with id="contact", large phone & quick form
│   ├── FinalCTAForm.tsx          # Client component: 3-field quick inspection request
│   ├── Footer.tsx                # Dark slate footer with contact, hours & developer credit
│   ├── Gallery.tsx               # 6 finished projects + 2 matching-angle before/after sliders
│   ├── Header.tsx                # Sticky navigation header with mobile drawer & contact link
│   ├── Hero.tsx                  # High-end roof background with custom select dropdown & 5-field form
│   ├── HeroQuoteForm.tsx         # Client form: React Hook Form + Zod, custom chevron arrow
│   ├── HowItWorks.tsx            # 4 numbered horizontal steps with duration chips
│   ├── Materials.tsx             # 4 cards (Shingles, Metal, Tile, Flat) with textures
│   ├── MobileStickyBar.tsx       # Bottom fixed bar on mobile ("Call Now" & "Get Quote")
│   ├── Reviews.tsx               # 3 review cards with male names, quote icons & initial badges
│   ├── ScrollAnimationWrapper.tsx# Light Framer Motion viewport fade-in
│   ├── ServiceAreas.tsx          # 12 cities grid + vector schematic coverage map
│   ├── Services.tsx              # 6 service cards with lift & orange hover border
│   ├── TopBar.tsx                # Phone, free inspection alert, operating hours
│   ├── TrustStrip.tsx            # White strip with 4 key credibility statistics
│   └── WarrantyFinancing.tsx     # 2-column warranty checkmarks & milestone billing
├── lib/
│   ├── data.ts                   # Single source of truth: all text, FAQs, services & reviews
│   ├── utils.ts                  # Tailwind class merge utility
│   └── validations.ts            # Zod validation schemas for forms
├── public/
│   └── images/
│       └── gallery/              # High-res authentic before-and-after roof pairs
├── tailwind.config.ts            # Brand colors, typography, shadows & radius configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Dependencies & scripts
```
