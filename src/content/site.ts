/**
 * Business-wide details: contact info, social links and registration forms.
 *
 * Everything here was taken from the public kidsartclasses.info site in
 * October 2026. Items marked TODO need Julie's confirmation before launch
 * (see CONTENT-CHECKLIST.md).
 */

export const site = {
  name: "Arty Julie",
  legalName: "Julie V's Art Classes",
  teacher: "Julie van Herwerden",
  teacherShort: "Julie V",
  tagline: "Art classes and holiday camps for kids, teens and adults",

  contact: {
    // TODO(Julie): the old site lists three numbers: (310) 351-4126 on the
    // adult and 2026 camp pages, (310) 573-0039 on the kids page and
    // (310) 597-4644 on the teen page. We use the most recently updated one.
    phoneDisplay: "(310) 351-4126",
    phoneHref: "tel:+13103514126",
    // TODO(Julie): the old site also uses art@pantsinc.net and julie@pantsinc.net.
    email: "julievan2@me.com",
  },

  /**
   * Leave `address` empty until Julie decides whether to publish the studio
   * address. When filled in, it is added to the structured data for search
   * engines and shown on the contact page.
   */
  location: {
    description: "Julie's home art studio, with a garden for breaks, lunch and afternoon tea at camp.",
    address: null as null | {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
    },
  },

  social: {
    instagramHandle: "arty_julie",
    instagramUrl: "https://www.instagram.com/arty_julie/",
  },

  /**
   * Registration paperwork. These currently point at the PDFs on the old
   * WordPress site. Before the domain moves to Netlify, download them into
   * /public/forms/ and change these to "/forms/<file>.pdf" (see README).
   */
  forms: {
    application:
      "https://kidsartclasses.info/wp-content/uploads/2020/05/JULIE-V%E2%80%99S-ART-CLASSESCAMP-APPLICATION-.pdf",
    release: "https://kidsartclasses.info/media/Julies_Art_Classes_Release.pdf",
  },

  payment: {
    venmo: "@Julie-vanHerwerden",
    note: "Payment is due before the session starts. Julie accepts Venmo and PayPal and will send details once your place is confirmed.",
  },
} as const;

export type Site = typeof site;
