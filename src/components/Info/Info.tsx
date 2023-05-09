import React from "react";

import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.info_title}>
        Welcome to Landville Group Holdings{" "}
      </h1>
      <p className={styles.info_subtitle}>
        Landville Group provides cutting-edge and results-driven tools and
        services for real estate professionals, enabling them to enhance and
        expand their brands.
      </p>
      <p className={styles.info_subtitle}>
        Additionally, we offer a comprehensive marketplace solution for buyers
        to discover exceptional vacant land deals online with ease.
      </p>
    </div>
  );
};

export default Info;
