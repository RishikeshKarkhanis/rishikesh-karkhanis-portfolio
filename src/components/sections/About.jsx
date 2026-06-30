import {
  GraduationCap,
  Database,
  Users,
  Brain,
  Cpu,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import AboutCard from "../cards/AboutCard";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.Tech in Computer Science (AI & ML) at Acropolis Institute of Technology & Research, focused on software engineering, backend development, and AI."
  },

  {
    icon: Database,
    title: "Backend Development",
    description:
      "Building scalable REST APIs, authentication systems, database-driven applications, and modular architectures using Node.js, Express, Flask, MongoDB, and MySQL."
  },

  {
  icon: Cpu,
  title: "AI & Machine Learning",
  description:
    "Exploring artificial intelligence and machine learning concepts while integrating intelligent solutions into modern web applications."
},

  {
    icon: Brain,
    title: "Current Focus",
    description:
      "Improving system design skills, backend engineering, authentication workflows, performance optimization, and scalable application development."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <SectionHeading
          subtitle="Get To Know Me"
          title="About Me"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <AboutCard
              key={card.title}
              {...card}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}