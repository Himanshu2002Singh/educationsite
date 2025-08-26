import React from 'react';
import {
  Award, GraduationCap, Users, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSectionUAE = () => {
  const scholarshipTypes = [
    {
      icon: <Award className="w-6 h-6 text-[#C1272D]" />,
      type: 'Merit-Based Scholarships',
      description: 'Awarded based on academic excellence (e.g., high school or bachelor’s grades)',
      amount: 'Up to 100% Tuition Waiver',
    },
    {
      icon: <Flag className="w-6 h-6 text-[#C1272D]" />,
      type: 'Early-Bird Discounts',
      description: 'For students who apply or pay early, common in international branch campuses',
      amount: '5% – 20% Tuition Discount',
    },
    {
      icon: <Users className="w-6 h-6 text-[#C1272D]" />,
      type: 'Need-Based Aid',
      description: 'Granted to students with financial constraints (limited availability)',
      amount: 'Partial to Full Tuition',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#C1272D]" />,
      type: 'Sports & Talent Scholarships',
      description: 'For achievements in sports, arts, or leadership',
      amount: 'Partial to Full Tuition + Perks',
    },
  ];

  const popularScholarships = [
    {
      name: 'UAE Government University Scholarships',
      type: 'Merit-Based Scholarships',
      amount: 'Up to 100% Tuition',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Awarded to high-achieving international students enrolled in UAE public universities.',
    },
    {
      name: 'Early-Bird Enrollment Discounts',
      type: 'Early-Bird Discounts',
      amount: '5% – 20% Tuition Reduction',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Available for students who confirm admission or pay fees in advance.',
    },
    {
      name: 'Need-Based Financial Aid',
      type: 'Need-Based Aid',
      amount: 'Partial to Full Tuition',
      icon: <Users className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Assistance for students from low-income backgrounds with strong academic potential.',
    },
    {
      name: 'Sports & Arts Excellence Awards',
      type: 'Sports & Talent Scholarships',
      amount: 'Partial to Full Tuition',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Granted to talented individuals excelling in sports, arts, or leadership roles.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        <span className="text-[#8cc63f]">Scholarships</span> for International Students in the UAE
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          The UAE offers a variety of scholarships and financial aid through government universities, private institutions, and international branch campuses — attracting high-achieving students from all over the world.
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

export default ScholarshipsSectionUAE;
