import Image from "next/image"

const experiences = [
  {
    title: "Farm-to-Table Dining",
    description:
      "Savor exquisite meals prepared with the freshest ingredients harvested from our organic farm. Our skilled chefs create culinary masterpieces that celebrate the flavors of the season.",
    image: "dining.jpg",
  },
  {
    title: "Poolside Perfection",
    description:
      "Enjoy the cool, clear waters of Shruti’s Farm’s luxurious pool, where every stroke leads to serenity and bliss.",
    image: "pool.jpg",
  },
  {
    title: "Scenic Nature Trails",
    description:
      "Explore miles of picturesque hiking trails showcasing the breathtaking beauty of our surroundings. Discover hidden waterfalls, observe local wildlife, and immerse yourself in the tranquility of nature.",
    image: "trails.jpg",
  },
  {
    title: "Family Celebrations & Gatherings",
    description:
    "Host your family’s special moments in our charming farmhouse setting. Whether it's a birthday, reunion, or anniversary, enjoy the warmth of the indoors with personalized decorations, catering, and activities for all ages. Create unforgettable memories in a cozy, intimate atmosphere.",
    image: "family.jpg",
  },
]

export default function Experiences() {
  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Unforgettable Experiences at Shruti's Farm</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((experience) => (
            <div key={experience.title} className="card">
              <div className="relative h-64">
                <Image
                  src={`/images/${experience.image}`}
                  alt={experience.title}
                  fill
                  className="object-cover rounded-2xl transition-transform transform group-hover:scale-105 group-hover:translate-y-2 shadow-2xl group-hover:shadow-3xl"
                />
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-2xl font-bold mb-4">{experience.title}</h2>
                <p className="text-forest">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
