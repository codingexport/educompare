"use client";

import Image from "next/image";

const students = [
    "/img/ad.webp",
    "/img/c.webp",
    "/img/d.webp",
    "/img/ad.webp",
    "/img/c.webp",
    "/img/d.webp"

];

export default function AutoScrollStudents() {
    return (
        <section className="bg-[#0b1c2d] py-20 relative overflow-hidden">

            {/* Top Content */}
            <div className="text-center text-white mb-14">
                <h2 className="text-5xl font-bold text-cyan-400">10000+</h2>

                <div className="inline-block bg-blue-600 px-4 py-2 rounded-md mt-4">
                    Students ne Chuna
                </div>

                <p className="mt-6 italic text-gray-300">
                    Career ki strong shuruaat, sahi course aur sahi university ke saath!
                </p>

                <button className="mt-6 bg-white text-black px-6 py-2 rounded-md hover:scale-95 transition">
                    Apply Now
                </button>
            </div>
            {/* Gradient fade left */}
            <div className="absolute left-0 top-0 h-full w-20  from-gray-50 to-transparent z-10" />

            {/* Gradient fade right */}
            <div className="absolute right-0 top-0 h-full w-20  from-gray-50 to-transparent z-10" />

            {/* Scroll Container */}
            {/* Scroll Wrapper */}
            <div className="relative overflow-hidden">

                <div className="flex animate-scroll gap-12 w-max">

                    {[...students, ...students].map((img, index) => (
                        <div
                            key={index}
                            className="w-56 h-72 bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt="Student"
                                width={300}
                                height={400}
                                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

