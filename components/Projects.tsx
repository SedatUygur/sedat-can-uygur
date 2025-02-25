import styles from '../styles/blogsprojects.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag } from "@chakra-ui/react"

const Projects = () => {
    return (
        <div className={styles.parentcard}>
            <div className={styles.cardtitle}>
                <h1 className={styles.projtitle}>Project title</h1>
                <HStack>
                    <Tag.Root size="md" variant="subtle" colorPalette="cyan">
                        <Tag.Label>Green</Tag.Label>
                    </Tag.Root>
                    <Tag.Root size="md" variant="subtle" colorPalette="cyan">
                        <Tag.Label>Green</Tag.Label>
                    </Tag.Root>
                    <Tag.Root size="md" variant="subtle" colorPalette="cyan">
                        <Tag.Label>Green</Tag.Label>
                    </Tag.Root>
                </HStack>
            </div>
            <div className={styles.imageandsocials}>
                <div className={styles.card}>
                    <div className={styles.arrows}>
                        <p onClick={() => alert('clicked back')}>&lt;</p>
                        <p onClick={() => alert('clicked ahead')}>&gt;</p>
                    </div>
                </div>
                <div>
                    <div className={styles.socialIcon}>
                        <Link href="https://github.com/SedatUygur"><FontAwesomeIcon icon={faGithub} /></Link>
                    </div>
                    <div className={styles.socialIcon}>
                        <Link href="https://www.linkedin.com/in/sedat-can-uygur/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.cardbottom}>
                <p className={styles.projdescription}>A Commercial Website for the branding agency.</p>
                <a className={styles.cta}><i>Check it out &rarr;</i></a>
            </div>
        </div>
    )
}

export default Projects