"use client";

import Link from 'next/link'
import styles from "./page.module.css";
import Project from '@/components/Project';
import { projects } from '@/public/js/projects';

export default function Home() {

  return (
    <div>
      <div className={styles.page}>
          <h1 className={styles.heading}>Hey there, I am Sedat Can.</h1>
          <h2 className={styles.subheading}>With over 8 years of professional experience, I am driven to leverage my expertise in full-stack development to deliver scalable, high-quality, microservice architecture applications.</h2>
          <Link className={styles.workLink} href="/work">My work</Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
          <h1 className={styles.workheading}>Work</h1>
          {
              projects.slice(0, 3).map((project) => {
                  return (
                      <div key={project.id}>
                          <Project project={project} />
                      </div>
                  )
              })
          }
          <div style={{textAlign: 'center', paddingBottom: '2rem'}}><Link className={styles.cta3} href="/work">View All <span>&gt;</span></Link></div>
      </div>
      <div id="skills" className={styles.homeSkillSection}>
          <h1 className={styles.workheading}>Skills</h1>
          <div className={styles.skills}>
              <ul className={styles.skillList}>  
                  <h1 className={styles.skillHeading}>Frontend</h1>
                  <h2>HTML5, CSS3, JS</h2>
                  <h2>React JS</h2>
                  <h2>Next JS</h2>
              </ul>
              <div className={styles.line}></div>
              <ul className={styles.skillList}>
                  <h1 className={styles.skillHeading}>Backend</h1>
                  <h2>Node JS</h2>
                  <h2>Express JS</h2>
                  <h2>Python</h2>
              </ul>
              <div className={styles.line}></div>
              <ul className={styles.skillList}>
                  <h1 className={styles.skillHeading}>Database</h1>
                  <h2>Firebase</h2>
                  <h2>MongoDB</h2>
              </ul>
          </div>
          <div style={{textAlign: 'center', padding: '1rem 0'}}><Link className={styles.cta3} href="/contact">Get in touch <span>&gt;</span></Link></div>
      </div>
    </div>
  );
}
