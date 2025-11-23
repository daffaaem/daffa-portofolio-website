"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Certificate = () => {
  const t = useTranslations("certificates");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("");

  const certificates = [
    {
      title: "Bangkit Academy - Cloud Computing",
      issuer: "Dicoding Indonesia",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image18.png",
      credentialUrl: "https://www.linkedin.com/in/daffaaem/overlay/1736850367572/single-media-viewer/?profileId=ACoAAD3IfmgBTOsa7t2nxlOTQQ4UU0VBNWtLDSA",
    },
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Coursera",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image19.png",
      credentialUrl: "https://www.credly.com/badges/b97baffb-fef8-42b5-af02-70b55e851982/public_url",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image1.png",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQ1V26QXO1",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image2.png",
      credentialUrl: "https://www.dicoding.com/certificates/JLX17M0ONX72",
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image3.png",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQ1VKV7XO1",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image4.png",
      credentialUrl: "https://www.dicoding.com/certificates/81P2NEQWYXOY",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image5.png",
      credentialUrl: "https://www.dicoding.com/certificates/KEXLY7V5WZG2",
    },
    {
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image6.png",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZOY093RPG5",
    },
    {
      title: "Menjadi Google Cloud Engineer",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image7.png",
      credentialUrl: "https://www.dicoding.com/certificates/NVP743W5OPR0",
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image8.png",
      credentialUrl: "https://www.dicoding.com/certificates/81P2NEQWYXOY",
    },
    {
      title: "Belajar Penerapan Machine Learning dengan Google Cloud",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image9.png",
      credentialUrl: "https://www.dicoding.com/certificates/98XW57154PM3",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      date: "2024",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image10.png",
      credentialUrl: "https://www.dicoding.com/certificates/MRZMYROR0ZYQ",
    },
    {
      title: "Belajar Dasar Visulisasi Data",
      issuer: "Dicoding Indonesia",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image11.png",
      credentialUrl: "https://www.dicoding.com/certificates/81P2NEQWYXOY",
    },
    {
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      issuer: "Dicoding Indonesia",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image12.png",
      credentialUrl: "https://www.dicoding.com/certificates/QLZ932RO7Z5D",
    },
    {
      title: "Financial Literacy 101",
      issuer: "Dicoding Indonesia",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image13.png",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQENWW2PO1",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image14.png",
      credentialUrl: "https://www.dicoding.com/certificates/07Z630KWRZQR",
    },
    {
      title: "Cyber Security Dasar",
      issuer: "ID Networkers",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image15.png",
      credentialUrl: "https://lms.idn.id/cert-verification/?certificate_id=IDN-1741675880-13888-52097",
    },
    {
      title: "Cisco Dasar",
      issuer: "ID Networkers",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image16.png",
      credentialUrl: "https://lms.idn.id/cert-verification/?certificate_id=IDN-1741099149-184-52097",
    },
    {
      title: "Jaringan Dasar",
      issuer: "ID Networkers",
      date: "2025",
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/certificates/image17.png",
      credentialUrl: "https://lms.idn.id/cert-verification/?certificate_id=IDN-1741680381-180-52097",
    }
  ];

  const years = useMemo(() => {
    const ys = Array.from(new Set(certificates.map((c) => c.date)));
    return ys.sort((a, b) => Number(b) - Number(a));
  }, [certificates]);

  const issuers = useMemo(() => {
    return Array.from(new Set(certificates.map((c) => c.issuer))).sort();
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((c) => {
      const matchSearch = searchQuery.trim()
        ? c.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchYear = yearFilter ? c.date === yearFilter : true;
      const matchIssuer = issuerFilter ? c.issuer === issuerFilter : true;
      return matchSearch && matchYear && matchIssuer;
    });
  }, [certificates, searchQuery, yearFilter, issuerFilter]);

  useEffect(() => {
    setVisibleCount(6);
  }, [searchQuery, yearFilter, issuerFilter]);

  return (
    <section className="relative py-24 px-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
            🏆 {t("title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search")}
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          >
            <option value="">{t("allyear")}</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select
            value={issuerFilter}
            onChange={(e) => setIssuerFilter(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          >
            <option value="">{t("allpublisher")}</option>
            {issuers.map((iss) => (
              <option key={iss} value={iss}>{iss}</option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.length === 0 && (
            <div className="col-span-full text-center text-gray-400">{t("notfound")}</div>
          )}
          {filteredCertificates.slice(0, visibleCount).map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, rotateY: 5 }}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-500 transition-all duration-300 shadow-xl hover:shadow-yellow-500/30"
            >
              {/* Certificate ribbon */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Verified
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                {/* Certificate icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <svg className="w-20 h-20 text-yellow-500/30 group-hover:text-yellow-500/50 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <Image
                  src={cert.img}
                  alt={cert.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                />
              </div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                  {cert.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-300">{t("publisher")}</span> {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-300">{t("year")}</span> {cert.date}
                  </p>
                </div>
                <Link
                  href={cert.credentialUrl}
                  className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition group/link"
                >
                  <span>{t("credentials")}</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredCertificates.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredCertificates.length))}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
            >
              <span>{t("loadmore")}</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute -top-1 -right-1 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                +{filteredCertificates.length - visibleCount}
              </div>
            </button>
          </motion.div>
        )}

        {/* Show Less Button (when all certificates are visible) */}
        {visibleCount >= filteredCertificates.length && filteredCertificates.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setVisibleCount(6)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all border border-slate-600 hover:border-slate-500"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>{t("showless")}</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificate;