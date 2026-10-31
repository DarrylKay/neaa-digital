import type { Profile } from "./types";

export const profile: Profile = {
  name: "Darryl Kay",
  eyebrow: "Senior software engineer",
  headline: "Building scalable software products",
  subheadline: "Senior software engineer through NEAA Digital Ltd.",
  title: "Senior Frontend Engineer",
  email: "neaa.digital@hotmail.com",
  location: "Raunds, Northamptonshire",
  company: {
    legalName: "NEAA Digital Ltd",
    companyNumber: "16382460",
    vatNumber: "GB 492 3707 72",
    registeredIn: "Registered in England & Wales",
    copyrightYear: 2026,
  },
  portraitAlt:
    "Portrait of Darryl Kay, senior contract software engineer at NEAA Digital Ltd",
  homeIntro: [
    "I'm a UK-based Senior Software Engineer specialising in React, React Native, Next.js and TypeScript, with experience building scalable, accessible and user-focused mobile applications, web platforms and internal business tools.",

    "I've worked across start-ups, scale-ups and established enterprises, from developing greenfield products to modernising existing platforms and leading development teams. I'm passionate about creating intuitive, inclusive digital experiences that combine clean, maintainable code with thoughtful design and usability..",
  ],
  services: [
    { title: "Mobile applications", detail: "React Native, Expo" },
    { title: "Web platforms", detail: "React, Next.js, TypeScript" },
    { title: "Backend and APIs", detail: "Node.js, Express, Prisma" },
    {
      title: "Business Environments",
      detail: "Start-ups · Scale-ups · Enterprise",
    },
  ],
  featuredCompanies: [
    {
      name: "B-Flexion",
      href: "/cv#b-flexion",
      logoSrc: "/logos/b-flexion.svg",
      logoAlt: "B-Flexion",
    },
    {
      name: "Trotter Concierge",
      href: "/cv#trotter",
      logoSrc: "/logos/trotter.svg",
      logoAlt: "Trotter Concierge",
    },
    {
      name: "On the Beach",
      href: "/cv#on-the-beach",
      logoSrc: "/logos/on-the-beach.svg",
      logoAlt: "On the Beach",
    },
    {
      name: "Pets at Home",
      href: "/cv#pets-at-home",
      logoSrc: "/logos/pets-at-home.svg",
      logoAlt: "Pets at Home",
    },
    {
      name: "The Modern Milkman",
      href: "/cv#modern-milkman",
      logoSrc: "/logos/modern-milkman.svg",
      logoAlt: "The Modern Milkman",
    },
    {
      name: "Connexas",
      href: "/cv#connexas",
      logoSrc: "/logos/connexas.svg",
      logoAlt: "Connexas",
    },
  ],
};
