import React from "react";
import { Header } from "../components/header/Header";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
