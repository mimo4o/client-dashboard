# Client Onboarding Dashboard

A premium, editorial-quality client onboarding dashboard template. Built with Next.js, Tailwind CSS v4, and Framer Motion.

Dark, immersive design with grid textures, corner bracket frames, 3D tilt cards, parallax images, animated counters, and scroll-triggered reveals.

## Quick Start

### Option 1: AI-Powered Setup (Recommended)

Copy the prompt from `PROMPT.md` into Claude Code or any AI with terminal access. It will:
1. Ask you questions about your studio, client, and project
2. Clone this repo
3. Customize everything with your answers
4. Run the dev server

### Option 2: Manual Setup

```bash
git clone https://github.com/waviboy1/client-onboarding-dashboard.git
cd client-onboarding-dashboard
npm install
npm run dev
```

Open http://localhost:3000

Edit `src/lib/project-data.ts` with your content and update the accent color in `src/app/globals.css`.

## Customization

All content lives in **two files**:

| File | What to change |
|------|---------------|
| `src/lib/project-data.ts` | All text, pricing, timeline, deliverables, images |
| `src/app/globals.css` | Accent color (lines 8-9: `--color-accent`) |

Do not edit component files unless you want to change the design itself.

## Deploy

Push to GitHub and connect to Vercel, or:

```bash
npx vercel
```

Add a custom domain like `proposal.yourstudio.com` in Vercel settings.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Credit

Template by [@bywaviboy](https://instagram.com/bywaviboy)
