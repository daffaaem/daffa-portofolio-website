"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MyProject from "@/components/projects/myproject";

const Achievements = () => {

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              ✨ Portfolio Showcase
            </span>
          </motion.div>
          <h1 className="py-2 text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Proyek & Sertifikat
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Kumpulan karya terbaik dan pencapaian profesional yang telah saya raih
          </p>
        </motion.div>
      </section> */}

      {/* Projects Section */}
      <MyProject />
    </div>
  );
};

export default Achievements;
