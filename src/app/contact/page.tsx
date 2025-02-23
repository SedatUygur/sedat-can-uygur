"use client";

import ContactForm from '@/components/ContactForm';
import styles from "../page.module.css";


export default function About() {

  return (
    <div className={styles.page}>
      Contact Me
      <ContactForm />
    </div>
  );
}
