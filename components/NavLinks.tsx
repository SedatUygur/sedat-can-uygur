import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from '../styles/navbar.module.css'

const NavLinks = () => {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(pathname)
    }, [pathname])
    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/' style={{ opacity: activeLink === '/' || activeLink === '/#projects' ? '100%' : '80%' }}>Home</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/about' style={{ opacity: activeLink === '/about' ? '100%' : '80%' }}>About</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/projects' style={{ opacity: activeLink === '/projects' ? '100%' : '80%' }}>Projects</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/blog' style={{ opacity: activeLink === '/blog' ? '100%' : '80%' }}>Blog</Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/contact' style={{ opacity: activeLink === '/contact' ? '100%' : '80%' }}>Contact</Link>
            </div>
        </>

    )
}

export default NavLinks