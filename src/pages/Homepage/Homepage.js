import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";

import { useGetOverview } from "../../store/actions";

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
          <div key={list.list_id}>
            <img src={list.list_image} alt={list.list_name} />
            <p>{list.display_name}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default Homepage;
