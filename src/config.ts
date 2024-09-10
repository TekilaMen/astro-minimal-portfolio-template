import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Léo Stephan",
  logo: "/logo.webp",
  email: "leo.stephan68800@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/TekilaMen",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:leo.stephan68800@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Léo Stephan",
    description:
      "Full time student from France who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Léo Stephan, a full time student from France who also loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Léo Stephan",
    description:
      "Full time student from France who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Léo Stephan, a full time student from France who also loves building cool things using code.
<br/><br/>`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Caldera",
          image: "/logo.webp",
          url: "https://github.com/TekilaMen",
        },
        date: "2024 - Present",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Léo Stephan",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Kitsune",
      description: "A simple and fast discord bot using discord.js.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TekilaMen/Kitsune",
    },
    {
      title: "GalaxyTask",
      description:
        "Galaxy Task is a mobile application that gives you the opportunity to interact with your Trello account using the opensource API provided by this same site.",
      image: "/project2.png",
      year: "2024",
      url: "https://github.com/TekilaMen/GalaxyTask",
    },
    {
      title: "PixelSword Adventures",
      description: "An RPG game made from scratch using LibGDX and Java.",
      image: "/project3.png",
      year: "2024",
      url: "https://github.com/TekilaMen/PixelSword-Adventures",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Léo Stephan",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
