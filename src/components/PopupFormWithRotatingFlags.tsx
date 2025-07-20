import React, { useState, useEffect } from 'react';
import student1 from '../../assets/students1.png';
import student2 from '../../assets/studen2.png';
import student3 from '../../assets/students1.png'; // Replace with your images

const countries = [
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'UK', flag: '🇬🇧' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Canada', flag: '🇨🇦' },
];

const studentImages = [student1, student2, student3];

interface PopupFormProps {
  onClose: () => void;
}

const PopupFormWithCards: React.FC<PopupFormProps> = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button
          onClick={onClose}
          style={styles.closeBtn}
        >
          ×
        </button>

        {/* Left: Form */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Take the first step</h2>
          <input type="email" placeholder="Email ID" style={styles.input} />
          <input type="tel" placeholder="Phone Number" style={styles.input} />
          <button style={styles.button}>Connect with us</button>
        </div>

        {/* Right: Rotating Cards */}
        <div style={styles.right}>
          <div style={styles.cardContainer}>
            {countries.map((country, index) => {
              const isActive = index === activeIndex;
              const zIndex = countries.length - index;
              return (
                <div
                  key={country.name}
                  style={{
                    ...styles.card,
                    zIndex: isActive ? 10 : zIndex,
                    transform: `translateY(${isActive ? '-10px' : `${index * 10}px`}) scale(${isActive ? 1.05 : 0.95})`,
                    opacity: isActive ? 1 : 0.7,
                    backgroundImage: `url(${studentImages[index % studentImages.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div style={styles.flag}>{country.flag}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: 650,
    height: 320,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'transparent',
    border: 'none',
    fontSize: 20,
    cursor: 'pointer',
  },
  left: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '22px',
    marginBottom: 16,
    fontWeight: 600,
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: 20,
    border: '1px solid #ccc',
    fontSize: 14,
  },
  button: {
    marginTop: 10,
    padding: '10px 20px',
    borderRadius: 20,
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: 1000,
  },
  cardContainer: {
    position: 'relative',
    width: 180,
    height: 220,
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.5s ease-in-out',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 12,
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundRepeat: 'no-repeat',
  },
  flag: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '4px 8px',
    borderRadius: 8,
    fontSize: 20,
  },
};

export default PopupFormWithCards;
