/**
 * Frequently asked questions. Answers only use information Julie has
 * published; anything unknown points people to Julie rather than guessing.
 */
import { site } from "./site";

export type Faq = { q: string; a: string };

export const kidsFaqs: Faq[] = [
  {
    q: "How do I know if there's a place in a class?",
    a: "Get in touch with Julie before you pay. She'll confirm which days have space and which class suits your child.",
  },
  {
    q: "What's included in the price?",
    a: "All art materials and a snack are included in every kids' and teen session.",
  },
  {
    q: "What if my child misses a class?",
    a: "Make-up classes are offered for illness or emergencies.",
  },
  {
    q: "Are there classes during school holidays?",
    a: "No. Weekly classes take a break on school holidays. Holiday art camps run during the summer, spring and winter breaks.",
  },
  {
    q: "How do I sign up?",
    a: `Send Julie a message to check availability, then fill in the application and release forms. Payment is due before the session starts, by Venmo (${site.payment.venmo}) or PayPal.`,
  },
];

export const campFaqs: Faq[] = [
  {
    q: "How old do campers need to be?",
    a: "Camps have been for ages 7 and up; the most recent summer camp was for ages 8 and up. Each camp listing shows its own age range.",
  },
  {
    q: "How big are the groups?",
    a: "Small: camps take up to 8 campers.",
  },
  {
    q: "What does my child need to bring?",
    a: "Materials and afternoon snacks are provided. Breaks and lunch happen in the garden, so ask Julie what to pack for lunch when you book.",
  },
  {
    q: "How do I hold a place?",
    a: "Message Julie with the camp you'd like, then complete the application and release forms. Payment is due before camp starts, and at recent camps a $50 deposit has secured a spot.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Julie hasn't published one. Please ask her directly before you book.",
  },
];

export const adultFaqs: Faq[] = [
  {
    q: "Do I need to have done art before?",
    a: "Tell Julie a little about what you've made before (or haven't) and what you'd like to try. She'll let you know whether the class is a good fit.",
  },
  {
    q: "What should I bring?",
    a: "Just your lunch if you'd like it. Classes run over lunchtime and food and drinks are welcome. Materials are provided.",
  },
  {
    q: "Can I make up a class I miss?",
    a: "Make-ups are offered for illness or emergencies.",
  },
  {
    q: "Are there classes in school holidays?",
    a: "No. Like the kids' classes, adult classes take a break on school holidays.",
  },
];
