import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",

    "/courses": {
      "pt-BR": "/cursos",
      en: "/courses",
    },

    "/courses/[slug]": {
      "pt-BR": "/cursos/[slug]",
      en: "/courses/[slug]",
    },

    "/courses/[slug]/[class]": {
      "pt-BR": "/cursos/[slug]/[class]",
      en: "/courses/[slug]/[class]",
    },
  },
});
