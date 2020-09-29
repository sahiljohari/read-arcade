import React from "react";
import Book from "../../components/Book/Book";

const BookInfo = ({ match, location }) => {
  const { params } = match;
  const { bookData } = location.state;
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
    </div>
  );
};

export default BookInfo;
