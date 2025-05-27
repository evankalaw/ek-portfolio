import SocialNav from "../nav/SocialNav";

export default function SideBar() {
  return (
    <div className="flex flex-col space-y-8 md:justify-between md:h-[calc(100vh-5rem)]">
      <div className="space-y-2 text-2xl">
        <div className="font-bold text-4xl">Evan Kalaw</div>
        <div>Software Engineer</div>
        <div>Chicago, IL</div>
        <div>let&apos;s build.</div>
      </div>
      <div className="mt-8 md:mt-12">
        <SocialNav />
      </div>
    </div>
  );
}
