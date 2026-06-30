import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
        backdrop-blur-md
        p-5
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-zinc-900
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            text-blue-500
            transition-all
            duration-300
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          <Icon size={22} />
        </div>

        <div>

          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h3 className="mt-1 text-base font-medium text-white break-all">
            {value}
          </h3>

        </div>

      </div>

      {/* Right */}

      {href && (
        <ArrowUpRight
          size={18}
          className="
            text-zinc-500
            transition-all
            duration-300
            group-hover:text-blue-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      )}
    </motion.div>
  );

  if (!href) return CardContent;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  );
}