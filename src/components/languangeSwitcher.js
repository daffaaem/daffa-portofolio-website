"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { switchLocalePath } from "@/lib/locale";

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const nextLocale = locale === "id" ? "en" : "id";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={switchLocalePath(pathname, nextLocale)}
        className="
          px-5 py-3 
          rounded-full 
          backdrop-blur-md 
          bg-white/10 
          border border-white/20
          text-white 
          text-sm 
          shadow-xl
          hover:bg-white/20 
          hover:shadow-blue-500/40 
          transition-all 
          duration-300 
          flex items-center gap-2
        "
      >
        🌐 <span className="font-semibold">{nextLocale.toUpperCase()}</span>
      </Link>
    </div>
  );
}
