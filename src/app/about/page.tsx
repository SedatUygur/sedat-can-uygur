'use client';

import Experiences from '@/components/Experiences';
import { userInfo } from '@/public/js/userInfo';

import styles from '../page.module.css';
import Education from '@/components/Education';

export default function About() {
  return (
    <div className={styles.page}>
      {userInfo.education.visible ? <Education /> : null}
      {userInfo.experience.visible ? <Experiences /> : null}
    </div>
  );
}
