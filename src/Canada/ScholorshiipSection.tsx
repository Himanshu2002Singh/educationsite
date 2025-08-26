import React from 'react';
import {
  Award, GraduationCap, Users, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSectionCanada = () => {
  const popularScholarships = [
    {
      name: 'Vanier Canada Graduate Scholarship',
      type: 'PhD',
      amount: 'Generous funding for doctoral studies',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Awarded to world-class doctoral students who demonstrate leadership skills and a high standard of scholarly achievement.',
    },
    {
      name: 'Canada Graduate Scholarship – Master’s (CGS-M)',
      type: 'Master’s',
      amount: 'Up to CAD 17,500 for 12 months',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Supports high-calibre scholars in eligible master’s or doctoral programs in Canada.',
    },
    {
      name: 'Ontario Graduate Scholarship (OGS)',
      type: 'Master’s/PhD',
      amount: 'CAD 5,000 per term',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Merit-based scholarship for graduate students in Ontario.',
    },
    {
      name: 'Lester B. Pearson Scholarship (U of T)',
      type: 'Undergraduate',
      amount: 'Full tuition, books, and living allowance',
      icon: <Users className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Awarded to outstanding international students at the University of Toronto.',
    },
    {
      name: 'UBC International Scholars Program',
      type: 'Undergraduate',
      amount: 'Full-ride scholarship',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Recognizes international students with exceptional academic achievement and leadership skills.',
    },
    {
      name: 'York Global Leader of Tomorrow Award',
      type: 'Undergraduate',
      amount: 'CAD 20,000/year',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For high-achieving international students applying to York University.',
    },
    {
      name: 'Study in Canada Scholarships (SICS)',
      type: 'UG/PG/PhD (Short-term)',
      amount: 'Varies',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Short-term exchange scholarships for students from post-secondary institutions worldwide.',
    },
    {
      name: 'Canada-ASEAN SEED Scholarship',
      type: 'UG/PG (Short-term)',
      amount: 'Varies',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Supports students from ASEAN countries for study or research in Canada.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3 text-center ">
          {" "}<span className="text-[#8cc63f]">Scholarships</span> for International Students in Canada
        </h2>
        <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-8"></div>
        {/* <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          Canada offers a variety of scholarships to support international students, ranging from government-funded to university-specific awards, covering tuition, living expenses, and more.
        </p> */}

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

export default ScholarshipsSectionCanada;
