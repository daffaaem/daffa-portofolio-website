"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  // Refs for animation
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);

  const certsLeft = [
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image1.png",
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image15.png",
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image3.png",
  ];
  const certsRight = [
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image17.png",
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image18.png",
    "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image13.png",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: "power3.out" });

      tl.from(photoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
      })
        .from(
          nameRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          badgeRef.current,
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-16 relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white w-screen"
    >
      <OrbitGroup images={certsLeft} side="left" />
      <OrbitGroup images={certsRight} side="right" />

      <div className="z-10 flex flex-col items-center text-center px-6">
        {/* Foto */}
        <div
          ref={photoRef}
          className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
          <Image
            src="/assets/image_profile.jpeg"
            alt="Foto Daffa"
            width={384}
            height={384}
            className="object-cover relative z-10"
          />
        </div>

        {/* Nama */}
        <h1
          ref={nameRef}
          className="text-5xl md:text-6xl font-extrabold mt-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Daffa Ammar Mahendra
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {t("subtitle")}
        </p>

        {/* Badge */}
        <div ref={badgeRef} className="mt-6">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
            ✨ {t("opportunity")}
          </span>
        </div>
      </div>
    </section>
  );
}

function OrbitGroup({ images, side }) {
  return (
    <div
      className={`absolute ${
        side === "left" ? "left-[22%]" : "right-[22%]"
      } top-[40%] -translate-y-1/2`}
    >
      {images.map((src, i) => (
        <OrbitCard key={i} src={src} index={i} side={side} total={images.length} />
      ))}
    </div>
  );
}

function OrbitCard({ src, side, index, total }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const radius = 200;
    const offsetX = side === "left" ? -450 : 200;
    const speed = side === "left" ? 0.6 : -0.6;

    const initialAngle = (index / total) * Math.PI * 2;

    // GSAP ticker animation
    gsap.ticker.add(() => {
      const t = gsap.ticker.time * speed;
      const angle = initialAngle + t;

      const x = Math.cos(angle) * radius + offsetX;
      const y = Math.sin(angle) * radius;

      gsap.set(el, { x, y });
    });

    return () => gsap.ticker.remove(() => {});
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-1/2 left-1/2 w-72 h-44 flex items-center justify-center"
    >
      <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <Image
          src={src}
          alt="certificate"
          width={280}
          height={170}
          className="rounded-2xl object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 relative z-10"
        />
      </div>
    </div>
  );
}
