'use client';

import { Toaster } from '@/src/components/ui/toaster';

import ContactForm from '@/components/ContactForm';
import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      Contact With Me
      <ContactForm />
      <Toaster />
    </div>
  );
}
