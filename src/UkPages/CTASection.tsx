import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-16 bg-[#FFFFFF] text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            {" "}<span className="text-[#8cc63f]"> Connect</span> with Expert
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] mb-2">15k+ students have already made the first step</p>
          <p className="text-lg text-[#2C2C2C] opacity-80">
            Get personalized guidance for your UK study abroad journey
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Connect with Our Experts?</h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Personalized University Matching",
                    desc: "Get matched with universities that fit your profile and goals"
                  },
                  {
                    title: "Scholarship Guidance",
                    desc: "Maximize your chances of securing scholarships up to 50%"
                  },
                  {
                    title: "Visa Application Support",
                    desc: "Complete guidance through the UK student visa process"
                  },
                  {
                    title: "End-to-End Support",
                    desc: "From application to arrival - we're with you every step"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-[#C5E3DC] rounded-full p-2 mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-[#2C2C2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#C5E3DC] rounded-xl p-6 mt-8 text-[#2C2C2C]">
                <h4 className="font-bold mb-2">🎯 Success Rate</h4>
                <p className="text-2xl font-bold mb-1">95%</p>
                <p className="text-sm opacity-80">of our students get their preferred university admission</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#F2F2F2] rounded-2xl p-8 shadow-lg border border-[#8DC63F]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F] text-[#2C2C2C]"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F] text-[#2C2C2C]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F] text-[#2C2C2C]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8DC63F] text-[#2C2C2C] resize-none"
                        placeholder="Tell us about your study goals..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#8DC63F] hover:bg-[#C1272D] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Connect with Expert Now
                  </button>

                  <p className="text-xs text-center text-[#2C2C2C] opacity-60">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-[#8DC63F] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Thank You!</h3>
                  <p className="text-[#2C2C2C] mb-4">
                    Your message has been sent successfully. Our expert will contact you within 24 hours.
                  </p>
                  <div className="bg-[#C5E3DC] rounded-lg p-4 text-[#2C2C2C]">
                    <p className="text-sm">
                      📞 For immediate assistance, call us at: <br />
                      <span className="font-bold">+44 20 1234 5678</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '15,000+', label: 'Students Guided' },
            { value: '95%', label: 'Success Rate' },
            { value: '150+', label: 'Partner Universities' },
            { value: '24+', label: 'Years of Experience' },
          ].map((item, index) => (
            <div key={index} className="bg-[#C5E3DC] rounded-xl p-6">
              <p className="text-3xl font-bold text-[#2C2C2C] mb-2">{item.value}</p>
              <p className="text-sm text-[#2C2C2C] opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
