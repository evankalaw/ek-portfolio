import SideBar from "./components/content/SideBar";
import MainContent from "./components/content/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-10 h-full space-y-12 md:space-y-0 max-w-[1200px] mx-auto">
      <div className="w-full md:w-1/3 h-full">
        <SideBar />
      </div>
      <div className="w-full md:w-2/3 h-full">
        <MainContent />
      </div>
    </div>
  );
}
