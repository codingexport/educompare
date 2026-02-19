"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/img/s1.webp",
        title: "Find Your Dream College",
        subtitle: "Compare top universities easily",
    },
    {
        id: 2,
        image: "/img/s2.webp",
        title: "Explore Programs",
        subtitle: "UG, PG & Professional Courses",
    },
    {
        id: 3,
        image: "/img/s3.webp",
        title: "AI Powered Guidance",
        subtitle: "Smart recommendations with EduVision AI",
    },
];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    // Auto slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">

            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[index].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src={slides[index].image}
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10">

                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 max-w-3xl">
                            {slides[index].title}
                        </h1>

                        <p className="text-sm sm:text-base md:text-xl max-w-xl">
                            {slides[index].subtitle}
                        </p>

                    </div>
                </motion.div>
            </AnimatePresence>

        </section>
    );

}
