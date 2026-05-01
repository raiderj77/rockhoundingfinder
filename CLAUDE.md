# Rockhounding Finder — CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: Rockhounding Finder
- **Domain**: rockhoundingfinder.com
- **Purpose**: Location finder for public rockhounding and gem collecting sites across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard

## Tech Stack

- **Framework**: Next.js | **Deployment**: Vercel | **Language**: TypeScript | **Styling**: Tailwind CSS | **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt**: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`
- Amazon Associates (ytearnings-20) for gear recommendations — use rel="nofollow sponsored"

## 2. SEO

- SSR/SSG required
- Each site page: location name, GPS coordinates, land management agency, minerals/gems found, access notes, permit requirements
- CRITICAL: Always note land management agency (BLM, USFS, State, Private) — collecting rules differ by jurisdiction

## 3. Core Web Vitals

- **LCP** ≤ 2.5s | **INP** ≤ 200ms | **CLS** ≤ 0.1

## 4. E-E-A-T

- Attribution: "Built by an experienced web developer" — no personal name
- IMPORTANT: "Always verify collecting regulations with the managing agency before visiting. Rules and access can change."

## 5. Structured Data

- Organization, WebSite, Place (for natural sites), BreadcrumbList
- Include geo coordinates in schema — rockhounders rely on precise GPS

## 6. Mobile-First

- Touch targets 48px+, GPS coordinates displayed prominently and copy-able, 16px+ body text

## 7. Bing Optimization

- meta keywords, SSR mandatory, IndexNow on deploy

## 8. GEO / AI

- `/llms.txt` at root
- Standard AI crawler rules
- Lead content with mineral type, location, and land management agency

## 9. Privacy & Consent

- `/privacy` and `/terms` required

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on site photos, keyboard navigation

## 11. Security Headers

Standard Empire security headers

## 12. Sitemaps & Metadata

Sitemap via `app/sitemap.ts`, submit to GSC and Bing WMT

## Cross-Site Links

Footer: all sister sites (excluding self)

## Deployment

Vercel | main | `npm run build` | Env: AMAZON_ASSOCIATES_ID=ytearnings-20, INDEXNOW_API_KEY

## Warnings

Standard Empire warnings + Always disclaim that collecting rules vary by land agency and change frequently. Never present site access as guaranteed without current verification from the managing agency.
