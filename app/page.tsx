import Navbar from "../components/Navbar";
import { connectDB } from "../lib/db";

export default async function Home() {
  await connectDB();
  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Compare Top Colleges in India
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Find fees, ratings & courses easily
        </p>

        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search colleges..."
            className="flex-1 text-black p-3 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>
    </div>
  );
}
