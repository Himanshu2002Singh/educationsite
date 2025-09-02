


import React, { useState } from 'react';
import {
  MapPin,
  Home,
  Utensils,
  Car,
  ShoppingBag,
  Wifi,
  Calculator,
  Briefcase,
} from 'lucide-react';
import backgroundImage from '../../assets/london-CRmEUe1m.png'; // Ensure the image is correctly placed

const CostOfLivingSection = () => {
  const [activeTab, setActiveTab] = useState('london');

  const costBreakdown = {
    london: {
      total: 13347,
      totalINR: 1334700,
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation', cost: '£600-800/month' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '£200-300/month' },
        { icon: <Car className="w-5 h-5" />, category: 'Transport', cost: '£150-200/month' },
        { icon: <ShoppingBag className="w-5 h-5" />, category: 'Personal Expenses', cost: '£100-150/month' },
        { icon: <Wifi className="w-5 h-5" />, category: 'Utilities & Internet', cost: '£50-80/month' },
      ],
      partTimeEarnings: 8000,
      netCost: 5347,
    },
    outside: {
      total: 10224,
      // totalINR: 1022400,
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation', cost: '£400-600/month' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '£150-250/month' },
        { icon: <Car className="w-5 h-5" />, category: 'Transport', cost: '£80-120/month' },
        { icon: <ShoppingBag className="w-5 h-5" />, category: 'Personal Expenses', cost: '£80-120/month' },
        { icon: <Wifi className="w-5 h-5" />, category: 'Utilities & Internet', cost: '£40-60/month' },
      ],
      partTimeEarnings: 8000,
      netCost: 2224,
    },
  };

  return (
  <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-md py-12">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
              {" "}<span className="text-[#8cc63f]">Cost of </span>Living in the UK
            </h2>
            <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compare living expenses and make informed decisions about your study destination
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-10 bg-white rounded-2xl p-2 max-w-md mx-auto shadow-md">
      {['london', 'outside'].map((key) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === key
              ? key === 'london'
                ? 'bg-[#8DC63F] text-white shadow' // Green for London
                : 'bg-[#C62828] text-white shadow' // Red for Outside London
              : 'text-[#2C2C2C]'
          }`}
        >
          <MapPin className="w-5 h-5 mr-2" />
          {key === 'london' ? 'London' : 'Outside London'}
        </button>
      ))}
    </div>


          {/* Cost Cards */}
          <div className="mb-10">
            {(() => {
              const key = activeTab;
              const data = costBreakdown[key];
              const accentColor = key === 'london' ? '#8DC63F' : '#2B6CB0'; // red for london, blue for outside

              return (
                <div
                  key={key}
                  className="max-w-xl mx-auto bg-[#F9F9F9]/70 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 border-[var(--accent)] shadow-xl"
                  style={{ ['--accent' as any]: accentColor }}
                >
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 mr-2" style={{ color: accentColor }} />
                    </div>
                    <div
                      className="bg-opacity-10 border rounded-lg p-4"
                      style={{
                        backgroundColor: accentColor + '1A',
                        borderColor: accentColor,
                      }}
                    >
                      <p className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
                        £{data.total}
                      </p>
                      {/* <p className="text-lg text-gray-700">₹{data.totalINR.toLocaleString()} per year</p> */}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {data.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                      >
                        <div className="flex items-center">
                          <div className="text-gray-600 mr-3">{item.icon}</div>
                          <span className="text-sm font-medium text-[#2C2C2C]">{item.category}</span>
                        </div>
                        <span className="text-sm font-bold text-[#2C2C2C]">{item.cost}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2 text-sm text-[#2C2C2C]">
                      <span>Part-time work offset:</span>
                      <span className="font-bold text-[#8DC63F]">-£8,000</span>
                    </div>
                    <div className="bg-[#8DC63F] bg-opacity-10 border border-[#8DC63F] rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-[#8DC63F]">Net Cost: £{data.netCost}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Key Insights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-xl font-bold text-[#2C2C2C] mb-4 text-center">Key Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightItem
                icon={<Calculator className="w-6 h-6 text-[#8DC63F]" />}
                title={<><span>Save £3,123</span><sup>*</sup><span>/year</span></>}
                description="By choosing cities outside London"
                color="#8DC63F"
              />
              <InsightItem
                icon={<Briefcase className="w-6 h-6 text-[#C1272D]" />}
                title={<><span>Earn £8,000</span><sup>*</sup><span>/year</span></>}
                description="Through part-time work (20hrs/week)"
                color="#C1272D"
              />
              <InsightItem
                icon={<Home className="w-6 h-6 text-[#2C2C2C]" />}
                title="Quality Education"
                description="Same standard everywhere in UK"
                color="#2C2C2C"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-[#8DC63F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Estimate My UK Budget
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
    <h5 className="font-bold text-[#2C2C2C] mb-2">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default CostOfLivingSection;