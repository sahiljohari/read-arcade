import React, { useState, useEffect } from "react";
import styles from "./Bestsellers.module.css";

import { useGetList } from "../../store/actions";

const Bestsellers = ({ match }) => {
  const { params } = match;
  const [list, setList] = useState([]);
  const { booksList, isLoaded } = useGetList(params.category);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (booksList.results) {
      setList(booksList.results);
      setCategoryName(booksList.results[0].display_name);
    }
  }, [booksList.results]);

  if (!isLoaded) return <div>Loading...</div>;
  else {
    return (
      <div className={styles.root}>
        <h2>{categoryName}</h2>
        {list.map((category, i) => (
          <div key={i}>{category.book_details[0].title}</div>
        ))}
      </div>
    );
  }
};

export default Bestsellers;
