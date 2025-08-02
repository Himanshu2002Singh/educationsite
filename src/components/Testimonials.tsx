import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Shreenidhi Shetty',
    country: '🇬🇧 UK',
    university: 'Kingston University — MSc Data Science',
    quote: 'I am beyond grateful to Edukonnect, their unwavering support and expertise made my dream of studying abroad come true. From day one, they were genuinely invested in my journey. The team went above and beyond, guiding me through the complex process of selecting the right university, ensuring I felt confident and informed at every stage. They truly took the time to understand my strengths and goals, offering personalized guidance that made all the difference. When it came to the visa process, they made what felt like an intimidating task surprisingly smooth. I highly recommend Edukonnect to anyone looking for a professional and genuinely caring consultancy.',
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-[#0D0D0D] text-white rounded-3xl shadow-lg max-w-8xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from students who have successfully navigated their educational journey with our guidance.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl shadow-xl bg-gradient-to-r from-emerald-500 to-teal-700">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4 md:p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header Section: Image + Name/University */}
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-white/80 text-sm">{testimonial.country} — {testimonial.university}</p>
                      </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="-mt-3">
                      <div className="text-white/80 text-3xl font-serif">"</div>
                      <p className="text-white text-lg md:text-xl italic">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;