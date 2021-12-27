import {I18n} from 'i18n';
import path from 'path';

export const i18n = new I18n();

i18n.configure({
    locales: ['en', 'zh', 'es'],
    directory: path.join(__dirname, '/../locales')
});

export default i18n;
