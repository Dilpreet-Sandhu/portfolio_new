'use client'
import { getPixelColor, invertColor } from '@/extra/cursorColor';
import React, { useEffect } from 'react'

const CustomCursor = () => {

    useEffect(() => {

        const cursor = document.getElementById("customCursor");

        document.addEventListener("mousemove",(e) => {

            cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;

            const pixelColor = getPixelColor(e.clientX,e.clientY);

            const invertedColor = invertColor(pixelColor);

            cursor.style.backgroundColor = invertedColor;

        })


    },[])

  return (
    <div id="customCursor" className="fixed w-6 h-6 bg-white mix-blend-difference rounded-full pointer-events-none z-50"></div>
  )
}

export default CustomCursor
