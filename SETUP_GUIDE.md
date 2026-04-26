# 🎯 Complete Setup & Customization Guide

This guide walks you through everything needed to customize and deploy your portfolio.

---

## 📦 Project Structure Overview

```
abdul-roni-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Main page combining all sections
│   └── globals.css              # Global styles & CSS variables
│
├── components/                   # React components
│   ├── sections/
│   │   ├── navbar.tsx           # Sticky navigation with scroll-spy
│   │   ├── hero.tsx             # Hero section with CTAs
│   │   ├── about.tsx            # About section with stat cards
│   │   ├── projects.tsx         # Projects grid
│   │   ├── experience.tsx       # Timeline of experiences
│   │   ├── skills.tsx           # Skills grid with icons
│   │   ├── contact.tsx          # Contact form (Formspree)
│   │   └── footer.tsx           # Footer with links
│   │
│   ├── ui/
│   │   └── button.tsx           # Reusable button component
│   │
│   ├── shared.tsx               # Shared utility components
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── project-card.tsx         # Project card component
│
├── lib/                          # Utilities & data
│   ├── projects.ts              # Projects data array
│   ├── constants.ts             # Skills, experiences, stats
│   └── utils.ts                 # Utility functions
│
├── public/                       # Static assets (favicon, images, etc.)
│
├── .github/
│   └── workflows/ci.yml         # GitHub Actions CI workflow
│
├── Configuration files
│   ├── package.json             # Dependencies & scripts
│   ├── next.config.ts           # Next.js configuration
│   ├── tailwind.config.ts       # Tailwind CSS config
│   ├── postcss.config.mjs       # PostCSS config
│   ├── tsconfig.json            # TypeScript config
│   ├── .eslintrc.json           # ESLint config
│   ├── .prettierrc              # Prettier config
│   ├── vercel.json              # Vercel deployment config
│   ├── .gitignore               # Git ignore rules
│   └── .env.example             # Environment variables template
│
└── Documentation
    ├── README.md                # Main documentation
    ├── QUICK_START.md           # Quick start guide
    └── DEPLOYMENT.md            # Deployment instructions
```

---

## ⚙️ Initial Setup

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- **React 19** - UI library
- **Next.js 15** - Full-stack framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form + Zod** - Form handling
- **Lucide React** - Icons

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## 📝 Customization Guide

### 1. Update Your Information

#### File: `app/layout.tsx`
Update SEO metadata:

```tsx
export const metadata: Metadata = {
  title: "Abdul Roni - Full-stack Web Developer",  // ← Your name & title
  description: "Your description here",            // ← Your tagline
  keywords: ["Your", "Keywords", "Here"],          // ← Your keywords
  // ... update OpenGraph images if needed
};
```

#### File: `lib/constants.ts`
Update your stats and experiences:

```tsx
export const stats = [
  {
    label: "Months Experience",
    value: "4+",           // ← Your experience
    description: "Professional work",
  },
  // ... update other stats
];

export const experiences: Experience[] = [
  {
    id: "your-job-1",
    title: "Your Job Title",
    company: "Company Name",
    location: "Your Location",
    startDate: "Month Year",
    endDate: "Month Year",
    description: ["Your responsibilities..."],
    skills: ["Your", "Skills"],
  },
  // ... add more experiences
];
```

#### File: `lib/projects.ts`
Update your projects:

```tsx
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your Project Name",
    description: "Short description",
    longDescription: "Detailed description...",
    context: "Freelance Project",     // or "Internship", "Personal", etc.
    status: "Delivered",              // or "Ongoing"
    year: 2025,
    technologies: ["Tech1", "Tech2", "Tech3"],
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
    ],
    github: "https://github.com/...",  // Optional
    live: "https://project-url.com",   // Optional
    featured: true,
  },
  // ... add more projects
];

export const skills: Skill[] = [
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  // ... update with your skills
];
```

### 2. Update Navigation & Links

#### File: `components/sections/navbar.tsx`

Update resume link:
```tsx
<a href="https://your-resume-url.pdf">  {/* ← Your resume URL */}
  <Button variant="accent" size="sm">Resolution</Button>
</a>
```

Navigation items are defined in the `navItems` array. Modify to add/remove sections:
```tsx
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // ... add/remove sections
];
```

### 3. Update Contact Form

#### File: `components/sections/contact.tsx`

Replace the Formspree endpoint:
```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  // ↑ Get this from https://formspree.io
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({...}),
});
```

**To get your Formspree ID:**
1. Visit [https://formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy your form ID (e.g., `mwpedorb`)
5. Update in `contact.tsx`

### 4. Update Social Links

#### File: `components/sections/hero.tsx` & `components/sections/footer.tsx`

Update social links:
```tsx
const socialLinks = [
  {
    icon: <Github className="h-4 w-4" />,
    href: "https://github.com/YOUR_USERNAME",  // ← Your GitHub
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    href: "https://linkedin.com/in/YOUR_PROFILE",  // ← Your LinkedIn
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    href: "mailto:your.email@example.com",  // ← Your email
    label: "Email",
  },
];
```

---

## 🎨 Styling & Design Customization

### Update Colors

#### File: `app/globals.css`

Modify CSS color variables:
```css
:root {
  --background: 0 0% 5%;        /* Dark background */
  --primary: 217 91% 60%;       /* Blue accent */
  --accent: 188 100% 50%;       /* Cyan accent */
  --card: 217 32% 17%;          /* Card background */
  /* ... other colors */
}
```

These use HSL (Hue, Saturation, Lightness) format. [try HSLColor.com](https://www.hslpicker.com/) to customize.

### Update Tailwind Config

#### File: `tailwind.config.ts`

Customize breakpoints, animations, fonts:
```ts
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      accent: "hsl(var(--accent))",
    },
    animation: {
      "fade-in": "fadeIn 0.5s ease-in-out",  // Custom animations
    },
    borderRadius: {
      lg: "8px",  // Adjust border radius
    },
  },
}
```

### Update Fonts

#### File: `app/layout.tsx`

Change from Geist to another fonts from `geist/font`:
```tsx
import { GeistSans, GeistMono } from "geist/font";

// or import from other sources:
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html lang="en" className={inter.className}>
      {/* ... */}
    </html>
  );
}
```

---

## 🔧 Advanced Customization

### Add New Sections

1. **Create new component:** `components/sections/new-section.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../shared";

export function NewSection() {
  return (
    <Container id="new-section">
      <SectionHeading title="Your Section Title" />
      {/* Your content here */}
    </Container>
  );
}
```

2. **Import in `app/page.tsx`:**
```tsx
import { NewSection } from "@/components/sections/new-section";

export default function Home() {
  return (
    <main>
      {/* ... existing sections */}
      <NewSection />
      {/* ... */}
    </main>
  );
}
```

3. **Add to navbar:** Update `navItems` in `components/sections/navbar.tsx`

### Add Blog Section

1. **Create blog structure:**
```bash
mkdir -p app/blog
touch app/blog/page.tsx
touch app/blog/[slug]/page.tsx
```

2. **Install MDX support** (optional):
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

3. **Create MDX files:** `content/blog/post-1.mdx`

### Add Dark Mode Specific Styles

```tsx
// In components
className="bg-background dark:bg-slate-900"

// Or in CSS
.component {
  @apply dark:bg-slate-900 dark:text-white;
}
```

### Add Custom Animations

1. **Define in `tailwind.config.ts`:**
```ts
keyframes: {
  "bounce-slow": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-20px)" },
  },
}
```

2. **Use in component:**
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Animated content
</motion.div>
```

---

## 📱 Responsive Design

The portfolio uses Tailwind's responsive prefixes:

```tsx
<div className="
  text-sm           // Mobile: small
  md:text-base      // Tablet: medium
  lg:text-lg        // Desktop: large
  xl:text-xl        // Large desktop: XL
">
  Responsive text
</div>
```

### Test Responsiveness

```bash
npm run dev
# Press F12 → Toggle device toolbar (Ctrl+Shift+M)
# Test on different screen sizes
```

---

## 🧪 Testing & Validation

### Type Checking

```bash
npm run type-check
```

Ensures all TypeScript is valid.

### Build Testing

```bash
npm run build
npm run start
```

Tests production build locally (runs on http://localhost:3000).

### ESLint

```bash
npm run lint
```

Checks code quality.

---

## 🌐 Environment Variables

#### File: `.env.local`

Create from `.env.example`:

```bash
cp .env.example .env.local
```

Add your variables:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mwpedorb
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Note:** `NEXT_PUBLIC_` prefix makes variables available in browser (safe for public data only).

---

## 🚀 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions including:
- Deploy to Vercel (recommended - free)
- Connect custom domain
- Enable analytics
- Monitor performance
- Automatic CI/CD with GitHub

---

## 💡 Pro Tips

### 1. Git Workflow
```bash
# Create feature branch
git checkout -b feature/add-blog

# Make changes
git add .
git commit -m "Add blog section"

# Push to GitHub
git push origin feature/add-blog

# Create Pull Request on GitHub
# (Vercel auto-creates preview deployment)

# Merge to main after approval
# (Vercel auto-deploys to production)
```

### 2. Performance Optimization
```bash
# Check bundle size
npm run build

# Look for optimizations in `.next` folder
# Large files might be compressed unnecessarily

# Use dynamic imports for heavy components
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("@/components/heavy"));
```

### 3. SEO Improvements
```tsx
// Add JSON-LD structured data
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdul Roni",
      url: "https://your-domain.vercel.app",
      jobTitle: "Full-stack Web Developer",
    }),
  }}
/>
```

### 4. Analytics
Add Vercel Analytics to track metrics:
1. Vercel Dashboard → Project
2. Settings → Analytics
3. Enable "Web Vitals"

---

## 📚 Resources

- **Next.js Docs:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [https://framer.com/motion](https://www.framer.com/motion/)
- **React Hook Form:** [https://react-hook-form.com](https://react-hook-form.com/)
- **Formspree:** [https://formspree.io](https://formspree.io)
- **TypeScript:** [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs/)

---

## ❓ FAQ

**Q: Can I change the theme?**
A: Yes! Edit CSS variables in `app/globals.css` or Tailwind config.

**Q: How do I add more projects?**
A: Add to the `projects` array in `lib/projects.ts`.

**Q: Can I add authentication/blog?**
A: Yes, but requires more setup. Use Next.js with database (Supabase, MongoDB, etc.)

**Q: Is this free to deploy?**
A: Yes! Vercel has a free tier perfect for portfolios.

**Q: Can I use this template for someone else?**
A: Yes! It's open source. Just update the information.

---

## 🤝 Need Help?

- Check [README.md](README.md) for general questions
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment issues
- Review error messages - they're usually helpful!
- Check browser console (F12) for JavaScript errors
- Google the error message - usually has Stack Overflow answers

---

**You're all set! Start customizing and share your portfolio with the world. 🚀**

---

*Last Updated: 2026*
