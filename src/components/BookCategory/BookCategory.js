import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookCategory.module.css";

const BookCategory = ({ listData }) => {
  return (
    <div className={styles.root}>
      <p>{listData.display_name}</p>
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
        <Link to={`/bestsellers/${listData.list_name_encoded}`}>See more</Link>
      </div>
    </div>
  );
};

export default BookCategory;
