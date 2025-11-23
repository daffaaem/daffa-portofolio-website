"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CTA() {
    const t = useTranslations("cta");
    return (
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700 shadow-2xl"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
                💼 {t("greeting")}
              </span>
            </div>
            <h2 className="p-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <Link
                href="https://www.linkedin.com/in/daffaaem/"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                <span>{t("detail")}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link> */}

              <button
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/CV%20ATS%20DAFFA%20AMMAR%20MAHENDRA.pdf";
                  link.download = "CV%20ATS%20DAFFA%20AMMAR%20MAHENDRA.pdf";
                  link.click();
                }}
              >
                <span>{t("cv")}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    )
}
