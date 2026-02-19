import { connectDB } from "@/lib/db";
import Course from "@/models/Course";

export async function GET() {
    await connectDB();

    await Course.deleteMany({});

    await Course.insertMany([
        { title: "Online MBA", duration: "2 Years", category: "PG", type: "Online" },
        { title: "Online MCA", duration: "2 Years", category: "PG", type: "Online" },
        { title: "Online MA", duration: "2 Years", category: "PG", type: "Online" },
        { title: "Online M.Sc", duration: "2 Years", category: "PG", type: "Online" },
        { title: "Online M.Com", duration: "2 Years", category: "PG", type: "Online" },
        { title: "Distance MBA", duration: "2 Years", category: "PG", type: "Distance" },
        { title: "Distance MCA", duration: "2 Years", category: "PG", type: "Distance" },
        { title: "Distance MA", duration: "2 Years", category: "PG", type: "Distance" },
        { title: "Distance M.Sc", duration: "2 Years", category: "PG", type: "Distance" },
        { title: "Distance M.Com", duration: "2 Years", category: "PG", type: "Distance" },
    ]);

    return Response.json({ message: "Courses Seeded Successfully ✅" });
}
