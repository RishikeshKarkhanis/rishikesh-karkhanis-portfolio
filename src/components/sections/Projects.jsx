import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import ProjectCard from "../cards/ProjectCard";

import projects from "../../constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          A collection of projects showcasing my experience in backend
          engineering, full-stack web development, REST APIs, authentication,
          real-time communication, and scalable application architecture.
        </p>

        <div className="mt-20 space-y-36">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}