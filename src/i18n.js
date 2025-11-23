import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Jika locale tidak ada → fallback
  const supported = ["id", "en"];
  const finalLocale = supported.includes(locale) ? locale : "id";

  return {
    locale: finalLocale,
    messages: (
      await import(`@/messages/${finalLocale}.json`)
    ).default
  };
});
