import Project from "./Project";
import { ProjectType } from "@/lib/types";

const projects: ProjectType[] = [
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
    description:
      "In 2021, non-fungible tokens (NFTs) gained significant attention in the blockchain space and in the public at large. To leverage this trend, Twitter introduced a feature in their paid tier that allowed users to set an Ethereum NFT that they owned as their profile picture. Ownership details were visible to others on the platform, and NFT profile pictures were denoted with a special border.\n\nI developed the front end for a free alternative to this feature which supported uploading NFTs across multiple blockchains, not just Ethereum. After a user connected their wallet to the website, we displayed all their available NFTs in the UI and allowed them to select one as their profile picture.\n\nBy linking a user's Twitter account and gaining the proper oauth permissions, along with having them generate a cryptographic signature, we verified that a user owned the NFT they wanted to change their profile picture to and changed it for them on Twitter. I also built a page that helped display the token details.",
    technologies: ["React", "Tailwind", "Blockchain"],
  },
  {
    title: "Twitch Token Drop Tool",
    description:
      "Twitch is a platform where users can livestream to audiences in real time. It's common for Twitch streamers to offer rewards or incentives to engage their viewers.\n\nAs NFTs gained mainstream attention in 2021, I developed frontend features for a tool that enabled Twitch streamers to reward viewer engagement with non-fungible tokens (NFTs). During a livestream, an overlay would prompt viewers to claim their reward which would trigger the creatino of an NFT when clicked. The NFT was then stored in a pre-created wallet associated with the viewer's Twitch account. On this particular project, I added the clickable element to the overlay along with the form for the NFT Metadata and image that was used to create NFTs on the Streamer's side.",
    technologies: ["React", "Tailwind", "Blockchain"],
  },
  {
    title: "Smart Meal Planner",
    description:
      "I cook a lot, and I wanted to be able to get some recipe ideas based upon the ingredients I have at home. Coincidentally, I wanted to experiment with the OpenAI API, so I built a meal planner that would take in a list of ingredients and return a list of recipes that could be made with the ingredients using GPT-4o.",
    link: "https://github.com/evankalaw/macroio",
    technologies: ["Next.JS", "Tailwind", "OpenAI"],
  },
];

export default function ProjectSection() {
  return (
    <div className="py-3 space-y-3">
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}
