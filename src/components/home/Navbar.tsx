'use client'
import { getDate } from '@/extra/date'
import React from 'react'
import {roboto} from '@/extra/fonts';
import Link from 'next/link';
import {Phone, Search} from 'lucide-react';
import {motion} from 'framer-motion';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { setSidebar } from '@/redux/slices/miscSlice';


const Navbar = () => {

    const date = getDate();
    const dispatch = useDispatch();

    function toggleSidebar() {

        dispatch(setSidebar());

    }


  return (
    <motion.header
    initial={{y : '-100%',opacity : 0}}
    animate={{y : '0',opacity : 1}}
    transition={{duration : 0.6,ease : "easeOut"}}
     className='w-full h-[118px] px-10 flex items-center justify-between'>

        <div className={`logo flex gap-3 items-center ${roboto.className} text-[18px] text-white`}>

            <p className='opacity-60'>LOCAL/ </p>
            <p>{date}</p>

            <Link href="/contact" className='w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center'>
                <Phone width={20} height={20}/>
            </Link>

        </div>


        <div className='flex gap-4 items-center text-[14px] text-white'>

            <div className='cursor-pointer'>
                <Search/>
            </div>

            <Button onClick={toggleSidebar} content='MENU'/>

        </div>
      
    </motion.header>
  )
}

export default Navbar
