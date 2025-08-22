import React, { useState, useEffect } from "react";

export default function HomePop() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [entriesCount, setEntriesCount] = useState(0);
  const MAX_ENTRIES = 25;

  // Load count from localStorage
  useEffect(() => {
    const count = parseInt(localStorage.getItem("earlyBirdCount")) || 0;
    setEntriesCount(count);

    if (count < MAX_ENTRIES) {
      setTimeout(() => setIsOpen(true), 1000); // Open popup after 1 second
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entriesCount >= MAX_ENTRIES) return;

    const newCount = entriesCount + 1;
    setEntriesCount(newCount);
    localStorage.setItem("earlyBirdCount", newCount);
    setSubmitted(true);

    console.log("Form submitted:", formData);
    // API/email integration can go here
  };

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-10 sm:pt-20">

      <div className="bg-white rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative">

        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold "
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Win Big with Our Early Bird Offers!
        </h2>
        <p className="mb-2 text-center">
          Be one of the first 25 students to unlock exclusive early bird benefits — including a chance to win a <br/><span className="font-bold">FREE one-way ticket</span><br/> to your study abroad destination!
        </p>
        <p className="mb-6 text-sm text-gray-500 text-center">Limited to the first 25 sign-ups only.<span className="text-blue-600"> *T&Cs apply</span>.</p>

        {entriesCount >= MAX_ENTRIES ? (
          <p className="text-red-600 font-semibold mt-4 text-center">
            Sorry! Early bird entries are now closed.
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
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-[#8cc63f] text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit →
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold mt-4 text-center">
            Thank you! Your early bird entry has been received.
          </p>
        )}
      </div>
    </div>
  );
}
