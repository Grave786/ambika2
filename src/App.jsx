import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeaturedBikesSection from './Components/FeaturedBikesSection'
import ServicesSection from './Components/ServicesSection'
import TestimonialCard from './Components/TestimonialCard'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedBikesSection />
      <ServicesSection />
      <TestimonialCard />
      <ContactUs />
      <Footer/>
   
      {/* <Home /> */}
    </>
  )
}

export default App
