import Project from "./Project";
import { ProjectType } from "@/lib/types";

const projects: ProjectType[] = [
  {
    title: "Eliza Studios Website",
    description:
      "Eliza Studios is a production company that creates content for the web. I was contracted to build a website that was reminiscent of flipping through pages in a magazine, that would allow them to publish various thought pieces and have a place to store their assets.\n\nI had open reign to choose the tech stack of the website, and I chose Next.JS, Tailwind, and after looking at various CMS options, I landed on using Sanity. I'd love to do a write up on this in the future - but I'll save that for another time.\n\nI used Lenis to create a smooth scrolling experience, and experimented with Three.js to add a 3D experience to some of the pages.",
    technologies: ["Next.JS", "Tailwind", "Sanity", "Vercel", "CSS"],
    link: "https://elizastudios.ai",
  },
  {
    title: "Token Launchpad on Base",
    description:
      "In 2023, memecoins took the Crypto world by storm and there was a lot of interest in creating new tokens and launching them on various chains.\n\nI was a part of a team that built a token launchpad that allowed users to create a token and launch it on Base.\n\nI worked on building the voting mechanism to allow users to vote on popular tokens, user profiles, live chat features, and more.\n\nAfter setting up Segment Analytics, we were able to identify that 70% of the users who visited the site were using a mobile device, so we had to optimize the site for mobile users.\n\nPWAs provide web apps with a few benefits - a pretty icon on your users phone, and most importantly the ability to send push notifications. I lead the refactoring effort to make the mobile experience better and make the app PWA compatible.\n\nBefore being sunsetted, the app was used by thousands of users and processed over $100,000 in transactions.",
    technologies: ["Next.JS", "Tailwind", "wagmi"],
    link: "https://x.com/serious_market",
  },
  {
    title: "On-chain SVG Token Mint",
    description:
      "I worked on the front end for a web app with a non-fungible token (NFT) contract where image generation happened fully on chain. This was relatively novel at the time where most NFT contracts stored their images off-chain. The images were built as SVGs using basic tags like path, circle, ellipse and group.\n\nThe UI was such that the user could pick a configuration of a variety of traits and palettes on the React app.\n\nThe seed configured on the frontend was passed to the contract and associated with the minted token.",
    technologies: ["React", "Tailwind", "Blockchain", "wagmi"],
  },
  {
    title: "Constant Rate Auction Token Mint",
    description:
      "This was the third project I worked on in the Blockchain space. The smart contract this website used was a modified version of the Constant Rate Issuance Sales Protocol (CRISP) developed by Paradigm.\n\nThe idea behind CRISP is to maintain a constant rate of selling tokens by adjusting a variable price based on demand.\n\nUsers were able to connect their wallets to the website and mint tokens at this variable price influenced by demand until the project sold out.\n\nSmart contract read and write operations were required, such that the current price and state of the sale along with purchasing were available to the front end.\n\nRead more about CRISP below.",
    technologies: ["React", "Tailwind", "Blockchain", "wagmi"],
    link: "https://www.paradigm.xyz/2022/01/constant-rate-issuance-sales-protocol",
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
      "Twitch is a platform where users can livestream to audiences in real time. It's common for Twitch streamers to offer rewards or incentives to engage their viewers.\n\nAs NFTs gained mainstream attention in 2021, I developed frontend features for a tool that enabled Twitch streamers to reward viewer engagement with non-fungible tokens (NFTs). During a livestream, an overlay would prompt viewers to claim their reward which would trigger the creation of an NFT when clicked. The NFT was then stored in a pre-created wallet associated with the viewer's Twitch account.\n\nOn this particular project, I added the clickable element to the overlay along with various features as a part of the admin dashboard to both create and manage the NFTs.",
    technologies: ["React", "Tailwind", "Blockchain"],
  },
  {
    title: "Smart Meal Planner",
    description:
      "I cook a lot, and I wanted to be able to get some recipe ideas based upon the ingredients I have at home. Coincidentally, I wanted to experiment with the OpenAI API, so I built a meal planner that would take in a list of ingredients and return a list of recipes that could be made with the ingredients using GPT-4o.",
    link: "https://github.com/evankalaw/macroio",
    technologies: ["Next.JS", "Tailwind", "OpenAI", "Vercel"],
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
