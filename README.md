# 4Clean Website

Professional cleaning & junk removal website for 4Clean — Calgary, Alberta.

Built with **Next.js 14** (Static Export) + **TypeScript** + **Tailwind CSS**

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production (static export)
npm run build
# Output goes to /out folder
```

---

## 📁 Project Structure

```
4clean/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles
│   ├── page.tsx            # Homepage
│   ├── residential/        # Residential cleaning page
│   ├── commercial/         # Commercial cleaning page
│   ├── junk-removal/       # Junk removal page
│   ├── service-areas/      # Service areas page
│   ├── terms/              # Terms & conditions
│   └── privacy/            # Privacy policy
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer
├── public/                 # Static assets (logo, images)
├── next.config.js          # Static export config
└── tailwind.config.ts
```

---

## 🌐 Deployment Guide

### Option A: Vercel (Recommended — easiest)

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Go to **Domains** → Add `4clean.ca`
5. Update your domain's DNS:
   - Type: `A` → `76.76.21.21`
   - Type: `CNAME` → `www` → `cname.vercel-dns.com`

### Option B: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add custom domain `4clean.ca` in site settings

---

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Blue Primary | `#1A56DB` |
| Blue Dark | `#0D3B8C` |
| Beige | `#C4A97D` |

---

## 📞 Contact Info (in code)

- Phone: `+1 (587) 966-6786`
- Email: `support@4clean.ca`
- Hours: Mon–Sat 9am–10pm | Sunday Closed

---

## ✏️ How to Edit Content

All content is in the page files inside `/app/`. Each page has the text data at the top as arrays/objects — easy to update without touching the layout.

To add your logo image:
1. Place your logo file in `/public/logo.png`
2. Update `Navbar.tsx` to use `<Image src="/logo.png" ... />` instead of the text logo

---

## 📦 Adding More Features Later

- **Contact Form**: Add a form using [Formspree](https://formspree.io) or [EmailJS] (free, no backend needed)
- **Online Booking**: Integrate [Calendly](https://calendly.com) embed
- **Reviews**: Add Google Reviews widget
- **Analytics**: Add Google Analytics or Plausible

---

*Built for 4Clean · Calgary, Alberta · 4clean.ca*
