"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

const experiences = [
  {
    title: "Farm-to-Table Dining",
    description:
      "Savor exquisite meals prepared with the freshest ingredients harvested from our organic farm. Our skilled chefs create culinary masterpieces that celebrate the flavors of the season.",
    image: "dining.jpg",
  },
  {
    title: "Luxury Spa Treatments",
    description:
      "Indulge in rejuvenating spa treatments using natural, locally-sourced products. Our expert therapists offer a range of services designed to relax, refresh, and revitalize your body and mind.",
    image: "spa.jpg",
  },
  {
    title: "Scenic Nature Trails",
    description:
      "Explore miles of picturesque hiking trails showcasing the breathtaking beauty of our surroundings. Discover hidden waterfalls, observe local wildlife, and immerse yourself in the tranquility of nature.",
    image: "trails.jpg",
  },
  {
    title: "Wine Tasting",
    description:
      "Discover a curated selection of fine wines from our private cellar, guided by our sommelier. Learn about wine pairings and enjoy tastings of local and international vintages.",
    image: "wine.jpg",
  },
]

export default function Experiences() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="section-title">
          Unforgettable Experiences at Shruti's Farm
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={ref}>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <Image
                src={`/images/${experience.image}`}
                alt={experience.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="font-playfair text-2xl font-bold mb-4">{experience.title}</h2>
                <p className="text-forest">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

