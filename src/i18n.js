import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/whatsapp.json';
import it from './locales/it/whatsapp.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { whatsapp: en },
            it: { whatsapp: it },
        },
        lng: 'en',              // lingua iniziale
        fallbackLng: 'en',
        ns: ['whatsapp'],       // nome namespace
        defaultNS: 'whatsapp',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;