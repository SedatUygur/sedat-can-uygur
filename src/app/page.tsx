'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

import Education from '@/components/Education';
import HomeProject from '@/components/HomeProject';
import Skills from '@/components/Skills';
import { projects } from '@/public/js/projects';
import { ctaTexts, headings, userInfo } from '@/public/js/userInfo';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <h1 className={styles.heading}>{userInfo.home.title}</h1>
        <h2 className={styles.subheading}>{userInfo.home.subtitle}</h2>
        <Link className={styles.workLink} href="/projects">
          {ctaTexts.landingCTA}
        </Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.workHomePage}
        </h1>
        {projects.slice(0, 3).map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeProject project={project} />
            </div>
          );
        })}
        <div className={styles.projectsCTA}>
          <Link className={styles.cta3} href="/projects">
            {ctaTexts.workCTA} <span>&gt;</span>
          </Link>
        </div>
      </div>
      <div id="skills" className={styles.homeSkillSection}>
        <Skills />
      </div>
      <div>{userInfo.education.visible ? <Education /> : null}</div>
      <div id="about" className={styles.homeAboutSection}>
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <p className={styles.aboutText} data-aos="fade-up">
          {userInfo.about.description}
        </p>
        <div className={styles.resumeCTA} data-aos="fade-up">
          <Link className={styles.cta4} href={userInfo.about.resume} target="_blank">
            {ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon width="15px" height="15px" icon={faGoogleDrive} />
          </Link>
        </div>
      </div>
    </div>
  );
}
