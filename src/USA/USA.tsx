
import UAEAdmissionProcessSection from './AdmissionProcess'
import StudyUSASection from './hero'
import USAUniversitiesSection from './UniversityList'
import CoursesUsaIntakeSection from './CoursesIntakeActions'
import DegreeDurationUsaSection from './DegreeDurationSection'
import EnglishTestSectionUSA from './EnglishTestSection'
import TuitionFeesSectionUSA from './TuitionFees'
import CostOfLivingSectionUSA from './CostOfLiving'
import ScholarshipsSectionUSA from './ScholorshiipSection'
import DocumentsVisaSectionUSA from './StudentVisa'
import JobProspectsSectionUSA from './JobPropects'
import LifestyleFactsSectionUSA from './LifestyleFactsSectionUSA'


function USA() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyUSASection/>
      <USAUniversitiesSection/>
      <CoursesUsaIntakeSection />
      <DegreeDurationUsaSection/>
      <EnglishTestSectionUSA />
      <TuitionFeesSectionUSA />
      <CostOfLivingSectionUSA />
      <ScholarshipsSectionUSA/>
      {/* <UAEAdmissionProcessSection /> */}
     
      <DocumentsVisaSectionUSA/>
       <LifestyleFactsSectionUSA/>
      <JobProspectsSectionUSA />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default USA