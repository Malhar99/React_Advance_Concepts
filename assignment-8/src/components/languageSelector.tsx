import React, { useEffect } from "react";
import { useI18n } from "../i18n";

const LanguageSelector: React.FC = () => {
  const { setLanguage } = useI18n();
  useEffect(() => {
    setLanguage("en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
  };
  return (
    <>
      <select className="select" onChange={handleSetLanguage}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="nl">Dutch</option>
      </select>
    </>
  );
};

export default LanguageSelector;
