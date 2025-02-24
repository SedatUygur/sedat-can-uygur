import styles from '@/styles/skills.module.css'
import Link from 'next/link'

const Skills = () => {
    return (
        <>
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
        </>
    )
}

export default Skills