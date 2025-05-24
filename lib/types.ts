export type WorkExperience = {
  jobTitle: string;
  lengthOfJob: string;
  company: string;
  technologies?: Technology[];
  description: string;
};

export type Technology =
  | "TypeScript"
  | "Next.JS"
  | "Sanity"
  | "Tailwind"
  | "JavaScript"
  | "React"
  | "Node.js"
  | "HTML"
  | "CSS"
  | "Python"
  | "Django"
  | "Flask"
  | "Ruby"
  | "Rails"
  | "Java"
  | "Spring"
  | "Kotlin"
  | "Swift"
  | "AWS"
  | "Docker"
  | "Kubernetes"
  | "Git"
  | "Laravel"
  | "Jenkins"
  | "Blockchain"
  | "PHP"
  | "Vercel";
