import { createI18n } from 'vue-i18n';
import id from './lang/id';
import en from './lang/en';
import zh from './lang/zh';
import hi from './lang/hi';
import ja from './lang/ja';
const savedLocale = localStorage.getItem('user-locale') || 'id';
const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: {
        id,
        en,
        zh,
        hi,
        ja,
    },
});

export default i18n;
