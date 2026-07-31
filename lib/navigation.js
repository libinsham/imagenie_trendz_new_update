// Navigation tree extracted from the original WordPress menus (#menu-primary / #menu-secondary).
// Paths are clean Next.js routes (no .html) - most of these pages aren't built yet in this
// homepage-only conversion, but the structure/links are preserved so they're ready to wire up.

export const primaryNav = [{ label: "Contact", href: "/contact" }];

export const secondaryNav = [
  { label: "B2B", href: "/b2b-tech-marketing" },
  { label: "B2C", href: "/b2c" },
  { label: "OUR WORKS", href: "/work" },
  { label: "ABOUT US", href: "/about-imagenie" },
  { label: "SOCIAL", href: "/about-imagenie" },
  
  { label: "CONTACT", href: "/contact" },
];
  
  

export const footerQuickLinks1 = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
];

export const footerQuickLinks2 = [
  { label: "Insights", href: "/insights" },
  { label: "About us", href: "/about-fox" },
  { label: "Careers", href: "/join-fox" },
];

export const footerLegalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const offices = [
  {
    city: "London",
    lines: ["8 Devonshire Square", "London, EC2M 4YJ"],
    mapHref:
      "https://www.google.co.uk/maps/dir//WeWork+-+Office+Space+%26+Coworking,+8+Devonshire+Square,+London+EC2M+4YJ/@51.5170231,-0.1478942,12z",
    phone: "+44 (0)20 3750 6688",
  },
  {
    city: "Leeds",
    lines: ["4 The Boulevard", "Leeds, LS10 1PZ"],
    mapHref: "https://www.google.com/maps/dir//Fox+Agency,+4+The+Boulevard,+Leeds+LS10+1PZ",
    phone: "+44 (0)20 3750 6688",
  },
  {
    city: "New York",
    lines: ["27 East 28th St", "New York, NY 10016"],
    mapHref: "https://www.google.co.uk/maps/dir//27+East+28th+Street,+New+York,+NY+10016,+USA",
    phone: "+1 (646) 665-1107",
  },
  {
    city: "Denver",
    lines: ["1550 Wewatta St", "Denver, CO 80202"],
    mapHref: "https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking",
    phone: "+1 (646) 665-1107",
  },
];

export const socialLinks = [
  { name: "linkedin", href: "https://www.linkedin.com/company/foxagency" },
  { name: "instagram", href: "https://www.instagram.com/foxagencyb2b/" },
  { name: "youtube", href: "https://www.youtube.com/FoxAgency" },
  { name: "twitter", href: "https://twitter.com/foxb2b" },
];
