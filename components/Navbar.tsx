export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-700">
                EduCompare
            </h1>

            <div className="space-x-6 text-gray-700">
                <a href="/" className="hover:text-blue-600">Home</a>
                <a href="/colleges" className="hover:text-blue-600">Colleges</a>
                <a href="/compare" className="hover:text-blue-600">Compare</a>
                <a href="/admin" className="hover:text-blue-600">Admin</a>
            </div>
        </nav>
    );
}
