import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookCategory.module.css";

const BookCategory = ({ listData }) => {
  return (
    <div className={styles.root}>
      <div className={styles.categoryHeader}>
      <p>{listData.display_name}</p>
      <Link className={styles.link} to={`/bestsellers/${listData.list_name_encoded}`}>See more</Link>
      </div>
      <div className={styles.books}>
        {listData.books.map((book, i) => (
          <Link
            key={i}
            to={{
              pathname: `/review/${book.title}`,
              state: {
                bookData: book,
              },
            }}
          >
            <img src={book.book_image} alt={book.author} />
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default BookCategory;
