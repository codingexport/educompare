"use client";

import Image from "next/image";

const logos = [
    "/img/jainUniversityOnline.webp",
    "/img/amityUniversityOnline.webp",
    "/img/jaipurManipalOnline.webp",
    "/img/nmimsOnline.webp",
    "/img/sikkimManipalOnline.webp",
    "/img/vguOnline.webp",
];

export default function LogoScroller() {
    return (
        <div className="w-full overflow-hidden bg-white py-0">

            <div className="relative">

                {/* Gradient fade left */}
                <div className="absolute left-0 top-0 h-full w-20  from-gray-50 to-transparent z-10" />

                {/* Gradient fade right */}
                <div className="absolute right-0 top-0 h-full w-20  from-gray-50 to-transparent z-10" />

                <div className="flex animate-scroll gap-10 w-max">

                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] shadow-2xl px-2 py-2 flex items-center justify-center min-w-[220px]"
                        >
                            <Image
                                src={logo}
                                alt="University"
                                width={140}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );
}
