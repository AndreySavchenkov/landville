"use client";

import React, { useEffect, useState } from "react";

import { Button, ModalDefault } from "@/components/UI";
import { ContactUs } from "@/components";
import useWindowSize from "@/hooks/useWindowSize";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [width]);

  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h1 className={styles.info_title}>Partner With Us and Thrive</h1>
        <p className={styles.info_subtitle}>
          Join us to supercharge your real estate endeavors and achieve
          remarkable outcomes!
        </p>
      </div>
      <Button onClick={() => setIsShowModal(true)} isFullWidth={isPhone}>
        Contact Us
      </Button>
      <ModalDefault
        isOpen={isShowModal}
        setIsOpen={setIsShowModal}
        title="Contact Us"
      >
        <ContactUs />
      </ModalDefault>
    </div>
  );
};

export default Footer;
