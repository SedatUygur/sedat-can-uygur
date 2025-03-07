import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Icon, Switch, useMediaQuery } from '@chakra-ui/react';

import NavLinks from './NavLinks';
import styles from '../styles/navbar.module.css';

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
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme.secondary,
        boxShadow: currentTheme.boxShadow,
        position: sticky ? 'fixed' : 'static',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'baseline',
          marginBottom: !drawerVisible ? '0' : '10px',
        }}
      >
        <Link href="/">
          <h2 className={styles.logo}>Sedat Can Uygur</h2>
        </Link>
        {!drawerVisible ? (
          <div style={{ display: 'flex' }}>
            <NavLinks />
          </div>
        ) : null}
        <Switch.Root
          checked={currentTheme.name === 'dark'}
          colorPalette="purple"
          size="lg"
          onChange={() => toggleTheme()}
        >
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
      {drawerVisible ? (
        <>
          <hr></hr>
          <div
            style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}
          >
            <NavLinks />
          </div>
        </>
      ) : null}
    </div>
  );
}
