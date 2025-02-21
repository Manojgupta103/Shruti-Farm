"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },  // Full route for "Home"
  { name: "About", href: "/about" },  // Smooth scroll for section navigation
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)  // Add shadow when scrolled
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle smooth scrolling and routing
  const scrollToSection = (e, href) => {
    e.preventDefault()

    // Check if the link is an anchor (for smooth scroll)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = href  // Full path routing for page navigation
    }

    setIsOpen(false)  // Close mobile menu after click
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-playfair text-2xl font-bold text-forest">
          Shruti's Farm
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-forest hover:text-earth transition-colors"
              onClick={(e) => scrollToSection(e, item.href)}  // Smooth scroll or routing
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-forest hover:bg-sage transition-colors"
              onClick={(e) => scrollToSection(e, item.href)}  // Smooth scroll or routing
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
