'use client'
import Hero from '@/components/home/Hero';
import  Sidebar  from '@/components/home/Sidebar';
import { useState } from 'react';

export default function Home() {

  const [isSidebarOpen,setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(prev => !prev);
  }

  return (
    <div className="w-full  flex items-center flex-col ">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Hero/>

    </div>
  );
}
