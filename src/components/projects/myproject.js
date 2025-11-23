"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const MyProject = () => {
  const t = useTranslations("projects");
  const projects = [
    {
      title: "UMKM Wonorejo",
      desc: t("umkmwonorejodesc"),
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/umkmwonorejo.png",
      tech: ["CodeIgniter", "MySql", "TailwindCSS"],
      link: "umkmwonorejo",
    },
    {
      title: "GoDive",
      desc: t("godivedesc"),
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/godive.png",
      tech: ["Google Cloud", "Firebase", "Node.js", "Express", "Flask", "Restful API"],
      link: "godive",
    },
    {
      title: "JustiBot",
      desc: t("justibotdesc"),
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/justibot.png",
      tech: ["React", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Figma"],
      link: "justibot",
    },
    {
      title: "Antarkita",
      desc: t("antarkitadesc"),
      img: "https://toymskelmxthrqhijkel.supabase.co/storage/v1/object/public/project/antarkita.png",
      tech: ["Figma", "UI / UX"],
      link: "antarkita",
    }
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="py-2 text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            📂 {t("title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/50"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition group/link"
                >
                  <span>{t("detail")}</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;