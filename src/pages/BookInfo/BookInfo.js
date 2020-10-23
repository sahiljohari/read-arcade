import React from "react";
import Book from "../../components/Book/Book";
import styles from './BookInfo.module.css';

const BookInfo = ({ location }) => {
  const { bookData, otherBooks } = location.state;
  return (
    <div>
      <Book
        amazonUrl={bookData.amazon_product_url}
        bookImage={bookData.book_image}
        author={bookData.author}
        title={bookData.title}
        description={bookData.description}
        buyLinks={bookData.buy_links}
        weeksOnList={bookData.weeks_on_list}
        publisher={bookData.publisher}
        primaryIsbn10={bookData.primary_isbn10}
        primaryIsbn13={bookData.primary_isbn13}
      />
      <div className={styles.otherBooks}>
        {
          otherBooks.map(otherBook => (
          <div key={otherBook.title}>
            <img src={otherBook.book_image} alt={otherBook.author} />
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default BookInfo;
