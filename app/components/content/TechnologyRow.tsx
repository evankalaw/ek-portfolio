import { Technology } from "@/lib/types";
import TechnologyBubble from "./TechnologyBubble";

interface TechnologyRowProps {
  technologies: Technology[];
}

export default function TechnologyRow(props: TechnologyRowProps) {
  const { technologies } = props;

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {technologies.map((technology) => {
        return <TechnologyBubble key={technology} technology={technology} />;
      })}
    </div>
  );
}
