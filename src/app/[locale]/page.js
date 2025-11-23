"use client";
import Hero from "@/components/homepage/hero";
import About from "@/components/homepage/about";
import Skills from "@/components/homepage/skills";
import Achievements from "@/components/homepage/achievements";
import CTA from "@/components/homepage/cta";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  
  return (
    <main id="home" className="text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full">
        < Hero />
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        < About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full">
        < Skills />
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="w-full">
        <Achievements />
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full">
        <CTA />
      </section>
    </main>
  );
}
