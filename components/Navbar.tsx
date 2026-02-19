"use client";

import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            rotateX: -90,
            opacity: 0,
            y: -10,
        },
        show: {
            rotateX: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <nav className="bg-white shadow-sm px-6 py-2 flex items-center justify-between">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">
                    <a href="/"> <Image src="/img/logo.svg" alt="Logo" width={140} height={30} />
                    </a>
                    {/* Desktop Tagline */}
                    <p className="hidden lg:flex text-gray-600 items-center gap-5 whitespace-nowrap">
                        #ChunoBehtarBanoBehtar
                    </p>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-5 whitespace-nowrap">

                    <a href="/colleges" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 hover:scale-95">
                        colleges
                    </a>

                    <a href="/compare" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 hover:scale-95">
                        Compare Universities
                    </a>

                    <a href="/programs" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 hover:scale-95">
                        explore Programs
                    </a>

                    <a
                        href="/ai"
                        className="flex items-center gap-2 px-5 py-2 rounded-full
             from-orange-100 to-purple-100
            text-sm font-medium text-gray-700
            hover:scale-105 transition-all duration-300"
                    >
                        ⚡ AI-Powered 🤖 EduVision AI
                    </a>

                    <a href="/admin" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 hover:scale-95">
                        Apply Now
                    </a>
                </div>

                {/* MOBILE ICONS */}
                <div className="md:hidden flex items-center gap-4">
                    <Search size={22} className="text-black" />
                    <button onClick={() => setOpen(true)}>
                        <Menu size={26} className="text-black" />
                    </button>
                </div>

            </nav>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}

            {/* SIDE DRAWER */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: open ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 120 }}
                className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6"
            >
                <div className="flex justify-between mb-6">
                    <h2 className="font-semibold text-lg">Menu</h2>
                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Animated Buttons */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-4"
                    style={{ perspective: 1000 }}
                >
                    {[
                        { name: "Blogs", link: "/blogs" },
                        { name: "Explore Program", link: "/programs" },
                        { name: "Compare Universities", link: "/compare" },
                        { name: "Apply Now", link: "/admin" },
                    ].map((itemData, index) => (
                        <motion.a
                            key={index}
                            href={itemData.link}
                            variants={item}
                            className="bg-black text-white px-4 py-2 rounded-lg text-center hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300"
                        >
                            {itemData.name}
                        </motion.a>
                    ))}

                    {/* AI Pill with Flip */}
                    <motion.a
                        href="/ai"
                        variants={item}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full
              from-orange-100 to-purple-100
              text-sm font-medium text-gray-700"
                    >
                        ⚡ AI-Powered 🤖 EduVision AI
                    </motion.a>
                </motion.div>
            </motion.div>
        </>
    );
}
