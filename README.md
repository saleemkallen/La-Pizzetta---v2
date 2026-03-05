# La Pizzetta

Authentic Italian cuisine website for La Pizzetta — pizza, pasta, and bar in Hackenviertel, Munich.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Languages:** English, German

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy to Netlify

1. **Push to GitHub** (this repository)
2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - "Add new site" → "Import an existing project"
   - Connect your GitHub and select this repo
3. **Configure (optional):**
   - Build command: `pnpm run build` (or `npm run build`)
   - Publish directory: `.next` (Netlify's Next.js plugin handles this)
   - Add environment variable: `SITE_URL` = your production URL (e.g. `https://la-pizzetta-tal.de` or your Netlify URL)
4. Deploy!

## SEO & AI Agent Files

- **robots.txt** – `/robots.txt` (generated)
- **sitemap.xml** – `/sitemap.xml` (generated)
- **ai.txt** – `/ai.txt` – AI interaction guidelines
- **llms.txt** – `/llms.txt` – Site overview for LLMs

## Project Structure

```
├── app/
│   ├── [locale]/     # Localized routes (en, de)
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/
├── lib/
├── public/
│   ├── ai.txt
│   └── llms.txt
└── netlify.toml
```
