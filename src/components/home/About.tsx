import { spaceGrotesk } from '@/extra/fonts'
import React from 'react'

const About = () => {
  return (
    <div className="w-full h-screen px-10 py-5">

        <div className='w-full h-[50%] flex flex-col justify-center'>

            <div className={`${spaceGrotesk.className} text-[80px] leading-none font-extrabold text-white`}>
            <h1>I AM A FUTURE</h1>
            <h1>SOFTWARE ENGINEER.</h1>
            </div>

        </div>
        <div className='w-full h-[50%]'>

        </div>
      
    </div>
  )
}

export default About
