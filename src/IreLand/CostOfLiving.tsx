import {
  MapPin,
  Home,
  Utensils,
  Phone,
  Car,
  Calculator,
  Briefcase,
} from 'lucide-react';

const CostOfLivingSectionIreland = () => {
  const costBreakdown = {
    ireland: {
      totalRange: '€10,000 – €12,000/year',
      visaRequirement: 'Minimum proof for visa: €10,000',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation (Shared)', cost: '€400 – €700/month', annual: '€4,800 – €8,400' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '€250 – €400/month', annual: '€3,000 – €4,800' },
        { icon: <Car className="w-5 h-5" />, category: 'Transportation', cost: '€50 – €100/month', annual: '€600 – €1,200' },
        { icon: <Phone className="w-5 h-5" />, category: 'Utilities & Internet', cost: '€60 – €120/month', annual: '€720 – €1,440' },
        { icon: <Briefcase className="w-5 h-5" />, category: 'Miscellaneous', cost: '€100 – €200/month', annual: '€1,200 – €2,400' },
      ],
    },
  };

  const key = 'ireland';
  const data = costBreakdown[key];
  const accentColor = '#8cc63f'; // Ireland green

  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      style={{ backgroundImage: `url(${''})` }}
    >
      <div className="backdrop-blur-md py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
              Cost of <span className="text-[#8cc63f]">Living</span> in Ireland
            </h2>
            <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
            <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto break-words">
              Understand the estimated living expenses while studying in Ireland.
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
                    {data.visaRequirement}
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
              <li>✔ Work part-time up to 20 hrs/week during term & 40 hrs/week during holidays.</li>
              <li>✔ Share accommodation with flatmates to cut costs.</li>
              <li>✔ Cook meals at home and shop at budget supermarkets (Lidl, Aldi).</li>
              <li>✔ Use student discounts for travel, entertainment, and shopping.</li>
            </ul>
          </div>

          {/* Why Choose EduKonnect */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
              Why Choose EduKonnect?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InsightItem
                icon={<Home className="w-6 h-6 text-[#016241]" />}
                title="Affordable Housing Options"
                description="Find student-friendly accommodation across Ireland."
                color="#016241"
              />
              <InsightItem
                icon={<Calculator className="w-6 h-6 text-[#C1272D]" />}
                title="Scholarship Support"
                description="Get help finding scholarships to reduce living costs."
                color="#C1272D"
              />
              <InsightItem
                icon={<Briefcase className="w-6 h-6 text-[#2C2C2C]" />}
                title="Work-While-Study Guidance"
                description="Maximise your part-time work opportunities legally."
                color="#2C2C2C"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-[#8cc63f] text-white px-6 py-4 w-full sm:w-auto rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Estimate My Ireland Budget
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

export default CostOfLivingSectionIreland;
