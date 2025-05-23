import { WorkExperience } from "@/lib/types";
import WorkExperienceItem from "./WorkExperienceItem";

const workExperience: WorkExperience[] = [
  {
    jobTitle: "Software Engineering Consultant",
    lengthOfJob: "March 2025 - April 2025",
    company: "Eliza Studios",
  },
  {
    jobTitle: "Software Engineer",
    lengthOfJob: "September 2021 - October 2024",
    company: "Yoz Labs",
  },
  {
    jobTitle: "Software Developer",
    lengthOfJob: "August 2019 - September 2021",
    company: "Northwestern University",
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
