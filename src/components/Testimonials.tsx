import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sanjana Govind Singh Kotgwal',
    country: '🇬🇧 UK',
    university: 'University of Derby',
    quote: 'Canam consultancy has been instrumental in helping me secure admission to a UK university. Megha Ma’am and the team provided full support, promptly responding to messages and guiding me through every step. I’m sincerely thankful for their expertise.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Asmita Ghosh',
    country: '🇬🇧 UK',
    university: 'University of Exeter',
    quote: 'My experience with Canam was super smooth. Megha helped from shortlisting universities to final selection. As a working professional, having her was a blessing. They cleared all my doubts and followed up consistently. Highly recommended!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Krutik Chavda',
    country: '🇬🇧 UK',
    university: 'Oxford Brookes University',
    quote: 'A fantastic experience. I dreamed of becoming an F1 race engineer. Canam guided me from dream to reality. Special thanks to Aparna Ma’am for her perfect guidance.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Samidha Sudhir More',
    country: '🇺🇸 USA',
    university: 'Long Island University of Brooklyn',
    quote: 'Canam Consultancy was fantastic. They helped throughout the study abroad process and IELTS classes. From SOP writing to documentation, everything was smooth and stress-free.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Rhea Hiranandani',
    country: '🇨🇦 Canada',
    university: 'George Brown College',
    quote: 'Megha and Shaziya helped me through the entire process. Megha is sweet and approachable, and I received my acceptance quickly. Shaziya is great with visa guidance!',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    name: 'Tarannum Alum Siddique',
    country: '🇨🇦 Canada',
    university: 'Humber College',
    quote: 'Vaishali Ma’am guided me from admission to visa approval. Her support made everything manageable and smooth. Grateful to the Canam team!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 7,
    name: 'Mugeera Patel',
    country: '🇨🇦 Canada',
    university: 'Durham College',
    quote: 'Special thanks to Vaishali Ma’am and Nikita. They ensured the documentation was perfect. The visa process was smooth and well-checked.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 8,
    name: 'Nikhil Dhakoliya',
    country: '🇦🇺 Australia',
    university: 'CQ University',
    quote: 'Best experience! Got help with documentation, university process, GTE, and GS interview. Thanks to Vaishali Ma’am for all the help!',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 9,
    name: 'Bhargavi Arora',
    country: '🇦🇺 Australia',
    university: 'Griffith University',
    quote: 'From the first day, Vaishali Ma’am was calm and proactive. The whole process was seamless — from SOP to IELTS. Great support throughout!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 10,
    name: 'Mohd. Mohib Kherani',
    country: '🇦🇺 Australia',
    university: 'Deakin University',
    quote: 'It was a good experience. After many hurdles, I finally got my visa. Thank you, Aparna Ma’am and Vaishali Ma’am, for your patience and support!',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-[#0D0D0D] text-white rounded-3xl shadow-lg max-w-8xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success stories</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Hear from students who have successfully navigated their educational journey with our guidance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl shadow-xl bg-gradient-to-r from-emerald-500 to-teal-700">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      
                    </div>
                     <p className="text-white font-bold text-lg -mt-3 ">{testimonial.name}</p>
                        <p className="text-white/80 -mt-5 ">{testimonial.country} - {testimonial.university}</p>
                    <div className="flex-1">
                      
                      <div className="text-white/80 text-3xl font-serif">"</div>
                      <p className="text-white text-lg md:text-xl italic mb-6">
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
