import { WorkExperience } from "@/lib/types";

interface WorkExperienceItem {
  job: WorkExperience;
}

export default function WorkExperienceItem(props: WorkExperienceItem) {
  const { job } = props;
  const { lengthOfJob, jobTitle, company } = job;

  return (
    <div>
      <div>{lengthOfJob}</div>
      <div>{jobTitle}</div>
      <div>{company}</div>
    </div>
  );
}
