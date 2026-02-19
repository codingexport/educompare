"use client";

import { GraduationCap, Building2, IndianRupee, Users } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function NotableMoments() {
    const stats = [
        {
            icon: <GraduationCap size={28} />,
            value: 10000,
            suffix: "+",
            label: "Admissions Done",
        },
        {
            icon: <Building2 size={28} />,
            value: 150,
            suffix: "+",
            label: "Academic Partners",
        },
        {
            icon: <IndianRupee size={28} />,
            value: 8,
            suffix: " Lakh",
            label: "Highest Salary Package",
        },
        {
            icon: <Users size={28} />,
            value: 8000,
            suffix: "+",
            label: "Alumni Network",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-14">
                    Our{" "}
                    <span className="text-blue-600 italic font-extrabold">
                        Notable Moments
                    </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl">
                                {item.icon}
                            </div>

                            <h3 className="text-3xl font-bold text-gray-800">
                                <CountUp
                                    end={item.value}
                                    duration={2}
                                    separator=","
                                />
                                {item.suffix}
                            </h3>

                            <p className="text-gray-600 font-medium text-sm md:text-base">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
