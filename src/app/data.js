/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "MediTrack",
    description: "Healthcare Management System for seamless patient care 🏥",
    date: "2024-01-15",
    demoLink: "https://github.com/KritiPuri/MediTrack_Healthcare_Management_System",
  },
  {
    id: 2,
    name: "PyMeet",
    description: "Real-time Online Meeting App for virtual collaboration �",
    date: "2024-05-20",
    demoLink: "https://github.com/KritiPuri/PyMeet_Real_time_Online_Meeting_App",
  },
  {
    id: 3,
    name: "Personal Finance Tracker",
    description: "Track and manage your finances efficiently 💰",
    date: "2024-08-10",
    demoLink: "https://github.com/KritiPuri/Personal-Finance-Tracker",
  },
  {
    id: 4,
    name: "NoteVault",
    description: "Secure note-taking application for your thoughts �",
    date: "2024-09-15",
    demoLink: "https://github.com/KritiPuri/NoteVault",
  },
  {
    id: 5,
    name: "Bookstore Ordering System",
    description: "Online bookstore management and ordering platform 📚",
    date: "2024-10-01",
    demoLink: "https://github.com/KritiPuri/Bookstore_ordering_system",
  },
  
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/KritiPuri",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kriti-puri-b38bab26b/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/kriti_resume.pdf",
    icon: "resume",
    newTab: true,
  },
  {
    label: "Experience",
    link: "/experience",
    icon: "briefcase",
    newTab: false,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Software Development Intern - React/NextJS",
    company: "Hibiscustech GR Pvt. Ltd.",
    period: "Jul–Sep 2025",
    certificate: "#", // Add your certificate link here
    description: [
      "Built complete frontends for AI-driven game like Chess using React, NextJS and Tailwind CSS.",
      "Developed overlay screens, tutorial modes, and a feedback tab to enhance user engagement.",
      "Collaborated with mentors and developers in Agile sprints to deliver optimized, scalable UI systems.",
    ],
    techStack: "React.js, Next.js, Tailwind CSS, WebSockets, REST APIs",
  },
  {
    id: 2,
    role: "Front-End Development Intern",
    company: "Takyon Networks Limited",
    period: "Jun–Jul 2025",
    certificate: "#", // Add your certificate link here
    description: [
      "Designed and optimized reusable components for dynamic dashboards and interactive pages.",
      "Collaborated cross-functionally to enhance performance and ensure visual consistency.",
    ],
    techStack: "HTML, CSS, JavaScript, React.js, Redux Toolkit, Bootstrap",
  },
];

