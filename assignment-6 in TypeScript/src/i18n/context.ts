// @flow

import { createContext } from "react";

export const initialState = {
  langCode: "en",
  t: (key: string) => key,
  setLanguage: () => {},
  languages: [""],
  translations: {},
};

interface State {
  langCode: string;
  t: (key: string) => string;
  setLanguage: (code: string) => void;
  languages: string[];
  translations: any;
}

export const I18nContext = createContext<State>(initialState);
