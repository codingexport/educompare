"use client";

import { Headphones, Users, LayoutDashboard } from "lucide-react";

export default function WhyTrustSection() {
    const features = [
        {
            icon: <LayoutDashboard size={28} />,
            title: "All-in-One Application Platform",
            desc: "Compare Vidya simplifies college applications with one single form that lets you apply to 100+ colleges, plus access to a scholarship database and loan guidance—all centralized in one platform.",
        },
        {
            icon: <Headphones size={28} />,
            title: "24/7 Support",
            desc: "Compare Vidya offers round-the-clock tech support, online mentoring, and tutoring to assist you at any time.",
        },
        {
            icon: <Users size={28} />,
            title: "Expert Guidance",
            desc: "Their experienced mentors provide personalized career and education guidance, helping you assess academic options, finances, and align your goals through virtual consultations and customized strategy sessions.",
        },
    ];

    return (
        <section className="bg-gray-50 text-black py-20 px-6 md:px-16">

            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Why{" "}
                    <span className="text-blue-600 italic">
                        Students Trust
                    </span>{" "}
                    Us
                </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                        {/* Corner Borders */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black rounded-tr-3xl" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-600 rounded-bl-3xl" />

                        {/* Icon */}
                        <div className="mb-6 text-blue-600 group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-4">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}
