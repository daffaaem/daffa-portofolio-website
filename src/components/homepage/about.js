"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const t = useTranslations("about");

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // mulai saat 80% viewport
          toggleActions: "play none none reverse",
        },
      });

      // Text from left
      tl.from(textRef.current, {
        opacity: 0,
        x: -80,
        duration: 0.8,
        ease: "power3.out",
      });

      // Image from right
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          x: 80,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Social icons stagger
      tl.from(
        iconsRef.current,
        {
          opacity: 1,
          y: 20,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-28 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT TEXT */}
          <div ref={textRef} className="flex-1">
            <h2 className="py-4 text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("title")}
            </h2>

            <div className="space-y-4 text-justify">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t("greeting")}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                  Daffa Ammar Mahendra
                </span>
                , {t("description1")}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                {t("description2")}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                {t("description3")}
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.cloudskillsboost.google/public_profiles/8af92336-466a-49a2-972e-a68bf407639d",
                  src: "/assets/gcsb.jpeg",
                },
                {
                  href: "https://www.linkedin.com/in/daffaaem/",
                  src: "/assets/linkedin.png",
                },
                {
                  href: "https://www.instagram.com/daffaaem",
                  src: "/assets/instagram.png",
                },
                {
                  href: "https://www.dicoding.com/users/daffaaem/academies",
                  src: "/assets/dicoding.png",
                },
              ].map((icon, i) => (
                <div
                  key={i}
                  ref={(el) => (iconsRef.current[i] = el)}
                  className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl 
                  border border-slate-700 hover:border-purple-500 transition-all shadow-lg 
                  hover:shadow-purple-500/30 cursor-pointer"
                >
                  <Link href={icon.href} target="_blank">
                    <Image src={icon.src} width={32} height={32} alt="Social" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="flex-1 relative flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>

              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl border border-slate-700 shadow-2xl">
                <Image
                  src="/assets/foto_ktm.jpg"
                  alt="Daffa Ammar Mahendra"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
