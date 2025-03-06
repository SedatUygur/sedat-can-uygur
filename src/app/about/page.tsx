"use client";

import Experiences from '@/components/Experiences';
import { userInfo } from '@/public/js/userInfo';

import styles from "../page.module.css";

export default function About() {

  return (
    <div className={styles.page}>
      {
        userInfo.experience.visible ? <Experiences /> : null
      }
    </div>
  );
}
