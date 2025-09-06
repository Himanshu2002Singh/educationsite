"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import boy from '../../../assets/Boy Png.png'
import girl from '../../../assets/Girl Png.png'

interface Student {
  name: string;
  score: string;
  exam: string;
  image: string;
}

const students: Student[] = [
  {
    name: "Aryan Alaudeen",
    score: "7/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Sayali Jogale",
    score: "7/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Yash Manish Shah",
    score: "7.5/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Harikesh Amol Dalal",
    score: "7/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Jay Anil Thakkar",
    score: "7.5/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Neeti Kapoor",
    score: "8/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Liya Mary Jacob",
    score: "7.5/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Priyal Haresh Sheta",
    score: "8/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Rhea Sunil Hiranandani",
    score: "7.5/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Rushi Ketan Pandya",
    score: "8/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Vaidehi Praful Rathi",
    score: "8/9",
    exam: "IELTS",
    image: girl,
  },
  {
    name: "Varun Nagendra Jha",
    score: "7.5/9",
    exam: "IELTS",
    image: boy,
  },
  {
    name: "Srushti Yogesh Patel",
    score: "8/9",
    exam: "IELTS",
    image: girl,
  },
];


export default function ResultShowcase() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl   font-bold text-black">
          Coaching that is <span className="text-[#8cc63f]"> built for results </span>
        </h2>
         <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-10"></div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
        //   navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {students.map((student, idx) => (
            <SwiperSlide key={idx}>
              <div className=" shadow-lg rounded-2xl p-6 border border-[#8cc63f] bg-[#f9f9f9] ">
                {/* Image */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 ">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Score Badge */}
                <div className="mt-4 bg-[#8cc63f] text-[#ffffff] font-bold rounded-lg px-4 py-1 inline-block">
                  {student.exam}: {student.score}
                </div>

                {/* Name */}
                <h3 className="mt-3 font-semibold text-black text-lg">
                  {student.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
