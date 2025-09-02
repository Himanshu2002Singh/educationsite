import React from 'react'
import USPSection from './USPSection'

import CoursesIntakeSection from './CoursesIntakeSection'
import DegreeDurationSection from './DegreeDurationSection'
import EnglishTestSection from './EnglishTestSection'
import TuitionFeesSection from './TuitionFeesSection'
import CostOfLivingSection from './CostOfLivingSection'
import ScholarshipsSection from './ScholarshipsSection'
import WorkingRightsSection from './WorkingRightsSection'
import DocumentsVisaSection from './DocumentsVisaSection'
import LifestyleFactsSection from './LifestyleFactsSection'
import CTASection from './CTASection'
import UniversitiesSection from './UniversitiesSection'
import BestCitiesUk from './TopCityUk'

function Ukpage() {
  return (
     <div className="min-h-screen bg-gray-50">
      <USPSection />
      <BestCitiesUk/>
      <UniversitiesSection />
      <CoursesIntakeSection />
      <DegreeDurationSection />
      <EnglishTestSection />
      <TuitionFeesSection />
      <CostOfLivingSection />
      <ScholarshipsSection />
      <DocumentsVisaSection />
      <WorkingRightsSection />
      
      <LifestyleFactsSection />
      
      
    </div>
  )
}

export default Ukpage