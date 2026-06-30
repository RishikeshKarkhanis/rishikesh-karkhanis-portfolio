import taskzen from "../assets/images/taskzen.png";
import pixgram from "../assets/images/pixgram.png";
import minisend from "../assets/images/minisend.png";

const projects = [
  {
    id: 1,

    slug: "taskzen",

    title: "TaskZen",

    subtitle: "Full Stack Task Management Platform",

    description:
      "A modern MERN stack task management application featuring secure authentication, CRUD operations, dashboard analytics, advanced filtering, reusable React components, and a scalable Express.js backend built with a layered architecture. The project emphasizes clean code organization, responsive UI design, and production-ready backend practices.",

    thumbnail: taskzen,

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],

    links: [
      {
        label: "Frontend",
        type: "github",
        url: "https://github.com/RishikeshKarkhanis/taskzen-frontend",
      },
      {
        label: "Backend",
        type: "github",
        url: "https://github.com/RishikeshKarkhanis/taskzen-backend",
      },
      {
        label: "Live Demo",
        type: "live",
        url: "https://taskzen-frontend.vercel.app/",
      },
    ],

    featured: true,
  },

  {
    id: 2,

    slug: "pixgram",

    title: "Pixgram",

    subtitle: "Full Stack Social Media Platform",

    description:
      "Pixgram is a full-stack social media platform inspired by Instagram, supporting secure JWT authentication, post creation, likes, comments, follow system, notifications, Firebase Storage integration, and scalable MongoDB schemas. It demonstrates real-world backend architecture and media management workflows.",

    thumbnail: pixgram,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
    ],

    links: [
      {
        label: "Frontend",
        type: "github",
        url: "https://github.com/RishikeshKarkhanis/pixgram-frontend",
      },
      {
        label: "Backend",
        type: "github",
        url: "https://github.com/RishikeshKarkhanis/pixgram-backend",
      },
    ],

    featured: true,
  },

  {
    id: 3,

    slug: "minisend",

    title: "MiniSend",

    subtitle: "Local Network File Sharing Platform",

    description:
      "MiniSend is a LocalSend-inspired web application that enables seamless file transfers between devices connected to the same Wi-Fi network. Built using Express.js and Socket.IO, it focuses on real-time communication, peer discovery, and lightweight local file sharing without relying on cloud storage.",

    thumbnail: minisend,

    technologies: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    links: [
      {
        label: "Repository",
        type: "github",
        url: "https://github.com/RishikeshKarkhanis/minisend",
      },
      {
        label: "Live Demo",
        type: "live",
        url: "https://mini-send.onrender.com",
      },
    ],

    featured: true,
  },
];

export default projects;