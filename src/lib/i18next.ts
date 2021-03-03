import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '../translations'

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n

// Sources
// https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5
// https://react.i18next.com/getting-started
