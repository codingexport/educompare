import { connectDB } from "@/lib/db";
import College from "@/models/College";
import Navbar from "@/components/Navbar";

export default async function ComparePage({
    searchParams,
}: {
    searchParams: Promise<{ c1?: string; c2?: string }>;
}) {
    await connectDB();

    const colleges = JSON.parse(
        JSON.stringify(await College.find())
    );

    // ✅ unwrap promise
    const { c1, c2 } = await searchParams;

    const college1 = c1 ? await College.findById(c1) : null;
    const college2 = c2 ? await College.findById(c2) : null;

    return (
        <div>
            <Navbar />

            <div className="p-10">
                <h1 className="text-3xl font-bold mb-6">
                    Compare Colleges
                </h1>

                <form className="flex text-white gap-4 mb-8">
                    <select name="c1" className="p-2 border rounded">
                        <option value="">Select College 1</option>
                        {colleges.map((college: any) => (
                            <option key={college._id} value={college._id}>
                                {college.name}
                            </option>
                        ))}
                    </select>

                    <select name="c2" className="p-2 border rounded">
                        <option value="">Select College 2</option>
                        {colleges.map((college: any) => (
                            <option key={college._id} value={college._id}>
                                {college.name}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Compare
                    </button>
                </form>

                {college1 && college2 && (
                    <div className="grid text-black grid-cols-3 gap-6 bg-white p-6 rounded shadow">
                        <div className="font-bold">Feature</div>
                        <div className="font-bold">{college1.name}</div>
                        <div className="font-bold">{college2.name}</div>

                        <div>Location</div>
                        <div>{college1.location}</div>
                        <div>{college2.location}</div>

                        <div>Fees</div>
                        <div>{college1.fees}</div>
                        <div>{college2.fees}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
