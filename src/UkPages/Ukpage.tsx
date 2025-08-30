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

function Ukpage() {
  return (
     <div className="min-h-screen bg-gray-50">
      <USPSection />
      <UniversitiesSection />
      <CoursesIntakeSection />
      <DegreeDurationSection />
      <EnglishTestSection />
      <TuitionFeesSection />
      <CostOfLivingSection />
      <ScholarshipsSection />
      <WorkingRightsSection />
      <DocumentsVisaSection />
      <LifestyleFactsSection />
      
      
    </div>
  )
}

export default Ukpage