export default function CompareTable() {
  const comparisons = [
    {
      aspect: "Counselling",
      edu: "Truly personalised, 1:1 deep-dive sessions tailored to student goals",
      other: "Often generic, template-based, one-size-fits-all",
    },
    {
      aspect: "Test Prep",
      edu: "In-house IELTS, GRE experts & custom prep plans",
      other: "Outsourced coaching or limited test prep offerings",
    },
    {
      aspect: "University Shortlisting",
      edu: "Balanced on admission feasibility + career outcomes",
      other: "Often rank-driven or based on tie-ups only",
    },
    {
      aspect: "Application Help",
      edu: "End-to-end support: SOP/essay editing, submission, follow-up",
      other: "Limited to basic form filling or third-party editors",
    },
    {
      aspect: "Visa Assistance",
      edu: "Includes mock interviews, financial document reviews",
      other: "Surface-level guidance without real practice",
    },
    {
      aspect: "Pre/Post Arrival",
      edu: "Buddy connect, forex, SIM, travel insurance, housing help",
      other: "Ends at visa stage—limited post-arrival support",
    },
    {
      aspect: "Support System",
      edu: "Real-time WhatsApp updates, dashboard tracking, regular nudges",
      other: "Hard to reach, inconsistent communication",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-black text-center ">
          Don’t Settle for Less — <span className="text-[#8cc63f]">Compare for Yourself </span>
        </h2>
         <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Here’s how EduKonnect stands apart from the crowd, delivering not just services, but real outcomes.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#8cc63f] text-white font-bold p-4 text-left w-1/2">EduKonnect</th>
                <th className="bg-[#be1e2d] text-white font-bold p-4 text-left w-1/2">Other Consultants</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="bg-[green-50] text-green-900 p-4 align-top">
                    <span className="block font-semibold">{item.aspect}</span>
                    <span className="text-sm">{item.edu}</span>
                  </td>
                  <td className="bg-red-50 text-red-900 p-4 align-top">
                    <span className="block font-semibold">{item.aspect}</span>
                    <span className="text-sm">{item.other}</span>
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
