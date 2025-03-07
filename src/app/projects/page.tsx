'use client';

import styles from '../page.module.css';
import BlogsAndProjects from '@/components/BlogsAndProjects';

export default function Projects() {
  return (
    <div className={styles.page}>
      <BlogsAndProjects />
    </div>
  );
}
