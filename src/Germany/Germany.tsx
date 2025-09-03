import React from 'react'
import StudyGermanySection from './StudyGermanSection'
import UniversitiesGermany from './UniversitiesGermany'
import BestCitiesGermany from './BestCitiesGermany'
import UniversitySection from './UniveristySection'
import CoursesIntakeSection from './CourseIntakeSection'
import DegreeDurationSection from './DegreeDurationSection'
import EnglishTestSection from './EnglishTestSection'
import TuitionFeesSection from './TutionFees'
import CostOfLivingGermany from './CostOfLivingGermany'
import ScholarshipsSection from './ScholorshipsSection'
import WorkingRightsSection from './WorkingrightSection'
import AdmissionDocumentsSection from './AdmissionDocumentsSection'
import VisaInfoSection from './VisaInfoSection'
import JobOpportunitiesSection from './JobOpportunitiesSection'
import GermanyLifestyleFacts from './GermanylifeStyleFacts'
import DocumentsVisaSectiongermany from './DocumentsVisaSectiongermany'




function Germany() {
  return (
     <div className="min-h-screen bg-gray-50">
     
      {/* Add more sections as needed */}
      <StudyGermanySection/>
      <BestCitiesGermany/>
      <UniversitySection/>
      {/* <UniversitiesGermany/> */}
    
      
      <CoursesIntakeSection/>
      <DegreeDurationSection/>
      <EnglishTestSection/>
      <TuitionFeesSection/>
      {/* <CostOfLivingGermany/> */}
    <ScholarshipsSection/>
    <DocumentsVisaSectiongermany/>
    {/* <WorkingRightsSection/> */}
    {/* <AdmissionDocumentsSection/>
      <VisaInfoSection/> */}
      

      <JobOpportunitiesSection/>
        <GermanyLifestyleFacts />
        
        {/* Add more sections as needed */}
    </div>
  )
}

export default Germany