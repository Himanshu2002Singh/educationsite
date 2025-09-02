
import StudyIrelandSection from './hero'
import IrelandUniversitiesSection from './UniversityList'
import CoursesIrelandIntakeSection from './CoursesIntakeActions'
import DegreeDurationIrelandSection from './DegreeDurationSection'
import EnglishTestSection from './EnglishTestSection'
import TuitionFeesSectionIreland from './TuitionFees'
import CostOfLivingSectionIreland from './CostOfLiving'
import ScholarshipsSectionIreland from './ScholorshiipSection'
import WorkingRightsSectionIreland from './WorkingRightsSection'
import DocumentsVisaSectionIreland from './StudentVisa'
import JobProspectsSectionIreland from './JobPropects'
import LifestyleFactsSectionIreland from './LifestyleFactsSectionUSA'
import BestCitiesIreland from './BestCitiesIreland'


function Ireland() {
  return (
     <div className="min-h-screen bg-gray-50">
      <StudyIrelandSection/>
      <BestCitiesIreland/>
      <IrelandUniversitiesSection/>
      <CoursesIrelandIntakeSection />
      <DegreeDurationIrelandSection/>
      <EnglishTestSection />
      <TuitionFeesSectionIreland />
      <CostOfLivingSectionIreland />
      <ScholarshipsSectionIreland/>
      <WorkingRightsSectionIreland/>
       <DocumentsVisaSectionIreland/>
      <JobProspectsSectionIreland />
       <LifestyleFactsSectionIreland/>

      {/* Add more sections as needed */}
      
      
      

      
    </div>
  )
}

export default Ireland