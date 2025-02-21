"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Home() {
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
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Shruti's Farm"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow"
          >
            Welcome to Shruti's Farm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-shadow"
          >
            Experience the epitome of rural luxury
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link href="/contact" className="btn-primary">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} initial="hidden" animate={controls} className="section-title">
            Unforgettable Experiences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Farm-to-Table Dining", image: "dining.jpg" },
              { title: "Luxury Spa Treatments", image: "spa.jpg" },
              { title: "Scenic Nature Trails", image: "trails.jpg" },
            ].map((experience, index) => (
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
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-forest mb-4">
                    Indulge in the finest {experience.title.toLowerCase()} experience at our Shruti's Farm.
                  </p>
                  <Link
                    href="/experiences"
                    className="text-earth hover:text-forest transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-forest">
            Ready for a Luxurious Getaway?
          </h2>
          <p className="text-xl mb-8 text-forest max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of rustic charm and modern luxury.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

