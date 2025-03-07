import React from 'react';
import { Box } from '@chakra-ui/react';

import { userInfo, headings } from '@/public/js/userInfo';
// import styles from '../styles/about.module.css';
import styles from '@/src/app/page.module.css';

const Experiences = () => {
  return (
    <div className={styles.educationWrapper}>
      {/* <h1
        className={styles.workHeading}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {headings.experience}
      </h1> */}
      <div className={styles.workheading} data-aos="fade-up">
        {headings.experience}
      </div>
      <div className={styles.timeline}>
        <ul>
          {userInfo.experience.items
            ? userInfo.experience.items.map((exp, key) => {
                return (
                  <li data-aos="fade-up" key={key}>
                    <div className={styles.content}>
                      {/* <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                        <div className={styles.experienceTitle}></div>
                        <div className={styles.experienceCardContent}>
                          <h1>{exp.company}</h1>
                          <div>
                            <h2>{exp.position}</h2>
                            <h3>{exp.description}</h3>
                          </div>
                        </div>
                      </Box> */}
                      <h3 className={styles.educationDepartment}>{exp.company}</h3>
                      <h3 className={styles.educationSchool}>{exp.position}</h3>
                      <p className={styles.educationGPA}>{exp.description}</p>
                    </div>
                    <div className={styles.time}>
                      <h4>{exp.time}</h4>
                    </div>
                  </li>
                );
              })
            : null}
          <div className={styles.clear}></div>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
