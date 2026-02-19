import Navbar from "@/components/Navbar";
import { connectDB } from "@/lib/db";
import College from "@/models/College";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function CollegeDetails({ params }: Props) {
    const { id } = await params; // 🔥 THIS IS THE FIX

    await connectDB();

    const college = await College.findById(id);

    if (!college) {
        notFound();
    }

    const data = JSON.parse(JSON.stringify(college));

    return (
        <div>
            <Navbar />
            <div className="p-10">
                <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
                <p className="mb-2">Location: {data.location}</p>
                <p className="mb-2">Fees: {data.fees}</p>
                <p className="mt-4 text-gray-600">{data.description}</p>
            </div>
        </div>
    );
}
