"use client"
import {roboto,spaceGrotesk} from '@/extra/fonts';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-[600px] flex items-center flex-col ">

    <div className="w-full h-[90px]  flex justify-center items-end">
      <motion.div
      initial={{y : '-100%',opacity : 0}}
      animate={{y : "0",opacity : 1}}
      transition={{duration : 0.6,ease : "easeOut"}}
       className='flex items-center justify-center gap-3'>
        <span className='relative flex items-center justify-center w-3 h-3'>
          <span className='btn-ping'/>
          <span className='btn-ping_dot'/>
        </span>
        <h2 className={`${roboto.className} uppercase text-white`}>Available For Freelance</h2>
      </motion.div>
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

      <div className={`${roboto.className} uppercase relative group text-[18px] text-white`}>
        <span>
            SOFTWARE ENGINNER & DEVELOPER
        </span>
        <span className="w-[310px] scale-x-0 group-hover:scale-x-100 transition-all duration-500 orign-left inset-0 left-0 top-[45%] h-[1px] absolute bg-white"></span>
      </div>

    </motion.div>

  </div>
  )
}

export default Hero
