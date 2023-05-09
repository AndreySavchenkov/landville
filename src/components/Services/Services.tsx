import React from "react";

import { Card } from "@/components/Services/components";
import { mockServicesList } from "@/components/Services/mockServices";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>Our Services</h3>
        <p className={styles.subtitle}>
          Experience the advantages of partnering with our services and elevate
          your real estate journey
        </p>
      </div>
      <div className={styles.services}>
        {mockServicesList.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
