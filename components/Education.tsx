import React from 'react'
import styles from '@/src/app/page.module.css'

const Education = () => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                Education
            </div>

            <div className={styles.timeline}>
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className={styles.content}>
                            <h3 className={styles.educationDepartment}>Computer Engineering</h3>
                            <p className={styles.educationSchool}>Muğla Sıtkı Koçman University</p>
                            <p className={styles.educationGPA}>2.76 / 4</p>
                        </div>
                        <div className={styles.time}>
                            <h4>2010 - 2015</h4>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className={styles.content}>
                            <h3 className={styles.educationDepartment}>Science</h3>
                            <p className={styles.educationSchool}>Ortaklar Science High School</p>
                            <p className={styles.educationGPA}>86.02 / 100</p>
                        </div>
                        <div className={styles.time}>
                            <h4>2006 - 2010</h4>
                        </div>
                    </li>
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

        </div>
    )
}

export default Education