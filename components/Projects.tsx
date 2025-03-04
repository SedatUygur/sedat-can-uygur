import Link from 'next/link'
import { useState } from 'react';
import { useSwipeable } from "react-swipeable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons"
import { HStack, Tag } from "@chakra-ui/react"

import { toaster } from "@/src/components/ui/toaster";
import { Tooltip } from "@/src/components/ui/tooltip"
import { projects } from '@/public/js/projects';

import styles from '../styles/blogsprojects.module.css'

const Projects = () => {
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const [indexes, setIndexes] = useState<{ [key: number]: number }>({});
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const ahead = (projectId: number) => {
        setIndexes((prevIndexes) => ({
            ...prevIndexes,
            [projectId]: (prevIndexes[projectId] || 1) % 3 + 1,
        }));
    };

    const back = (projectId: number) => {
        setIndexes((prevIndexes) => ({
            ...prevIndexes,
            [projectId]: (prevIndexes[projectId] || 1) - 1 || 3,
        }));
    };

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getSwipeHandlers = (project: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useSwipeable({
          onSwipedLeft: () => ahead(project.id),
          onSwipedRight: () => back(project.id)
        });
    };

    /*const handlers = useSwipeable({
        onSwipedLeft: () => ahead(project.id),
        onSwipedRight: () => back(project.id)
    });*/

    return (
        <div className={styles.workmain}>
            {
                projects
                .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
                .map((project) => {
                    const projectIndex = indexes[project.id] || 1;
                    const projectPhoto = project.photos[projectIndex - 1];
                    const projectPhotoSrc = projectPhoto.src;
                    const projectStyle = {
                        backgroundImage: "url('" + projectPhotoSrc + "')",
                    };
                    const handlers = getSwipeHandlers(project);
                    return (
                        <div className={styles.projectitem} key={project.id} data-aos="fade-up">
                            <div className={styles.parentofparentcard} id={project.id.toString()}>
                                <div className={styles.parentcard}>
                                    <div className={styles.cardtitle}>
                                        <h1 className={styles.projtitle}>{project.name}</h1>
                                        <HStack>
                                            {
                                                project.tech.map((tech) => {
                                                    return (
                                                        <div key={tech}>
                                                            <Tag.Root size="sm" borderRadius="md" variant="subtle" colorPalette="purple">
                                                                <Tag.Label>{tech}</Tag.Label>
                                                            </Tag.Root>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </HStack>
                                    </div>
                                    <div className={styles.imageandsocials} {...handlers}>
                                        <div className={styles.card} style={projectStyle}>
                                            <div className={styles.arrows} style={{ color: 'lightgray' }}>
                                                <button onClick={() => back(project.id)} style={{color: 'blue', fontSize: '40px'}}>&lt;</button>
                                                <button onClick={() => ahead(project.id)} style={{color: 'blue', fontSize: '40px'}}>&gt;</button>
                                            </div>
                                        </div>
                                        <div>
                                            <Tooltip content="Github link" positioning={{ placement: "right-end" }}>
                                                <div className={styles.socialIcon}>
                                                    {project.githubLink !== '' ? <Link href={project.githubLink}><FontAwesomeIcon icon={faGithub} /></Link> : <FontAwesomeIcon icon={faGithub} onClick={showGitToast}/>}
                                                </div>
                                            </Tooltip>
                                            <Tooltip content="Project link" positioning={{ placement: "right-end" }}>
                                                <div className={styles.socialIcon}>
                                                    {project.projectLink !== '' ? <Link href={project.projectLink}><FontAwesomeIcon icon={faWebAwesome} /></Link> : <FontAwesomeIcon icon={faWebAwesome} onClick={showProjectToast}/>}
                                                </div>
                                            </Tooltip>
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
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`${styles.pageButton} ${
                        currentPage === i + 1 ? styles.activePage : ""
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Projects