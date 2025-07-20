import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, Book, ArrowLeft, Star, Clock, Users, GraduationCap, BookOpen, School, Award, Home, Plane } from 'lucide-react';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  icon: React.ElementType;
  details: {
    title: string;
    description: string;
  }[];
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: 'Profile Assessment',
    description: 'Evaluate your academic background, interests, and career goals to find the right path for you.',
    color: 'text-white',
    bgColor: 'bg-emerald-500',
    hoverColor: 'bg-emerald-600',
    icon: BookOpen,
    details: [
      {
        title: 'Academic Evaluation',
        description: 'Comprehensive assessment of your academic history, strengths, and areas for improvement.'
      },
      {
        title: 'Career Goals Mapping',
        description: 'Align your educational journey with your long-term career aspirations and objectives.'
      },
      {
        title: 'Skills Analysis',
        description: 'Identify your current skillset and determine what you need to develop for your chosen path.'
      }
    ]
  },
  {
    id: 2,
    title: 'University/Program Shortlist',
    description: 'Discover institutions and programs that match your profile, preferences, and goals.',
    color: 'text-white',
    bgColor: 'bg-teal-700',
    hoverColor: 'bg-teal-800',
    icon: School,
    details: [
      {
        title: 'Institution Matching',
        description: 'Find universities that align with your academic profile, budget, and location preferences.'
      },
      {
        title: 'Program Recommendations',
        description: 'Explore degree programs that match your interests and career objectives.'
      },
      {
        title: 'Admission Requirements',
        description: 'Understand what you need to qualify for your chosen institutions and programs.'
      }
    ]
  },
  {
    id: 3,
    title: 'Application & Offers',
    description: 'Get guidance on preparing compelling applications and managing offer decisions.',
    color: 'text-white',
    bgColor: 'bg-red-400',
    hoverColor: 'bg-red-500',
    icon: Award,
    details: [
      {
        title: 'Application Strategy',
        description: 'Develop a timeline and approach for submitting strong applications to your selected institutions.'
      },
      {
        title: 'Document Preparation',
        description: 'Receive assistance with preparing personal statements, recommendations, and other required materials.'
      },
      {
        title: 'Offer Evaluation',
        description: 'Compare and assess offers from different institutions to make the best decision for your future.'
      }
    ]
  },
  {
    id: 4,
    title: 'Scholarships & Visa Assistance',
    description: 'Explore funding opportunities and navigate visa application processes with expert guidance.',
    color: 'text-white',
    bgColor: 'bg-green-500',
    hoverColor: 'bg-green-600',
    icon: Award,
    details: [
      {
        title: 'Scholarship Identification',
        description: 'Discover and apply for scholarships, grants, and financial aid opportunities.'
      },
      {
        title: 'Visa Requirements',
        description: 'Understand country-specific visa requirements and application procedures.'
      },
      {
        title: 'Document Verification',
        description: 'Ensure all your visa application documents are properly prepared and verified.'
      }
    ]
  },
  {
    id: 5,
    title: 'Loans & Accommodation',
    description: 'Secure financial support and find comfortable, convenient housing for your studies.',
    color: 'text-white',
    bgColor: 'bg-teal-700',
    hoverColor: 'bg-teal-800',
    icon: Home,
    details: [
      {
        title: 'Education Loan Options',
        description: 'Explore and compare student loan options with favorable terms and conditions.'
      },
      {
        title: 'Housing Solutions',
        description: 'Find on-campus or off-campus accommodation that fits your budget and preferences.'
      },
      {
        title: 'Financial Planning',
        description: 'Create a comprehensive budget for your education and living expenses.'
      }
    ]
  },
  {
    id: 6,
    title: 'Pre-Departure Services',
    description: 'Prepare for your journey with pre-departure orientation and essential information.',
    color: 'text-white',
    bgColor: 'bg-red-400',
    hoverColor: 'bg-red-500',
    icon: Plane,
    details: [
      {
        title: 'Cultural Orientation',
        description: 'Learn about the culture, customs, and expectations of your destination country.'
      },
      {
        title: 'Travel Arrangements',
        description: 'Get assistance with booking flights and planning your journey to campus.'
      },
      {
        title: 'Arrival Support',
        description: 'Receive guidance on what to expect and how to navigate your first days at your destination.'
      }
    ]
  },
  {
    id: 7,
    title: 'Alumni Network',
    description: 'Connect with graduates for mentorship, career opportunities, and lifelong community.',
    color: 'text-white',
    bgColor: 'bg-green-500',
    hoverColor: 'bg-green-600',
    icon: Users,
    details: [
      {
        title: 'Mentorship Programs',
        description: 'Connect with alumni who can provide guidance and share their experiences.'
      },
      {
        title: 'Professional Networking',
        description: 'Access a global network of professionals for career opportunities and collaboration.'
      },
      {
        title: 'Community Events',
        description: 'Participate in alumni events and activities to build lasting connections.'
      }
    ]
  }
];

function Programs() {
  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<{title: string, description: string} | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStepSelect = (step: JourneyStep) => {
    setSelectedStep(step);
    setSelectedDetail(null);
  };

  const handleDetailSelect = (detail: {title: string, description: string}) => {
    setSelectedDetail(detail);
  };

  const handleBack = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
    } else if (selectedStep) {
      setSelectedStep(null);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
             <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-10 drop-shadow-md">
           Your Study Journey
        </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our comprehensive roadmap to navigate your educational journey from start to finish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">
          {/* Left Sidebar - Circular Navigation */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Search */}
            <div className={`relative mb-8 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search journey steps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              />
            </div>

            {/* Circular Navigation */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className={`relative w-[360px] h-[360px] transform transition-all duration-1000 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {/* Outer Ring */}
                <div className="w-full h-full absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl"></div>

                {/* Journey Step Buttons */}
                {journeySteps.map((step, index) => {
                  const angle = (index * 360) / journeySteps.length - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 120;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  const Icon = step.icon;

                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => handleStepSelect(step)}
                        className="absolute w-20 h-24 flex flex-col items-center justify-start z-10"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        title={step.title}
                      >
                        <div className={`w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center ${
                          selectedStep?.id === step.id 
                            ? `${step.bgColor} ring-4 ring-white/50 shadow-xl` 
                            : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl'
                        }`}>
                          <Icon className={`w-8 h-8 transition-colors duration-300 ${
                            selectedStep?.id === step.id ? 'text-white' : 'text-gray-600 group-hover:text-red-600'
                          }`} />
                        </div>

                        {/* Text below the icon */}
                        <span className="mt-1 text-xs font-medium text-gray-700 text-center">
                          {step.title.split(' ')[0]}
                        </span>
                      </button>
                    </React.Fragment>
                  );
                })}
                
                {/* Center Circle */}
                <div className="absolute inset-1/2 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-green-500 to-orange-800 flex items-center justify-center shadow-lg z-5">
                  <span className="text-white font-bold text-sm">Steps</span>
                </div>

                {/* Connecting Lines */}
                {selectedStep && (
                  <div className="absolute inset-0 pointer-events-none">
                    {journeySteps.map((step, index) => {
                      if (step.id !== selectedStep.id) return null;
                      
                      const angle = (index * 360) / journeySteps.length - 90;
                      const radius = 120;
                      
                      return (
                        <div
                          key={`line-${step.id}`}
                          className="absolute w-0.5 bg-gradient-to-r from-red-500 to-orange-500 opacity-50"
                          style={{
                            left: '50%',
                            top: '50%',
                            height: `${radius - 40}px`,
                            transformOrigin: 'top center',
                            transform: `rotate(${angle+270}deg) translateX(-50%)`,
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Step Info */}
            {selectedStep && (
              <div className={`mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${selectedStep.bgColor} flex items-center justify-center`}>
                    <selectedStep.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selectedStep.title}</h3>
                    <p className="text-gray-600 text-sm">{selectedStep.details.length} key components</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            {!selectedStep ? (
              // Welcome Screen
              <div className="h-full flex items-center justify-center">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Begin Your Educational Journey</h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto">
                    Select a step from the circular menu to explore our comprehensive support services.
                  </p>
                </div>
              </div>
            ) : !selectedDetail ? (
              // Step Details Grid
              <div className="space-y-6">
                {/* Step Header */}
                <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${selectedStep.bgColor} flex items-center justify-center`}>
                      <selectedStep.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedStep.title}</h2>
                      <p className="text-gray-600">{selectedStep.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedStep.details.map((detail, index) => (
                    <button
                      key={index}
                      onClick={() => handleDetailSelect(detail)}
                      className={`p-6 bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 shadow-lg text-left group transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {detail.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{detail.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Detail View
              <div className="space-y-6">
                {/* Back Button & Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300 p-2 rounded-lg hover:bg-red-50"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to {selectedStep.title}</span>
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${selectedStep.bgColor} flex items-center justify-center`}>
                      <selectedStep.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedDetail.title}</h2>
                  </div>
                  
                  <div className="prose max-w-none text-gray-700">
                    <p className="text-lg leading-relaxed">{selectedDetail.description}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;