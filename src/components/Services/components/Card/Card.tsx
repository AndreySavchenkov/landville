"use client";

import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import arrowRight from "../../../../../public/arrow-right.svg";

import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  text: string;
  imageUrl: StaticImageData;
};

const Card: FC<CardProps> = ({ title, text, imageUrl }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.card_image} src={imageUrl} alt={"service"} />
      <div className={styles.card_info}>
        <span className={styles.card_info_title}>{title}</span>
        <span className={styles.card_info_text}>{text}</span>
        <div className={styles.card_info_button}>
          <span>Explore More</span>
          <Image src={arrowRight} alt={"arrow icon"} />
          <div className={styles.card_info_button_line} />
        </div>
      </div>
    </div>
  );
};

export default Card;
