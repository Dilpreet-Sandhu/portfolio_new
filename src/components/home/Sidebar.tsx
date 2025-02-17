import { Search } from "lucide-react";
import Button from "../Button";
import GrainyBackground from "../GrainyBackground";
import { spaceGrotesk, roboto } from "@/extra/fonts";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';

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
      <motion.div
       className="absolute transition-all h-screen w-[600px] flex flex-col border-l-[#212121] shadow-md border-l-[1px] right-0 bg-black">
        <GrainyBackground />

        {/* the top section*/}
        <div className="w-full  flex items-center px-10 gap-10 justify-between h-[100px]">
          <div className="w-[80%] overflow-hidden flex items-center  whitespace-nowrap h-[40px] border-[#212121]  border-[1px]">
            <div
              className={`animate-scroll overlfow-hidden text-white  ${roboto.className}`}
            >
              DILPREET SANDHU • DILPREET SANDHU • DILPREET SANDHU • DILPREET
              SANDHU 
            </div>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <Search color="white" />
            <Button onClick={toggleSidebar} content="CLOSE" />
          </div>
        </div>

        {/* the middle section */}

        <div className="w-full mt-5  h-[500px] px-5 flex flex-col items-center justify-center">
          <div className="w-full h-[400px] border-[1px] border-dashed border-[#212121]">
            <SidebarComponent title="MAIN MENU" />
            <SidebarComponent title="ABOUT ME" />
            <SidebarComponent title="MY WORK" />
            <SidebarComponent title="CONTACT" />
          </div>
        </div>

        {/* bottom section */}

        <div className="w-full mt-2 flex items-center  h-[100px] px-5">
          <div
            className={`w-full h-[60px] border-[#212121] ${roboto.className} flex border-[1px] border-dashed`}
          >
            <Link target="_blank" href="https://www.instagram.com/dilpreet_sandhu224/" className="w-[33.3%] flex items-center gap-2 justify-center h-full border-[#212121] border-r-[1px] border-dashed">
              <p className="text-[20px] text-white">INSTAGRAM</p>
              <Image src={"/arrow-up.png"} alt="arrow" width={15} height={15} />
            </Link>
            <Link target="_blank"  href="https://www.linkedin.com/in/dilpreet-sandhu-b23326309/" className="w-[33.3%] h-full flex items-center gap-2 justify-center border-[#212121] border-r-[1px] border-dashed">
              <p className="text-[20px] text-white">LINKED IN</p>
              <Image src={"/arrow-up.png"} alt="arrow" width={15} height={15} />
            </Link>
            <Link href="https://github.com/Dilpreet-Sandhu/" target="_blank" className="w-[33.3%] flex items-center justify-center gap-2 h-full ">
              <p className="text-[20px] text-white">GITHUB</p>
              <Image src={"/arrow-up.png"} alt="arrow" width={15} height={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SidebarComponent = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[100px] flex items-end justify-center border-dashed border-b-[1px] border-[#212121]">
      <div
        className={`w-[300px] relative group transition-all overflow-hidden h-[100px] ${spaceGrotesk.className} `}
      >
        <div className="absolute w-full h-[100px] group-hover:translate-y-[-100px] translate-y-0  flex items-center justify-center ">
          <span className="absolute top-[20px] left-0 text-white text-[20px]">
            +
          </span>
          <span className="text-[50px] text-white/50 font-bold">{title}</span>
        </div>

        <div className="w-full absolute group-hover:translate-y-0 h-[100px] duration-300 hover:translate-y-[100px]  translate-y-[100px] flex items-center justify-center">
          <span className="absolute top-[20px] left-0 text-white text-[20px]">
            +
          </span>
          <span className="text-[50px] text-white font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
