"use client";

import styles from "./page.module.css";
import ContactForm from '@/components/ContactForm';

export default function Home() {

  return (
    <div className={styles.page}>
      Home Page
      <ContactForm />
    </div>
  );
}
