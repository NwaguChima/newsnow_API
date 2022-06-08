import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";
import { getNews } from "../../utils/data";
import { INews, IRes } from "../../utils/types";
import Spinner from "../spinner/Spinner";
import { Card } from "./card/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import styles from "./Main.module.scss";

interface MainProps {}
let arr: any = [];

export const Main: React.FC<MainProps> = () => {
  const { page, setPage, pageSize } = useContext(GlobalContext)!;
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<INews[] | undefined>(undefined);
  const [pageCount, setPageCount] = useState<number>(0);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      try {
        const news: IRes = await getNews(page, pageSize);
        setArticles(news.articles);
        setPageCount(Math.ceil(news.totalResults / pageSize));
        renderPage(pageCount);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchNews();
    setLoading(false);
  }, [page, pageSize, pageCount]);

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  function renderPage(count: number) {
    arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
  }

  console.log(page);
  return (
    <main className={styles.main}>
      <div className={styles.main__header}>
        <h2>Latest news</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.main__container}>
          {articles &&
            articles.map((article: INews) => (
              <Card key={article.url} article={article} />
            ))}
        </div>
      )}
      <div className={styles.main__page}>
        <i>
          <RiArrowLeftSLine />
        </i>
        <div className={styles.main__pageCount}>
          {arr.map((item: number) => (
            <span
              key={item}
              onClick={() => {
                setPage(item)!;
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <i>
          <RiArrowRightSLine />
        </i>
      </div>
    </main>
  );
};
