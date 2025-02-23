"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Farm landscape" },
  { src: "/images/gallery-2.jpg", alt: "Cozy bedroom" },
  { src: "/images/gallery-3.jpg", alt: "Farm-to-table dining" },
  { src: "/images/gallery-4.jpg", alt: "Spa treatment room" },
  { src: "/images/gallery-5.jpg", alt: "Scenic hiking trail" },
  { src: "/images/gallery-6.jpg", alt: "Wine cellar" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Gallery
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

