import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Md. Monzurul Islam",
  initials: "XT",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/tokyo",
  about:
    "Full Stack Software Developer & Android App Developer",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Laravel, Javascript, VueJs, Svelte, Flutter, Node.js and Golang. I have over 5 years of work among those 2+ years in professional environment.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22274105?v=4",
  personalWebsiteUrl: "https://github.com/xatta-trone",
  contact: {
    email: "monzurul.ce.buet@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/xatta-trone",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/monzurul-islam/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/xatta_trone",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Bangladesh University of Engineering & Technology",
      degree: "Bachelor's Degree in Civil Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Connect Inc.",
      link: "https://econnectcom.com/",
      badges: ["Remote"],
      title: "Full Stack Software Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Made products from scratch, implemented new features, integrated payment gateways, fixed bugs, led squad, worked on improving the way developers ship the code. Technologies: Laravel, Javascript, Vue.js, React, SQL",
    },
    {
      company: "Inovace Tech",
      link: "https://inovacetech.com/",
      badges: ["Full time"],
      title: "Jr. Software Developer",
      logo: ClevertechLogo,
      start: "2018",
      end: "2019",
      description:
        "Created event management system with integrated payment system, implemented new features in online gaming site. Technologies: Laravel, Node.js, Express.js",
    },
    {
      company: "Upwork",
      link: "https://www.upwork.com/freelancers/~010e85c83c56095725",
      badges: ["Freelance"],
      title: "Full Stack Software Developer",
      logo: NSNLogo,
      start: "2023",
      end: "Present",
      description: "Develop and deliver products based on the clients requirement, where the clients satisfaction and quality product delivery is the main priority.",
    },
  ],
  skills: [
    "PHP",
    "Laravel",
    "Livewire",
    "JavaScript/TypeScript",
    "Vue.js/NuxtJS/InertiaJS",
    "Svelte/SvelteKit",
    "Dart",
    "Flutter",
    "Node.js",
    "Express.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Golang",
    "Python",
    "AWS",
    "Docker",
    "Github CI/CD",
    "Web Scrapping",
    "API Development",
    "Browser Extension"
  ],
  projects: [
    {
      title: "PL Tutorials",
      techStack: [
        "Side Project",
        "Laravel",
        "MySQL",
        "Vue.js/NuxtJS",
        "API Development",
      ],
      description: "A resource sharing platform for university students of BUET. Serving over 2500 students (90% of target group)",
      logo: ConsultlyLogo,
      link: {
        label: "pl-tutorials.com",
        href: "https://pl-tutorials.com/",
      },
    },
    {
      title: "PL Tutorials (App)",
      techStack: ["Side Project", "Flutter", "Firebase"],
      description:
        "Android app built on the top of flutter, consuming the API from back-end.",
      logo: MonitoLogo,
      link: {
        label: "Android app",
        href: "https://play.google.com/store/apps/details?id=com.pltutorials.plandroid",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
