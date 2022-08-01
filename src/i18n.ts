import en from './Language/en.json'
import pt from './Language/pt.json'
import { initReactI18next } from 'react-i18next'
import i18n  from 'i18next'

const resources = {
    en: {
        translation:en
    },
    pt: {
        translation:pt
    },
};

i18n
.use(initReactI18next)
.init({resources,
     lng: JSON.parse(localStorage.getItem('language') as string),
     fallbackLng:'pt'})

export default i18n;