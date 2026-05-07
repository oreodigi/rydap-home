# Rydap Website Rebuild

Rydap is an app-first mobility and logistics marketing website for India, launching in Pune with a Maharashtra expansion path.

The website is not the primary booking platform. Its job is to build trust, improve SEO, drive mobile app installs, onboard drivers, and acquire service partners.

## Business Positioning

Rydap combines:

- Ride booking: bike taxi, auto rikshaw, cab, premium cab
- Parcel delivery: instant city courier and local delivery
- Moving services: mini trucks, three-wheelers, packers and movers lite
- Ambulance booking: emergency ambulance dispatch UX

Primary launch market:

- Pune, Maharashtra

Expansion-ready cities:

- Mumbai
- Nashik
- Nagpur
- Aurangabad

## Current Tech Stack

This repository is currently a React/Vite frontend with a small Express production server.

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Radix UI components
- Lucide icons
- Express production server
- pnpm

Laravel compatibility has been prepared with:

- `config/rydap.php`

The active frontend implementation is still in React, not Blade. There is no existing `resources/views` Laravel tree in this folder.

## Key Frontend Files

```txt
client/src/pages/Home.tsx
client/src/index.css
client/src/components/marketing/AppDownloadCTA.tsx
client/src/config/rydap.ts
config/rydap.php
```

## App CTA System

Frontend CTA config:

```txt
client/src/config/rydap.ts
```

Laravel-ready CTA config:

```txt
config/rydap.php
```

Configure real app links later:

- Customer Android
- Customer iOS
- Driver Android
- Driver iOS
- Partner Android
- Partner iOS
- Deep link

## Website Sections

- Sticky navbar
- App-first hero with service selector
- Download app / open app / partner CTA system
- Trust strip
- Premium service cards
- How it works flows
- Why Rydap
- Maharashtra city expansion
- Driver and partner onboarding
- Major app download section
- Testimonials
- SEO keyword section
- FAQ
- Footer
- Mobile sticky app CTA bar

## Local Setup

Install dependencies:

```bash
pnpm install
```

Start local development:

```bash
pnpm run dev
```

Default URL:

```txt
http://127.0.0.1:3000
```

## Scripts

Type-check:

```bash
pnpm run check
```

Production build:

```bash
pnpm run build
```

Preview production frontend:

```bash
pnpm run preview
```

Run production server after build:

```bash
pnpm run start
```

Format:

```bash
pnpm run format
```

## Assets

The website uses local Rydap assets from:

```txt
client/src/images
```

Important files:

- `booking step 1.png`
- `booking step 2.png`
- `booking step 3.jpeg`
- `booking step 4.png`
- `booking step 5.png`
- `rydap_bidding.gif`
- `rydap_rental.gif`
- `Vichicle.jpeg`
- `web dark logo.png`
- `web lite logo.png`

## SEO Targets

The page is structured around high-intent Pune searches:

- bike taxi pune
- parcel delivery pune
- mini truck booking pune
- ambulance booking pune
- rapido alternative pune
- porter alternative pune

## Deployment Notes

Build output:

```txt
dist/
```

The build creates:

- Static frontend in `dist/public`
- Bundled server in `dist/index.js`

Run:

```bash
pnpm run build
pnpm run start
```

## Known Notes

The current `client/index.html` may show analytics placeholder warnings if these env variables are not configured:

```txt
%VITE_ANALYTICS_ENDPOINT%
%VITE_ANALYTICS_WEBSITE_ID%
```

These warnings do not block the production build. Configure or remove the analytics script before final deployment.
