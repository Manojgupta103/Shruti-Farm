"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Our stay at Rustic  was absolutely magical. The farm tours were educational and fun for the whole family!",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I loved the peaceful atmosphere and the delicious farm-to-table meals. It was the perfect getaway from city life.",
    image: "/images/testimonial-2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "The seasonal activities were a highlight of our trip. We can't wait to come back and experience a different season!",
    image: "/images/testimonial-3.jpg",
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-6">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-playfair text-2xl font-bold">{testimonials[currentIndex].name}</h3>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg italic text-stone-600">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-green-600" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-green-600" />
      </button>
    </div>
  )
}

export default Testimonials

