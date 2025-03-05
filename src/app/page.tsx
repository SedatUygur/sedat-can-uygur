"use client";

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons"

import HomeProject from '@/components/HomeProject';
import Skills from '@/components/Skills';
import { projects } from '@/public/js/projects';
import { userInfo } from '@/public/js/userInfo';
import styles from "./page.module.css";

export default function Home() {

  return (
    <div>
      <div className={styles.page}>
          <h1 className={styles.heading}>{userInfo.home.title}</h1>
          <h2 className={styles.subheading}>{userInfo.home.subtitle}</h2>
          <Link className={styles.workLink} href="/projects">My projects</Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
          <h1 className={styles.workheading} data-aos="fade-up">Projects</h1>
          {
              projects.slice(0, 3).map((project, key) => {
                  return (
                      <div key={key} data-aos="fade-up">
                          <HomeProject project={project} />
                      </div>
                  )
              })
          }
          <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link className={styles.cta3} href="/projects">View All <span>&gt;</span></Link></div>
      </div>
      <div id="skills" className={styles.homeSkillSection}>
        <Skills />
      </div>
      <div id="about" className={styles.homeAboutSection}>
        <h1 className={styles.workheading} data-aos="fade-up">{userInfo.about.title}</h1>
        <p className={styles.aboutText} data-aos="fade-up">{userInfo.about.description}</p>
        <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex' }}>
          {/* color: currentTheme.subtext add it to div and link */}
          <Link className={styles.cta4} href={userInfo.about.resume} target="_blank" style={{ alignItems: 'center', background: 'transparent', border: `2px solid`, display: 'flex' }}>Resume&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faGoogleDrive} /></Link>
        </div>
      </div>
    </div>
  );
}
