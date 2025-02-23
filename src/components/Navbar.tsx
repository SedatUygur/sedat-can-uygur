import { Icon, Switch } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
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
                        <a>Home</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>About</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>Work</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>Contact</a>
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