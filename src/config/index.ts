import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Habeebah Muse — Mobile & Web Developer",
  author: "Habeebah Muse",
  description:
    "Software Engineer based in Atlanta, USA. I specialize full stack PERN stack.",
  lang: "en",
  siteLogo: "/habeebaby.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "/Habeebah_Muse_AI.pdf" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/habeebahmuse/" },
    { text: "Github", href: "https://github.com/Habeebah157" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "AI Progress Website", href: "https://machine-mindset.vercel.app/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Habeebah Muse",
    specialty: "PERN Stack Developer",
    summary:
      "Software Engineer based in Atlanta, USA. I specialize full stack PERN stack.",
    email: "omowumimuse@gmail.com",
  },
  experience: [
    {
      company: "Agunwami Enterprise Developers",
      position: "Lead Software Engineer (solo)",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Designing and building a full-stack PERN application, including PostgreSQL schema development to support 100+ daily users, and optimizing React performance to achieve a 35\% reduction in latency ",
        "Crafting a highly responsive React user interface to boost mobile engagement, implementing seamless viewport transitions and ensuring optimal 48px+ touch targets for improved usability ",
        "Collaborating closely with the design team to ensure the development of accessible and intuitive user interfaces and experiences",
        "Enhanced user experience by integrating Google and Facebook authentication for faster logins and developing intuitive visualizations for user data"
      ],
    },
    {
      company: "Salesforce",
      position: "Software Engineering Intern",
      startDate: "May 2024",
      endDate: "August 2024",
      summary: [
        "Migrated 15+ Aura components to LWC, improving load speed by 40\% and reducing bundle size by 35\%",
        "Built dashboard using 3+ APIs with hover features, reducing clicks by 25\%",
        "Planned sprints in Quip, created 50+ tasks ensuring on-time delivery",
        "Developed 10+ reusable components, reducing development time by 30\%",
      ],
    },
    {
      company: "Salesforce",
      position: "Software Engineering Intern",
      startDate: "Jun 2023",
      endDate: "August 2023",
      summary:[
        "Developed secure city chooser app (PERN stack, JWT auth, swipe UI), cutting task time by 25%",
        "Wrote 15+ user stories, 10+ Figma screens, managed 20+ GitHub PRs across 5+ branches", 
        "Presented final project to 10+ engineers, praised for clarity and security"

      ]
        
    },
  ],
  projects: [
    {
      name: "Oyster",
      summary: "Developed a real-time SMS notification system using Twilio, improving response times by 40% and ensuring delivery to 5,000+ users through a full-stack TypeScript/React/PostgreSQL/Docker stack",
      linkPreview: "/",
      linkSource: "https://github.com/colorstackorg/oyster/pull/663",
      image: "/twilliocontribution.png",
    },
    {
      name: "Mariana Project",
      summary: "Built a full-stack community platform with JWT auth and REST APIs using React, Node.js, and PostgreSQL, increasing user engagement by 30% and improving app responsiveness by 25%",
      linkPreview: "/",
      linkSource: "https://github.com/Habeebah157/MarianaProjec",
      image: "/mariana.png",
    },
    {
      name: "langBot",
      summary: "Built a Telegram bot using Flask, Telegram API, and async Python to deliver rare vocabulary words with definitions, pronunciation (text and audio), synonyms, antonyms, and examples, integrating external APIs and real-time webhook handling",
      linkPreview: "/",
      linkSource: "https://github.com/Habeebah157/TelegramBot",
      image: "/telegrambot.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Habeebah Muse — a passionate Web Developer specializing in the PERN stack (PostgreSQL, Express, React, Node.js). I love building intuitive, real-time applications that solve real-world problems through technology. Lately, I’ve been diving into AI and Machine Learning, combining them with full-stack development to create smarter, more dynamic user experiences.

I also enjoy crafting personalized solutions for my friends—like developing a Telegram bot to support a friend group learning English, and currently building a website to help a friend study Arabic. I’m always excited to collaborate and innovate, tailoring my work to meet unique needs.


    `,
    image: "/proilepic.png",
  },
};

// #5755ff
