import { WorkExperience } from "@/lib/types";
import WorkExperienceItem from "./WorkExperienceItem";

const workExperience: WorkExperience[] = [
  {
    jobTitle: "Software Engineering Consultant",
    lengthOfJob: "Mar 2025 - Apr 2025",
    company: "Eliza Studios",
  },
  {
    jobTitle: "Software Engineer",
    lengthOfJob: "Sep 2021 - Oct 2024",
    company: "Yoz Labs",
  },
  {
    jobTitle: "Software Developer",
    lengthOfJob: "Aug 2019 - Sep 2021",
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
