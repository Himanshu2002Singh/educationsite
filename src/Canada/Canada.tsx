

import DocumentsVisaSectionIreland from './StudentVisa'
import ScholarshipsSectionAustralia from './ScholorshiipSection'
import JobProspectsSectionAustralia from './JobPropects'
import AustraliaAdmissionProcessSection from './AdmissionProcess'
import WorkingRightsSectionAustralia from './WorkingRightsSection'
import StudyCanadaSection from './hero'
import CanadaUniversitiesSection from './UniversityList'
import CoursesCanadaIntakeSection from './CoursesIntakeActions'
import EnglishTestSectionCanada from './EnglishTestSection'
import TuitionLivingCanadaSection from './TuitionFees'


function Canada() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyCanadaSection/>
      <CanadaUniversitiesSection/>
      <CoursesCanadaIntakeSection />
      {/* <DegreeDurationIrelandSection/> */}
      <EnglishTestSectionCanada />
      <TuitionLivingCanadaSection />
     
      <ScholarshipsSectionAustralia/>
      <AustraliaAdmissionProcessSection/>
      <WorkingRightsSectionAustralia/>
      {/* <UAEAdmissionProcessSection /> */}
     
      <DocumentsVisaSectionIreland/>
       {/* <LifestyleFactsSectionIreland/> */}
      <JobProspectsSectionAustralia />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Canada