# What Julie needs to confirm or provide before launch

Nothing on the site is invented. Where the old site was unclear or silent, the
new site asks visitors to check with Julie instead of guessing. These are the
items to settle, roughly in priority order.

## Must do before launch
1. **Photos.** Every image on the site is a labelled "Photo to add" slot. Needed:
   - A hero image (a bright student painting) and a close-up of hands working on papier-mâché
   - A portrait of Julie (used on Home and About)
   - Children painting at the studio table; campers in the garden / at afternoon tea; a group camp project
   - A teen still-life drawing; an adult student's painting; adult students at lunchtime
   - 6 to 12 finished artworks for the gallery (any mix of mediums)
   Only use photos families have agreed to share, and avoid identifiable faces or names of children unless permission is given.
2. **Contact details.** The old site lists three phones and three emails. The new site uses
   **(310) 351-4126** and **julievan2@me.com** (from the most recently updated page).
   Other numbers seen: (310) 573-0039 (kids page), (310) 597-4644 (teen page); emails art@pantsinc.net, julie@pantsinc.net.
3. **Next camp dates.** No upcoming camps are published, so the Camps page shows "New camp dates haven't been announced yet". Add dates in `src/content/camps.ts`.
4. **Registration PDFs.** Download the Application and Release PDFs from the old site into `public/forms/` *before* the domain moves (they'll disappear with WordPress), then update `forms` in `src/content/site.ts`.
5. **Netlify form notifications.** Turn on email notifications for the "inquiry" form (see README).

## Please confirm
- **Kids' classes:** age range; whether families pick one weekday per session; are times still 4:00–5:30pm?
- **Teen classes:** the old page says both 4:30–6:00pm and 2:30–4:00pm on Wednesdays. Which is right? Still $200 for 5 weeks?
- **Adult classes:** still Wednesdays *and* Fridays 12–2:30pm at $285? (Julie's bio mentions "one adult class".) Are beginners welcome? Which mediums?
- **Camps:** current ages (7+ or 8+), hours, price, deposit amount, what to pack for lunch, cancellation/refund policy.
- **Location:** should the studio address (or at least the neighbourhood/city) be published? Adding it improves local search (see README → SEO).
- **Payment:** is PayPal still used, and is Venmo @Julie-vanHerwerden still correct?
- **Testimonials:** any real quotes from families or adult students, with permission to use first name + detail (e.g. "Parent of a summer camper").
- **Scarves:** the old menu has a broken "Scarves" link. Is there a scarves business/page that should be linked?
- **Brand name:** the site uses "Arty Julie" as the name with "Julie V's Art Classes" underneath. OK?
