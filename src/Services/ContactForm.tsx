export default function FirstStepSection() {
  return (
    <section className="py-12 bg-white">
          <div className="flex justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
            Take your <span className="text-[#8cc63f]"> first step </span>
            </h2>
          </div>

           <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          

          <div className="space-y-3 text-gray-700">
            <h3 className="text-black">Whether you’re a:</h3>
            <ul className="space-y-2">
              <li>✅ UG student (or a parent helping decide)</li>
              <li>✅ PG aspirant chasing bigger goals</li>
              <li>✅ Working professional planning a move</li>
              <li>✅ Or just confused and exploring options…</li>
            </ul>

            <p>
              We get what you’re going through — the stress, the choices, the doubts.  
              <strong> EduKonnect is built for you.</strong>
            </p>
            <p>
              With personalised guidance and real support, we simplify your study abroad journey — every step of the way. Fill out the form now.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
            <div className="flex gap-2">
              <select className="p-3 border rounded-lg">
                <option value="+91">+91</option>
              </select>
              <input type="text" placeholder="Mobile Number (10 Digits)" className="flex-1 p-3 border rounded-lg" />
            </div>
            <select className="w-full p-3 border rounded-lg">
              <option>Nearest Office</option>
            </select>
            <select className="w-full p-3 border rounded-lg">
              <option>Preferred Study Destination</option>
            </select>

            <p className="text-xs text-gray-500">
              By clicking, you agree to our{" "}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{" "}
              <a href="#" className="text-blue-600 underline">Terms & Conditions</a>.
            </p>

            <button className="w-full bg-[#8cc63f] hover:bg-[#8cc63f] text-white py-3 rounded-lg font-semibold">
              Get Started for Free!
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
