# Divine Besong Eya - Sanity Studio

Production-ready Sanity Studio v3 setup for managing a leadership coach personal branding website.

## Features

- Dynamic home page section builder with drag-and-drop reordering
- Singleton documents for Home, About, Contact Settings, and Site Settings
- Collection documents for Books, Services, Mentorship Programs, and Blog
- Portable Text for rich content
- Shared SEO object with validation
- Beginner-friendly Desk sidebar structure

## Setup

1. Copy `.env.example` to `.env`.
2. Replace `SANITY_STUDIO_PROJECT_ID` with your Sanity project id.
3. Install dependencies:

```bash
npm install
```

4. Start studio:

```bash
npm run dev
```

5. Validate schema:

```bash
npm run check
npm run typecheck
```

## Import Starter Content

This project includes a seed file with requested social media values, contact info, reference websites, and two book records.

```bash
sanity dataset import seed/initial-content.ndjson production --replace
```

After importing, open the About Page and upload a profile image to satisfy the required image validation before publishing.

## Sidebar Order

- Home Page
- About
- Books
- Services
- Mentorship
- Blog
- Contact Settings
- Site Settings

## Notes

Singleton documents are protected from duplicate creation through structure routing and singleton action filtering in `sanity.config.ts`.
