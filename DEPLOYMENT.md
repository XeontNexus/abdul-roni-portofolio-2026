# Deployment Guide - Abdul Roni Portfolio

Complete step-by-step guide to deploy your portfolio website to production.

---

## 🚀 Quick Export/Setup Commands

### 1. Initial Setup
```bash
# Install dependencies
npm install

# Run development server locally
npm run dev

# Visit http://localhost:3000 to preview
```

### 2. Before Deployment

Ensure you have:
- [ ] Updated your personal information in files
- [ ] Updated project data in `lib/projects.ts`
- [ ] Updated skills in `lib/constants.ts`
- [ ] Set up contact form with Formspree
- [ ] Created `.env.local` file from `.env.example`
- [ ] Tested locally with `npm run dev`

### 3. Production Build
```bash
# Create production build
npm run build

# Test production build locally
npm run start

# Visit http://localhost:3000 to verify
```

---

## ☁️ Deploy to Vercel (Recommended - Free & Easiest)

### Method 1: Automatic Deployment via GitHub (Easiest)

**Prerequisites:**
- GitHub account
- Your project pushed to GitHub

**Steps:**

1. **Create GitHub repository:**
   ```bash
   # If not already done
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/abdul-roni-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - Framework: Next.js (auto-detected)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Environment Variables: (optional)
     - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your form ID
   - Click "Deploy"

4. **Done!** Vercel will:
   - Build your site
   - Deploy to a live URL
   - Show you the URL (something like `https://abdul-roni-portfolio.vercel.app`)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   # First deployment (connects to account)
   vercel

   # Follow the prompts:
   # - Link to GitHub account
   # - Choose project name
   # - Confirm settings
   ```

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Method 3: Using Environment Variables

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add each variable:

   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT = https://formspree.io/f/mwpedorb
   NEXT_PUBLIC_SITE_URL = https://your-custom-domain.vercel.app
   ```

2. **Redeploy:**
   - Changes automatically trigger when you push to GitHub
   - Or manually trigger in Vercel Dashboard

---

## 🔗 Custom Domain Setup

After deployment to Vercel:

1. **Buy domain** (Namecheap, GoDaddy, Google Domains, etc.)
2. **Add domain to Vercel:**
   - Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain name
3. **Update DNS records** (follows Vercel's instructions)
4. **Wait 24-48 hours** for DNS propagation

---

## 📋 Pre-Deployment Checklist

### Content Review
- [ ] Name and title are correct
- [ ] All project descriptions are accurate
- [ ] Contact email is correct
- [ ] GitHub and LinkedIn URLs are correct
- [ ] Location information is accurate
- [ ] GPA and experience details are current
- [ ] All skill icons display correctly
- [ ] Responsive design works on mobile

### Technical Checks
- [ ] No console errors: `npm run dev` → F12 Console
- [ ] No TypeScript errors: `npm run type-check`
- [ ] Build succeeds: `npm run build` (completes without errors)
- [ ] Contact form works (test submit)
- [ ] All links work (internal and external)
- [ ] Images load correctly on all pages
- [ ] Dark mode toggle works
- [ ] Animations are smooth
- [ ] Navigation scroll-spy works

### SEO & Meta
- [ ] Meta title is compelling
- [ ] Meta description is accurate
- [ ] Open Graph image is set (if custom image available)
- [ ] Favicon is visible
- [ ] robots.txt allows indexing (default: allows)
- [ ] sitemap.xml exists (Next.js generates)

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images are optimized
- [ ] No large files being loaded
- [ ] CSS and JS are minified
- [ ] Lighthouse score is good (90+)

---

## 🔄 Continuous Deployment

After the initial setup, every time you:

1. **Make changes locally:**
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push origin main
   ```

2. **Vercel automatically:**
   - Detects the push
   - Runs build
   - Deploys changes
   - Updates your live site
   - Sends deployment notification

---

## 🐛 Troubleshooting

### Build fails on Vercel but works locally

**Solution:**
- Clear local `.next` folder: `rm -rf .next`
- Rebuild locally: `npm run build`
- Push again: `git add . && git commit && git push`

### Contact form not working

**Solution:**
1. Verify Formspree endpoint in `components/sections/contact.tsx`
2. Create new form at [formspree.io](https://formspree.io)
3. Update endpoint in code
4. Test with `npm run dev`

### Images not loading in production

**Solution:**
- Ensure all images are in `/public` folder
- Reference as `/image-name.ext` (not `./public/...`)
- Verify image URLs in components

### Theme toggle not working

**Solution:**
- Check localStorage is enabled in browser
- Test in incognito mode (isolates storage)
- Verify `ThemeToggle` component in navbar

### Domain not resolving

**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records in domain registrar match Vercel settings
- Check Vercel domain status (should show "verified")

---

## 📊 Analytics & Monitoring

### Enable Vercel Analytics

1. **In Vercel Dashboard:**
   - Project Settings → Analytics
   - Enable Web Vitals
   - Enable Audience Analytics

2. **Monitor:**
   - Page performance metrics
   - User engagement
   - Error tracking

### Google Analytics (Optional)

1. **Create Google Analytics account**
2. **Add to `app/layout.tsx`:**
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout() {
     return (
       <>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </>
     )
   }
   ```

---

## 🔐 Security Considerations

✅ Already included in your setup:
- HTTPS enforced (Vercel auto)
- Security headers (in `vercel.json`)
- No sensitive data in code
- Environment variables for secrets
- Form sanitization

### Additional Security Tips

1. **Never commit secrets:**
   ```bash
   # Good - Use environment variables
   NEXT_PUBLIC_API_KEY=value_in_vercel
   
   # Bad - Don't do this in code!
   const API_KEY = "secret123"
   ```

2. **Keep dependencies updated:**
   ```bash
   npm audit
   npm update
   ```

---

## 🎯 Next Steps After Deployment

1. **Share your portfolio:**
   - LinkedIn profile
   - GitHub profile
   - Resume/CV
   - Job applications
   - Personal networking

2. **Monitor and maintain:**
   - Check Vercel analytics weekly
   - Monitor error tracking
   - Respond to contact form messages
   - Update portfolio as you complete new projects

3. **Continuous improvement:**
   - Add new projects
   - Update skills as you learn
   - Improve design if needed
   - Optimize performance

---

## 📞 Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Formspree Docs:** https://formspree.io/docs
- **GitHub Pages Alternative:** https://pages.github.com

---

## 💡 Pro Tips

1. **Redeploy specific version:**
   ```bash
   # List deployments
   vercel list
   
   # Promote specific deployment to production
   vercel promote <deployment-url>
   ```

2. **Preview before deploying:**
   - Vercel auto-creates preview for each branch
   - Share preview URL before merging to main

3. **Rollback if needed:**
   - Vercel Dashboard → Previous Deployments
   - Click deployment and select "Promote to Production"

4. **Performance optimization:**
   - Use `npm run build` locally to test production build
   - Check build output size
   - Monitor Core Web Vitals in Vercel

---

## ✅ Deployment Verification Checklist

After deployment, verify:

1. **Visit your site:**
   - [ ] All sections load
   - [ ] Navigation works
   - [ ] No 404 errors

2. **Test interactions:**
   - [ ] Contact form submits successfully
   - [ ] All links work
   - [ ] Theme toggle works
   - [ ] Mobile responsive

3. **Check SEO:**
   - [ ] Title visible in browser tab
   - [ ] Meta description visible in search previews
   - [ ] Open Graph image shows in social shares

4. **Performance:**
   - [ ] Pages load quickly
   - [ ] No console errors (F12)
   - [ ] Lighthouse score 90+

---

**🎉 Congratulations! Your portfolio is live!**

Share it with the world and start getting opportunities!

---

*Last Updated: 2026*
