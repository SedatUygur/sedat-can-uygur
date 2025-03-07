import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userInfo } from '@/public/js/userInfo';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footermain}>
      <div className={styles.footertable}>
        <Link href="/">
          <h2 className={styles.footerlogo}>{userInfo.name}</h2>
        </Link>
        <ul>
          <li className={styles.listHeading}>{userInfo.footer.socialmedia.heading}</li>
          {userInfo.socials
            ? userInfo.socials.map((social, key) => {
                return (
                  <Link href={social.href} key={key}>
                    <li>
                      {social.label} <FontAwesomeIcon icon={social.icon} />
                    </li>
                  </Link>
                );
              })
            : null}
          <Link
            href={`mailto:${userInfo.contact.email.placeholder ? userInfo.contact.email.placeholder : ''}`}
          >
            <li>{userInfo.footer.socialmedia.mail}</li>
          </Link>
        </ul>
        <ul>
          <li className={styles.listHeading}>{userInfo.footer.quicklinks.heading}</li>
          <Link href={userInfo.footer.quicklinks.home.href}>
            <li>{userInfo.footer.quicklinks.home.label}</li>
          </Link>
          <Link href={userInfo.footer.quicklinks.about.href}>
            <li>{userInfo.footer.quicklinks.about.label}</li>
          </Link>
          <Link href={userInfo.footer.quicklinks.projects.href}>
            <li>{userInfo.footer.quicklinks.projects.label}</li>
          </Link>
          <Link href={userInfo.footer.quicklinks.blog.href}>
            <li>{userInfo.footer.quicklinks.blog.label}</li>
          </Link>
          <Link href={userInfo.footer.quicklinks.contact.href}>
            <li>{userInfo.footer.quicklinks.contact.label}</li>
          </Link>
        </ul>
      </div>
      <hr className={styles.footerbreak}></hr>
      <h2 className={styles.footercontent}>
        &copy; {new Date().getFullYear()} {userInfo.footer.copyright}
      </h2>
    </div>
  );
};

export default Footer;
