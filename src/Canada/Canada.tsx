import StudyCanadaSection from './hero'
import CanadaUniversitiesSection from './UniversityList'
import CoursesCanadaIntakeSection from './CoursesIntakeActions'
import EnglishTestSectionCanada from './EnglishTestSection'
import TuitionLivingCanadaSection from './TuitionFees'
import BestCitiesCanada from './CostOfLiving'
import ScholarshipsSectionCanada from './ScholorshiipSection'
import DocumentsVisaSectionCanada from './StudentVisa'
import WorkingRightsSectionCanada from './WorkingRightsSection'
import JobProspectsSectionCanada from './JobPropects'


function Canada() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyCanadaSection/>
      <BestCitiesCanada/>
      <CanadaUniversitiesSection/>
      <CoursesCanadaIntakeSection />
      {/* <DegreeDurationIrelandSection/> */}
      <EnglishTestSectionCanada />
      <TuitionLivingCanadaSection />
       
      <ScholarshipsSectionCanada/>
      <DocumentsVisaSectionCanada/>
      {/* <AustraliaAdmissionProcessSection/> */}
      <WorkingRightsSectionCanada/>
      {/* <UAEAdmissionProcessSection /> */}
     
      
       {/* <LifestyleFactsSectionIreland/> */}
      <JobProspectsSectionCanada />

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Canada