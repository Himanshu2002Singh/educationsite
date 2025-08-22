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

import AdmissionsSection from './CoursesAdmission'
import GlobalStudyDestinations from './CountryFlegs'
import HomePop from '../Popform/HomePop'


function Home() {
  return (
    <div>
         <Hero />
    <Stats />
    <GlobalStudyDestinations/>
    {/* <About /> */}
    <AutoCarousel/>
    
    
    <AdmissionsSection/>
    <Features />
    <Programs />
    <Testimonials />
    <LeadCaptureForm/>
    <FounderDiaries/>
    <GuidingValues/>
    
    <FAQSection/>
      {/* <Contact /> */}
      <HomePop/>
   
    </div>
  )
}

export default Home