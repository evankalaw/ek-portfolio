import Link from "next/link";
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";

export default function MainContent() {
  return (
    <div className="flex-col h-full space-y-6">
      <div className="text-xl space-y-6">
        <div>
          I&apos;m a{" "}
          <span className="font-bold">Full Stack Software Engineer</span> with a
          passion for building web applications that are performant and have
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
        <div>
          Prior to that, I was a Software Engineer at Yoz Labs, where I worked
          on a blockchain notifications product.
        </div>
        <div>
          If I&apos;m not building software, I&apos;m probably playing video
          games, discovering new music, kicking it with good company, or working
          on my passion project,{" "}
          <Link
            href="https://www.instagram.com/mabuyami/"
            target="_blank"
            className="text-[#5582ff] font-bold underline"
          >
            Mabu-yami
          </Link>
          .
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
      <div>
        <div className="text-xl font-bold">Projects</div>
        <ProjectSection />
      </div>
    </div>
  );
}
