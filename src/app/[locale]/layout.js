import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LanguageSwitcher from "@/components/languangeSwitcher";
import SmoothScroll from "@/components/smoothScroll";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Cek apakah locale tersedia
  const supportedLocales = ["id", "en"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  // Load file messages berdasarkan locale
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Message loading error:", error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-slate-900 text-white overflow-x-hidden">
        <SmoothScroll />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
            {children}
          <Footer />
          <LanguageSwitcher locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
