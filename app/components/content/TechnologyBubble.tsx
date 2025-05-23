import { Technology } from "@/lib/types";

interface TechnologyBubbleProps {
  technology: Technology;
}

export default function TechnologyBubble(props: TechnologyBubbleProps) {
  const { technology } = props;

  return (
    <div className="border border-gray-300 rounded-full px-3 py-1 text-xs bg-[#24ad7480]">
      {technology}
    </div>
  );
}
