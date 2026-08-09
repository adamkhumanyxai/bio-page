# AGENTS.md

## Commands
- `npm ci` — install (lockfile is committed; don't use `npm install`).
- `npm run dev` — Next dev (Turbopack) on `http://localhost:3000`.
- `npm run lint` — ESLint, flat config in `eslint.config.mjs` (Next core-web-vitals + TS presets).
- `npm run build` — production build. **This is also the typecheck** — there is no `tsc` script and no separate typecheck step.
- No test framework is configured. Don't invent `npm test` commands.

## Verification order
`npm run lint` → `npm run build`. Build catches type errors.

## Environment
- `.env.local` is gitignored (only `.env.example` is committed). Copy and fill it.
- Both vars are `NEXT_PUBLIC_*` because they're consumed client-side in `components/VoiceCloneModal.tsx`:
  - `NEXT_PUBLIC_SITE_URL` — canonical prod URL; used by `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`. Falls back to `https://adamkratiuk.com`.
  - `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` — public ElevenLabs Conversational AI agent ID. Intentionally public (standard embed pattern); do **not** treat as a secret.
- For production, set both in Vercel project settings — `.env.local` is not deployed.

## Architecture
- Single-page site. `app/page.tsx` is the only route; everything else is composed from `components/*` into one client tree.
- `app/page.tsx` is `'use client'` because the voice modal needs React state — intentional, not a candidate for server-component refactor.
- Content (timeline, projects) lives in `lib/data.ts` (`TIMELINE`, `PROJECTS`). Edit copy there, not in component JSX.
- Voice twin: `components/VoiceCloneModal.tsx` uses `@elevenlabs/react` (`ConversationProvider` + `useConversation`) over WebRTC. The agent's knowledge/system prompt lives in the **ElevenLabs dashboard**, not this repo — if numbers on the site change, update the ElevenLabs agent prompt to match.
- Path alias: `@/*` → repo root (tsconfig).

## Styling
- **No Tailwind** in this repo (despite what a global CLAUDE.md may say). Styling is inline `style` props + CSS variables defined in `app/globals.css`. Match this convention when editing components — don't introduce Tailwind mid-project.
- Fonts loaded via `@import` Google Fonts in `globals.css`: Inter Tight (display), Inter (body), Geist Mono (mono).
- Design tokens are CSS custom properties (`--bg`, `--ink`, `--accent`, `--display`, etc.) — use them, don't hardcode values.

## Known gotchas
- `next.config.ts` still allows `files2.heygen.ai` in `images.remotePatterns`. The HeyGen avatar was removed from the site — the entry is stale but harmless; remove it only if you're cleaning up image config.
- Voice modal state (transcript, mute, connection) resets on close by design — don't add persistence without being asked.

## Existing docs in repo
- `README.md` — local run + quality gates + voice twin notes.
- `LAUNCH_PLAN.md` — current launch status and remaining gaps (pending content from Adam, prod deploy checklist). Check this before shipping changes to the live site.