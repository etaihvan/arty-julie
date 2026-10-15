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
- **Type:** Fraunces (expressive variable serif, "soft/wonky" axes for display), Instrument Sans (body), Caveat (handwritten notes, used sparingly). All self-hosted.
- **Colour:** paper `#fbf5ea`, ink `#211d18`, vermilion `#b93a22`, ultramarine `#2a4596`, garden green `#46613e`, ochre `#e3a733` and rose `#eeb7ae` (decoration only). Text colours pass WCAG AA on paper.
- **Image treatment:** photos "taped to the studio wall", slightly rotated, with paper-white borders and painted blobs behind them; salon-hang gallery.
- **Details:** hand-drawn brush underlines, squiggles, a teacup and paintbrush doodle, subtle paper grain, offset "print" shadows on buttons and cards rather than soft rounded SaaS cards.
