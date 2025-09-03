import React from 'react'
import StudyNZSection from './hero'
import UniversitiesSection from './UniversitiesSection'
import CoursesIntakeSection from './CoursesIntakeActions'
import EnglishTestSection from './EnglishTestSection'
import TuitionFeesSection from './TuitionFees'
import CostOfLivingSection from './CostOfLiving'
import ScholarshipsSection from './ScholorshiipSection'
import AdmissionProcessSection from './AdmissionProcess'
import VisaInfoSection from './StudentVisa'
import JobProspectsSection from './JobPropects'





function Newzealand() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyNZSection />
      <UniversitiesSection />
      <CoursesIntakeSection />
      <EnglishTestSection />
      <TuitionFeesSection />
      {/* <CostOfLivingSection /> */}
      <ScholarshipsSection />
      <AdmissionProcessSection />
      <VisaInfoSection />
      <JobProspectsSection />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Newzealand