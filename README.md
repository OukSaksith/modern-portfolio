# Modern Portfolio (Next.js 14 + Tailwind)

A clean, modern, and fast portfolio built with Next.js App Router, Tailwind CSS, dark mode, and Framer Motion.

## Quickstart

1. Create a new app directory and add files:
   ```bash
   mkdir modern-portfolio && cd modern-portfolio
   # Add the files from this snippet (or clone your repo if you pushed it)
   ```

2. Install dependencies:
   ```bash
   pnpm i
   # or
   npm i
   # or
   yarn
   ```

3. Run the dev server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Customize your info:
   - Edit `config/site.ts` for name, role, socials, email.
   - Edit `lib/data.ts` for projects, experience, and skills.
   - Replace links, favicon, and images in `public/` as needed.

## Deploy

- Vercel: push to GitHub and import the repo on Vercel.
- Netlify: use Next 14 adapter or deploy via build command `next build` and output from Next on-edge.
- Static export is not recommended for dynamic metadata.

## Tech

- Next.js 14 (App Router)
- Tailwind CSS (dark mode via class)
- Framer Motion (subtle animations)
- next-themes (theme toggle)
- Lucide React (icons)