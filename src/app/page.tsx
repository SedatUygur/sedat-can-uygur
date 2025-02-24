"use client";

import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>{/* style={{ backgroundColor: currentTheme.secondary }} */}
        <h1 className={styles.heading}>Hey there, I am Sedat Can.</h1>
        <h2 className={styles.subheading}>With over 8 years of professional experience, I am driven to leverage my expertise in full-stack development to deliver scalable, high-quality, microservice architecture applications.</h2>
    </div>
  );
}
