"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [guests, setGuests] = useState(1)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", { date: selectedDate, guests })
    // Show a confirmation message or redirect to a confirmation page
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-playfair text-4xl font-bold text-center mb-8">Book Your Stay</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleBooking}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <Input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                min={1}
                max={10}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Book Now
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

