import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "../components/Hero"

const experiences = [
  { title: "Farm-to-Table Dining", image: "dining.jpg" },
  { title: "Poolside Perfection", image: "pool.jpg" },
  { title: "Scenic Nature Trails", image: "trails.jpg" },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Unforgettable Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <div key={experience.title} className="card">
                <div className="relative h-48 md:h-64">
                  <Image
                    src={`/images/${experience.image}`}
                    alt={experience.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-forest mb-4">
                    Indulge in the finest {experience.title.toLowerCase()} experience at Shruti's Farm.
                  </p>
                  <Link
                    href="/experiences"
                    className="text-earth hover:text-forest transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-forest">
            Ready for a Luxurious Getaway?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-forest max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of rustic charm and modern luxury at Shruti's Farm.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

