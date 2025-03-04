import Link from 'next/link'

import styles from '@/styles/skills.module.css'
import { userInfo } from '@/public/js/userInfo';

const Skills = () => {
    return (
        <>
          <h1 className={styles.workheading} data-aos="fade-up">Skills</h1>
          <div className={styles.skills}>
                {userInfo.capabilities ?
                    userInfo.capabilities.map((value, index) => {
                        return (
                            <div key={index}>
                                <ul className={styles.skillList} data-aos="fade-up">
                                    <h1 className={styles.skillHeading}>{value.category}</h1>
                                    {
                                        value.skills ?
                                            value.skills.map((skill, key2) => {
                                                return (
                                                    <li key={`${value.category}-${key2}`}>{skill}</li>
                                                )
                                            }) : null
                                    }
                                </ul>
                                {userInfo.capabilities.indexOf(value) === userInfo.capabilities.length - 1 ? null : <div className={styles.line} data-aos="fade-up"></div>}
                            </div>
                        )
                    }) : null
                }
          </div>
          <div style={{textAlign: 'center', padding: '1rem 0'}}><Link className={styles.cta3} href="/contact">Get in touch <span>&gt;</span></Link></div>
        </>
    )
}

export default Skills