# Adam Kratiuk Bio Page

Personal bio and Voice AI work-sample site built with Next.js.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality gates

```bash
npm run lint
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and fill the values needed for deployment.

- `NEXT_PUBLIC_SITE_URL`: canonical production URL used by metadata, sitemap, and robots.
- `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`: public ElevenLabs Conversational AI agent ID. Safe to expose client-side — this is the standard embed pattern for public agents.

Also set `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` (and `NEXT_PUBLIC_SITE_URL`) as environment variables in the Vercel project settings, since `.env.local` is not committed.

## Voice twin

The "Talk to me" demo is a real, live conversation via ElevenLabs Conversational AI (`@elevenlabs/react`), using Adam's cloned voice ("Adam PVC"). It's voice-only — no video/lipsync avatar. The agent's knowledge (career timeline, projects, stats) lives in its ElevenLabs system prompt, not in this repo.

If the widget fails to connect in production, check the agent's **Security** settings in the ElevenLabs dashboard — make sure the production domain is allowed and that the agent doesn't require authentication for anonymous public use.
