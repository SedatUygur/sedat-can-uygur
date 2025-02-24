import React from 'react'
import Link from 'next/link'

import styles from '../styles/navbar.module.css'

const NavLinks = () => {

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/'>Home</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'>About</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/projects'>Projects</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/contact'>Contact</Link>
            </div>
        </>

    )
}

export default NavLinks