import { Technology } from "@/lib/types";

interface TechnologyBubbleProps {
  technology: Technology;
}

export default function TechnologyBubble(props: TechnologyBubbleProps) {
  const { technology } = props;

  return (
    <div className="border border-brand-secondary rounded-full px-3 py-1 text-xs text-brand-primary bg-brand-tag">
      {technology}
    </div>
  );
}
