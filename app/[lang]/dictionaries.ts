import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  fa: () => import("./dictionaries/fa").then((module) => module.default),
};

export const useDictionary = async (locale: keyof typeof dictionaries) => {
  return await dictionaries[locale]();
};
