"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Daffa Ammar Mahendra. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <Link href="https://www.linkedin.com/in/daffaaem/" target="_blank" className="hover:underline">LinkedIn</Link>
                    <Link href="https://www.instagram.com/daffaaem" target="_blank" className="hover:underline">Instagram</Link>
                    <Link href="https://www.dicoding.com/users/daffaaem/academies" target="_blank" className="hover:underline">Dicoding</Link>
                    <Link href="https://www.cloudskillsboost.google/public_profiles/8af92336-466a-49a2-972e-a68bf407639d" target="_blank" className="hover:underline">GCSB</Link>
                </div>
            </div>
        </footer>
    );
}