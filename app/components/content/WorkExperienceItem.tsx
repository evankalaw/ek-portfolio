import { WorkExperience } from "@/lib/types";
import TechnologyRow from "./TechnologyRow";

interface WorkExperienceItem {
  job: WorkExperience;
}

export default function WorkExperienceItem(props: WorkExperienceItem) {
  const { job } = props;
  const { lengthOfJob, jobTitle, company, technologies, description } = job;

  return (
    <div className="flex flex-col md:flex-row space-x-6 items-start py-3">
      <div className="uppercase text-sm leading-[1.5rem] whitespace-nowrap">
        {lengthOfJob}
      </div>
      <div className="flex flex-col leading-[1.5rem]">
        <div className="font-bold">{jobTitle}</div>
        <div>{company}</div>
        <div className="text-sm my-1">{description}</div>
        {technologies && (
          <div className="mt-2">
            <TechnologyRow technologies={technologies} company={company} />
          </div>
        )}
      </div>
    </div>
  );
}
