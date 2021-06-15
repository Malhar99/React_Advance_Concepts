import React from "react";
import { useI18n } from '../i18n';
function Header(props) {
  const { t } = useI18n()
  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
}

export default Header;
