import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { userInfo } from '@/public/js/userInfo';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.flex}>
            {/* Links Section */}
            <div className={styles.linksSocialMedia}>
              <h2 className={styles.title2}>{userInfo.footer.quicklinks.title}</h2>
              <ul className={styles.bottomMenu}>
                <li>
                  <Link href={userInfo.footer.quicklinks.home.href} className={styles.bottomLink}>
                    {userInfo.footer.quicklinks.home.label}
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.quicklinks.about.href} className={styles.bottomLink}>
                    {userInfo.footer.quicklinks.about.label}
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.quicklinks.projects.href} className={styles.bottomLink}>
                    {userInfo.footer.quicklinks.projects.label}
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.quicklinks.blog.href} className={styles.bottomLink}>
                    {userInfo.footer.quicklinks.blog.label}
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.quicklinks.contact.href} className={styles.bottomLink}>
                    {userInfo.footer.quicklinks.contact.label}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Section faGithub, faSquareXTwitter, faLinkedin*/}
            <div className={styles.linksSocialMedia}>
              <h2 className={styles.title2}>{userInfo.footer.socialmedia.title}</h2>
              <ul className={styles.bottomMenu}>
                <li>
                  <Link href={userInfo.footer.socialmedia.github.href} className={styles.bottomLink}>
                    {userInfo.footer.socialmedia.github.label} <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.socialmedia.linkedin.href} className={styles.bottomLink}>
                    {userInfo.footer.socialmedia.linkedin.label} <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                </li>
                <li>
                  <Link href={userInfo.footer.socialmedia.twitter.href} className={styles.bottomLink}>
                    {userInfo.footer.socialmedia.twitter.label} <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Copyright Section */}
            <div className={styles.copyright}>
              <p>
                &copy; {new Date().getFullYear()} {userInfo.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;