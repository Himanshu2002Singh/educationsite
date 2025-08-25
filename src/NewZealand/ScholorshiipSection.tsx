import React from 'react';
import {
  Award, Globe, GraduationCap, Users, Building, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSection = () => {
  const scholarshipTypes = [
    {
      icon: <Award className="w-6 h-6 text-[#C1272D]" />,
      type: 'Merit-Based',
      description: 'For outstanding academic or extracurricular achievement',
      amount: 'NZ$5,000 – 20,000+',
    },
    {
      icon: <Users className="w-6 h-6 text-[#C1272D]" />,
      type: 'Need-Based',
      description: 'For students demonstrating financial need',
      amount: 'NZ$1,000 – Full Tuition',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#C1272D]" />,
      type: 'Research Grants',
      description: 'For PhD and doctoral level students',
      amount: 'Fully Funded + Stipend',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C1272D]" />,
      type: 'Country-Specific',
      description: 'Grants tailored for Indian and other international students',
      amount: 'NZ$3,000 – Full Tuition',
    },
    {
      icon: <Building className="w-6 h-6 text-[#C1272D]" />,
      type: 'University-Specific',
      description: 'Offered directly by New Zealand universities',
      amount: 'NZ$2,000 – NZ$15,000+',
    },
    {
      icon: <Flag className="w-6 h-6 text-[#C1272D]" />,
      type: 'Government-Funded',
      description: 'Supported by New Zealand government bodies',
      amount: 'Fully Funded',
    },
  ];

  const popularScholarships = [
    {
      name: 'New Zealand Excellence Awards (NZEA)',
      type: 'Merit-Based',
      amount: 'Partial Tuition (Varies by University)',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Merit‑based awards for high-achieving Indian students with offers from NZ universities.',
    },
    {
      name: 'SEG Scholarship B & C',
      type: 'University-Specific',
      amount: 'Tiered Financial Support',
      icon: <Building className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Available for international students enrolling in IPU New Zealand programs.',
    },
    {
      name: 'Palmerston North Mayor’s Goodwill Ambassador Scholarship',
      type: 'Country-Specific',
      amount: 'Tuition Contribution (IPU Specific)',
      icon: <Globe className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Granted by Palmerston North City Council in collaboration with IPU NZ.',
    },
    {
      name: 'New Zealand International Doctoral Research Scholarship',
      type: 'Research Grants',
      amount: 'Fully Funded + Annual Stipend',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For exceptional international PhD candidates in New Zealand.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
          Key New Zealand<span className="text-[#8cc63f]"> Scholarships</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          Discover top scholarships tailored for Indian and international students to ease your education costs while studying in New Zealand.
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

export default ScholarshipsSection;
