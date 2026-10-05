export const siteConfig = {
  name: "ASK INVENTORS",
  tagline: "From Project to Career. From Idea to Innovation.",
  description:
    "A platform connecting students, researchers, colleges, and industry to turn ideas into skills, research, prototypes, careers, and ventures.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  domain: "askinventors.in",
  email: {
    fromDefault: process.env.RESEND_FROM_EMAIL || "contact@askinventors.in",
  },
  links: {
    docs: "/docs",
  },
};

