import React, { useState } from "react";

export default function MockTestPop() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    test: "",
    country: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [entriesCount, setEntriesCount] = useState(
    parseInt(localStorage.getItem("mockTestCount")) || 0
  );
  const MAX_ENTRIES = 25;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entriesCount >= MAX_ENTRIES) return;

    const newCount = entriesCount + 1;
    setEntriesCount(newCount);
    localStorage.setItem("mockTestCount", newCount);
    setSubmitted(true);

    console.log("Form submitted:", formData);
    // API/email integration can go here
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      test: "",
      country: "",
      agree: false,
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-[#8cc63f] text-white rounded-lg hover:bg-green-700 transition"
      >
        Book Your Slot Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-10 sm:pt-20">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Want to know where you stand?
            </h2>
            <p className="mb-2 text-center text-gray-700">
              Take a free mock test and get a personalized performance analysis from our expert mentors!!
            </p>
            <p className="mb-4 text-center text-gray-700">
              Or get a free mock test with a custom performance report for IELTS, TOEFL, GRE, GMAT, PTE & SAT.
            </p>

            {entriesCount >= MAX_ENTRIES ? (
              <p className="text-red-600 font-semibold mt-4 text-center">
                Sorry! Slot bookings are now closed.
              </p>
            ) : !submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Responsive Phone Input */}
                <div className="flex gap-2 flex-col sm:flex-row">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-3 border rounded-lg w-full sm:w-28 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+353">+353</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <select
                  name="test"
                  value={formData.test}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Target Test</option>
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="GRE">GRE</option>
                  <option value="GMAT">GMAT</option>
                  <option value="PTE">PTE</option>
                  <option value="SAT">SAT</option>
                </select>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Preferred Country</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Ireland">Ireland</option>
                </select>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-gray-700">I agree to be contacted</span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#8cc63f] text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Take My Free Test →
                </button>
              </form>
            ) : (
              <p className="text-green-600 font-semibold mt-4 text-center">
                Thank you! Your mock test booking has been received.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
