"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"

interface WeddingCardProps {
  time: string
  venue: string
  address: {
    street: string
    city: string
    postalCode: string
  }
  onOpenMap?: () => void
}

export default function Card({
  time = "07:00 - 08:00",
  venue = "Raffles Hotel",
  address = {
    street: "Jl. Terusan Jakarta No.53, Cicaheum",
    city: "Kec. Kiaracondong, Kota Bandung",
    postalCode: "Jawa Barat 40291",
  },
  onOpenMap = () => window.open("https://maps.google.com/?q=Raffles+Hotel+Bandung"),
}: Partial<WeddingCardProps>) {
  return (
    <div className="relative max-w-md mx-auto overflow-hidden rounded-3xl ">
      {/* Background Image */}
      <Image
        src="/bCardBg.png"
        alt="Wedding Rings"
        width={400}
        height={600}
        className="object-cover w-full h-full rounded-3xl"
        
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-center">
        <div>
          {/* Wedding Rings Icon */}
          <div className="flex justify-center mb-4">
            <img src="/wedding-ring.png" alt="" />
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-light tracking-wide text-white drop-shadow-md">Wedding Ceremony</h1>

          {/* Time */}
          <div className="mb-4 text-xl font-light text-white drop-shadow-md">{time}</div>
        </div>

        <div className="mb-20">
          {/* Venue */}
          <div className="mb-4 text-2xl font-medium text-white drop-shadow-md">{venue}</div>

          {/* Address */}
          <div className="mb-6 text-sm font-light leading-relaxed text-white drop-shadow-md">
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.postalCode}</p>
          </div>

          {/* Open Map Button */}
          <button
            onClick={onOpenMap}
            className="flex items-center justify-center w-90 px-6 py-3 space-x-2 text-pink-500 transition-colors bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer ml-3"
          >
            <MapPin className="w-5 h-5" />
            <span>Open Map</span>
          </button>
        </div>
      </div>
    </div>
  )
}
          