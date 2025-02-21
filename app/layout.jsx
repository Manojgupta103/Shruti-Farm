import { Inter, Playfair_Display } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Shruti's Farm ",
  description: "Experience the epitome of rural luxury at our exclusive farmhouse .",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-forest`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

