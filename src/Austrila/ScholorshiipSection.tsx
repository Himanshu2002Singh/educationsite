import React from 'react';
import {
  Award, GraduationCap, Users, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSectionAustralia = () => {
  const popularScholarships = [
    {
      name: 'Australia Awards Scholarships',
      type: 'Government Funded',
      amount: 'Full tuition, travel, living allowance',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Available to citizens of eligible developing countries.',
    },
    {
      name: 'Destination Australia Scholarships',
      type: 'Government Funded',
      amount: 'Up to AUD 15,000/year',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For students studying in regional Australia.',
    },
    {
      name: 'University Scholarships',
      type: 'University Funded',
      amount: 'Partial to full tuition fee waivers',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Awarded based on academic merit and/or financial need.',
    },
    {
      name: 'Research Training Program (RTP)',
      type: 'Research Funding',
      amount: 'Tuition + stipend for living expenses',
      icon: <Users className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For PhD and research Master’s students.',
    },
    {
      name: 'International Merit Scholarships',
      type: 'University Funded',
      amount: '10%–50% of tuition fees',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For high academic achievers.',
    },
    {
      name: 'Faculty/Departmental Awards',
      type: 'Course-specific',
      amount: 'Varies',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Based on grades or field of study.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
          <span className="text-[#8cc63f]">Scholarships</span> for International Students in Australia
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          Australia offers a variety of scholarships to support international students, including government-funded, university-specific, and research-based awards. These scholarships cover tuition, living expenses, and more.
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

export default ScholarshipsSectionAustralia;
