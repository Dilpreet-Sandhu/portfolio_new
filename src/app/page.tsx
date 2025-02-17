'use client'
import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import  Sidebar  from '@/components/home/Sidebar';
import { setSidebar } from '@/redux/slices/miscSlice';
import { useAppSelector } from '@/redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {

  const dispatch = useDispatch();
  const {isSidebarOpen} = useAppSelector(state => state.miscSlice);

  function toggleSidebar() {
    dispatch(setSidebar());
  }

  return (
    <div className="w-full  flex items-center flex-col ">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Hero/>
      <About/>
    </div>
  );
}
