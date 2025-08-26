import React from "react";
import {
  Globe,
  DollarSign,
  Briefcase,
  GraduationCap,
  Plane,
  Building,
  Shield,
} from "lucide-react";
import nzGirl from "../../assets/UAE.png"; // Replace with actual image path

const points = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Excellent Education System",
    description:
      "Home to top-ranked local and international universities offering globally recognized degrees in diverse fields.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "A Truly International Experience",
    description:
      "Study alongside students from over 180 nationalities in a vibrant, inclusive, and multicultural environment.",
  },
  {
    icon: <Plane className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Strategic Global Location",
    description:
      "Located at the crossroads of Europe, Asia, and Africa — easy to reach and perfect for international exposure.",
  },
  {
    icon: <Building className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Modern Campuses & Advanced Infrastructure",
    description:
      "State-of-the-art classrooms, labs, libraries, and facilities designed for next-generation learning and innovation.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Safe, Welcoming Environment",
    description:
      "Ranked among the safest countries in the world with a high standard of living and excellent student support services. From beaches to skyscrapers, heritage sites to world-class shopping — experience the perfect study-life balance.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Career-Focused Education & Industry Exposure",
    description:
      "The UAE’s strong ties with global industries provide students with valuable internship opportunities, real-world experience, and direct pathways into high-growth careers in sectors like tech, business, healthcare, tourism, and more.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Scholarships & Financial Support",
    description:
      "Generous scholarships, flexible tuition plans, and funding options to make quality education accessible.",
  },
];


const StudyUAKSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 flex items-center">
            <img
              src="https://flagcdn.com/w40/nz.png"
              alt="New Zealand Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study &nbsp;<span className="text-[#8cc63f]">in UAE</span>&nbsp;?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-[#f8f8f8] p-4 rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full sm:w-auto bg-[#8DC63F] hover:bg-[#7cb532] text-white font-semibold py-3 px-6 rounded-full transition">
            Talk to a NZ Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={nzGirl}
            alt="Student with NZ Flag"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyUAKSection;
