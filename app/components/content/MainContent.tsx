import Link from "next/link";
import WorkExperienceSection from "./WorkExperienceSection";

export default function MainContent() {
  return (
    <div className="flex-col h-full space-y-6">
      <div className="text-xl space-y-6">
        <div>
          I&apos;m a{" "}
          <span className="font-bold">Full Stack Software Engineer</span> with a
          passion for building scalable and performant web applications with
          great user experiences.
        </div>
        <div>
          Most recently, I consulted with{" "}
          <Link
            href="https://elizastudios.ai"
            target="_blank"
            className="text-[#5582ff] font-bold underline"
          >
            Eliza Studios
          </Link>
          , a creative studio, where I built a comprehensive front end
          experience for their users with Next.JS, Tailwind CSS, TypeScript, and
          Sanity CMS.
        </div>
      </div>
      <div>
        <div className="text-xl font-bold">Education</div>
        <div className="py-3">
          <div>B.S. in Computer Science, University of Wisconsin-Madison</div>
          <div>2015 - 2019</div>
        </div>
      </div>
      <div>
        <div className="text-xl font-bold">Work</div>
        <WorkExperienceSection />
      </div>
    </div>
  );
}
