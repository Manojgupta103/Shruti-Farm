"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Sun, Cloud, Droplets } from "lucide-react"

const seasons = [
  {
    name: "Spring",
    icon: Leaf,
    color: "text-green-500",
    activities: ["Planting workshops", "Lamb feeding", "Wildflower walks"],
    description: "Experience the rebirth of nature as our farm comes alive with new growth and baby animals.",
  },
  {
    name: "Summer",
    icon: Sun,
    color: "text-yellow-500",
    activities: ["Hayrides", "Berry picking", "Outdoor movie nights"],
    description: "Enjoy warm sunny days filled with outdoor activities and bountiful harvests.",
  },
  {
    name: "Autumn",
    icon: Cloud,
    color: "text-orange-500",
    activities: ["Pumpkin carving", "Apple cider pressing", "Harvest festivals"],
    description: "Celebrate the harvest season with colorful foliage and festive farm activities.",
  },
  {
    name: "Winter",
    icon: Droplets,
    color: "text-blue-500",
    activities: ["Snowshoeing", "Holiday crafts", "Cozy fireside storytelling"],
    description: "Embrace the quiet beauty of winter with indoor coziness and outdoor adventures.",
  },
]

const SeasonalContent = () => {
  const [currentSeason, setCurrentSeason] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeason((prevSeason) => (prevSeason + 1) % seasons.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">Experience Every Season</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSeason}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {React.createElement(seasons[currentSeason].icon, {
                    className: `w-8 h-8 ${seasons[currentSeason].color} mr-2`,
                  })}
                  <h3 className="font-playfair text-2xl font-bold">{seasons[currentSeason].name}</h3>
                </div>
                <p className="text-stone-600 mb-4">{seasons[currentSeason].description}</p>
                <h4 className="font-bold mb-2">Activities:</h4>
                <ul className="list-disc list-inside">
                  {seasons[currentSeason].activities.map((activity, index) => (
                    <li key={index} className="text-stone-600 mb-1">
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {seasons.map((season, index) => (
              <motion.button
                key={season.name}
                className={`p-4 rounded-lg shadow-md flex flex-col items-center justify-center ${
                  index === currentSeason ? "bg-green-100 ring-2 ring-green-500" : "bg-white hover:bg-green-50"
                }`}
                onClick={() => setCurrentSeason(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {React.createElement(season.icon, { className: `w-8 h-8 ${season.color} mb-2` })}
                <span className="font-bold">{season.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeasonalContent

