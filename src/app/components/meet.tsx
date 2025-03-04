import Image from "next/image"
import { Instagram, Twitter, Facebook } from "lucide-react"
import { Corinthia } from "next/font/google"

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

interface CoupleProfileProps {
  name: string
  relation: string
  parents: string
  image: string
  socialLinks: {
    instagram?: string
    twitter?: string
    facebook?: string
  }
}

interface HappyCoupleProps {
  groom: CoupleProfileProps
  bride: CoupleProfileProps
}

export default function HappyCouple({
  groom = {
    name: "Asep Isawan",
    relation: "Son of",
    parents: "Mr. Ihsan & Mrs. Fatima",
    image: "/pola.png",
    socialLinks: {
      instagram: 'https://www.instagram.com/',
      twitter: "https://x.com/home?lang=en",
      facebook: "https://www.facebook.com/",
    },
  },
  bride = {
    name: "Putri Amanda",
    relation: "Daughter of",
    parents: "Mr. Ibrahim & Mrs. Elina Dewi",
    image: "/maiya.png",
    socialLinks: {
      instagram: "https://www.instagram.com/",
      twitter: "https://x.com/home?lang=en",
      facebook: "https://www.facebook.com/",
    },
  },
}: Partial<HappyCoupleProps> = {}) {
  // Custom color palette from the image
  const colors = {
    deepMagenta: "#870B7D",
    mediumPink: "#E382D3",
    lightCream: "#F8ECE3",
    paleWhite: "#FFF3FB",
    bgPink: "#F9D7F8",
  }

  const CoupleProfile = ({ name, relation, parents, image, socialLinks }: CoupleProfileProps) => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          {/* Decorative Frame SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle */}
            <circle cx="100" cy="100" r="98" stroke={colors.mediumPink} strokeWidth="2" fill="none" />

            {/* Lotus Flower at Bottom */}
            <g transform="translate(70, 160)">
              {/* Center Petal */}
              <path d="M30 0 L35 -15 L30 -30 L25 -15 Z" fill={colors.mediumPink} />
              {/* Left Petals */}
              <path d="M15 -5 L20 -20 L15 -35 L10 -20 Z" fill={colors.mediumPink} transform="rotate(-20)" />
              <path d="M0 -10 L5 -25 L0 -40 L-5 -25 Z" fill={colors.mediumPink} transform="rotate(-40)" />
              {/* Right Petals */}
              <path d="M45 -5 L50 -20 L45 -35 L40 -20 Z" fill={colors.mediumPink} transform="rotate(20)" />
              <path d="M60 -10 L65 -25 L60 -40 L55 -25 Z" fill={colors.mediumPink} transform="rotate(40)" />
            </g>
          </svg>

          {/* Profile image */}
          <div className="absolute inset-2 overflow-hidden rounded-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className={`text-3xl md:text-4xl ${corinthia.className}`} style={{ color: colors.deepMagenta }}>
            {name}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">{relation}</p>
          <p className="text-xs md:text-sm text-gray-600 mt-0.5">{parents}</p>
        </div>

        <div className="flex space-x-2 mt-2">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} style={{ color: colors.deepMagenta }} className="hover:opacity-80">
              <Instagram size={16} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} style={{ color: colors.deepMagenta }} className="hover:opacity-80">
              <Twitter size={16} />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} style={{ color: colors.deepMagenta }} className="hover:opacity-80">
              <Facebook size={16} />
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="  mt-20 max-w-2xl mx-auto rounded-lg shadow-md p-8 bg-pink-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: colors.deepMagenta }}>
          Meet The Happy Couple
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Glory be to Allah SWT who has created creatures in pairs. Ya Allah,
          <br /> please accept and bless us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        <CoupleProfile {...groom} />
        <CoupleProfile {...bride} />
      </div>

      <div className="mt-8 text-center">
        <button
          className="font-medium cursor-pointer py-2 px-8 rounded-lg transition duration-300 text-white bg-pink-400"
          
        >
          Our Story
        </button>
      </div>
    </div>
  )
}





