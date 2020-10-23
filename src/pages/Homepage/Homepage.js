import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";

import { useGetOverview } from "../../store/actions";
import BookCategory from "../../components/BookCategory/BookCategory";
import Banner from "../../components/Banner/Banner";
import bannerImg from '../../assets/images/home-banner.jpg';

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
        <Banner bgUrl={bannerImg}>
          <h2 className={styles.brand}>READ ARCADE</h2>
          <h4 className={styles.subtitle}>Explore the best selling books</h4>
        </Banner>
        {overviewList.map((list, i) => (
          <div key={list.list_id}>
            <BookCategory name={list.display_name} encodedName={list.list_name_encoded} books={list.books} />
            {i !== overviewList.length - 1 && <hr />}
          </div>
        ))}
      </div>
    );
  }
};

export default Homepage;
