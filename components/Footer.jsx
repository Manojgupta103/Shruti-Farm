import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Shruti's Farm</h3>
            <p className="mb-4">Experience the beauty of nature at our exclusive farm retreat.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky transition-colors">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/shruti_farm22/" className="hover:text-sky transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-sky transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-sky transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-sky transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p className="mb-2">Shruti’s farm, Navenagar, Alibaug, Maharashtra 402108</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@shrutisfarm.com</p>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Shruti's Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

