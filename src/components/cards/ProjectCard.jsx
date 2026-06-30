import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import Badge from "../ui/Badge";
import BrowserFrame from "../ui/BrowserFrame";

export default function ProjectCard({
  project,
  reverse = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        grid
        items-center
        gap-14
        lg:grid-cols-2
      "
    >
      {/* Image */}

      <div
        className={`
          ${reverse ? "lg:order-2" : ""}
        `}
      >
        <BrowserFrame>
          <div className="group relative overflow-hidden">
            {project.featured && (
              <div className="absolute left-4 top-4 z-20 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                Featured
              </div>
            )}

            <img
              src={project.thumbnail}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
            />
          </div>
        </BrowserFrame>
      </div>

      {/* Content */}

      <div
        className={`
          ${reverse ? "lg:order-1" : ""}
        `}
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
          {project.subtitle}
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-700
                px-5
                py-3
                transition-all
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              {link.type === "github" ? (
                <FaGithub />
              ) : (
                <ArrowUpRight size={18} />
              )}

              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}