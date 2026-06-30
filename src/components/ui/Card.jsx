export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur-md
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        ${className}
      `}
    >
      {children}
    </div>
  );
}