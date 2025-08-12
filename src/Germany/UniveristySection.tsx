import React from "react";

const UniversitySection: React.FC = () => {
  const statueImage = "/images/statue.png";

  const publicUniversities = [
    { name: "Technical University of Munich", logo: "../../assets/Technical University of Munich.png" },
    { name: "Ludwig Maximilian University of Munich", logo: "/images/lmu.png" },
    { name: "University of Heidelberg", logo: "/images/heidelberg.png" },
    { name: "University of Berlin", logo: "/images/berlin.png" },
    { name: "Karlsruhe Institute of Technology", logo: "/images/kit.png" },
    { name: "University of Göttingen", logo: "../../assets/goettingen.png" },
    { name: "University of Freiburg", logo: "/images/freiburg.png" },
    { name: "RWTH Aachen University", logo: "/images/rwth.png" },
    { name: "University of Hamburg", logo: "/images/hamburg.png" },
    { name: "University of Cologne", logo: "/images/cologne.png" },
  ];

  const privateUniversities = [
    { name: "Berlin School of Business and Innovation", logo: "/images/bsbi.png" },
    { name: "SRH Berlin University of Applied Sciences", logo: "/images/srh-berlin.png" },
    { name: "University of Europe for Applied Sciences", logo: "/images/ue.png" },
    { name: "International University of Applied Sciences (IU)", logo: "/images/iu.png" },
    { name: "Arden University", logo: "/images/arden.png" },
    { name: "EU Business School", logo: "/images/eubs.png" },
    { name: "GISMA Business School Hochschule", logo: "/images/gisma.png" },
    { name: "Fresenius University of Applied Sciences", logo: "/images/fresenius.png" },
    { name: "International School of Management", logo: "/images/ism.png" },
    { name: "SRH Hochschule Heidelberg", logo: "/images/srh-heidelberg.png" },
    { name: "Munich Business School", logo: "/images/munich-business.png" },
  ];

  const renderCircleLayout = (universities: { name: string; logo: string }[]) => {
    const radius = 42; // slightly bigger radius to avoid overlap
    const center = 50;
    return universities.map((uni, index) => {
      const angle = (index / universities.length) * 2 * Math.PI - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return (
        <div
          key={uni.name}
          className="uni-item"
          style={{ top: `${y}%`, left: `${x}%` }}
        >
          <img src={uni.logo} alt={uni.name} className="uni-logo" />
          <p className="uni-name">{uni.name}</p>
        </div>
      );
    });
  };

  const renderGridLayout = (universities: { name: string; logo: string }[]) => (
    <div className="uni-grid">
      {universities.map((uni) => (
        <div key={uni.name} className="grid-item">
          <img src={uni.logo} alt={uni.name} className="uni-logo" />
          <p className="uni-name">{uni.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="section-container">
      <h2 className="section-title">Top German Universities You Should Know</h2>
      <p className="section-subtitle">
        Brief: Top universities with QS ranking & their popular courses
      </p>

      <h3 className="list-title">Top Public Universities in Germany</h3>
      <div className="circle-layout">
        <img src={statueImage} alt="Statue" className="statue" />
        {renderCircleLayout(publicUniversities)}
      </div>
      <div className="mobile-layout">{renderGridLayout(publicUniversities)}</div>

      <h3 className="list-title">Top Private Universities in Germany</h3>
      <div className="circle-layout">
        <img src={statueImage} alt="Statue" className="statue" />
        {renderCircleLayout(privateUniversities)}
      </div>
      <div className="mobile-layout">{renderGridLayout(privateUniversities)}</div>

      <style jsx>{`
        .section-container {
          text-align: center;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }
        .section-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .section-subtitle {
          font-size: 16px;
          color: #555;
          margin-bottom: 40px;
        }
        .list-title {
          font-size: 22px;
          margin: 40px 0 20px;
        }
        .circle-layout {
          position: relative;
          width: 650px;
          height: 650px;
          margin: 0 auto 60px;
        }
        .statue {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          z-index: 1;
        }
        .uni-item {
          position: absolute;
          transform: translate(-50%, -50%);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 130px; /* wider to prevent text wrapping weirdly */
        }
        .uni-logo {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e91e63;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          margin-bottom: 8px;
        }
        .uni-name {
          font-size: 12px;
          font-weight: 500;
          color: #333;
          text-align: center;
          line-height: 1.3;
          max-width: 120px;
        }
        /* Mobile Layout Hidden by Default */
        .mobile-layout {
          display: none;
        }
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .circle-layout {
            display: none;
          }
          .mobile-layout {
            display: block;
          }
          .uni-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 400px;
            margin: 0 auto;
          }
          .grid-item {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default UniversitySection;
