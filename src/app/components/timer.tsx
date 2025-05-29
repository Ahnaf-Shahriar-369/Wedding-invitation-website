"use client"

import { useState, useEffect } from "react"
import { Corinthia } from "next/font/google"
import Image from "next/image"

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
})

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Make initialTime optional and provide a default value
interface CountdownTimerProps {
  initialTime?: TimeLeft
}

export default function CountDownTimer({
  initialTime = { days: 5, hours: 21, minutes: 48, seconds: 59 },
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime)

  const colors = {
    deepMagenta: "#870B7D",
    mediumPink: "#E382D3",
    lightCream: "#F8ECE3",
    paleWhite: "#FFF3FB",
    bgPink: "#F9D7F8",
  }

  useEffect(() => {
    // Load saved time from localStorage
    const savedTime = localStorage.getItem("countdownTime")
    if (savedTime) {
      setTimeLeft(JSON.parse(savedTime))
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let newTime: TimeLeft
        if (prevTime.seconds > 0) {
          newTime = { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          newTime = { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          newTime = { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          newTime = { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          newTime = prevTime
          clearInterval(timer)
        }

        // Save new time to localStorage
        localStorage.setItem("countdownTime", JSON.stringify(newTime))
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const DecorativeLine = () => (
    <div className="relative w-full h-8 mb-8">
      <Image src="/hr.png" alt="Decorative line" width={500} height={32} className="w-full h-auto" />
    </div>
  )

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md w-20">
      <span className="text-3xl font-bold" style={{ color: colors.deepMagenta }}>
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm mt-1" style={{ color: colors.deepMagenta }}>
        {label}
      </span>
    </div>
  )

  return (
    <div className="mt-20 mb-16 max-w-2xl mx-auto px-4 py-8 text-center">
      <DecorativeLine />

      <h1 className="mt-12 text-3xl md:text-4xl mb-14" style={{ color: colors.deepMagenta }}>
        We&apos;r Getting Merried
      </h1>

      <p className={`${corinthia.className} text-2xl md:text-3xl mb-4 text-gray-700`}>
        Assalamualaikum Warrahmatullah Wabarrakatuhu
      </p>

      <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
        By asking for the grace and blessing of Allah SWT we intend to hold a wedding celebration for our sons and
        daughters, which Allah SWT willing will be held on:
      </p>

      <p className=" mt-10  text-4xl font-semibold mb-10 text-neutral-600" >
        10 March 2025
      </p>

      <div className="flex justify-center items-center space-x-4">
        <TimeBox value={timeLeft.days} label="D" />
        <TimeBox value={timeLeft.hours} label="H" />
        <TimeBox value={timeLeft.minutes} label="M" />
        <TimeBox value={timeLeft.seconds} label="S" />
      </div>
    </div>
  )
}