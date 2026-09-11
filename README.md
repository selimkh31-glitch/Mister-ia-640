# Mister IA 64

Next.js website deployed from GitHub main to the existing Vercel project. Personalized audit: 99 €.

## Indexing configuration
- Production is indexable; previews/development remain noindex with crawling blocked.
- Canonicals and sitemap use SITE_URL when explicitly configured, otherwise VERCEL_PROJECT_PRODUCTION_URL. Never use the generated VERCEL_URL.
- Production refuses to build without a configured HTTPS origin. Vercel system variables must be exposed.
- Sitemap includes public service, solution, guide and company pages, excluding legal/privacy pages (noindex, follow). No invented update timestamps.
- Google and Bing ownership verification can be added via GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION.
- A successful deployment is not evidence of crawling, indexing or rankings. See docs/seo-launch.md for remaining account-level steps.

## Contact
WhatsApp is active. No payment or automatic appointment booking. The unused form API returns 503 and stores nothing.

## Development
Node.js 22, npm ci, npm run dev. Verify with npm run build.
