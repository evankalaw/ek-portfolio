import { Technology } from "@/lib/types";
import TechnologyBubble from "./TechnologyBubble";

interface TechnologyRowProps {
  technologies: Technology[];
  company: string;
}

export default function TechnologyRow(props: TechnologyRowProps) {
  const { technologies, company } = props;

  return (
    <div className="flex flex-row flex-wrap space-x-3">
      {technologies.map((technology) => {
        return (
          <TechnologyBubble
            key={company + "tech" + technology}
            technology={technology}
          />
        );
      })}
    </div>
  );
}
