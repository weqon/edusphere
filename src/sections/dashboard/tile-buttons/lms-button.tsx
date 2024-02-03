import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TileButton } from "./tile-button";

const LmsButton: FC = () => {
  const { t } = useTranslation();
  return (
    <TileButton
      title=""
      text="Lernen"
      imgPath="/assets/iconly/iconly-glass-info.svg"
      href="/lms"
    />
  );
};

export default LmsButton;
