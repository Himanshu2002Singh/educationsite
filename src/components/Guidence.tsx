import React from 'react';
import { FaUserGraduate, FaHandshake, FaShieldAlt, FaBullseye, FaHeart, FaStar } from 'react-icons/fa';

const coreValues = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
    title: 'Student First',
    description: 'We prioritize the needs, goals, and well-being of every student in all that we do.',
  },
  {
    id: 2,
    icon: <FaHandshake className="text-[#8cc63f] text-3xl" />,
    title: 'Right Guidance',
    description: 'Our advice is honest, personalized, and grounded in decades of experience.',
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
    title: 'Trust',
    description: 'We build lasting relationships through transparency, consistency, and care.',
  },
  {
    id: 4,
    icon: <FaBullseye className="text-red-600 text-3xl" />,
    title: 'Commitment',
    description: 'We are fully dedicated to helping each student succeed—start to finish.',
  },
  {
    id: 5,
    icon: <FaHeart className="text-pink-600 text-3xl" />,
    title: 'Empathy',
    description: 'We understand every student’s journey is unique, and we support them with compassion.',
  },
  {
    id: 6,
    icon: <FaStar className="text-yellow-500 text-3xl" />,
    title: 'Excellence',
    description: 'We uphold high standards in every service we provide, ensuring quality at every step.',
  },
];

const GuidingValue = () => {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center  text-gray-800">Our Core <span className="text-[#8cc63f]"> Values </span></h2>
       <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {coreValues.map((value) => (
          <div
            key={value.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="bg-gray-100 p-3 rounded-full">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidingValue;
