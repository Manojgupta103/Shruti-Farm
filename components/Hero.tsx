"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const images = ["/images/farm-1.jpg", "/images/farm-2.jpg", "/images/farm-3.jpg"]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Farm image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="font-playfair text-6xl font-bold mb-6"
        >
          Welcome to Rustic Retreat Farmhouse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Experience the tranquility of rural life with our unique farm stays and activities.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <Link
            href="#contact"
            className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors inline-block text-lg font-semibold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

