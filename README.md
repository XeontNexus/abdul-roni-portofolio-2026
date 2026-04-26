# Abdul Roni - Full-stack Web Developer Portfolio

Welcome to my professional portfolio website! This is a modern, responsive single-page portfolio showcasing my skills, projects, and experience as a full-stack web developer.

**Live Demo:** [abdulroni-portfolio.vercel.app](https://abdulroni-portfolio.vercel.app)

---

## ✨ Features

- **Modern Design**: Clean, minimal design with a dark mode default and smooth animations
- **Fully Responsive**: Perfect on all devices - mobile, tablet, and desktop
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Dark/Light Mode**: Theme toggle for user preference
- **Sticky Navigation**: Scroll-spy navbar with smooth navigation
- **Contact Form**: Working contact form integrated with Formspree
- **Type-Safe**: Full TypeScript support for robust development
- **Accessible**: WCAG compliant with proper semantic HTML

---

## 🚀 Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (for styling)
- **shadcn/ui** (UI components)
- **Framer Motion** (animations)
- **React Hook Form + Zod** (form validation)

### Deployment
- **Vercel** (optimized for Next.js)

---

## 📁 Project Structure

```
abdul-roni-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining sections
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/                 # Reusable UI components
│   │   └── button.tsx
│   ├── project-card.tsx    # Project card component
│   ├── theme-toggle.tsx    # Theme switcher
│   └── shared.tsx          # Shared utility components
├── lib/
│   ├── projects.ts         # Projects data
│   ├── constants.ts        # Constants & data
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── vercel.json            # Vercel configuration
└── .gitignore
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Steps

1. **Clone the repository:**
```bash
git clone https://github.com/XeontNexus/abdul-roni-portfolio.git
cd abdul-roni-portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup (Optional):**

Create a `.env.local` file in the root directory:
```env
# Optional - for future API integrations
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

4. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📝 Customization Guide

### Update Personal Information

**app/layout.tsx** - Update metadata:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ... other metadata
};
```

**lib/projects.ts** - Update projects array with your projects

**lib/constants.ts** - Update skills, experiences, and stats

**components/sections/navbar.tsx** - Update Resume button link:
```tsx
<a href="YOUR_RESUME_URL">
```

### Styling Customization

**tailwind.config.ts** - Modify color scheme:
```ts
colors: {
  primary: "hsl(var(--primary))",
  accent: "hsl(var(--accent))",
  // ...
}
```

**app/globals.css** - Update CSS variables:
```css
:root {
  --primary: 217 91% 60%;
  --accent: 188 100% 50%;
  /* ... */
}
```

### Contact Form

By default, the contact form uses **Formspree**. Update the endpoint in `components/sections/contact.tsx`:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  // ...
});
```

Get your Formspree form ID at [formspree.io](https://formspree.io)

---

## 🚀 Deployment to Vercel

### Option 1: Using Vercel UI (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option 3: Manual Configuration

The `vercel.json` file is already configured. Just push to GitHub and connect to Vercel.

---

## 🔧 Build & Production

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm run start
```

### Run type checking:
```bash
npm run type-check
```

---

## 📊 Performance Optimizations

✅ **Next.js Image Optimization** - Images are automatically optimized  
✅ **Code Splitting** - Automatic by Next.js  
✅ **CSS Optimization** - Tailwind CSS purges unused styles  
✅ **Font Optimization** - Using `next/font` (Geist)  
✅ **SEO Optimized** - Metadata and OpenGraph tags  
✅ **Mobile Optimized** - Responsive design  
✅ **Lazy Loading** - Components load on demand  

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🎨 Color Scheme

The portfolio uses a professional dark theme by default:

| Element | Color | Use |
|---------|-------|-----|
| Background | `#0d0d12` (Near Black) | Page background |
| Foreground | `#f2f2f5` (Off White) | Text |
| Primary | `#3d8eff` (Blue) | Main accent |
| Accent | `#00d4ff` (Cyan) | Highlight accent |
| Card | `#1a1a24` (Dark Slate) | Card backgrounds |

---

## 🔐 Security

- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ HTTPS enforced on Vercel
- ✅ Next.js security headers enabled
- ✅ Form validation on client and server

---

## 📧 Contact Form Integration

The contact form uses **Formspree** for email delivery. No backend required!

**To set up:**
1. Visit [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update the endpoint in `components/sections/contact.tsx`

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙋 Support

Have questions? Feel free to:
- 📧 Email: abdulroni0616@gmail.com
- 💼 LinkedIn: [linkedin.com/in/abdul-roni-872106252](https://linkedin.com/in/abdul-roni-872106252)
- 🐙 GitHub: [github.com/XeontNexus](https://github.com/XeontNexus)

---

## 🎯 Quick Tips

### To modify animations:
Edit the `animation` sections in `tailwind.config.ts` and use Framer Motion props in components.

### To add more projects:
Add entries to the `projects` array in `lib/projects.ts`

### To customize fonts:
Update `app/layout.tsx` to use different fonts from `geist/font`

### To add a blog section:
Create a new MDX integration or add a `/blog` route in the app directory.

---

**Made with ❤️ by Abdul Roni**

Last Updated: 2026
