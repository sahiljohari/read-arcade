import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";

import { useGetOverview } from "../../store/actions";
import BookCategory from "../../components/BookCategory/BookCategory";

const Homepage = () => {
  const [overviewList, setOverviewList] = useState([]);
  const { overview, isLoaded } = useGetOverview();

  useEffect(() => {
    if (overview.results) {
      setOverviewList(overview.results.lists);
    }
  }, [overview.results]);

  if (!isLoaded) return <div>Loading...</div>;
  else {
    return (
      <div className={styles.root}>
        {overviewList.map((list) => (
          <BookCategory key={list.list_id} listData={list} />
        ))}
      </div>
    );
  }
};

export default Homepage;
