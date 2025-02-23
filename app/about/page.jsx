"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

export default function About() {
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
          About Shruti's Farm
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
            <p className="text-lg mb-6">
              Nestled in the heart of pristine countryside, Shruti's Farm offers an unparalleled retreat that blends
              rustic charm with modern opulence. Our meticulously restored 19th-century farmhouse stands as a testament
              to timeless elegance, providing guests with a sanctuary of comfort and sophistication.
            </p>
            <p className="text-lg mb-6">
              At Shruti's Farm, we believe in creating unforgettable experiences that reconnect you with nature while
              indulging in the finest amenities. From our farm-to-table dining experiences to our state-of-the-art spa
              facilities, every aspect of your stay is crafted to ensure ultimate relaxation and rejuvenation.
            </p>
            <p className="text-lg">
              Our commitment to sustainability and eco-friendly practices ensures that your luxurious getaway also
              contributes to the preservation of our beautiful surroundings. Immerse yourself in the tranquility of our
              expansive grounds, breathe in the fresh country air, and rediscover the simple pleasures of life in an
              environment of unparalleled comfort.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
            <Image
              src="/images/about-farm.jpg"
              alt="Shruti's Farm"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

