import Card from "../ui/Card";

export default function AboutCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Card className="group h-full">
      <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </Card>
  );
}