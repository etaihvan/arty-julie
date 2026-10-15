/**
 * Testimonials. Only add real quotes from real families or students, with
 * their permission. The testimonials section stays hidden while this list is
 * empty, so nothing looks unfinished.
 *
 * Example:
 * { quote: "…", name: "Sarah", detail: "Parent of a summer camper" }
 */
export type Testimonial = { quote: string; name: string; detail?: string };

export const testimonials: Testimonial[] = [];
