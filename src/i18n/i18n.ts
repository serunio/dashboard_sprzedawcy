import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import {pl} from './pl/pl.ts'
import {en} from './en/en.ts'

await i18n.use(initReactI18next).init({
  lng: "pl",
  fallbackLng: "pl",
  ns: ["common", "orders", "tips", "reviews", "sellerQuality", "productsRanking"],
  defaultNS: "common",
  resources: {
    pl: pl,
    en: en,
  },
})

export default i18n