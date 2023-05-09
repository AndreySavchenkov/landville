"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AdaptiveMenu, Navigation } from "@/components/Header/components";
import { ContactUs } from "@/components";
import { ButtonSizeEnum } from "@/components/UI/Button/Button";
import { Button, ModalDefault } from "@/components/UI";

import useWindowSize from "@/hooks/useWindowSize";
import { useDisableScroll } from "@/hooks/useDisableScroll";
import { Adaptive } from "@/constants";

import logo from "../../../public/LandvilleGroup_logo.svg";
import iconMenu from "./../../../public/iconMenu.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const router = useRouter();

  useDisableScroll(isShowMenu);

  const { width } = useWindowSize();

  const handleContactClick = () => {
    setIsShowMenu(false);
    setIsShowModal(true);
  };

  const isTablet = width <= Adaptive.TABLET;
  const isCanShowMenu = isTablet && isShowMenu;

  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Image
          onClick={() => router.push("/")}
          src={logo}
          alt={"logo"}
          width={isTablet ? 211 : 265}
          height={30}
        />
        <div className={styles.innerContainer}>
          {isTablet ? (
            <Image
              className={styles.menu_iconMenu}
              onClick={() => setIsShowMenu(true)}
              src={iconMenu}
              alt={"icon menu"}
            />
          ) : (
            <>
              <Navigation />
              <Button onClick={handleContactClick} size={ButtonSizeEnum.MEDIUM}>
                Contact Us
              </Button>
            </>
          )}
          {isCanShowMenu && (
            <AdaptiveMenu
              handleContactClick={handleContactClick}
              closeMenu={() => setIsShowMenu(false)}
            />
          )}
        </div>
        <ModalDefault
          isOpen={isShowModal}
          setIsOpen={setIsShowModal}
          title="Contact Us"
        >
          <ContactUs />
        </ModalDefault>
      </div>
    </div>
  );
};

export default Header;
