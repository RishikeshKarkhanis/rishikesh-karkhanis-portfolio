import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ExperienceCard({ item }) {
  return (
    <Card>
      <p className="text-blue-500 font-medium">
        {item.year}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {item.role}
      </h3>

      <p className="text-zinc-400 mt-1">
        {item.company}
      </p>

      <p className="text-sm text-zinc-500">
        {item.location}
      </p>

      <p className="mt-6 text-zinc-400 leading-7">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}