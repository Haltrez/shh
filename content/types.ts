export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "caveat"; text: string }
  | { type: "steps"; steps: { name: string; need: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; note?: string };

export type Guide = {
  slug: string;
  title: string; // ≤ 60
  h1: string;
  description: string; // ≤ 155
  updated: string; // ISO date
  category: "Crypto basics" | "Privacy" | "Casino know-how" | "Money" | "Trends & news";
  /** Renders HowTo schema from the first steps block. */
  howTo?: boolean;
  /** Casino review slugs to recommend at the end (only verified ones render). */
  relatedReviews?: string[];
  relatedGuides: string[];
  body: Block[];
  faq?: { q: string; a: string }[];
  /** External sources cited in the article. Required for trends & news pieces. */
  sources?: { name: string; url: string }[];
};
