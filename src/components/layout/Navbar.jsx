import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

import navigation from "../../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const active = useActiveSection(
    navigation.map((item) => item.id)
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="mt-4">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/70 px-6 backdrop-blur-xl shadow-lg">
          {/* Logo */}

          <a
            href="#hero"
            className="text-2xl font-bold tracking-tight transition hover:text-blue-500"
          >
            RK
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${active === item.id
                  ? "text-blue-500"
                  : "text-zinc-400 hover:text-white"
                  }`}
              >
                {item.title}

                {active === item.id && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-500"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Resume Button */}

          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download="Rishikesh-Karkhanis-Resume.pdf"
            >
              <Button>
                <Download size={18} />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-zinc-300 transition hover:text-white md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col p-4">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm transition ${active === item.id
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      }`}
                  >
                    {item.title}
                  </a>
                ))}

                <a
                  href="/resume.pdf"
                  download
                  className="mt-4"
                >
                  <Button className="w-full">
                    <Download size={18} />
                    Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}