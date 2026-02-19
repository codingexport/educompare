import Image from "next/image";

export default function AdmissionProcess() {
    return (
        <section className="py-16 bg-white from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                    Admission Process{" "}
                    <span className="text-blue-600 italic font-extrabold">
                        With Online Universities
                    </span>
                </h2>

                {/* Subheading */}
                <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                    Follow these simple steps to get admission in accredited universities
                    across India
                </p>

                {/* Image */}
                <div className="mt-12 flex justify-center">
                    <Image
                        src="/img/admissionProcess-ClbVfBrA.webp"
                        alt="Admission Process"
                        width={900}
                        height={500}
                        className="w-full max-w-5xl h-auto "
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
