import Navbar from "@/components/Navbar";
import { connectDB } from "@/lib/db";
import College from "@/models/College";

export default async function Page() {
    await connectDB();

    const colleges = JSON.parse(
        JSON.stringify(await College.find())
    );

    return (
        <div>
            <Navbar />

            <div className="p-10 text-gray-600 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Top Colleges
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {colleges.map((college: any) => (
                        <div
                            key={college._id.toString()}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {college.name}
                            </h2>
                            <p>Location: {college.location}</p>
                            <p>Fees: {college.fees}</p>

                            <a
                                href={`/colleges/${college._id.toString()}`}
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                View Details
                            </a>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
