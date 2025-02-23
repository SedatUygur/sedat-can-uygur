import { Icon, Switch, useMediaQuery } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import NavLinks from './NavLinks'

import styles from '../styles/navbar.module.css'

interface NavbarProps {
    toggleTheme: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentTheme: any; // or whatever type currentTheme should be
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
    const [drawerVisible] = useMediaQuery(['(max-width: 950px)'], {
        ssr: true,
        fallback: [false], // return false on the server and re-evaluate on the client side
    });
    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, padding: !drawerVisible ? '0.9rem 5rem 1.3rem 5rem' : '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline', marginBottom: !drawerVisible ? '0' : '10px' }}>
                <h2 className={styles.logo} style={{ fontSize: !drawerVisible ? '30px' : '20px' }}>Sedat Can Uygur</h2>
                { !drawerVisible
                    ? <div style={{ display: 'flex' }}>
                        <NavLinks drawerVisible={!drawerVisible} />
                      </div>
                    : null
                }
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
            { drawerVisible
                ? <>
                <hr></hr>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                    <NavLinks drawerVisible={drawerVisible}/>
                </div>
                </>
                : null
            }
        </div>
    );
}