"use client";

import { GraduationCap, BookOpen, Award, User } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
    { title: "Online MBA" },
    { title: "Online MCA" },
    { title: "Online MA" },
    { title: "Online M.Sc" },
    { title: "Online M.Com" },
    { title: "Distance MBA" },
    { title: "Distance MCA" },
    { title: "Distance MA" },
    { title: "Distance M.Sc" },
    { title: "Distance M.Com" },
];

export default function PGCoursesSection() {
    return (
        <section className="bg-gray-50 py-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                {/* LEFT SIDEBAR */}
                <div className="w-full lg:w-1/4 text-black bg-white rounded-2xl shadow-md p-6 space-y-5">
                    <div className="bg-blue-600 text-white p-5 rounded-xl">
                        <div className="flex items-center gap-3">
                            <GraduationCap size={20} />
                            <span className="font-semibold text-lg">PG Courses</span>
                        </div>
                        <p className="text-sm mt-2 opacity-90">After Graduation</p>
                    </div>

                    <SidebarItem icon={<BookOpen size={18} />} title="Executive Education" subtitle="For Working Professionals" />
                    <SidebarItem icon={<User size={18} />} title="UG Courses" subtitle="After 12th" />
                    <SidebarItem icon={<Award size={18} />} title="Doctorate" subtitle="Get Dr. Title (After UG + Work Ex)" />
                    <SidebarItem icon={<GraduationCap size={18} />} title="Certificate" subtitle="Get IIT degrees" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">

                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 220 }}
                            className="group relative bg-white rounded-3xl 
                 shadow-md hover:shadow-2xl 
                 transition-all duration-300 
                 overflow-hidden"
                        >
                            {/* Duration Badge */}
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 
                       bg-yellow-200 text-xs px-4 py-1 
                       rounded-full shadow-md font-medium">
                                2 Years
                            </span>

                            <div className="p-8 text-center space-y-6">

                                <motion.div
                                    whileHover={{ rotate: 12, scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-5xl text-orange-500"
                                >
                                    🎓
                                </motion.div>

                                <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                                    {course.title}
                                </h3>
                            </div>

                            {/* Bottom Button */}
                            <div className="absolute bottom-0 left-0 w-full">
                                <button
                                    className="w-full py-3 text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-blue-500
                     group-hover:from-blue-700 group-hover:to-blue-600
                     transition-all duration-300"
                                >
                                    Know More
                                </button>
                            </div>

                            {/* Extra spacing so content doesn't overlap button */}
                            <div className="h-12"></div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

function SidebarItem({ icon, title, subtitle }: any) {
    return (
        <div className="border rounded-xl p-4 hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3 font-medium">
                {icon}
                {title}
            </div>
            <p className="text-sm text-gray-500 mt-1 ml-7">
                {subtitle}
            </p>
        </div>
    );
}
