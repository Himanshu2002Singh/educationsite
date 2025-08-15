import { CheckCircle } from "lucide-react";

const extras = [
  {
    title: "Profile Evaluation",
    desc: "Free 1:1 consultation",
  },
  {
    title: "University Comparison Reports",
    desc: "Tailored for your preferences",
  },
  {
    title: "Monthly Webinars & Expert Panels",
    desc: "Monthly sessions on trending topics",
  },
  {
    title: "Dedicated Parent Support",
    desc: "Financial guidance, visa queries, and emotional prep",
  },
  {
    title: "24/7 Counsellor Support",
    desc: "Got doubts? Your counsellor is just a message away — no limits, no time slots.",
  },
];

export default function ExtraMile() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-white text-center">
          We go the extra <span className="text-[#8cc63f]"> mile for you </span>
        </h2>
         <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">{item.title} –</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
