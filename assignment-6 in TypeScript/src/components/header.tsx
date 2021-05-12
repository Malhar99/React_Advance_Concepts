import React from "react";
import { useI18n } from "../i18n";
const Header: React.FC = () => {
  const { t } = useI18n();
  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
};

export default Header;
