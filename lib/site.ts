export const site = {
  name: "shh",
  tagline: "Straight answers on privacy.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is registered.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://shhcasinos.com").replace(/\/$/, ""),
  description:
    "A privacy-first guide to no-KYC and low-KYC crypto casinos: what each one asks for, how fast it pays, which coins it takes.",
  author: {
    name: "The shh editors",
    url: "/about",
  },
  year: new Date().getFullYear(),
  contactEmail: "hello@shhcasinos.com",
};

export const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`;
