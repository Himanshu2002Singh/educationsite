import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Features from './Features'
import Programs from './Programs'
import Testimonials from './Testimonials'
import LeadCaptureForm from './Connect'
import FounderDiaries from './FounderDiaries'
import GuidingValues from './Guidence'
import AutoCarousel from './Country'
import FAQSection from './Faq'
import Footer from './Footer'

function Home() {
  return (
    <div>
         <Hero />
    <Stats />
    {/* <About /> */}
    <Features />
    
    <Programs />
    <Testimonials />
    <LeadCaptureForm/>
    <FounderDiaries/>
    <GuidingValues/>
    <AutoCarousel/>
    <FAQSection/>
      {/* <Contact /> */}
   
    </div>
  )
}

export default Home