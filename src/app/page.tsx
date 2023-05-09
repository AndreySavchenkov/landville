import React from "react";
import { Info, Services } from "@/components";
import { Footer } from "@/components/Footer";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Info />
      <Services />
      <Footer />
    </main>
  );
}
