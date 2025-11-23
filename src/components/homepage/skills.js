"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");
  const skills = [
    { src: "/assets/techstack/bootstrap.png", alt: "Bootstrap", category: "Frontend" },
    { src: "/assets/techstack/nextjs.png", alt: "Next.js", category: "Frontend" },
    { src: "/assets/techstack/react.png", alt: "React", category: "Frontend" },
    { src: "/assets/techstack/tailwindcss.png", alt: "Tailwind CSS", category: "Frontend" },
    { src: "/assets/techstack/nodejs.png", alt: "Node.js", category: "Backend" },
    { src: "/assets/techstack/expressjs.png", alt: "Express.js", category: "Backend" },
    { src: "/assets/techstack/codeigniter.png", alt: "CodeIgniter", category: "Backend" },
    { src: "/assets/techstack/postman.png", alt: "Postman", category: "Tools" },
    { src: "/assets/techstack/postgresql.png", alt: "PostgreSQL", category: "Database" },
    { src: "/assets/techstack/mysql.png", alt: "MySQL", category: "Database" },
    { src: "/assets/techstack/firebase.png", alt: "Firebase", category: "Cloud" },
    { src: "/assets/techstack/gcp.png", alt: "Google Cloud Platform", category: "Cloud" },
  ];

  return (
    <section className="min-h-screen relative pt-10 pb-23 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            {/* <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold rounded-full backdrop-blur-sm">
              💻 Tech Stack
            </span> */}
          </motion.div>
          
          <h2 className="py-2 text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid responsif */}
        <div className="mx-auto max-w-5xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
              
              {/* Card */}
              <div className="relative w-24 h-24 flex items-center justify-center bg-white border-2 border-slate-300 group-hover:border-purple-500 shadow-xl rounded-2xl transition-all duration-200 p-4">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={56}
                  height={56}
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>

              {/* Tooltip - Category badge */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              12+
            </div>
            <div className="text-gray-400 text-sm">{t("tech")}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-400 text-sm">{t("project")}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-400 text-sm">{t("year")}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              40+
            </div>
            <div className="text-gray-400 text-sm">{t("cert")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
