import { Icon, Switch } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'

import styles from '../styles/navbar.module.css'

interface NavbarProps {
    toggleTheme: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentTheme: any; // or whatever type currentTheme should be
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
                <h2 className={styles.logo}>Sedat Can Uygur</h2>
                <div style={{ display: 'flex' }}>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/'>Home</Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/about'>About</Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/work'>Work</Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/contact'>Contact</Link>
                    </div>
                </div>
                <Switch.Root colorPalette="purple" size="lg" onChange={() => toggleTheme()}>
                    <Switch.HiddenInput />
                    <Switch.Control>
                        <Switch.Thumb />
                        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                            <Icon as={FaSun} color="yellow.400" />
                        </Switch.Indicator>
                    </Switch.Control>
                    <Switch.Label></Switch.Label>
                </Switch.Root>
            </div>
        </div>
    );
}