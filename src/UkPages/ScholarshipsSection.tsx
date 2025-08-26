import React from 'react';
import {
  Award, Globe, GraduationCap, Users, Building, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSection = () => {
  const scholarshipTypes = [
    {
      icon: <Award className="w-6 h-6 text-[#C1272D]" />,
      type: 'Merit-Based',
      description: 'For outstanding academic or extracurricular achievement',
      amount: '£2,000 – 20,000+',
    },
    {
      icon: <Users className="w-6 h-6 text-[#C1272D]" />,
      type: 'Need-Based',
      description: 'For students demonstrating financial need',
      amount: '£1,000 – Full Tuition',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#C1272D]" />,
      type: 'Subject-Specific',
      description: 'For students pursuing Engineering, Business, etc.',
      amount: '£1,500 – Full Tuition',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C1272D]" />,
      type: 'Country-Specific',
      description: 'Unique awards for students from specific countries',
      amount: '£1,000 – Full Tuition',
    },
    {
      icon: <Building className="w-6 h-6 text-[#C1272D]" />,
      type: 'University-Specific',
      description: 'Offered by individual universities',
      amount: '£500 – Full Tuition',
    },
    {
      icon: <Flag className="w-6 h-6 text-[#C1272D]" />,
      type: 'Government-Funded',
      description: 'Examples: Chevening, Commonwealth',
      amount: 'Fully Funded',
    },
  ];

  const popularScholarships = [
    {
      name: 'Chevening Scholarship',
      type: 'Merit-Based',
      amount: 'Fully Funded (Tuition + Living)',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'UK government’s global scholarship programme',
    },
    {
      name: 'Commonwealth Scholarship',
      type: 'Country-Specific',
      amount: '£5,000 – Full Tuition',
      icon: <Globe className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For students from Commonwealth nations',
    },
    {
      name: 'University of Manchester Excellence Scholarship',
      type: 'University-Specific',
      amount: 'Up to £10,000',
      icon: <Building className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Based on academic excellence',
    },
    {
      name: 'Subject-Specific Grants',
      type: 'Subject-Specific',
      amount: '£3,000 – £8,000',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'For STEM and business programs',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#2C2C2C] mb-2 text-center mt-[20px]"> {" "} <span className="text-[#8cc63f]">Scholarships </span>You Should Know</h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        <p className="text-lg text-[#2C2C2C] text-center mb-10 max-w-3xl mx-auto">
          Studying abroad is an investment — but scholarships can ease the financial burden by rewarding your achievements, supporting your background, or funding specific courses.
        </p>

        {/* Scholarship Types Table */}
        <div className="bg-[#F9F9F9] rounded-xl border border-gray-200 p-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <div className="shrink-0">{s.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C]">{s.type}</h4>
                  <p className="text-sm text-gray-600">{s.description}</p>
                  <p className="text-xs mt-1 text-[#C1272D] font-semibold">Typical: {s.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Heading */}
        {/* <h3 className="text-2xl md:text-4xl text-center text-[#2C2C2C] mb-6">Popular {" "}<span className="text-[#8cc63f]"> Scholarships</span> You Should Know</h3> */}
        {/* <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div> */}

        {/* Swiper Carousel */}
        {/* <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {popularScholarships.map((s, i) => (
            <SwiperSlide key={i} className="h-full">
  <div className="bg-[#F9F9F9] border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col justify-between h-[420px]">
     <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white p-2 rounded-full shadow">{s.icon}</div>
                  <span className="text-xs bg-[#8DC63F] text-white px-2 py-1 rounded-full font-semibold">{s.type}</span>
                </div>
                <h4 className="text-lg font-bold text-[#2C2C2C] mb-1">{s.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{s.description}</p>
                <div className="bg-white border border-[#8DC63F] p-3 rounded mb-4">
                  <p className="text-[#2C2C2C] font-semibold">{s.amount}</p>
                </div>
                <button className="w-full bg-[#8DC63F] hover:bg-[#C1272D] text-white font-semibold py-2 rounded-lg transition-colors">
                  Apply Now
                  <ChevronRight className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};

export default ScholarshipsSection;
