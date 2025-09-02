import React from 'react';
import {
  Award, GraduationCap, Users, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSectionUSA = () => {
  const scholarshipTypes = [
    {
      icon: <Award className="w-6 h-6 text-[#C1272D]" />,
      type: 'Merit-Based Scholarships',
      description: 'Awarded based on high GPA, test scores, or exceptional academic performance.',
      amount: '$5,000 – $25,000/year',
    },
    {
      icon: <Users className="w-6 h-6 text-[#C1272D]" />,
      type: 'Need-Based Aid',
      description: 'For students from low-income backgrounds; can cover tuition and living costs.',
      amount: 'Up to Full Tuition',
    },
    {
      icon: <Flag className="w-6 h-6 text-[#C1272D]" />,
      type: 'Government & Corporate Scholarships',
      description: 'Country-specific or field-specific funding from U.S. government and corporations.',
      amount: '$1,000 – Full Tuition',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#C1272D]" />,
      type: 'University-Specific Awards',
      description: 'Grants and waivers offered directly by U.S. universities for admitted students.',
      amount: '$3,000 – $50,000/year',
    },
  ];

  const popularScholarships = [
    {
      name: 'Yale University Scholarships',
      type: 'Merit-Based Scholarships',
      amount: 'Full Tuition',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Full-tuition scholarships for eligible international students.',
    },
    {
      name: 'Fulbright Foreign Student Program',
      type: 'Government Funded',
      amount: 'Fully Funded (Tuition + Living)',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Supports talented international students across all academic fields.',
    },
    {
      name: 'Onsi Sawiris Scholarship',
      type: 'Need-Based Aid',
      amount: 'Fully Funded',
      icon: <Users className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Covers full tuition and living expenses for study in the U.S.',
    },
    {
      name: 'Knight-Hennessy Scholars Program',
      type: 'Graduate/MBA Funding',
      amount: 'Full Tuition + Stipend',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Stanford University program emphasizing leadership and global impact.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
          <span className="text-[#8cc63f]">Scholarships</span> You Should Know
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          The United States offers a wide variety of scholarships — from university-specific grants to prestigious programs like Fulbright and Knight-Hennessy — helping international students at the undergraduate, master’s, and MBA levels.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {popularScholarships.map((s, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="bg-[#F9F9F9] border border-gray-200 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col justify-between h-[460px] sm:h-[420px]">
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white p-2 rounded-full shadow">{s.icon}</div>
                  <span className="text-[10px] sm:text-xs bg-[#8DC63F] text-white px-2 py-1 rounded-full font-semibold">
                    {s.type}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#2C2C2C] mb-1">{s.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{s.description}</p>
                <div className="bg-white border border-[#8DC63F] p-2 sm:p-3 rounded mb-4">
                  <p className="text-sm sm:text-base text-[#2C2C2C] font-semibold">{s.amount}</p>
                </div>
                <button className="w-full bg-[#8DC63F] hover:bg-[#C1272D] text-white font-semibold py-2 rounded-lg transition-colors text-sm sm:text-base">
                  Apply Now
                  <ChevronRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ScholarshipsSectionUSA;
