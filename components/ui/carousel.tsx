"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Wand2, Image as ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const steps = [
    {
      title: "Capture Your Essence",
      description: "Upload 5+ high-quality selfies that truly represent you. Choose well-lit, front-facing photos for best results.",
      icon: Camera,
      color: "bg-gradient-to-r from-blue-400 to-cyan-300",
    },
    {
      title: "AI Enhancement",
      description: "Our advanced AI analyzes and enhances your photos, creating professional-looking headshots in about an hour.",
      icon: Wand2,
      color: "bg-gradient-to-r from-purple-400 to-pink-300",
    },
    {
      title: "Receive Your Headshots",
      description: "Get a collection of polished, professional headshots that elevate your personal brand across all platforms.",
      icon: ImageIcon,
      color: "bg-gradient-to-r from-amber-400 to-orange-300",
    }
  ]

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % steps.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering, steps.length])

  return (
    <div className="py-12 flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">How It Works</h2>
        <p className="text-xl mb-12 text-gray-600">
          Transform your image in three simple steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                index === activeStep ? "ring-2 ring-blue-400 shadow-lg" : "shadow"
              }`}
              onMouseEnter={() => {
                setIsHovering(true)
                setActiveStep(index)
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              <CardContent className="p-0">
                <div className={`h-2 ${step.color}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full ${step.color}`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold ml-3 text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-lg shadow-lg ${steps[activeStep].color} text-white`}
          >
            <h4 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h4>
            <p className="text-lg">{steps[activeStep].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center space-x-2">
          {steps.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`w-3 h-3 rounded-full p-0 ${
                index === activeStep
                  ? "bg-blue-500 border-blue-500"
                  : "bg-gray-300 border-gray-300 hover:bg-gray-400 hover:border-gray-400"
              }`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
