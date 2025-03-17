import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { userInfo } from '@/public/js/userInfo';
import styles from '../styles/navbar.module.css';

const NavLinks = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  return (
    <>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.home.href}
          style={{
            opacity: activeLink === '/' || activeLink === '/#projects' ? '100%' : '80%',
          }}
        >
          {userInfo.footer.quicklinks.home.label}
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.about.href}
          style={{ opacity: activeLink === '/about' ? '100%' : '80%' }}
        >
          {userInfo.footer.quicklinks.about.label}
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.blog.href}
          style={{ opacity: activeLink === '/blog' ? '100%' : '80%' }}
        >
          {userInfo.footer.quicklinks.blog.label}
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.cv.href}
          style={{ opacity: activeLink === '/cv' ? '100%' : '80%' }}
        >
          {userInfo.footer.quicklinks.cv.label}
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.projects.href}
          style={{ opacity: activeLink === '/projects' ? '100%' : '80%' }}
        >
          {userInfo.footer.quicklinks.projects.label}
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link
          href={userInfo.footer.quicklinks.contact.href}
          style={{ opacity: activeLink === '/contact' ? '100%' : '80%' }}
        >
          {userInfo.footer.quicklinks.contact.label}
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
