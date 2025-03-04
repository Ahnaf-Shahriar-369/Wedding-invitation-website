"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Corinthia } from "next/font/google"

const corinthia = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function Hero1() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background forest image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Forest background"
          fill
          priority
          className="object-cover brightness-75 object-center"
        />
      </div>

      {/* Floating text container */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[280px] sm:max-w-2xl space-y-4 sm:space-y-6">
          {/* Top blessing text */}
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-xs sm:text-sm md:text-base tracking-wide font-sans">O Allah, the Most Loving</p>
            <p className="text-[10px] sm:text-xs md:text-sm tracking-wide font-sans leading-relaxed">
              With Your blessing, You brought us together in a holy marriage bond
            </p>
          </div>

          {/* Main wedding title */}
          <div className="space-y-2 sm:space-y-4 my-4 sm:my-8">
            <h2 className="text-sm sm:text-xl md:text-2xl uppercase tracking-widest">THE WEDDING OF</h2>

            {/* Names with decorative leaf icons */}
            <div className="relative py-1 sm:py-2 flex items-center justify-center">
              <h1 className={`text-4xl sm:text-6xl md:text-7xl mx-auto ${corinthia.className}`}>Asep & Putri</h1>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <p className="text-sm sm:text-base md:text-lg tracking-widest">05 03 2025</p>
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>
        </div>
      </div>
    </div>
  )
}



