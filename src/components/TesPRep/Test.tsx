import React from 'react'
import DreamScoreHero from './HeroTest'
import ResultShowcase from './Result'
import PrepTabs from './TestCategort'
import PuzzleApproach from './Puzzels'
import TestPrepJourney from './TestPrep'
import Testimonials from '../Testimonials'
import OfferBanner from './Banner'
// import FAQSection from '../Faq'
import SignUpForm from './SignupForm'

function Test() {
  return (
    <div>
    <DreamScoreHero/>
    <ResultShowcase/>
    <PrepTabs/>
    <PuzzleApproach/>
    <TestPrepJourney/>
    <Testimonials/>
    <OfferBanner/>
    <SignUpForm/>
    {/* <FAQSection/>
     */}
    </div>
  )
}

export default Test