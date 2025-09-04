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
import UaeLifestyleFact from './UaeLifestyleFact'
import BestCitiyUae from './BestCityUae'
import WorkingRight from './WorkingRight'
import EnglishLanguage from './EnglishLanguage'




function Uae() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyUAKSection/>
      <BestCitiyUae/>
      <UAEUniversitiesSection/>
      <CoursesUaeIntakeSection />
      <EnglishLanguage/>
      {/* <EnglishTestSection /> */}
      <TuitionFeesSectionUAE />
      {/* <CostOfLivingSectionUAE /> */}
      <ScholarshipsSectionUAE />
      <UAEAdmissionProcessSection />
      
      <DocumentsVisaSectionUAE/>
      <WorkingRight/>
      <JobProspectsSectionUAE />
      <UaeLifestyleFact/>

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Uae