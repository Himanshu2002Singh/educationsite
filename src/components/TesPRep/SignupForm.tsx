import React from "react";

const SignUpForm: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 ">
          Ready to Boost <span className="text-[#8cc63f]">Your Score</span>
        </h2>
         <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-8"></div>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="text"
              placeholder="Target Test (e.g., IELTS, GMAT)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-full bg-[#8cc63f] hover:bg-[#8cc63f] text-black font-bold py-3 rounded-lg shadow transition"
          >
            Register & Start Learning →
          </button>

          {/* Note */}
          <p className="text-sm text-gray-500 mt-2">
            No spam, we promise!
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
