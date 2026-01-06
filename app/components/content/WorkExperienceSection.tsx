import { WorkExperience } from "@/lib/types";
import WorkExperienceItem from "./WorkExperienceItem";

const workExperience: WorkExperience[] = [
  {
    jobTitle: "Senior Software Engineer",
    lengthOfJob: "Jul 2025 - Dec 2025",
    company: "Warmer",
    technologies: [
      "Next.JS",
      "React",
      "TypeScript",
      "Tailwind",
      "Sendbird",
      "Posthog",
      "Daily.co",
      "AI",
    ],
    description:
      "At Warmer, I got to work on a variety of things, with the most impactful probably being implementing an AI chatbot for the primary customer booking flow, increasing conversion by 5x. I also started the transition to move the primary Next.js app off of an outdated SDK, reducing both development time and making deploying new features easier. Other contributions include: architecting the frontend and TanStack Query state management for in-house Groups and P2P connections systems, social retention features, and owning the Sendbird integration end-to-end—setting up providers, configuring the SDK, and extending Sendbird's UIKit components with custom functionality for messaging across the app.",
  },
  {
    jobTitle: "Software Engineering Consultant",
    lengthOfJob: "Mar 2025 - Apr 2025",
    company: "Eliza Studios",
    technologies: ["Sanity", "Next.JS", "Tailwind", "TypeScript", "Git"],
    description:
      "I was contracted by Eliza Studios to build a 'magazine'-esque website for their users to view and interact with their content. I built the website using Sanity CMS to manage the content and Next.JS, TypeScript, and Tailwind CSS for the frontend. I worked one-on-one with the founding team and their designer to design the website and implement the necessary features. After the initial launch, I wrote up technical documentation for the website for future component maintenance and updates to ensure a smooth transition after I rolled off the project.",
  },
  {
    jobTitle: "Founding Software Engineer",
    lengthOfJob: "Sep 2021 - Oct 2024",
    company: "Yoz Labs",
    technologies: ["Next.JS", "React", "Tailwind", "Git", "Blockchain"],
    description:
      "At Yoz Labs, we worked on a Blockchain notifications product. I owned integrations with Telegram, hooking external APIs such as Discord, Twitter and Warpcast to set up additional channels for notifications, and built user interfaces for composing notifications, analytics dashboards, and social features. Prior to getting sunsetted, this product sent millions of notifications across 6+ blockchains.",
  },
  {
    jobTitle: "Software Developer",
    lengthOfJob: "Aug 2019 - Sep 2021",
    company: "Northwestern University",
    technologies: ["Laravel", "JavaScript", "Git", "Jenkins", "PHP"],
    description:
      "At Northwestern University, I was a Software Developer in the central IT department on a team that oversaw a variety of applications used by the university. I was part of a rewrite for a key application used by the Student Finance department that helps with student loan processing and loan disbursement.",
  },
];

export default function WorkExperienceSection() {
  return (
    <div className="space-y-6">
      {workExperience.map((job) => {
        return (
          <WorkExperienceItem key={job.company + job.jobTitle} job={job} />
        );
      })}
    </div>
  );
}
