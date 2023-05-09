"use client";

import React, { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import { useDisableScroll } from "@/hooks/useDisableScroll";
import useWindowSize from "@/hooks/useWindowSize";

import iconClose from "../../../../public/iconClose.svg";

import styles from "./ModalDefault.module.scss";

type ModalDefaultProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  title?: string;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    border: "none",
    transform: "translate(-50%, -40%)",
    borderRadius: "12px",
  },
};

const phoneStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  content: {
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
  },
};

const ModalDefault: FC<ModalDefaultProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  const [isPhone, setIsPhone] = useState(false);

  const { width } = useWindowSize();
  useDisableScroll(isOpen);

  useEffect(() => {
    if (width <= 768) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [width]);

  return (
    <Modal style={isPhone ? phoneStyles : customStyles} isOpen={isOpen}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.header_title}>{title}</h2>
          <Image
            className={styles.header_closeIcon}
            onClick={() => setIsOpen(false)}
            src={iconClose}
            alt={"icon close"}
          />
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalDefault;
