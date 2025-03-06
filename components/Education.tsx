import React from 'react'

import { userInfo } from '@/public/js/userInfo'
import styles from '@/src/app/page.module.css'

const Education = () => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                {userInfo.education.title}
            </div>

            <div className={styles.timeline}>
                <ul>
                    {
                        userInfo.education.schools ?
                            userInfo.education.schools.map((school, key) => {
                                return (
                                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" key={key}>
                                        <div className={styles.content}>
                                            <h3>{school.department}</h3>
                                            <p>{school.name}</p>
                                            <p>{school.grade}</p>
                                        </div>
                                        <div className={styles.time}>
                                            <h4>{school.time}</h4>
                                        </div>
                                    </li>
                                )
                            }) : null
                    }
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

        </div>
    )
}

export default Education