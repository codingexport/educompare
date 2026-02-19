"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, Minus } from "lucide-react";

const faqs = [
    {
        question:
            "Why should I use Compare Vidya to find an online or distance learning program?",
        answer:
            "Compare Vidya helps students explore and compare UGC-approved online and distance universities in one place. With detailed insights on courses, fees, eligibility, and placement, students save time and choose the best program that matches their career goals.",
    },
    {
        question:
            "Are the universities listed on Compare Vidya authentic and government-approved?",
        answer:
            "Yes, all universities listed are UGC-approved and verified for credibility.",
    },
    {
        question:
            "Can I compare fees and placements of different online universities on Compare Vidya?",
        answer:
            "Absolutely. You can compare fees, placements, faculty, and other key factors easily.",
    },
    {
        question: "How are degree programs at VGU Online delivered?",
        answer:
            "Programs are delivered through modern LMS platforms with live + recorded lectures.",
    },
    {
        question:
            "Does Compare Vidya provide career counselling or admission support?",
        answer:
            "Yes, we provide expert counselling and complete admission support.",
    },
    {
        question: "How much does it cost to use Compare Vidya?",
        answer: "It is completely free for students.",
    },
    {
        question:
            "Can Compare Vidya help me choose the best online course for my career?",
        answer:
            "Yes, our experts guide you based on your interests and career goals.",
    },
];

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    return (
        <section className="py-16 text-black bg-gray-50 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    <span className="text-blue-600 italic">Confused?</span> Let’s Sort It Out!
                </h2>

                {/* FAQ List */}
                <div className="space-y-6">

                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4">

                            {/* Question */}
                            <button
                                onClick={() =>
                                    setActive(active === index ? null : index)
                                }
                                className="w-full flex justify-between items-start gap-4 text-left"
                            >
                                <div className="flex gap-3 items-start">
                                    <Star
                                        className="text-yellow-500 mt-1"
                                        size={18}
                                        fill="#facc15"
                                    />
                                    <h3 className="text-lg md:text-xl font-medium text-gray-800">
                                        {faq.question}
                                    </h3>
                                </div>

                                {active === index ? (
                                    <Minus className="text-gray-600" size={20} />
                                ) : (
                                    <Plus className="text-gray-600" size={20} />
                                )}
                            </button>

                            {/* Animated Answer */}
                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 mt-4 ml-7 leading-7">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
