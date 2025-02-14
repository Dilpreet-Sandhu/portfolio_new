'use client'
import {roboto,spaceGrotesk} from '@/extra/fonts';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full h-[600px] flex items-center flex-col ">

      <div className="w-full h-[90px]  flex justify-center items-end">
        <div className='flex items-center justify-center gap-3'>
          <span className='w-3 h-3  bg-blue-500 rounded-full'></span>
          <h2 className={`${roboto.className} uppercase text-white`}>Available For Freelance</h2>
        </div>
      </div>

      <motion.div 
        initial={{y : "30%",opacity : 0}}
        animate={{y : '0',opacity : 1}}
        transition={{duration : 0.5,ease : "easeOut"}}
      className={`w-full ${spaceGrotesk.className} font-black tracking-tight leading-none uppercase flex flex-col text-white text-[180px] items-center`}>
        <h1>DILPREET</h1>
        <h1>SANDHU</h1>
      </motion.div>

      <motion.div
        initial={{y : "-30%",opacity : 0}}
        animate={{y : '0',opacity : 1}}
        transition={{duration : 0.5,ease : "easeOut"}}
      className='w-full h-[200px]  flex px-10 items-end justify-between'>

        <div className={`${roboto.className} uppercase text-[18px] opacity-50  text-white`}>
          <p>BASED IN PUNJAB, INDIA</p>
        </div>

        <div className={`${roboto.className} uppercase text-[18px] text-white`}>
              SOFTWARE ENGINNER & DEVELOPER
        </div>

      </motion.div>

    </div>
  );
}
