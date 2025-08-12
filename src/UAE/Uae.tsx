import React from 'react'
import StudyUAKSection from './hero'
import CoursesUaeIntakeSection from './CoursesIntakeActions'
import UAEUniversitiesSection from './UniversityList'
import TuitionFeesSectionUAE from './TuitionFees'
import CostOfLivingSectionUAE from './CostOfLiving'
import ScholarshipsSectionUAE from './ScholorshiipSection'
import DocumentsVisaSectionUAE from './StudentVisa'
import JobProspectsSectionUAE from './JobPropects'
import UAEAdmissionProcessSection from './AdmissionProcess'




function Uae() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyUAKSection/>
      <UAEUniversitiesSection/>
      <CoursesUaeIntakeSection />
      {/* <EnglishTestSection /> */}
      <TuitionFeesSectionUAE />
      <CostOfLivingSectionUAE />
      <ScholarshipsSectionUAE />
      <UAEAdmissionProcessSection />
      <DocumentsVisaSectionUAE/>
      <JobProspectsSectionUAE />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Uae