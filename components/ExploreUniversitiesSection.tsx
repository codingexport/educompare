"use client";

import Image from "next/image";

const universities = [
    {
        name: "VGU Online",
        courses: 35,
        img: "/img/vguOnline.webp",
    },
    {
        name: "Uttranchal Online",
        courses: 13,
        img: "/img/uttaranchalOnline.webp",
    },
    {
        name: "Jaipur Manipal",
        courses: 36,
        img: "/img/jaipurManipalOnline.webp",
    },
    {
        name: "Amity University",
        courses: 28,
        img: "/img/amityUniversityOnline.webp",
    },
    {
        name: "NMIMS Online",
        courses: 14,
        img: "/img/nmimsOnline.webp",
    },
    {
        name: "LPU Online",
        courses: 31,
        img: "/img/lpuOnline.webp",
    },
    {
        name: "Sikkim Manipal",
        courses: 20,
        img: "/img/sikkimManipalOnline.webp",
    },
    {
        name: "Jain University",
        courses: 44,
        img: "/img/jainUniversityOnline.webp",
    },
];

export default function ExploreUniversitiesSection() {
    return (
        <section className="bg-gray-50 text-black py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-14">
                    <span className="text-blue-600 italic">Explore</span> over{" "}
                    <span className="text-blue-600 font-extrabold">100</span> online{" "}
                    <span className="text-blue-600 italic">universities</span>
                    <br className="hidden md:block" />
                    & Compare{" "}
                    <span className="text-blue-600 font-bold">on 30+ factors</span>
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">

                    {universities.map((uni, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-6 shadow-md 
                         hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-300 cursor-pointer
                         border border-gray-200"
                        >
                            {/* Corner Blue Accent */}
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-blue-600 rounded-bl-2xl" />

                            <div className="flex flex-col items-center space-y-4">
                                <Image
                                    src={uni.img}
                                    alt={uni.name}
                                    width={120}
                                    height={60}
                                    className="object-contain"
                                />

                                <div className="text-sm text-gray-700">
                                    <span className="font-bold">{uni.courses} Courses</span>
                                    <p className="text-gray-500 truncate w-32 mx-auto">
                                        {uni.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* BUTTON */}
                <div className="mt-16">
                    <button className="bg-black text-white px-8 py-3 rounded-lg hover:scale-95 transition">
                        View All Universities
                    </button>
                </div>

            </div>
        </section>
    );
}
