import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"

import styles from '@/styles/project.module.css'

interface Project {
    name: string;
    description: string;
}

const Project = ({ project }: { project: Project }) => {
    return (
        <div className={styles.projectmain}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon}><FontAwesomeIcon icon={faTelegramPlane} /></div>
                <h1 className={styles.projectTitle}>{project.name}</h1>
                <h2 className={styles.projectSubTitle}>{project.description}</h2>
                <Link className={styles.cta2} href="#">View More</Link>
            </div>
        </div>
    )
}

export default Project