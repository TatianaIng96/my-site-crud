import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src="logo.png" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>My Site</h1>
      <div className={styles.options}>{/* Options content */}</div>
    </div>
  );
};