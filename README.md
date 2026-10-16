# Arty Julie website

The website for **Arty Julie (Julie V's Art Classes)**: art classes for kids, teens and adults, and holiday art camps.

- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4, Lucide icons, self-hosted fonts.
- **Rendering:** every page is pre-rendered to static HTML at build time, then hydrated. Pages load fast, work without JavaScript and are fully readable by search engines.
- **Hosting:** Netlify (static files + Netlify Forms). No server, database or API keys.

See also: [`CONTENT-CHECKLIST.md`](CONTENT-CHECKLIST.md) for what Julie still needs to confirm, and [`docs/RESEARCH.md`](docs/RESEARCH.md) for the research and design decisions.

---

## Quick start

Requires Node 20 or newer.

```bash
npm install
npm run dev          # local dev server at http://localhost:5173
npm run build        # type-check, build, pre-render all pages into dist/
npm run preview      # serve the built site at http://localhost:4173
npm run check:links  # after a build: verify every internal link and asset exists
npm run images       # make web-sized .webp copies of photos in public/images
```

## Project structure

```
src/
  content/          ← EVERYTHING JULIE MIGHT WANT TO CHANGE LIVES HERE
    site.ts         contact details, Instagram, registration PDFs, payment, address
    programs.ts     kids', teen and adult classes: prices, times, "at a glance" facts
    camps.ts        camp dates, prices, status (open / coming soon / full)
    gallery.ts      gallery artwork
    testimonials.ts real quotes (section is hidden while empty)
    faqs.ts         FAQs for kids, camps and adults
    about.ts        Julie's portrait and story timeline
    routes.ts       page titles and meta descriptions (SEO)
  components/       reusable UI: Header, Footer, Button, ArtImage, Gallery, CampList, InquiryForm…
  pages/            one file per page
  lib/              analytics and camp-date helpers
  styles.css        design tokens (colours, fonts) and base styles
scripts/
  prerender.ts      renders each page to HTML, writes 404.html, sitemap.xml, robots.txt
  check-links.ts    internal link checker
  optimize-images.mjs  photo resizing + Open Graph image
public/
  images/           photos (add yours here)
  forms/            registration PDFs (add them here before launch)
netlify.toml        build settings, old-URL redirects, caching headers
```

## How to update the site

All edits below are to plain text files. Edit on GitHub (pencil icon) and Netlify rebuilds automatically, or edit locally and push.

### Prices, days and times
Open `src/content/programs.ts` and edit the `facts` list for the class. Each row is one line of the "at a glance" table. Also update `priceFrom` and `summary` if they mention the price.

### Camps
Open `src/content/camps.ts`, copy an existing entry and change it:

```ts
{
  id: "summer-2027-week-1",
  season: "Summer",
  title: "Summer Art Camp 2027, Week 1",
  start: "2027-06-14",
  end: "2027-06-18",
  hours: "11:30am to 3:00pm",
  ages: "8 and up",
  price: "$520 for the week",
  capacity: "6 to 8 campers",
  theme: "Painting like the Impressionists",   // optional
  status: "coming-soon",                          // "open", "coming-soon" or "full"
  // registerUrl: "https://…",                    // optional; otherwise the button opens the inquiry form
},
```

- Set `status: "open"` when bookings open, `"full"` when it's full.
- Once a camp's end date has passed it **automatically** moves to "Past camps", so an old camp can never appear as upcoming. Delete very old entries whenever you like.
- When there are no upcoming camps, the page shows a friendly "dates not announced yet" message with a sign-up prompt.

### Gallery artwork
1. Put the photo in `public/images/gallery/` (e.g. `papier-mache-birds.jpg`). Long edge of about 2000px is plenty.
2. Run `npm run images` to create fast `.webp` versions (optional, but recommended).
3. In `src/content/gallery.ts`, fill in `src` and a description in `alt` for an entry, or add a new one:
   ```ts
   { id: "birds", title: "Papier-mâché birds", medium: "Papier-mâché", program: "Art camp",
     src: "/images/gallery/papier-mache-birds.jpg", alt: "Three brightly painted papier-mâché birds on a branch",
     width: 4, height: 5, tone: "mustard" },
   ```
   `width`/`height` are just the photo's proportions (4 × 5 = portrait, 4 × 3 = landscape, 1 × 1 = square).

Entries without `src` show a labelled "Photo to add" slot. The first 6 entries appear on the home page.

### Other photos (hero, Julie's portrait, page headers)
Search the `src/pages/` files for `placeholderLabel` and add a `src="/images/your-photo.jpg"` prop beside it (plus an accurate `alt`). Julie's portrait is set once in `src/content/about.ts`.

### Contact details, Instagram, payment, address
`src/content/site.ts`. Julie's phone number is deliberately not shown anywhere on the site; email and the inquiry form are the contact routes. Adding the studio `address` there also adds it to the contact page and to search-engine structured data, and enables Event markup for upcoming camps.

### Testimonials
Add real quotes (with permission) to `src/content/testimonials.ts`. The section appears automatically on the home page once the list isn't empty.

### Do we need a CMS?
Not yet. Everything that changes regularly is in the small, commented files above, which can be edited directly on GitHub. If Julie later wants a visual editor, [Decap CMS](https://decapcms.org/) or [TinaCMS](https://tina.io/) can sit on top of these same files with Netlify Identity/GitHub login, without changing the site.

---

## Contact form (Netlify Forms)

The inquiry form on `/contact/` uses **Netlify Forms**: no third-party service, no keys.

- Netlify detects the form automatically at deploy time (`data-netlify="true"` in the pre-rendered `/contact/index.html`).
- Spam protection: a hidden honeypot field (`bot-field`) plus Netlify's built-in filtering.
- Fields: name, email, the visitor's own phone number (optional), program, child's age (optional, only for kids/teens/camps), preferred class or camp (optional), message. No child names or other sensitive data are collected.
- On success the visitor goes to `/thank-you/`; on failure they see an error with Julie's email address.

**After the first deploy:**
1. Netlify → *Site configuration → Forms*: check that form detection is enabled and an **inquiry** form is listed.
2. *Forms → Form notifications → Add notification → Email notification*: send "inquiry" submissions to Julie's email.
3. Submit a test message on the live site and confirm it arrives.

The free Netlify plan includes 100 form submissions per month.

## Analytics

No analytics are loaded by default. To use Google Analytics 4:
1. Create a GA4 property and copy the measurement ID (`G-XXXXXXXXXX`).
2. Netlify → *Site configuration → Environment variables*: add `VITE_GA_MEASUREMENT_ID` with that ID, then redeploy.

Events sent (no personal data):

| Event | Fires when |
|---|---|
| `view_program_click` | a link to kids' classes, camps or adult classes is clicked (`label` says which) |
| `register_click` | any Book / Ask / Check availability button, or a registration PDF link |
| `generate_lead` | the inquiry form is submitted successfully (`program` says which) |
| `contact_click` | an email, phone or Instagram link is clicked (`method`) |

Mark `generate_lead` as a key event in GA4. Without GA, events are pushed to `window.dataLayer`, so Google Tag Manager can be added later instead.

## SEO

- Unique title and description per page (`src/content/routes.ts`), canonical URLs, Open Graph/Twitter tags and image (`public/og-image.png`).
- `sitemap.xml` and `robots.txt` are generated at build time from `SITE_URL`.
- Structured data (JSON-LD): EducationalOrganization, Person (Julie), Course (kids', teen, adult classes), BreadcrumbList. Event markup for camps switches on automatically once an address is added to `site.ts` (Google requires one).
- Old WordPress URLs (`/teen-art/`, `/summer-art-camp/`, `/bio/`, `/application/`…) 301-redirect to the new pages.
- **Location keywords are deliberately not used yet** because the studio's town/neighbourhood isn't published. Once Julie confirms it, add it to `site.ts` (address), page descriptions in `routes.ts` (e.g. "kids' art classes in …") and create a Google Business Profile.

## Deploying on Netlify

1. Push this repository to GitHub.
2. Netlify → *Add new site → Import an existing project* → choose the repo.
3. Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `dist`, Node 22).
4. Set `SITE_URL` (environment variable) to the final domain if it isn't `https://kidsartclasses.info`.
5. Deploy. Every push to `main` redeploys; pull requests get preview URLs.

### Connecting the domain (kidsartclasses.info)
The current domain points at the old WordPress site. **Before switching:** copy the registration PDFs into `public/forms/` (see checklist) and check the new site on its `*.netlify.app` URL.

1. Netlify → *Domain management → Add a domain* → `kidsartclasses.info` (and `www.`).
2. At the domain registrar, either switch nameservers to Netlify DNS, or set an `A` record for the root to Netlify's load balancer IP and a `CNAME` for `www` to `<your-site>.netlify.app` (Netlify shows the exact values).
3. Netlify issues a free HTTPS certificate automatically.
4. Keep the WordPress hosting until the new site is confirmed working, then cancel it.

`summerartcamp.info` (currently a blank page) can be added as a domain alias that redirects to `/art-camps/`.

## Quality checks run

- `npm run build`: type-check and production build pass; all 8 pages + 404 pre-rendered.
- `npm run check:links`: 281 internal links, 0 broken.
- Browser tests (Playwright, desktop 1440px and mobile 390px): parent journey (Home → Kids → Contact → submit), camps journey, adult journey, form validation, mobile menu (incl. Escape), deep links, direct page loads, 404 status, skip link, gallery lightbox (keyboard + Escape), no horizontal overflow, no console errors.
- Automated accessibility scan (axe-core, WCAG 2.2 AA rules) on every page: no violations.
