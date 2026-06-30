import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "../cards/ExperienceCard";
import experience from "../../constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32" >
      <Container>

        <SectionHeading subtitle="Career" title="Experience" />
          <div className="space-y-8"> {experience.map((item) => 
            (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>

      </Container>
    </section>
  );
}