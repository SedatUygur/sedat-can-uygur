import styles from '../styles/blogsprojects.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag } from "@chakra-ui/react"
import { toaster } from "@/src/components/ui/toaster";

import { projects } from '@/public/js/projects';

const Projects = () => {
    //const toast = useToast()

    const showGitToast = () => {
        toaster.create({
            description: "Sorry, this project has a private repository!",
            type: "warning"
        })
    }

    const showProjectToast = () => {
        toaster.create({
            description: "Sorry, this project has not been deployed yet!",
            type: "warning"
        })
    }

    return (
        <div className={styles.workmain}>
            {
                projects.map((project) => {
                    return (
                        <div className={styles.projectitem} key={project.id}>
                            <div className={styles.parentofparentcard}>
                                <div className={styles.parentcard}>
                                    <div className={styles.cardtitle}>
                                        <h1 className={styles.projtitle}>{project.name}</h1>
                                        <HStack>
                                            {
                                                project.tech.map((tech) => {
                                                    return (
                                                        <div key={tech}>
                                                            <Tag.Root size="sm" borderRadius="md" variant="subtle">
                                                                <Tag.Label>{tech}</Tag.Label>
                                                            </Tag.Root>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </HStack>
                                    </div>
                                    <div className={styles.imageandsocials}>
                                        <div className={styles.card}>
                                            <div className={styles.arrows} style={{color: 'black'}}>
                                                <p onClick={() => alert('clicked back')}>&lt;</p>
                                                <p onClick={() => alert('clicked ahead')}>&gt;</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.socialIcon}>
                                                {project.githubLink !== '' ? <Link href={project.githubLink}><FontAwesomeIcon icon={faGithub} /></Link> : <FontAwesomeIcon icon={faGithub} onClick={showGitToast}/>}
                                            </div>
                                            <div className={styles.socialIcon}>
                                                {project.projectLink !== '' ? <Link href={project.projectLink}><FontAwesomeIcon icon={faWebAwesome} /></Link> : <FontAwesomeIcon icon={faWebAwesome} onClick={showProjectToast}/>}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={styles.cardbottom}>
                                        <p className={styles.projdescription}>{project.description}</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects