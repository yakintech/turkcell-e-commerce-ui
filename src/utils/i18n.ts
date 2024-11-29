import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enUS } from "./enUS";
import { trTR } from "./trTR";


let language = localStorage.getItem("lng") || "en"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enUS
            },
            tr: {
                translation: trTR
            }
        },
        lng: language,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });
