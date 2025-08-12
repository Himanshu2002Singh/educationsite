import React from 'react';
import {
  Award, GraduationCap, Users, Flag, ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ScholarshipsSectionIreland = () => {
  const popularScholarships = [
    {
      name: 'Government of Ireland International Education Scholarship',
      type: 'Government Funded',
      amount: 'Full fee waiver + €10,000 stipend (1 year)',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Covers full tuition fees and living stipend for one academic year.',
    },
    {
      name: 'University College Dublin – Global Excellence Graduate Scholarships',
      type: 'University Funded',
      amount: '100% Tuition Fees',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Awarded to exceptional graduate applicants demonstrating academic excellence.',
    },
    {
      name: 'University College Cork – Quercus Taught Masters Academic Scholarships',
      type: 'University Funded',
      amount: '50% Tuition Fees',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Scholarships for high-achieving master’s students at UCC.',
    },
    {
      name: 'Trinity College Dublin – Global Excellence Postgraduate Scholarships',
      type: 'University Funded',
      amount: '€5,000',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Partial funding for outstanding international postgraduate students.',
    },
    {
      name: 'Technological University Dublin Scholarships',
      type: 'University Funded',
      amount: '50% Tuition Fees',
      icon: <GraduationCap className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Merit-based awards for international students enrolling at TU Dublin.',
    },
    {
      name: 'University of Limerick – Jim Kemmy India Scholarship',
      type: 'University Funded',
      amount: '€4,279/year (4 years)',
      icon: <Users className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Scholarship for Indian students enrolled in eligible undergraduate programs.',
    },
    {
      name: 'NUI Galway International Student Scholarships',
      type: 'University Funded',
      amount: 'Up to €16,000/year',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Generous awards for high-achieving international students at NUI Galway.',
    },
    {
      name: 'The Walsh Fellowship',
      type: 'Research Funding',
      amount: 'Up to €24,000/year',
      icon: <Flag className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Supports postgraduate students engaged in agricultural and food research.',
    },
    {
      name: 'Education Future International Scholarships',
      type: 'Private Funded',
      amount: 'Up to €11,000',
      icon: <Award className="w-7 h-7 text-[#8DC63F]" />,
      description: 'Funding for Indian students based on academic merit and leadership.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
          Scholarships for International Students in Ireland
        </h2>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          Ireland offers a wide range of scholarships — from government-funded awards like the Government of Ireland International Education Scholarship to university-specific grants — supporting undergraduate, postgraduate, and research students.
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

export default ScholarshipsSectionIreland;
