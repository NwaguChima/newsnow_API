import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { getNews } from "../../utils/data";
import { Card } from "./card/Card";
import styles from "./Main.module.scss";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const { page, pageSize } = useContext(GlobalContext)!;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      const news = await getNews(page, pageSize);
      console.log(news);
    };

    fetchNews();
    setLoading(false);
  }, [page, pageSize]);

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
