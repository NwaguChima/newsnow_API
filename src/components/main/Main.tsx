import React from "react";
import { Card } from "./card/Card";
import styles from "./Main.module.scss";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <main className={styles.main}>
      <div className={styles.main__header}>
        <h2>Latest news</h2>
      </div>
      <div className={styles.main__container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
