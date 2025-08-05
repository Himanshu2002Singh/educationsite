import React, { useState, useEffect } from 'react';

const testimonialData = [
  {
    id: 1,
    name: 'Shreenidhi Shetty',
    country: '🇬🇧 UK',
    university: 'Kingston University — MSc Data Science',
    quote: 'I am beyond grateful to Edukonnect, their unwavering support and expertise made my dream of studying abroad come true. From day one, they were genuinely invested in my journey. The team went above and beyond, guiding me through the complex process of selecting the right university, ensuring I felt confident and informed at every stage. They truly took the time to understand my strengths and goals, offering personalized guidance that made all the difference.',
    image: 'https://drive.google.com/uc?export=view&id=1rhJ25LEzJBsZ_csApGV9pr3QJXkPNeGW'
  },
  {
    id: 2,
    name: 'Vaidehi Rathi',
    country: '🇬🇧 UK',
    university: 'University of Chester — MSc Cardiovascular Health and Rehabilitation',
    quote: 'I had an exceptional experience with Edukonnect. Their team was very supportive throughout my admission process. They expertly guided me through the entire process of university selection and visa application, addressing all my queries with patience and clarity. Their support made such a complicated journey feel manageable and straightforward. Thank you so much Edukonnect. Highly recommended!',
    image: ''
  },
  {
    id: 3,
    name: 'Anjali Kotgwal',
    country: '🇬🇧 UK',
    university: 'Sheffield Hallam University — MSc Finance and Investment',
    quote: 'I really feel grateful for the service provided by Edukonnect. In very less time Edukonnect helped me to get into a reputed University and with a good choice of course. Without the help of Edukonnect and my counsellor I won’t be able to fly next month. I highly recommend Edukonnect because they handle each and every step minutely. Thank you Edukonnect for getting me on the right track.',
    image: ''
  },
  {
    id: 4,
    name: 'Sanjana Govind Singh',
    country: '🇬🇧 UK',
    university: 'University of Derby — MA History',
    quote: 'Edukonnect guided me through every step of my admission process with professionalism and care. Securing admission to a UK university would not have been possible without them and the team. Highly recommended their expertise for anyone pursuing international education.',
    image: ''
  },
  {
    id: 5,
    name: 'Asmita Ghosh',
    country: '🇬🇧 UK',
    university: 'University of Exeter — MSc Digital Marketing',
    quote: 'My experience with Edukonnect was super smooth and was hassle free. My counselor was very helpful right from shortlisting universities to selecting which university to finally choose. As a working professional, having my counselor really helped me. In every process I was helped by Edukonnect. They helped me clear the smallest of my doubts and followed up whenever there was a delay. I would definitely recommend students to go to Edukonnect if they wish to go abroad.',
    image: ''
  },
  {
    id: 6,
    name: 'Khan Tuba',
    country: '🇺🇸 USA',
    university: '',
    quote: 'My experience at Edukonnect was great. They helped me with everything, from choosing programs and university to visa filing and interview preparation. They were always there when I needed them, just a phone call away. I highly recommend Edukonnect for anyone looking for overseas education. I got my US visa on my first try, and I want to thank the Edukonnect staff for making it possible.',
    image: 'https://drive.google.com/uc?export=view&id=1dJMsuEr7JziX-QxsZ8YEnRFrG62OubpC'
  },
  {
    id: 7,
    name: 'Priyal Sheta',
    country: '🇺🇸 USA',
    university: '',
    quote: 'My experience with Edukonnect has been outstanding! They provided exceptional service in guiding me through the entire process of getting admission to a university in the USA and securing my US visa. The staff is highly knowledgeable, professional, and supportive throughout. Thanks to them for their assistance. I highly recommend Edukonnect to anyone seeking reliable guidance for studying abroad.',
    image: ''
  },
  {
    id: 8,
    name: 'Samidha More',
    country: '🇺🇸 USA',
    university: '',
    quote: 'My experience with Edukonnect was fantastic. They helped me throughout my study abroad process and with my IELTS classes, making everything much easier. They reviewed my documents, helped me write strong statements of purpose, and made sure I met all the deadlines. Their support made everything stress-free and efficient. I highly recommend this consultancy for everyone who is looking to study abroad.',
    image: ''
  },
  {
    id: 9,
    name: 'Ayan Momin',
    country: '🇺🇸 USA',
    university: 'Troy University — Computer and Information Sciences',
    quote: 'I wanted to take a moment to express my sincere appreciation to Edukonnect. They guided me through every step from university shortlist, to applications, visa interview preparation with patience and expertise. Thanks to their support, I am now on my way to studying in the US and achieving my dreams.',
    image: ''
  },
  {
    id: 10,
    name: 'Sayal Jogale',
    country: '🇨🇦 Canada',
    university: 'Niagara University — MBA',
    quote: 'The staff were very helpful and ensured a very smooth process during admission as well as visa process. I got into my dream university, the entire process was very smooth and hassle free. I will highly recommend Edukonnect for anyone planning to study abroad.',
    image: ''
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonialData.length / slidesPerView));
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return testimonialData.slice(start, start + slidesPerView);
  };

  return (
    <div className="py-16 bg-[linear-gradient(270deg,#e6f7ea,#f0f7f4,#d8f3dc)] bg-[length:400%_400%] animate-[gradient-x_10s_ease_infinite] shadow-lg ] px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Student Testimonials</h2>
        <p className="text-lg text-gray-600">
          Read what our students say about their experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 transition-all duration-500 ease-in-out">
        {getVisibleTestimonials().map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 w-full sm:w-72 md:w-80 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                <p className="text-gray-500 text-xs">{item.university}</p>
                <p className="text-gray-500 text-xs">{item.country}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{item.quote}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(testimonialData.length / slidesPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-emerald-600 scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;