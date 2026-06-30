import { Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Container from "../ui/Container";

import contact from "../../constants/contact";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <Container>

        {/* Top */}

        <div className="flex flex-col justify-between gap-12 py-16 md:flex-row">

          {/* Left */}

          <div className="max-w-md">

            <h2 className="text-3xl font-bold">
              RK.
            </h2>

            <p className="mt-4 text-xl font-medium text-white">
              Backend Developer & AI/ML Engineering Student
            </p>

            <p className="mt-5 leading-7 text-zinc-400">
              Passionate about building scalable backend systems,
              modern web applications, and solving real-world
              engineering problems through clean architecture and
              thoughtful software design.
            </p>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="mt-5 flex gap-5">

              <a
                href={contact.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-800 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={contact.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-800 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="rounded-xl border border-zinc-800 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 py-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Rishikesh Karkhanis.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Crafted with React, Tailwind CSS & Framer Motion.
          </p>

        </div>

      </Container>
    </footer>
  );
}