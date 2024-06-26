import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/locial/i18n/{{ns}}/{{lng}}.json"
        },
        fallbackLng: 'en',
        debug: false,

        ns: ["common", "home", "profile"],

        interpolation: {
            espaceValue: false,
            formatSeparator: ",",
        },
        react: {
            wait: true,
        },
    })

export default i18n;