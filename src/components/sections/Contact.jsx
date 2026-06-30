import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import contact from "../../constants/contact";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

import ContactCard from "../cards/ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <div>

            <SectionHeading
              subtitle="Get In Touch"
              title={contact.title}
            />

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              {contact.subtitle}
            </p>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                onClick={() =>
                  window.open(
                    `mailto:${contact.email}`
                  )
                }
              >
                <Mail size={18} />
                Email Me
              </Button>

              <a
                href="/resume.pdf"
                download="Rishikesh-Karkhanis-Resume.pdf"
              >
                <Button variant="secondary">
                  <Download size={18} />
                  Resume
                </Button>
              </a>

            </div>

            {/* Socials */}

            <div className="mt-10 flex gap-6">

              <a
                href={contact.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                <FaGithub size={26} />
              </a>

              <a
                href={contact.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href={contact.socials[2].url}
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                <Mail size={24} />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-5">

            <ContactCard
              icon={Mail}
              title="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />

            <ContactCard
              icon={Phone}
              title="Phone"
              value={contact.phone}
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
            />

            <ContactCard
              icon={MapPin}
              title="Location"
              value={contact.location}
            />

            <ContactCard
              icon={Briefcase}
              title="Availability"
              value={contact.availability}
            />

          </div>

        </div>

      </Container>
    </section>
  );
}