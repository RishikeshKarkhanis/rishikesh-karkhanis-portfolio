export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white",

    ghost:
      "hover:bg-zinc-800 text-white",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:scale-105
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}