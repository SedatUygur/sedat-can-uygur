import styles from '@/styles/skills.module.css'
import Link from 'next/link'

const Skills = () => {
    return (
        <>
          <h1 className={styles.workheading} data-aos="fade-up">Skills</h1>
          <div className={styles.skills}>
              <ul className={styles.skillList} data-aos="fade-up">
                  <h1 className={styles.skillHeading}>Frameworks</h1>
                  <h2>Node.js</h2>
                  <h2>React</h2>
                  <h2>Next.js</h2>
                  <h2>jQuery</h2>
                  <h2>Express</h2>
                  <h2>ASP.NET Core</h2>
                  <h2>Spring Boot</h2>
                  <h2>Django</h2>
                  <h2>FastAPI</h2>
              </ul>
              <div className={styles.line} data-aos="fade-up"></div>
              <ul className={styles.skillList} data-aos="fade-up">
                  <h1 className={styles.skillHeading}>Languages</h1>
                  <h2>Python</h2>
                  <h2>C#</h2>
                  <h2>Java</h2>
                  <h2>JavaScript</h2>
                  <h2>TypeScript</h2>
                  <h2>HTML5</h2>
                  <h2>SQL</h2>
              </ul>
              <div className={styles.line} data-aos="fade-up"></div>
              <ul className={styles.skillList} data-aos="fade-up">
                  <h1 className={styles.skillHeading}>Database</h1>
                  <h2>PostgreSQL</h2>
                  <h2>MySQL</h2>
                  <h2>SQLite</h2>
                  <h2>MS SQL</h2>
                  <h2>MongoDB</h2>
                  <h2>Redis</h2>
                  <h2>Elasticsearch</h2>
              </ul>
              <div className={styles.line} data-aos="fade-up"></div>
              <ul className={styles.skillList} data-aos="fade-up">
                  <h1 className={styles.skillHeading}>Other</h1>
                  <h2>AWS</h2>
                  <h2>NumPy, Pandas</h2>
                  <h2>CSS3</h2>
                  <h2>Docker</h2>
                  <h2>Git</h2>
                  <h2>npm, Pip</h2>
                  <h2>T-SQL, NoSQL</h2>
                  <h2>Salesforce</h2>
                  <h2>Agile, SCRUM</h2>
                  <h2>Jira</h2>
                  <h2>Linux</h2>
              </ul>
          </div>
          <div style={{textAlign: 'center', padding: '1rem 0'}}><Link className={styles.cta3} href="/contact">Get in touch <span>&gt;</span></Link></div>
        </>
    )
}

export default Skills