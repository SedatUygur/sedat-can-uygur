import React from 'react'
import Link from 'next/link'

import styles from '../styles/navbar.module.css'

const NavLinks = ({ drawerVisible }: { drawerVisible: boolean }) => {
    const inlineStyles = {
        padding: !drawerVisible ? '0 1.5rem' : '0.5rem',
        fontSize: !drawerVisible ? '15px' : '12px'
    }

    return (
        <>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/'>Home</Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/about'>About</Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/work'>Work</Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/contact'>Contact</Link>
            </div>
        </>

    )
}

export default NavLinks