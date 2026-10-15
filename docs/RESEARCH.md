# Research summary (October 2026)

## What was reviewed

| Source | Access | Notes |
|---|---|---|
| kidsartclasses.info (every page: kids, adult, teen, summer/spring/winter camp, About Me, Application) | Read via web fetch | All facts on the new site come from here. |
| summerartcamp.info | Read | Blank page with only a title (it is the PayPal payment target). |
| instagram.com/arty_julie | **Not accessible** (Instagram blocks automated access) | Nothing on the new site claims to describe Instagram posts. The site links to the real profile. |
| Images on kidsartclasses.info (header, Julie's photo, intro video) | **Could not be downloaded** from this build environment | Every image slot is a clearly labelled "Photo to add" placeholder. |
| Web search for Julie / location / reviews | Searched | No reviews, testimonials or published address found. Note: "Art Lessons LA" (malibu.org) is run by a *different* Julie; nothing from it was used. |
| Brentwood Art Center camp listing (LA Parent) | Read | Used as a reference for how local art camps present ages, dates and booking. |

## Brand personality (from Julie's own story)
- London-born, from a family of creatives (father: theatre/TV/film production and costume designer; mother: actress).
- 13 years as an elementary school teacher in London; moved to California in 1992.
- Painted whimsical, distressed furniture; part owner of an artists' co-op in Pacific Palisades (1994).
- Wrote books with 4th/5th graders as a charter-school aide; private tutor since 2003.
- Camps end each day with **afternoon tea in the garden**, and teach **influential artists and art history** alongside hands-on work.

**Positioning:** a warm, slightly British, genuinely experienced teacher with a garden studio. Not a franchise, not a chain. The headline "Make art. Meet the greats. Stay for tea." packs the three verified differentiators: hands-on making, art history and afternoon tea.

## Audience needs
- **Parents:** age fit, days/times, price, what's included, how to check availability, how to register and pay, camp dates.
- **Teens/parents of teens:** portfolio preparation for art college.
- **Adults:** a welcoming, separate experience; timing (weekday lunchtime), price, whether experience is needed.

## Problems with the current site
- Prices, times and contact details conflict between pages (three phone numbers, three email addresses, two teen class times).
- Outdated pages presented as current (Spring Camp "2021" with 2019 availability; Winter 2024/25 still live in late 2026).
- No photos of artwork despite Instagram being the main proof; header image has no alt text.
- Registration is spread across PDFs, a payment form, PayPal and Venmo with no single explanation.
- A broken "Scarves" menu link (`http://Scarves`); generic WordPress theme; weak mobile layout; no meta descriptions or structured data.

## Information architecture (new)
- `/` Home: hero, three programmes, studio story, gallery preview, Meet Julie, CTA
- `/kids-art-classes/`: kids' classes + teen classes (`#teens`), sign-up steps, FAQs
- `/art-camps/`: upcoming camps (auto-hides past ones), what campers make, details, booking steps, FAQs, past camps
- `/adult-art-classes/`: separate design mood (ultramarine), details, FAQs
- `/gallery/`, `/about/`, `/contact/` (form + registration forms + payment), `/thank-you/`, custom 404
- Old WordPress URLs 301-redirect to the new pages (see `netlify.toml`).

## Design system

The `brand-british` branch replaces the original "art room" concept with **"Afternoon tea in the art room"**: classy and British, but friendly and very easy to use.

- **Type:** Libre Caslon Display for headlines and Libre Caslon Text (with true italics) for subheads. Caslon is an English typeface from the 1720s. Body text is Figtree, a clear, friendly sans set at 18px. All fonts are self-hosted.
- **Colour:** clotted-cream paper `#fbf7ef`, navy ink `#17213a`, pillar-box red `#c0182d`, navy `#1f3463` and racing green `#1e4a38`. Mustard `#dca63e`, blush `#f3cdc5` and sky `#bcd2e8` are for decoration only. Text colours pass WCAG AA.
- **Motifs:** postage-stamp photo frames with perforated edges, a string of bunting under the header, deckchair stripes, a teacup-and-brush roundel logo, and small classical dividers (rule, diamond, rule) under headings.
- **Ease of use for less techy parents:**
  - A navy strip at the top of every page with "Call (310) 351-4126" and "Email Julie".
  - A "What are you looking for?" chooser in the home page hero with three big, plainly worded buttons.
  - A labelled "Menu" button instead of an icon. The mobile menu shows a one-line hint under each item.
  - Fixed "Call Julie" and "Ask Julie" buttons at the bottom of the screen on phones.
  - Larger text, 56px buttons and high-contrast form fields.
