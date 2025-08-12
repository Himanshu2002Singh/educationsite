import {
  MapPin,
  Home,
  Utensils,
  Phone,
  Car,
  Calculator,
  Briefcase,
} from 'lucide-react';
 // replace with USA-specific image

const CostOfLivingSectionUSA = () => {
  const costBreakdown = {
    usa: {
      totalRange: 'Varies by city type and lifestyle',
      visaRequirement: 'Financial proof varies by state and university',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Mid-Cost City (9 months)', cost: '$14,220 – $29,700', annual: '$18,960 – $39,600 (12 months)' },
        { icon: <Home className="w-5 h-5" />, category: 'Low-Cost City (9 months)', cost: '$10,170 – $21,150', annual: '$13,560 – $28,200 (12 months)' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '$300 – $500/month', annual: '$3,600 – $6,000' },
        { icon: <Car className="w-5 h-5" />, category: 'Transportation', cost: '$50 – $120/month', annual: '$600 – $1,440' },
        { icon: <Phone className="w-5 h-5" />, category: 'Utilities & Internet', cost: '$100 – $200/month', annual: '$1,200 – $2,400' },
      ],
    },
  };

  const key = 'usa';
  const data = costBreakdown[key];
  const accentColor = '#1E3A8A'; // USA navy blue

  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      style={{ backgroundImage: `url(${''})` }}
    >
      <div className="backdrop-blur-md py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 font-serif break-words">
              Cost of Living in USA
            </h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto break-words">
              Understand the estimated living expenses while studying in the United States.
            </p>
          </div>

          {/* Cost Card */}
          <div className="mb-10">
            <div
              className="max-w-xl mx-auto bg-[#F9F9F9]/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 transition-all duration-300 border-[var(--accent)] shadow-xl"
              style={{ ['--accent' as keyof React.CSSProperties]: accentColor }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 mr-2" style={{ color: accentColor }} />
                </div>
                <div
                  className="bg-opacity-10 border rounded-lg p-4"
                  style={{ backgroundColor: accentColor + '1A', borderColor: accentColor }}
                >
                  <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: accentColor }}>
                    {data.totalRange}
                  </p>
                  <p className="text-sm sm:text-lg text-gray-700 break-words">
                    Minimum Proof for Visa: {data.visaRequirement}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {data.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="text-gray-600 mr-3">{item.icon}</div>
                      <span className="text-sm font-medium text-[#2C2C2C] break-words">{item.category}</span>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-sm font-bold text-[#2C2C2C]">{item.cost}</p>
                      <p className="text-xs text-gray-600 break-words">{item.annual} annually</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Save Money */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-10">
            <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
              How to Save Money?
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✔ Housing: Share apartments with roommates (saves 30–50%).</li>
              <li>✔ Food: Cook at home + use student discounts (e.g., Too Good To Go).</li>
              <li>✔ Transport: Walk/bike; use student transit passes.</li>
              <li>✔ Textbooks: Rent digital copies or use library resources.</li>
            </ul>
          </div>

          {/* Why Choose EduKonnect */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
              Why Choose EduKonnect?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InsightItem
                icon={<Home className="w-6 h-6 text-[#1E3A8A]" />}
                title="Find Budget-Friendly Housing"
                description="Partnered with 100+ US student accommodations."
                color="#1E3A8A"
              />
              <InsightItem
                icon={<Calculator className="w-6 h-6 text-[#C1272D]" />}
                title="Access Exclusive Scholarships"
                description="Reduce tuition and living costs."
                color="#C1272D"
              />
              <InsightItem
                icon={<Briefcase className="w-6 h-6 text-[#2C2C2C]" />}
                title="Pre-Departure Financial Planning"
                description="Avoid surprises with our Cost Calculator Tool."
                color="#2C2C2C"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-[#1E3A8A] text-white px-6 py-4 w-full sm:w-auto rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Estimate My USA Budget
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

type InsightItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const InsightItem = ({ icon, title, description, color }: InsightItemProps) => (
  <div className="text-center">
    <div
      className="rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center"
      style={{ backgroundColor: `${color}20` }}
    >
      {icon}
    </div>
    <h5 className="font-bold text-[#2C2C2C] mb-2 break-words">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default CostOfLivingSectionUSA;