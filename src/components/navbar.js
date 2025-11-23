"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navbar");

  const handleScrollTo = (id) => {
  const locale = pathname.split("/")[1] || "id";

  // Jika bukan di halaman utama, redirect ke halaman utama locale tersebut
  if (pathname !== `/${locale}`) {
    router.push(`/${locale}/#${id}`);
    return;
  }

  // Jika sudah di halaman utama, langsung scroll
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }
};

  useEffect(() => {
  const locale = pathname.split("/")[1] || "id";
  if (pathname === `/${locale}`) {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }
}, [pathname]);


  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 p-4 backdrop-blur-md shadow-xl rounded-b-3xl">
          {[
            { label: t("home"), id: "home" },
            { label: t("about"), id: "about" },
            { label: t("skills"), id: "skills" },
            { label: t("achievements"), id: "achievements"},
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="px-4 py-2 text-lg text-gray-200 hover:text-blue-400 transition cursor-pointer relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile button */}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-white focus:outline-none transition-all duration-300 
             absolute right-4 top-4 z-50 p-2 rounded-lg hover:bg-white/10 active:scale-95"
>
  {isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition-transform duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>


        {/* Mobile Menu */}
        <div
          className={`flex-col md:hidden
            absolute top-full left-0 right-0 
            bg-black/90 border-t border-white/10
            w-full transition-all duration-500 ease-out transform
            ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
          `}
        >
          <div className="py-4 px-6 space-y-2">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Achievements", id: "achievements"},
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="block w-full text-left px-4 py-3 text-lg text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animationDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
