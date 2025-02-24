"use client";

import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
        <h1 className={styles.heading}>Hey there, I am Sedat Can.</h1>
        <h2 className={styles.subheading}>With over 8 years of professional experience, I am driven to leverage my expertise in full-stack development to deliver scalable, high-quality, microservice architecture applications.</h2>
        <Link className={styles.workLink} href="/work">My work</Link>
        {/* style={{ backgroundColor: currentTheme.name === 'dark' ? '#d7f7f5' : '#263859', color: currentTheme.contrastText}} */}
    </div>
  );
}
