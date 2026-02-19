"use client";

import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0b1b35] text-gray-300 pt-16 pb-6 px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* LEFT SECTION */}
                <div className="space-y-6">
                    <Image
                        src="/img/logo.svg"
                        alt="Compare Vidya"
                        width={150}
                        height={40}
                    />

                    <h3 className="text-white font-semibold text-lg">
                        GET THE RIGHT GUIDANCE WITH US
                    </h3>

                    <div>
                        <h4 className="text-white font-semibold mb-2">Download the App</h4>
                        <p className="text-sm mb-3">Coming soon on Play Store</p>

                        <button className="bg-black px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-green-500 text-lg">G</span>
                            <span className="text-sm">Get it on Google Play</span>
                        </button>
                    </div>
                </div>

                {/* COURSE LINKS */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Distance</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Distance MBA</li>
                        <li>Distance MCA</li>
                        <li>Distance M.A.</li>
                        <li>Distance M.Sc.</li>
                        <li>Distance M.Com.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">UG</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Online BA</li>
                        <li>Online BBA</li>
                        <li>Online BCA</li>
                        <li>Online B.Sc</li>
                        <li>Online B.Com</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">PG</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Online MBA</li>
                        <li>Online MCA</li>
                        <li>Online M.A.</li>
                        <li>Online M.Sc.</li>
                        <li>Online M.Com</li>
                    </ul>
                </div>

            </div>

            {/* ABOUT + CONTACT */}
            <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="text-sm leading-7 text-gray-400">
                    <p>
                        India has a net of <span className="text-white font-semibold">9.6 million students</span> enrolling in online education.
                        Compare Vidya bridges this gap.
                    </p>

                    <p className="mt-4">
                        As <span className="text-white font-semibold">India’s first online education platform</span>,
                        we provide unbiased, transparent information.
                    </p>

                    <p className="mt-4">
                        Our platform features a comparison tool evaluating universities
                        based on <span className="text-white font-semibold">E-learning systems, EMI options, faculty quality, and fees.</span>
                    </p>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>

                    <p className="mb-4">info@comparevidya.com</p>

                    <div className="flex gap-4 mb-6">
                        <Linkedin size={20} />
                        <Instagram size={20} />
                        <Facebook size={20} />
                    </div>

                    <div className="bg-[#0f2347] border border-blue-500 rounded-xl p-4 w-fit">
                        <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
                            No-cost call
                        </span>
                        <p className="text-white text-lg font-semibold mt-2">
                            954-037-3222
                        </p>
                    </div>
                </div>
            </div>

            {/* BOTTOM LINKS */}
            <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
                <div className="flex flex-wrap justify-center gap-6 mb-3">
                    <a href="#">Disclaimer</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Refund Policy</a>
                    <a href="#">Our Policy</a>
                </div>

                <p>© 2024 Compare Vidya. All Rights Reserved.</p>
            </div>

        </footer>
    );
}
