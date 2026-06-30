import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

import skills from "../../constants/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>
        <SectionHeading
          subtitle="Tech Stack"
          title="Skills & Technologies"
        />

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          Throughout my journey, I've worked with a variety of technologies
          across frontend development, backend engineering, databases, and
          developer tools. I enjoy learning modern technologies and applying
          them to build scalable and efficient applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="h-full">
                <h3 className="mb-6 text-2xl font-semibold">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}