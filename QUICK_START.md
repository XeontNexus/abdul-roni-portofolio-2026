# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Super Quick (5 min)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser to http://localhost:3000
# Done! Your portfolio is running locally
```

## 📝 Customize (5 min)

1. **Update personal info:**
   - Edit `lib/constants.ts` - skills, experience, stats
   - Edit `lib/projects.ts` - your projects
   - Edit `components/sections/navbar.tsx` - resume link
   - Edit `app/layout.tsx` - SEO metadata

2. **Update contact:**
   - Get Formspree form ID from https://formspree.io
   - Update endpoint in `components/sections/contact.tsx`
   - Replace form ID: `https://formspree.io/f/YOUR_ID`

## 🚀 Deploy (3 min)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main

# 2. Go to https://vercel.com/dashboard
# 3. Click "Add New..." → "Project" 
# 4. Import your GitHub repo
# 5. Click "Deploy"
# Done!
```

## ✅ Verify

- [ ] Site loads at your new URL
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] Light/dark mode toggles
- [ ] All links work

That's it! 🎉

---

See `DEPLOYMENT.md` for detailed deployment instructions.
