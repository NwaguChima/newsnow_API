import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { INews } from "../../../utils/types";

interface CardProps {
  article: INews;
}

export const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h4>{article.title}</h4>
      </div>
      <p className={styles.card__body}>{article.description}</p>
      <div className={styles.card__footer}>
        <a href={article.url} target="_blank" rel="noreferrer">
          Read full story
        </a>
        <span>
          <i>
            <AiOutlineStar />
          </i>
          Add to bookmarks
        </span>
        <span>5 mins ago</span>
      </div>
    </div>
  );
};
