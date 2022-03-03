import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { merge } from 'lodash-es';
import { initReactI18next } from 'react-i18next';

const resources: Resource = {};
const files = require.context('./locales', true, /^(?!.*\/_).*\.json$/);
files.keys().forEach(fileName => {
	const parts = fileName.split('/');
	const namespace = parts.pop()?.replace(/\.\w+$/, '');
	const language = parts.pop();
	if (namespace != null && language != null) {
		merge(resources, { [language]: { [namespace]: files(fileName) } });
	}
});

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		fallbackLng: 'en',
		defaultNS: 'common',
		interpolation: {
			escapeValue: false,
		},
	});
