import React from 'react'

import { headings, userInfo } from '@/public/js/userInfo'
import styles from '@/src/app/page.module.css'

const Education = () => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                {headings.education}
            </div>
            <div className={styles.timeline}>
                <ul>
                    {
                        userInfo.education.schools ?
                            userInfo.education.schools.map((school, key) => {
                                return (
                                    <li data-aos="fade-up" key={key}>
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
                    <div style={{ clear: 'inline-start' }}></div>
                </ul>
            </div>
            {/* <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/about" className={styles.cta3}>{ctaTexts.educationCTA}<span> &gt;</span></Link></div> */}
        </div>
    )
}

export default Education