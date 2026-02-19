import { connectDB } from "@/lib/db";
import College from "@/models/College";

export async function GET() {
    try {
        await connectDB();

        await College.deleteMany({});

        await College.insertMany([
            {
                name: "IIT Delhi",
                location: "Delhi",
                fees: "₹2,00,000",
                description: "Top engineering college in India",
            },
            {
                name: "Mumbai University",
                location: "Mumbai",
                fees: "₹1,50,000",
                description: "One of the best universities in Maharashtra",
            },
            {
                name: "Delhi University",
                location: "Delhi",
                fees: "₹1,20,000",
                description: "Famous central university",
            },
        ]);

        return Response.json({ message: "Database Seeded Successfully ✅" });
    } catch (error) {
        return Response.json({ error: "Seeding Failed ❌" });
    }
}
