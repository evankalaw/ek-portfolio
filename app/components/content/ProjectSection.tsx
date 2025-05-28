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
    description:
      "I cook a lot, and I wanted to be able to get some recipe ideas based upon the ingredients I have at home. Coincidentally, I wanted to experiment with the OpenAI API, so I built a meal planner that would take in a list of ingredients and return a list of recipes that could be made with the ingredients using GPT-4o.",
    link: "https://github.com/evankalaw/macroio",
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
          link={project.link}
        />
      ))}
    </div>
  );
}
