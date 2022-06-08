import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { AiOutlineStar } from "react-icons/ai";

interface CardProps {}

export const Card: React.FC<CardProps> = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h4>Presidency approves minimum wage</h4>
      </div>
      <p className={styles.card__body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        molestiae voluptates sit vel voluptatum, a tempora voluptatibus saepe
        error ipsa. Quibusdam suscipit quo odio nostrum cumque incidunt
        veritatis facere veniam.
      </p>
      <div className={styles.card__footer}>
        <a href="#">Read full story</a>
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
