import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const Language = {
  EN: 'en',
  RS: 'rs',
} as const;

export const resources = {
  [Language.EN]: {},
  [Language.RS]: {},
};

// Must be exported and used
// or else the bundler will ignore it.
export const i18nextInitialization = i18next.use(initReactI18next).init({
  lng: Language.EN,
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
