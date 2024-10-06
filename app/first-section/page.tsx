"use client";
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Sparkles, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AIHeadshotLanding() {
  const headshots = [
    { src: "https://www.unrealshot.com/content/headshot01.webp", alt: "Professional man in suit" },
    { src: "https://www.unrealshot.com/content/headshot02.webp", alt: "Woman with long dark hair" },
    { src: "https://www.unrealshot.com/content/headshot03.webp", alt: "Man in casual attire" },
    { src: "https://www.unrealshot.com/content/headshot04.webp", alt: "Woman with short blonde hair" },
    { src: "https://www.unrealshot.com/content/headshot17.webp", alt: "Man in blue suit" },
    { src: "https://www.unrealshot.com/content/headshot7.webp", alt: "Woman in professional attire" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 overflow-hidden">
          {headshots.map((headshot, index) => (
            <FloatingImage
              key={index}
              src={headshot.src}
              alt={headshot.alt}
              index={index}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900">
            Your Boss Will Never Know It's
            <br />
            <span className="text-indigo-600">AI</span>
            <br />
            <span className="text-indigo-600">— We Promise!</span>
          </h1>
          <p className="text-xl text-indigo-800">
            #1 Professional AI Headshots Without the Professionals.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <p className="text-indigo-700 font-semibold">Trusted by</p>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                  alt={`Trusted user ${i + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-indigo-700 font-semibold">and 220+ others</p>
          </div>
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="mr-2 h-5 w-5" /> Generate AI Headshots
          </Button>
        </div>
      </div>
    </div>
  )
}

function FloatingImage({ src, alt, index }) {
  const controls = useAnimation()
  const yOffset = 20
  const duration = 3
  const delay = index * 0.2

  useEffect(() => {
    controls.start({
      y: [0, yOffset, 0],
      transition: {
        repeat: Infinity,
        duration: duration,
        ease: "easeInOut",
        delay: delay,
      },
    })
  }, [controls, yOffset, duration, delay])

  const isLeft = index % 2 === 0
  const xPosition = isLeft ? `${10 + (index % 3) * 5}%` : `${75 - (index % 3) * 5}%`
  const yPosition = `${15 + (index % 3) * 25}%`

  return (
    <motion.div
      className="absolute w-32 h-40 rounded-lg overflow-hidden shadow-lg"
      style={{ 
        left: isLeft ? xPosition : 'auto', 
        right: !isLeft ? xPosition : 'auto', 
        top: yPosition 
      }}
      animate={controls}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}
