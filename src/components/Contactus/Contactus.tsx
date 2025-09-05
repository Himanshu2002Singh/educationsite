import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
    {/* Hero Section */}
<section className="bg-black py-12 text-center shadow-inner">
  <h1 className="text-3xl md:text-4xl font-bold text-white">
    Contact <span className="text-[#8cc63f]">Us</span>
  </h1>
  <p className="text-gray-300 mt-2">
    We’re here to help you — reach out to us anytime.
  </p>
</section>


      {/* Contact Info + Form with Glow */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left - Contact Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-[#8cc63f] relative overflow-hidden hover:shadow-green-300/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-transparent to-green-50 opacity-70 pointer-events-none"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 relative z-10">
            Get in Touch
          </h2>
          <ul className=" text-gray-700 relative z-10">
            <li>
              <strong>Address:</strong> Borivali (W) : 9th Floor, Express Tower, L.T. Rd, Mumbai, 400092
            </li>
            <li>
              <strong>Phone:</strong> +91 93211 73184
            </li>
            <br/>
              <li>
              <strong>Address:</strong> Andheri (W): 202, DLH Plaza, S.V. Rd, Mumbai, 400058
            </li>
            <li>
              <strong>Phone:</strong> +91 73044 76878
            </li>
            <br/>
            <li>
              <strong>Email:</strong> info@edukonnect.com
            </li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-[#8cc63f] relative overflow-hidden hover:shadow-green-300/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-transparent to-green-50 opacity-70 pointer-events-none"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 relative z-10">
            Send Us a Message
          </h2>
          <form className="space-y-4 relative z-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[#8cc63f] text-white px-6 py-3 rounded-md bg-[#8cc63f] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.170256947893!2d72.837223!3d19.230693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0b86a51b1f1%3A0x6b84cfbb5a0d8f9!2sExpress%20Tower%2C%20L.T.%20Rd%2C%20Borivali%20West%2C%20Mumbai%2C%20400092!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
