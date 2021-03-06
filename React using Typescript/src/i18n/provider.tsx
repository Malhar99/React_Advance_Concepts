import React, { useReducer, useEffect } from "react";
import { I18nContext, initialState } from "./context";

interface State {
  langCode: string;
  t: (key: string) => string;
  setLanguage: (code: string) => void;
  languages: string[];
  translations: any;
}

interface InitialiseAction {
  type: "initialise";
  payload: any;
}

interface SetLangaugeAction {
  type: "setLanguage";
  payload: string;
}

type Action = InitialiseAction | SetLangaugeAction;

const getTranslate = (translations: any) => {
  return (key: string) => {
    let translation = translations[key] || key;
    return translation;
  };
};
interface Props {
  languages: any;
}
export const I18nContextProvider: React.FC<Props> = ({
  languages,
  children,
}) => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "initialise": {
        const translations = action.payload.languages.reduce(
          (acc: any, language: any) => ({
            ...acc,
            [language.langCode]: language.translations,
          }),
          {}
        );

        const langs = action.payload.languages.map(
          (lang: { langCode: any; subTag: any }) => ({
            langCode: lang.langCode,
            subTag: lang.subTag,
          })
        );

        return {
          ...state,
          langCode: action.payload.activeLanguage,
          t: getTranslate(translations[state.langCode]),
          translations,
          languages: langs,
        };
      }

      case "setLanguage":
        return {
          ...state,
          langCode: action.payload,
          t: getTranslate(state.translations[action.payload]),
        };

      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLanguage = (code: string) =>
    dispatch({
      type: "setLanguage",
      payload: code,
    });

  /* Store the initLang in the context */
  useEffect(() => {
    async function initialise() {
      await dispatch({
        type: "initialise",
        payload: languages,
      });
    }
    initialise();
  }, [languages]);

  return (
    <I18nContext.Provider value={{ ...state, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
