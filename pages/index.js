import Image from 'next/image'
import Navbar from '/components/Navbar'
import Hero from '/components/Hero'
import Footer from '/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <Navbar />
      <Hero />
      <Footer />
   </div>
  )
}
