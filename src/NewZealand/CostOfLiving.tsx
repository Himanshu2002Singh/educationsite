import React, { useState } from 'react';
import {
  MapPin,
  Home,
  Utensils,
  Phone,
  Car,
  Calculator,
  Briefcase,
} from 'lucide-react';
import backgroundImage from '../../assets/london-CRmEUe1m.png';

const CostOfLivingSection = () => {
  const [activeTab, setActiveTab] = useState('newzealand');

  const costBreakdown = {
    newzealand: {
      totalRange: 'NZD $15,000 – $20,000',
      visaRequirement: 'NZD $20,000/year',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation (shared)', cost: '$800 – $1,200/month', annual: '$10,000 – $14,000' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '$300 – $500/month', annual: '$3,600 – $6,000' },
        { icon: <Car className="w-5 h-5" />, category: 'Transport', cost: '$100 – $150/month', annual: '$1,200 – $1,800' },
        { icon: <Phone className="w-5 h-5" />, category: 'Misc. (phone, internet)', cost: '$50 – $100/month', annual: '$600 – $1,200' },
      ],
    },
  };

  const key = 'newzealand';
  const data = costBreakdown[key];
  const accentColor = '#8cc63f';

  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-md py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
              Cost of<span className="text-[#8cc63f]"> Living in </span>New Zealand
            </h2>
            <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
            <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto break-words">
              Understand the estimated living expenses while studying in New Zealand
            </p>
          </div>

          {/* Cost Card */}
          <div className="mb-10">
            <div
              className="max-w-xl mx-auto bg-[#F9F9F9]/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 transition-all duration-300 border-[var(--accent)] shadow-xl"
              style={{ ['--accent' as any]: accentColor }}
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

          {/* Key Insights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
              Key Insights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <InsightItem
                icon={<Calculator className="w-6 h-6 text-[#2B6CB0]" />}
                title="NZD $15–20K/year"
                description="Typical student budget range"
                color="#8cc63f"
              />
              <InsightItem
                icon={<Briefcase className="w-6 h-6 text-[#C1272D]" />}
                title="Work while studying"
                description="Part-time work can offset living expenses"
                color="#C1272D"
              />
              <InsightItem
                icon={<Home className="w-6 h-6 text-[#2C2C2C]" />}
                title="Affordable Housing"
                description="Shared accommodations lower costs"
                color="#2C2C2C"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-[#8cc63f] text-white px-6 py-4 w-full sm:w-auto rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Estimate My NZ Budget
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InsightItem = ({ icon, title, description, color }: any) => (
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

export default CostOfLivingSection;
