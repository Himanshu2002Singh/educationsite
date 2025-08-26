import React from "react";
import {
  GraduationCap,
  School,
  Globe,
  Briefcase,
  LifeBuoy,
  Home,
  MapPin,
  Building2,
} from "lucide-react";
import irelandStudent from "../../assets/Ireland.png"; // Replace with actual Ireland student image

const points = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "World-Class Universities",
    description:
      "Ireland is home to globally ranked universities offering internationally recognized qualifications.",
  },
  {
    icon: <School className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Affordable Education",
    description:
      "Lower tuition fees and living costs compared to many other English-speaking countries.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "English-Speaking Environment",
    description:
      "Improve your English skills while studying in a friendly, welcoming country.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Post-Study Work Visa",
    description:
      "2 years for Master's graduates and 1 year for Bachelor's graduates to work in Ireland.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-[#2d6a4f]" />,
    title: "EU Academic & Career Links",
    description:
      "Access opportunities across the European Union for both study and employment.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Stunning Landscapes & Culture",
    description:
      "Enjoy vibrant cities, breathtaking scenery, and a rich cultural heritage.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Industry Hub",
    description:
      "Home to the European headquarters of top IT, pharma, and finance companies.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Pathway to Permanent Residency",
    description:
      "Opportunity to gain indefinite right to stay after meeting work and visa requirements.",
  },
];

const StudyIrelandSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 items-center">
            <img
              src="https://flagcdn.com/w40/ie.png"
              alt="Ireland Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study&nbsp; <span className="text-[#8cc63f]">in Ireland</span>&nbsp;?
          </h2>
          <p className="text-gray-700 text-sm">
            Ireland offers safety, warmth, and academic excellence, making it a top choice for students from around the world.
          </p>

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
            Talk to an Ireland Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={irelandStudent}
            alt="Student in Ireland"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyIrelandSection;
