import {I18n} from 'i18n';

const i18n = new I18n();

i18n.configure({
    locales: ['en', 'zh', 'es'],
    defaultLocale: 'en',
    register: global,
    // directory: path.join(__dirname, '/../locales')
});

export default i18n;

export {i18n};