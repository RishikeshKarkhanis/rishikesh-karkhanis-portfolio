export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-12">
      <p className="text-blue-500 font-medium mb-2">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}