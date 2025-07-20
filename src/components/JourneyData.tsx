import { GraduationCap, BookOpen, School, Award, Home, Plane, Users } from 'lucide-react';

export type JourneyStep = {
  id: number;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  icon: typeof GraduationCap;
  details: {
    title: string;
    description: string;
  }[];
};

export const journeySteps: JourneyStep[] = [
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