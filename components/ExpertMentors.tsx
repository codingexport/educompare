"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const mentors = [
    {
        name: "Rashmi",
        role: "Academic Mentor",
        tag: "M.Sc.",
        exp: "4+ Years of Experience",
        rating: 4.5,
        image: "/img/counsellor4-BL5_IwPk.webp",
    },
    {
        name: "Rishita",
        role: "Academic Mentor",
        tag: "MBA",
        exp: "5+ Years of Experience",
        rating: 4.3,
        image: "/img/counsellor5-iRHwpNgj.webp",
    },
    {
        name: "Abhishek",
        role: "Academic Mentor",
        tag: "BCA",
        exp: "3+ Years of Experience",
        rating: 4.2,
        image: "/img/Abhishek.webp",
    },
    {
        name: "Palak Jaiswal",
        role: "Sr. Consultant",
        tag: "MA",
        exp: "8+ Years of Experience",
        rating: 4.9,
        image: "/img/Palak.webp",
    },
];

export default function ExpertMentors() {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <p className="text-blue-400 font-medium mb-4">
                    👋 Say Goodbye to Faceless Call Centers
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Expert <span className="text-blue-500">Career Guidance</span> from Professionals
                </h2>

                <p className="text-gray-400 mb-14">
                    Compare Vidya has a team of{" "}
                    <span className="text-blue-500 font-semibold">100+ expert</span> mentors guiding students since 2022.
                </p>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {mentors.map((mentor, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white text-black rounded-2xl overflow-hidden shadow-xl relative hover:-translate-y-2 transition duration-300">

                                {/* Rating */}
                                <div className="absolute top-3 left-3 bg-yellow-100 text-black text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                    {mentor.rating}
                                </div>

                                <div className="relative h-64 w-full">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6 text-center space-y-2">
                                    <h3 className="font-bold text-lg">{mentor.name}</h3>

                                    <p className="text-blue-600 font-medium">
                                        {mentor.role}{" "}
                                        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs rounded">
                                            {mentor.tag}
                                        </span>
                                    </p>

                                    <p className="text-gray-500 text-sm">{mentor.exp}</p>

                                    <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                                        Get Expert Advice
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
