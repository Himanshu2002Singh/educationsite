export default function CompareTable() {
  const comparisons = [
    {
      aspect: "Guidance",
      edu: "Personalized counseling designed around your academic goals and career aspirations",
      other: "Generic, one-size-fits-all advice",
    },
    {
      aspect: "Application Support",
      edu: "Step-by-step guidance with documentation, essays, and university applications",
      other: "Limited to filling basic forms",
    },
    {
      aspect: "Test Preparation",
      edu: "Support for IELTS, TOEFL, GRE, GMAT, and more with proven strategies",
      other: "Rarely offered or outsourced at extra cost",
    },
    {
      aspect: "University Options",
      edu: "Wide global network of reputed universities and programs",
      other: "Restricted to a handful of tied-up institutions",
    },
    {
      aspect: "Focus",
      edu: "Career-oriented approach ensuring long-term success",
      other: "Admission-centered, short-term focus",
    },
    {
      aspect: "Visa Guidance",
      edu: "Dedicated assistance with documentation, interviews, and approvals",
      other: "Minimal help, often leaving students on their own",
    },
    {
      aspect: "Post-Arrival Support",
      edu: "Assistance with accommodation, orientation, and settling abroad",
      other: "No support once you leave your home country",
    },
    {
      aspect: "Values & Ethics",
      edu: "Honest, transparent, and student-first recommendations",
      other: "Driven by commissions and institutional partnerships",
    },
    {
      aspect: "Experience",
      edu: "Experienced mentors with a proven success record",
      other: "Often handled by junior or untrained staff",
    },
  ];

  return (
    <section className="py-12 bg-white ">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-sm  md:text-4xl font-bold text-black text-center ">
          Don’t Settle for Less —{" "}
          <span className="text-[#8cc63f]">Compare for Yourself </span>
        </h2>
        <div className="w-16  h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Here’s how EduKonnect stands apart from the crowd, delivering not just
          services, but real outcomes.
        </p>

        <div
          className="overflow-x-scroll bg-gray-200 w-full custom-scroll"
          style={{ scrollbarGutter: "stable" }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-200 text-black font-bold p-4 text-left w-1/6">
                  Aspect
                </th>
                <th className="bg-[#8cc63f] text-white font-bold p-4 text-left w-3/8">
                Our Approach 
                </th>
                <th className="bg-[#be1e2d] text-white font-bold p-4 text-left w-3/8">
                  Typical Agents 
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, i) => (
                <tr key={i} className="border-b">
                  {/* Aspect Column */}
                  <td className="bg-gray-50 text-gray-900 p-4 align-top font-semibold ">
                    {item.aspect}
                  </td>

                  {/* EduKonnect Column */}
                  <td className="bg-green-20 text-green-900 p-4 align-top">
                    {item.edu}
                  </td>

                  {/* Other Consultants Column */}
                  <td className="bg-red-50 text-red-900 p-4 align-top">
                    {item.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
