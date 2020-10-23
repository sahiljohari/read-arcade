import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookCategory.module.css";

const BookCategory = ({ name, encodedName, books }) => {
  return (
    <div className={styles.root}>
      <div className={styles.categoryHeader}>
      <p>{name}</p>
      <Link className={styles.link} to={`/bestsellers/${encodedName}`}>See more</Link>
      </div>
      <div className={styles.books}>
        {books.map((book, i) => {
          const otherBooks = books.filter(b=> b.primary_isbn13 !== book.primary_isbn13);
          return (<Link
            key={i}
            to={{
              pathname: `/review/${book.title}`,
              state: {
                bookData: book,
                otherBooks
              },
            }}
          >
            <img src={book.book_image} alt={book.author} />
          </Link>)
})}
        
      </div>
    </div>
  );
};

export default BookCategory;
