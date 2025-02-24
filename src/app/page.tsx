"use client";

import Link from 'next/link'

import Project from '@/components/Project';
import Skills from '@/components/Skills';
import { projects } from '@/public/js/projects';
import styles from "./page.module.css";

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
          <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link className={styles.cta3} href="/work">View All <span>&gt;</span></Link></div>
      </div>
      <div id="skills" className={styles.homeSkillSection}>
        <Skills />
      </div>
      <div id="about" className={styles.homeAboutSection}>
        <h1 className={styles.workheading}>About Me</h1>
        <p className={styles.aboutText}>Hi I am Sedat Can Uygur. I’ve been a full-stack engineer for over 8 years, working with a variety of technologies, including C#, Java, Python, JavaScript, and TypeScript. I started my career focusing on back-end 
systems, especially in .NET, but over time I expanded to front-end frameworks like Angular and React. In my recent roles, I’ve worked on projects for global brands such as Under Armour and SSS, where I developed 
scalable microservices and integrated multiple APIs. For the past couple of years, I’ve also gained experience with cloud platforms—AWS and Azure—using Docker and Kubernetes to containerize and orchestrate 
microservices. This experience feels highly relevant on cloud-native applications and modern architectures.</p>
      </div>
    </div>
  );
}
