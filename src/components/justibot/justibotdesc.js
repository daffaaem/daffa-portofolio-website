"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function JustibotDesc() {
    const t = useTranslations("justibot");
    const [currentSlide, setCurrentSlide] = useState(0);
        
        const images = [
            {
                src: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot.png",
                alt: "Halaman Utama"
            },
            {
                src: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot1.png",
                alt: "Chatbot Hukum"
            },
            {
                src: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot4.png",
                alt: "Dokumen Hukum"
            },
            {
                src: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot2.png",
                alt: "Direktori Pengacara"
            },
            {
                src: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot3.png",
                alt: "Artikel Hukum"
            }
        ];
    
        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        };
    
        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        };
    
        const goToSlide = (index) => {
            setCurrentSlide(index);
        };
    return (
        <section className="relative py-28 px-6">
            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t("title")}
                    </h2>
                    <p className="text-xl text-gray-400">{t("subtitle")}</p>
                </motion.div>

                {/* Documentation Carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="relative group">
                        {/* Glow effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                        
                        {/* Carousel container */}
                                                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl border border-slate-700 group-hover:border-purple-500 transition-all duration-300 shadow-2xl">
                                                    <div className="relative overflow-hidden rounded-xl">
                                                        {/* Images */}
                                                        <div className="flex transition-transform duration-500 ease-in-out" 
                                                             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                                            {images.map((image, index) => (
                                                                <div key={index} className="w-full flex-shrink-0">
                                                                    <Image
                                                                        src={image.src}
                                                                        alt={image.alt}
                                                                        width={1200}
                                                                        height={600}
                                                                        className="rounded-xl w-full h-auto"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                        
                                                        {/* Navigation arrows */}
                                                        <button
                                                            onClick={prevSlide}
                                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
                                                            aria-label="Previous slide"
                                                        >
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={nextSlide}
                                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
                                                            aria-label="Next slide"
                                                        >
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                        
                                                        {/* Slide indicators */}
                                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                            {images.map((_, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => goToSlide(index)}
                                                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                                                        currentSlide === index 
                                                                            ? 'bg-white scale-110' 
                                                                            : 'bg-white/50 hover:bg-white/70'
                                                                    }`}
                                                                    aria-label={`Go to slide ${index + 1}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                    </div>
                </motion.div>

                {/* Description Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
                            {t("desctitle")}
                        </h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                {t("desc1")}
                            </p>
                            <p className="text-lg">
                                {t("desc2")}
                            </p>
                            <p className="text-lg">
                                {t("desc3")}
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
                            {t("featuretitle")}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">{t("feature1")}</h4>
                                    <p className="text-gray-400 text-sm">{t("feature1desc")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">{t("feature2")}</h4>
                                    <p className="text-gray-400 text-sm">{t("feature2desc")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">{t("feature3")}</h4>
                                    <p className="text-gray-400 text-sm">{t("feature3desc")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">{t("feature4")}</h4>
                                    <p className="text-gray-400 text-sm">{t("feature4desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/react.png" alt="React" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/tailwindcss.png" alt="TailwindCSS" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/nodejs.png" alt="NodeJS" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/expressjs.png" alt="ExpressJS" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/postgresql.png" alt="PostgreSQL" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                                <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                                    <img src="/assets/techstack/figma.png" alt="Figma" className="h-12 object-contain group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}