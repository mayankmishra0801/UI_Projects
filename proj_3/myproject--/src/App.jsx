import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (


    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Price/>
    <Testimonial/>
    <Footer/>
    </div>
  
    
    </>

    // <div>

    //   <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      
      
    //   </div>
  )
}

export default App