import React from 'react'
import { Box, Avatar } from "@chakra-ui/react"

import { userInfo, headings } from '@/public/js/userInfo'
import styles from '../styles/about.module.css'

const Experiences = () => {
    return (
        <div className={styles.experienceWrapper}>
            <h1 className={styles.workHeading}>{headings.experience}</h1>
            <div className={styles.experienceCardWrapper}>
                {
                    userInfo.experience.items ?
                    userInfo.experience.items.map((exp, key) => {
                            return (
                                <div className={styles.experienceCard} key={key}>
                                    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                                        <div className={styles.experienceTitle}></div>
                                        <div className={styles.experienceCardContent}>
                                            <h1>{exp.company}</h1>
                                            {/* <div className={styles.avatar}>
                                                <Avatar.Root size="xl">
                                                    <Avatar.Fallback name={exp.company} />
                                                    <Avatar.Image src={exp.companylogo} />
                                                </Avatar.Root>
                                            </div> */}
                                            <div style={{ position: 'relative' }}>
                                                <h2>{exp.position}</h2>
                                                <h3>{exp.description}</h3>
                                            </div>
                                            <h4>{exp.time}</h4>
                                        </div>
                                    </Box>
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    )
}

export default Experiences