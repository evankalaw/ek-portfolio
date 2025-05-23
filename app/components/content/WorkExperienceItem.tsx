import { WorkExperience } from "@/lib/types";

interface WorkExperienceItem {
  job: WorkExperience;
}

export default function WorkExperienceItem(props: WorkExperienceItem) {
  const { job } = props;
  const { lengthOfJob, jobTitle, company } = job;

  return (
    <div className="flex flex-col md:flex-row space-x-6 items-start">
      <div className="uppercase text-sm leading-[1.5rem]">{lengthOfJob}</div>
      <div className="flex flex-col leading-[1.5rem]">
        <div>{jobTitle}</div>
        <div>{company}</div>
      </div>
    </div>
  );
}
