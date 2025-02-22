"use client";

import { useState, useEffect } from "react";

import { lightTheme, darkTheme } from "@/styles/ThemeConfig";
import styles from "./page.module.css";

export default function Home({theme}: {theme: 'light' | 'dark'}) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme]);

  const themeObject = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <div className={styles.page}>
      <div className={styles.colordiv} style={{ background: themeObject.body}}></div>
      <div className={styles.colordiv} style={{ background: themeObject.secondary}}></div>
      <div className={styles.colordiv} style={{ background: themeObject.tertiary}}></div>
      <div className={styles.colordiv} style={{ background: themeObject.accent}}></div>
    </div>
  );
}
