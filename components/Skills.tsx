import Link from 'next/link';

import styles from '@/styles/skills.module.css';
import { ctaTexts, headings, userInfo } from '@/public/js/userInfo';

const Skills = () => {
  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.skills}
      </h1>
      <div className={styles.skills}>
        {userInfo.skills && userInfo.skills.capabilities
          ? userInfo.skills.capabilities.map((value, index) => {
              return (
                <div key={index}>
                  <ul className={styles.skillList} data-aos="fade-up">
                    <h1 className={styles.skillHeading}>{value.category}</h1>
                    {value.items
                      ? value.items.map((skill, key2) => {
                          return <li key={`${value.category}-${key2}`}>{skill}</li>;
                        })
                      : null}
                  </ul>
                  {userInfo.skills.capabilities.indexOf(value) ===
                  userInfo.skills.capabilities.length - 1 ? null : (
                    <div className={styles.line} data-aos="fade-up"></div>
                  )}
                </div>
              );
            })
          : null}
      </div>
      <div className={styles.ctaMain3}>
        <Link className={styles.cta3} href={userInfo.skills.contact.href}>
          {ctaTexts.capabCTA} <span>&gt;</span>
        </Link>
      </div>
    </>
  );
};

export default Skills;
