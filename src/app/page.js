

import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-yellow-400 to-orange-600">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h1 className="text-xl text-white font-bold mb-4">Browse Our user collections</h1>
                <Link href="/user-management" className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded">
                Explore User manager

                </Link>
            </div>
        </div>
    );
}
