"use client";

import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

const experts = [
    { name: "Palak", img: "/img/palak.webp" },
    { name: "Harshita", img: "/img/harshita.webp" },
    { name: "Rashmi", img: "/img/rashmi.webp" },
    { name: "Rishita", img: "/img/rishita.webp" },
    { name: "Abhishek", img: "/img/abhishek.webp" },
];

const stats = [
    { label: "Student Satisfaction", value: 97 },
    { label: "Enrollment Growth", value: 81 },
    { label: "Graduates Who Recommend Us", value: 90 },
    { label: "Application Accuracy", value: 92 },
];

export default function ExpertsAndStatsSection() {
    return (
        <section className="bg-white text-black py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* ================= TALK TO OUR EXPERTS ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Talk to Our Experts
                        </h2>

                        <div className="bg-gray-100 rounded-xl p-6 space-y-4 text-gray-800">
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <span><b>New Student:</b> +91 95403 73222</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <span><b>Existing Student:</b> +91 95403 73222</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <span><b>Email:</b> info@comparevidya.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} />
                                <span><b>Connect Us:</b> (10 AM to 7 PM)</span>
                            </div>
                        </div>

                        <p className="mt-6 font-semibold">Need answers? Call us!</p>
                        <p className="text-gray-600 mb-6">
                            Our team of experts are available for you round the clock
                        </p>

                        <button className="bg-black text-white px-6 py-3 rounded-lg hover:scale-95 transition">
                            Book Your 30 Mins Expert Career Advice →
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-3 gap-10 place-items-center">
                        {experts.map((e, i) => (
                            <div key={i} className="text-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg mb-2">
                                    <Image
                                        src={e.img}
                                        alt={e.name}
                                        width={120}
                                        height={120}
                                        className="object-cover"
                                    />
                                </div>
                                <p className="font-medium">{e.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= SHAPING BRIGHT FUTURES ================= */}
                <div className="text-center space-y-12">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                            Shaping{" "}
                            <span className="text-blue-600 italic">
                                Bright Futures with Expert Guidance
                            </span>
                            , for Education and Career Success
                        </h2>

                        <button className="mt-8 border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                            More About us →
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2 font-semibold">
                                    <span>{s.label}</span>
                                    <span>{s.value}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                                        style={{ width: `${s.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
