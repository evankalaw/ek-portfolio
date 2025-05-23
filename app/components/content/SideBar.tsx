import SocialNav from "../nav/SocialNav";

export default function SideBar() {
  return (
    <div className="flex-col h-full space-y-10">
      <div className="space-y-2 text-2xl">
        <div className="font-bold text-4xl">Evan Kalaw</div>
        <div>Software Engineer</div>
        <div>Chicago, IL</div>
        <div>let&apos;s build.</div>
      </div>
      <SocialNav />
    </div>
  );
}
