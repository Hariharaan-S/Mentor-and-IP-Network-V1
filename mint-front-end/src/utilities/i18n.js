import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import gu from "../transcripts/gu"
import en from "../transcripts/en"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: en,
        gu: gu,
    },
    fallbackLng: 'en', // Fallback language
    interpolation: {
        escapeValue: false,
    },
})