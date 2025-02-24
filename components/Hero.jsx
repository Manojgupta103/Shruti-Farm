"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const images = ["/images/farm-1.jpg", "/images/farm-2.jpg"]
export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Farm image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">Welcome to Shruti's Farm Farmhouse</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience the tranquility of rural life with our unique farm stays and activities.
        </p>
        <Link
          href="/contact"
          className="bg-green-600 text-white py-3 px-6 rounded-2xl hover:bg-green-700 transition-colors inline-block text-lg font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

