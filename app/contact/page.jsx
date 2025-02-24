"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message })
    // Reset form fields and show success message
    setName("")
    setEmail("")
    setMessage("")
    setSubmitted(true)
  }

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you for your message. We will get back to you soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border border-forest rounded"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-forest rounded"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    className="w-full p-2 border border-forest rounded"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-forest" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-forest" />
                <p>info@shrutisfarm.com</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-forest" />
                <p>Shruti’s farm, Navenagar, Alibaug, Maharashtra 402108</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10996.861789431021!2d72.99168193754366!3d18.656888761943954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be873003046cafd%3A0xa89da6234aaa9ddb!2zU2hydXRp4oCZcyBmYXJt!5e1!3m2!1sen!2sin!4v1740433114064!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

