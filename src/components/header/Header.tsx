import React, { useEffect } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  useEffect(() => {
    document.title = "NewsOnline - Home";
  }, []);

  return (
    <header className={styles.header}>
      <h1>NewsOnline</h1>
    </header>
  );
};
