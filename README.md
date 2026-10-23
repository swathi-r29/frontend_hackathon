# Dkoder redesign (React 18, Vite, TypeScript, Framer Motion)

Run: `npm install`, `npm run dev`. Build: `npm run build` (runs `tsc --noEmit` then Vite). Preview: `npm run preview`.
No tests or linter are configured. No environment variables or backend are used.

Routes: `/`, `/learn`, `/hackathon`, `/colleges`, `/mou`. SPA rewrites: `vercel.json`, `public/_redirects`.
Theme: tokens in `src/index.css`, dark layer in `src/theme-dark.css` (yellow actions, purple lighting).
Hero video: `public/video/dkoder-hero.mp4` (identical copy in `public/videos/`), poster `public/images/dkoder-hero-poster.png`. Component: `HeroVideoPlayer` in `src/ui.tsx`. It is muted, looped, has a pause button, and shows the poster under reduced motion or on load failure.
Known limits: the MOU form does not send data anywhere. Pricing and "350+ Problems" in `src/data.ts` need confirming against Dkoder's official source. Hackathon details are placeholders.
