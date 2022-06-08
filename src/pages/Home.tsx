import React from "react";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews(page, pageSize);
      console.log(news);
    };
  }, [page, pageSize]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};
