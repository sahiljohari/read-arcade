import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ bgUrl, children }) => {
  return (
    <div className={styles.root} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgUrl})` }}>
      <div className={styles.bannerChildren}>{children}</div>
    </div>
  );
};

export default Banner;
