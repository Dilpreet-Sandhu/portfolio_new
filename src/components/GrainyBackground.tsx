'use client'

import { useEffect, useRef } from "react"

const GrainyBackground = () => {

    const cavnasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {


        const canvas = cavnasRef.current;
        
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function drawNoise() {

            if (!canvas) return;
            
            if (!ctx) return;

            const imageData = ctx?.createImageData(canvas.width,canvas.height);

            const pixels = imageData?.data;

            for (let i = 0;i < pixels.length;i+= 4) {
                if (Math.random() > 0.7) {

                    const noise = Math.random() * 60; // generate random grayscale value
                    pixels[i] = pixels[i + 1] = pixels[i + 2] = noise;
                    pixels[i + 3] = 120; 
                }

            }

            ctx?.putImageData(imageData,0,0);

        }

        function animate() {

            drawNoise();
            setTimeout(() => requestAnimationFrame(animate),50);

        }

        animate();

    },[])



  return (
    <canvas ref={cavnasRef} className="inset-0 w-full h-full absolute"/>
  )
}

export default GrainyBackground
