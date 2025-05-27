import Project from "./Project";

const projects = [
  {
    title: "Token Launchpad on Base",
    description: "Description",
  },
  {
    title: "On-chain SVG Token Mint",
    description: "Description",
  },
  {
    title: "Constant Rate Auction Token Mint",
    description: "Description",
  },
  {
    title: "Twitter Profile Picture Tool",
    description: "Description",
  },
  {
    title: "Twitch Token Drop Tool",
    description: "Description",
  },
  {
    title: "Smart Meal Planner",
    description: "Description",
  },
  {
    title: "Song BPM Tool",
    description: "Description",
  },
];

export default function ProjectSection() {
  return (
    <div className="py-3 space-y-3">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}
