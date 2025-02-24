"use client"

import { useState } from "react"
import Image from "next/image"

const images = [
  { src: "/images/farm-landscape.jpg", alt: "Farm landscape" },
  { src: "/images/cozy.jpg", alt: "Cozy bedroom" },
  { src: "/images/exp.jpg", alt: "Experience" },
  { src: "/images/npool.jpg", alt: "Night Life" },
  { src: "/images/gate.jpg", alt: "Gate" },
  { src: "/images/night.jpg", alt: "Night" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-2xl transition-transform transform group-hover:scale-105 group-hover:translate-y-2 shadow-2xl group-hover:shadow-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center p-4">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
