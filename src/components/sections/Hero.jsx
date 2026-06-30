import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Container from "../ui/Container";

import profile from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 bg-[#09090B]"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-500">
                Rishikesh Karkhanis
              </span>
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl text-zinc-300 font-semibold">
              Backend Developer & AI/ML Engineering Student
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              I enjoy building scalable backend systems, REST APIs, and
              full-stack applications with modern JavaScript technologies.
              Passionate about clean architecture, authentication systems,
              performance optimization, and solving real-world engineering
              problems.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects">
                <Button>
                  Explore My Work
                  <ArrowRight size={18} />
                </Button>
              </a>

              <a
                href="/resume.pdf"
                download="Rishikesh-Karkhanis-Resume.pdf"
              >
                <Button variant="secondary">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Icons */}

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/RishikeshKarkhanis"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/rishikeshkarkhanis01"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:rishikeshkarkhanis0101@gmail.com"
                className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Badges */}

            {/* <div className="mt-12 flex flex-wrap gap-3">
              <Badge>Technical Lead</Badge>
              <Badge>AI Nexus Club</Badge>
              <Badge>MERN Stack</Badge>
              <Badge>Backend Engineering</Badge>
            </div> */}
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Blue Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              {/* Profile Image */}

              <img
                src={profile}
                alt="Rishikesh Karkhanis"
                className="relative w-72 md:w-96 rounded-3xl border border-zinc-800 shadow-2xl"
              />

              {/* Floating Card */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-8 rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl p-5 shadow-xl"
              >
                <p className="text-sm text-zinc-400">
                  Currently Building
                </p>

                <h3 className="mt-1 font-semibold text-white">
                  Pixgram
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  React • Express • MongoDB
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}