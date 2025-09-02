
import DegreeDurationIrelandSection from './DegreeDurationSection'

import DocumentsVisaSectionIreland from './StudentVisa'

import StudyAustraliaSection from './hero'
import AustraliaUniversitiesSection from './UniversityList'
import CoursesAustraliaIntakeSection from './CoursesIntakeActions'
import TuitionLivingAustraliaSection from './TuitionFees'
import EnglishTestSectionAustralia from './EnglishTestSection'
import ScholarshipsSectionAustralia from './ScholorshiipSection'
import JobProspectsSectionAustralia from './JobPropects'
import AustraliaAdmissionProcessSection from './AdmissionProcess'
import WorkingRightsSectionAustralia from './WorkingRightsSection'
import BestCitiesAustrelia from './BestCitiesAustrila'


function Australia() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyAustraliaSection/>
      <BestCitiesAustrelia/>
      <AustraliaUniversitiesSection/>
      <CoursesAustraliaIntakeSection />
      {/* <DegreeDurationIrelandSection/> */}
      <EnglishTestSectionAustralia />
      <TuitionLivingAustraliaSection />
     
      <ScholarshipsSectionAustralia/>
      <AustraliaAdmissionProcessSection/>
      <WorkingRightsSectionAustralia/>
      {/* <UAEAdmissionProcessSection /> */}
     
      {/* <DocumentsVisaSectionIreland/> */}
       {/* <LifestyleFactsSectionIreland/> */}
      <JobProspectsSectionAustralia />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Australia