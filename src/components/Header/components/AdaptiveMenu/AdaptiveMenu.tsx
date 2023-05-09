import React, { FC } from "react";
import Image from "next/image";

import { Navigation } from "@/components/Header/components";
import { Button } from "@/components/UI";
import { ButtonSizeEnum } from "@/components/UI/Button/Button";

import iconClose from "../../../../../public/iconClose.svg";

import styles from "./AdaptiveMenu.module.scss";

type AdaptiveMenuProps = {
  handleContactClick: () => void;
  closeMenu: () => void;
};

const AdaptiveMenu: FC<AdaptiveMenuProps> = ({
  handleContactClick,
  closeMenu,
}) => {
  return (
    <div className={styles.adaptiveMenu}>
      <Image
        className={styles.adaptiveMenu_closeIcon}
        onClick={closeMenu}
        src={iconClose}
        alt={"icon close"}
      />
      <Navigation />
      <Button
        onClick={handleContactClick}
        size={ButtonSizeEnum.MEDIUM}
        isFullWidth
      >
        Contact Us
      </Button>
    </div>
  );
};

export default AdaptiveMenu;
