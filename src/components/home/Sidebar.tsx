import { Search } from "lucide-react";
import Button from "../Button";
import GrainyBackground from "../GrainyBackground";
import { roboto } from "@/extra/fonts";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  if (!isSidebarOpen) return <></>;

  return (
    <div className="absolute inset-0 z-20 bg-black/70 overflow-hidden ">
      <div className="absolute h-screen w-[600px] flex flex-col border-l-[#212121] shadow-md border-l-[1px] right-0 bg-black">
        {/* <GrainyBackground /> */}

        {/* the top section*/}
        <div className="w-full flex items-center px-10 gap-10 justify-between h-[100px]">
          <div className="w-[80%] overflow-hidden flex items-center  whitespace-nowrap h-[40px] border-[#212121]  border-[1px]">
            {/* <div
              className={`animate-scroll overlfow-hidden text-white  ${roboto.className}`}
            >
              DILPREET SANDHU • DILPREET SANDHU • DILPREET SANDHU • DILPREET
              SANDHU • DILPREET SANDHU • DILPREET SANDHU • DILPREET SANDHU •
              DILPREET SANDHU • DILPREET SANDHU • DILPREET SANDHU • DILPREET
              SANDHU
            </div> */}
          </div>

          <div className="flex items-center gap-4 justify-end">
            <Search color="white" />
            <Button content="CLOSE" />
          </div>
        </div>

        {/* the middle section */}

        <div className="w-full mt-5 h-[500px] px-5 flex items-center justify-center">

            <div className="w-full h-[400px] border-[1px] border-dashed border-[#212121]">

                <div className="w-full h-[100px] border-dashed border-b-[1px] border-[#212121]">

                </div>
               

            </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
