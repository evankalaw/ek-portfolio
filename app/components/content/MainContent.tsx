import WorkExperienceSection from "./WorkExperienceSection";

export default function MainContent() {
  return (
    <div className="flex-col h-full space-y-6">
      <div className="text-xl space-y-6">
        <div>
          I&apos;m a{" "}
          <span className="text-[#5582ff] font-bold">
            Full Stack Software Engineer
          </span>{" "}
          with a passion for building scalable and performant web applications
          with great user experiences.
        </div>
        <div>
          Most recently, I consulted with Eliza Studios, a creative studio,
          where I built a comprehensive front end experience for their users
          with Next.JS, Tailwind CSS, TypeScript, and Sanity CMS.
        </div>
      </div>
      <WorkExperienceSection />
    </div>
  );
}
