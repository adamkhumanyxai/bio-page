# Launch Plan

## Current status

- Site paired back: removed the "Receipts" (track record) and "In the Room" (On Stage) sections, and stripped the magazine-style editorial captions (FIG./PLATE/§-numbering, reading-time, byline block) from the remaining sections.
- Voice twin is now a real, live ElevenLabs Conversational AI session (`@elevenlabs/react`, WebRTC), using Adam's cloned voice. Voice only — no HeyGen, no video/lipsync.
- Production build passes. ESLint passes.
- Metadata, canonical URL, Open Graph/Twitter cards, sitemap, and robots are present.

## Remaining launch gaps

1. Content Adam still needs to send over
   - GitHub project links/repos for Son GPT 2.0, AI Voice Agent Builder, ICP Tool — currently the project cards say "walkthrough on request."
   - Real personal photos for the "Off the Clock" tiles (Bender, Bali, surf, snowboard, golf, vibe-code lab) — currently generic placeholders.

2. Voice twin hardening
   - Confirm the ElevenLabs agent's Security settings allow the production domain for anonymous public use (Agent → Security tab).
   - Optional upgrade: move to a signed-URL flow (server route + `ELEVENLABS_API_KEY`) if abuse/rate-limiting becomes a concern — not needed for an initial interview-ready launch.

3. Conversion paths
   - Replace `Book 20 min` mailto with a real calendar URL if available.
   - Add a downloadable CV/proof pack if this site will be shared with founders or recruiters.

4. Proof and trust
   - Verify all quota, deal, and project claims against the resume/source docs — the voice agent's knowledge was written from the same copy already on the site, so keep both in sync if numbers change.

5. Final responsive QA
   - Manually check mobile Safari, desktop Safari, Chrome, and a narrow tablet width.
   - Confirm no horizontal overflow, clipped headings, or unreadable cards.
   - Check modal behavior on mobile, especially mic permission prompts.

6. Production deployment
   - Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` in Vercel project settings.
   - Configure the production domain (currently on the default `.vercel.app` subdomain).
   - Re-run sitemap/robots checks against the production URL.

## Recommended sequence

1. Ship this pared-back, voice-real version now — it's honest and interview-ready as is.
2. Drop in real project links and personal photos as Adam sends them.
3. Add a real calendar link and downloadable CV.
4. Point a custom domain at the deployment.
