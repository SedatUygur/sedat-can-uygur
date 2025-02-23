import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.flex}>
            {/* Links Section */}
            <div className={styles.linksSocialMedia}>
              <h2 className={styles.title2}>Quick Links</h2>
              <ul className={styles.bottomMenu}>
                <li>
                  <Link href="/" className={styles.bottomLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.bottomLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/work" className={styles.bottomLink}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.bottomLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Section faGithub, faSquareXTwitter, faLinkedin*/}
            <div className={styles.linksSocialMedia}>
              <h2 className={styles.title2}>Follow Us</h2>
              <ul className={styles.bottomMenu}>
                <li>
                  <Link href="https://x.com/_SedatUygur" className={styles.bottomLink}>
                    Twitter <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/SedatUygur" className={styles.bottomLink}>
                    Github <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/sedat-can-uygur/" className={styles.bottomLink}>
                    LinkedIn <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Copyright Section */}
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} Sedat Can Uygur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;