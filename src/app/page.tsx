"use client";

import Link from 'next/link'
import styles from "./page.module.css";
import Project from '@/components/Project';
import {projects} from '@/public/js/projects';

export default function Home() {

  return (
    <div>
      <div className={styles.page}>
          <h1 className={styles.heading}>Hey there, I am Sedat Can.</h1>
          <h2 className={styles.subheading}>With over 8 years of professional experience, I am driven to leverage my expertise in full-stack development to deliver scalable, high-quality, microservice architecture applications.</h2>
          <Link className={styles.workLink} href="/work">My work</Link>
      </div>
      {
          projects.slice(0,3).map((project) => {
              return (
                  <div key={project.id}>
                      <Project project={project}/>
                  </div>
              )
          })
      }
    </div>
  );
}
