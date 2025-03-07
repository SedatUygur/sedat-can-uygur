import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/homeproject.module.css';

interface Project {
  id: number;
  name: string;
  description: string;
  projectLink: string;
}

const HomeProject = ({ project }: { project: Project }) => {
  return (
    <div
      className={styles.projectmain}
      style={{ borderRadius: project.id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0' }}
    >
      <div className={styles.projectContent}>
        <div className={styles.projectIcon}>
          <Link href={project.projectLink}>
            <FontAwesomeIcon icon={faTelegramPlane} />
          </Link>
        </div>
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <h2 className={styles.projectSubTitle}>{project.description}</h2>
        <Link className={styles.cta2} href="/projects">
          View More
        </Link>
      </div>
    </div>
  );
};

export default HomeProject;
