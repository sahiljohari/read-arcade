import React from "react";
import styles from "./Book.module.css";

// Rendered when a book image is clicked on Homepage

const Book = ({
  amazonUrl,
  bookImage,
  author,
  title,
  description,
  ...rest
}) => {
  const {
    buyLinks,
    weeksOnList,
    publisher,
    primaryIsbn10,
    primaryIsbn13,
  } = rest;
  return (
    <div className={styles.root}>
      <img src={bookImage} alt={title} />
      <h2>{title}</h2>
      <p>{publisher}</p>
    </div>
  );
};

export default Book;
