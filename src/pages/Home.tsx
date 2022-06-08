import React from "react";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};
