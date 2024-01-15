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
      school: "The University of Tokyo (uTokyo)",
      degree: "Master's Degree in Architecture",
      start: "2020",
      end: "2022",
    },
    {
      school: "Bangladesh University of Engineering & Technology (BUET)",
      degree: "Bachelor's Degree in Civil Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Connect Inc.",
      link: "https://econnectcom.com/",
      badges: ["Remote", "Contractual"],
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
    "Vue.js/Nuxt.js/Inertia.js",
    "React/Next.js",
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
      techStack: [ "Flutter", "Firebase", "Sanctum"],
      description:
        "Android app built on the top of flutter, consuming the API from back-end.",
      logo: MonitoLogo,
      link: {
        label: "Android app",
        href: "https://play.google.com/store/apps/details?id=com.pltutorials.plandroid",
      },
    },
    {
      title: "GRE-SE",
      techStack: [ "Golang", "SvelteKit", "Nuxt.js", "Stripe", "Web Scrapping", "API","OAuth"],
      description:
        "GRE word learning app (SaaS) where users can learn words for free an buy premium service.",
      logo: JarockiMeLogo,
      link: {
        label: "gre-sentence-equivalence.com",
        href: "https://gre-sentence-equivalence.com/",
      },
    },
    {
      title: "Book-now Event Management",
      techStack: [ "Laravel", "Livewire", "CMS", "MySQL",],
      description:
        "Event management site for a client form Upwork.",
      logo: JarockiMeLogo,
      link: {
        label: "book-now.xattabyte.com",
        href: "https://book-now.xattabyte.com/",
      },
    },
    {
      title: "Medium Parser",
      techStack: [ "Browser Extension", "Chrome", "Mozilla", "Edge"],
      description:
        "Medium parser is a web browser extension to help read the member-only articles on medium.com and medium.com based sites (e.g. towards-data-science)",
      logo: Minimal,
      link: {
        label: "github.com/Xatta-Trone/medium-parser-extension",
        href: "https://github.com/Xatta-Trone/medium-parser-extension",
      },
    },
    {
      title: "Sher-e-Bangla Hall, BUET",
      techStack: ["Laravel", "Livewire", "MySQL", "CMS"],
      description:
        "Website for the dorm Sher-e-Bangla Hall, BUET, Bangladesh. The CMS is built using Laravel Livewire.",
      logo: BarepapersLogo,
      link: {
        label: "sherebanglahall.buet.ac.bd",
        href: "https://sherebanglahall.buet.ac.bd/",
      },
    },
    {
      title: "Golden Jubilee of SBH",
      techStack: ["Laravel", "Payment Integration", "Livewire", "MySQL", "CMS"],
      description:
        "Event management website, integrated with local leading payment gateway https://sslcommerz.com/",
      logo: BarepapersLogo,
      link: {
        label: "https://reunion.sherebanglahall.buet.ac.bd",
        href: "https://https://reunion.sherebanglahall.buet.ac.bd/",
      },
    },
    {
      title: "Studytheatre.com",
      techStack: ["Laravel","Livewire","Vue.js","Firebase", "FCM", "JWT", "Flutter"],
      description: "Ed-tech site, built using Laravel Livewire and Vue.js on the FE and Admin-panel. The android app was build using flutter SDK.",
      logo: YearProgressLogo,
      link: {
        label: "studytheatre.com",
        href: "https://studytheatre.com/",
      },
    },
    {
      title: "Route 64 DC",
      techStack: [
        "Wordpress",
        "Elementor",
      ],
      description:
        "Website for Route 64 Design & Consultancy - A Transportation Engineering Consulting Firm",
      logo: ParabolLogo,
      link: {
        label: "route64dc.com",
        href: "https://route64dc.com/",
      },
    },
    {
      title: "Dictionary Scrapper",
      techStack: [
        "Golang",
        "Web Scrapping",
        "API Development",
        "Gin",
      ],
      description:
        "Scrap google dictionary result using proxy and serve it via API interface.",
      logo: EvercastLogo,
      link: {
        label: "thesaurus.gre-sentence-equivalence.com/g/banal",
        href: "https://thesaurus.gre-sentence-equivalence.com/g/banal",
      },
    },
    {
      title: "GregMAT GRE Words",
      techStack: ["Web Scrapping", "Vue.js", "Node.js"],
      description:
        "Gre word learning app based on the word list of popular GRE tutor GregMAT.",
      logo: MobileVikingsLogo,
      link: {
        label: "xatta-trone.github.io/gregmat-gre-words-all/",
        href: "https://xatta-trone.github.io/gregmat-gre-words-all/",
      },
    },
    {
      title: "Route 64 DC Counter",
      techStack: ["Laravel", "Inertia.js", "Vue.js","MySQL"],
      description:
        "Web based counting software for vehicle counting, with feature of excel exports & daily backup.",
      logo: Howdy,
    },
    
  ],
} as const;
