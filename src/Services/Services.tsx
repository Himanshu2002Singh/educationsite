import React from 'react'
import HeroCounselling from './HeroService'
import ServicesSteps from './ServicesSteps'

import CompareTable from './COmpare'
import Testimonials from '../components/Testimonials'
import ExtraMile from './ExtraMile'
import FirstStepSection from './ContactForm'


function Services() {
  return (
    <div>
      <HeroCounselling/> 
      <ServicesSteps/> 
      <ExtraMile/>
      <CompareTable/>
      <Testimonials/>
      <FirstStepSection/>
    </div>
  )
}

export default Services