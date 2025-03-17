import React from 'react';

import { FaLocationDot } from 'react-icons/fa6';

import { Avatar, Badge, Card, defineStyle } from '@chakra-ui/react';

const ringCss = defineStyle({
  outlineWidth: '2px',
  outlineColor: 'colorPalette.500',
  outlineOffset: '2px',
  outlineStyle: 'solid',
});

import styles from '@/styles/cv.module.css';

const CV = () => {
  return (
    <div className={styles.cvMain}>
      <section className={styles.sectionMain}>
        <div className={styles.introductionMain}>
          <div className={styles.introduction}>
            <h1 className={styles.name}>Sedat Can Uygur</h1>
            <p className={styles.introductionMessage}>
              Senior Software Engineer with over 8 years of experience in full stack
              development and software architecture
            </p>
            <p className={styles.location}>
              <a
                className={styles.locationLink}
                href="https://www.google.com/maps/place/Muğla,+Türkiye"
                target="_blank"
              >
                <FaLocationDot />
                Muğla, Türkiye
              </a>
            </p>
          </div>
          <Avatar.Root css={ringCss} colorPalette="pink" size="2xl">
            <Avatar.Fallback name="SCU" />
            <Avatar.Image
              src="https://avatars.githubusercontent.com/u/90511329"
              alt="Sedat Can Uygur"
            />
          </Avatar.Root>
        </div>
        <section className={styles.sectionItem}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutDescription}>
            Innovative and results-driven Senior Software Engineer with over 8 years of
            experience in full‑stack development, software architecture. Expert at
            designing and implementing resilient, scalable systems using microservices,
            cloud technologies and modern DevOps practices. Proven track record in
            delivering high‑quality solutions for enterprise clients including Vodafone,
            Under Armour and Sun & Sand Sports and driving technical excellence through
            best practices in coding, testing and system design.
          </p>
        </section>
        <section className={styles.sectionItem}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.cardHeaderItem}>
                <h3 className={styles.cardHeaderTitle}>
                  <a
                    className={styles.cardHeaderLink}
                    href="https://www.truelancer.com/freelancer/sedatuygur"
                  >
                    Freelance
                  </a>
                  <span className={styles.cardHeaderSpan}>
                    <Badge
                      variant="solid"
                      colorPalette="orange"
                      className={styles.cardHeaderBadge}
                    >
                      Remote
                    </Badge>
                  </span>
                </h3>
                <div className={styles.cardHeaderDate}>September, 2023 - Current</div>
              </div>
              <div className={styles.cardHeaderItem}>
                <h4 className={styles.experienceTitle}>Senior Software Engineer</h4>
              </div>
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ul>
                <li>
                  Architect and develop full stack solutions with an emphasis on scalable
                  microservices and resilient design.
                </li>
                <li>
                  Implement fault-tolerant and performance optimizations using patterns
                  like circuit breakers and redundancy.
                </li>
                <li>
                  Leverage cloud platforms (AWS, Google Cloud) and containerization
                  (Docker, Kubernetes) to streamline deployments.
                </li>
              </ul>
            </Card.Body>
          </Card.Root>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.cardHeaderItem}>
                <h3 className={styles.cardHeaderTitle}>
                  <a className={styles.cardHeaderLink} href="https://featuremind.com">
                    feature/mind
                  </a>
                  <span className={styles.cardHeaderSpan}>
                    <Badge
                      variant="solid"
                      colorPalette="orange"
                      className={styles.cardHeaderBadge}
                    >
                      Remote
                    </Badge>
                  </span>
                </h3>
                <div className={styles.cardHeaderDate}>October, 2021 - June, 2023</div>
              </div>
              <h4 className={styles.experienceTitle}>Senior Software Engineer</h4>
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ul>
                <li>
                  Led design, development and integration of Salesforce-based solutions on
                  Commerce Cloud and Service Cloud.
                </li>
                <li>
                  Developed end‑to‑end projects using Lightning, APEX and Salesforce
                  Flows.
                </li>
                <li>
                  Streamlined data migration processes and implemented rigorous testing
                  and documentation practices.
                </li>
              </ul>
            </Card.Body>
          </Card.Root>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.cardHeaderItem}>
                <h3 className={styles.cardHeaderTitle}>
                  <a className={styles.cardHeaderLink} href="https://www.vodafone.com.tr">
                    Vodafone
                  </a>
                  <span className={styles.cardHeaderSpan}>
                    <Badge
                      variant="solid"
                      colorPalette="cyan"
                      className={styles.cardHeaderBadge}
                    >
                      On-Site & Remote
                    </Badge>
                  </span>
                </h3>
                <div className={styles.cardHeaderDate}>March, 2020 - September, 2021</div>
              </div>
              <h4 className={styles.experienceTitle}>Senior Software Engineer</h4>
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ul>
                <li>
                  Designed and implemented ticket management and web service projects
                  using SOAP and REST APIs.
                </li>
                <li>
                  Designed scalable and service‑oriented architectures to support
                  large‑scale IT operations and enterprise workflows.
                </li>
              </ul>
            </Card.Body>
          </Card.Root>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.cardHeaderItem}>
                <h3 className={styles.cardHeaderTitle}>
                  <a className={styles.cardHeaderLink} href="https://www.kuzeypharma.com">
                    Kuzey Pharma
                  </a>
                  <span className={styles.cardHeaderSpan}>
                    <Badge
                      variant="solid"
                      colorPalette="blue"
                      className={styles.cardHeaderBadge}
                    >
                      On-Site
                    </Badge>
                  </span>
                </h3>
                <div className={styles.cardHeaderDate}>March, 2017 - February, 2020</div>
              </div>
              <h4 className={styles.experienceTitle}>Software Engineer</h4>
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ul>
                <li>
                  Designed and developed an ERP project using Java technologies, ensuring
                  robust business process automation.
                </li>
                <li>
                  Created and managed databases with T-SQL and PL/SQL to maintain data
                  integrity and performance.
                </li>
              </ul>
            </Card.Body>
          </Card.Root>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.cardHeaderItem}>
                <h3 className={styles.cardHeaderTitle}>
                  <a className={styles.cardHeaderLink} href="https://www.kreatif.net">
                    Kreatif
                  </a>
                  <span className={styles.cardHeaderSpan}>
                    <Badge
                      variant="solid"
                      colorPalette="blue"
                      className={styles.cardHeaderBadge}
                    >
                      On-Site
                    </Badge>
                  </span>
                </h3>
                <div className={styles.cardHeaderDate}>
                  December, 2015 - January, 2017
                </div>
              </div>
              <h4 className={styles.experienceTitle}>Software Engineer</h4>
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ul>
                <li>
                  Designed and developed e‑commerce websites and plugins using
                  nopCommerce, contributing to innovative online retail solutions.
                </li>
                <li>
                  Award : Saklı Orman - 1st place in the food & beverage category at the
                  14th Golden Spider Web Awards.
                </li>
              </ul>
            </Card.Body>
          </Card.Root>
        </section>
        <section className={styles.sectionItem}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <Card.Root className={styles.bgWhite}>
            <Card.Header>
              <div className={styles.educationHeaderMain}>
                <h3 className={styles.educationTitle}>
                  <a
                    className={styles.cardHeaderLink}
                    href="https://mu.edu.tr/en"
                    target="_blank"
                  >
                    Muğla Sıtkı Koçman University
                  </a>
                  <a
                    className={styles.educationLink}
                    href="https://bilgisayar.mu.edu.tr/en"
                    target="_blank"
                  >
                    Department of Computer Engineering
                  </a>
                </h3>
                <div className={styles.cardHeaderDate}>September, 2010 - June, 2015</div>
              </div>
            </Card.Header>
            <Card.Body className={styles.educationBody}>
              B.S. Computer Engineering
            </Card.Body>
          </Card.Root>
        </section>
        <section className={styles.sectionItem}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillList}>
            <Badge colorPalette="cyan">C#</Badge>
            <Badge colorPalette="cyan">Java</Badge>
            <Badge colorPalette="cyan">Python</Badge>
            <Badge colorPalette="cyan">JavaScript</Badge>
            <Badge colorPalette="cyan">TypeScript</Badge>
            <Badge colorPalette="cyan">ASP.NET Core</Badge>
            <Badge colorPalette="cyan">CSS3</Badge>
            <Badge colorPalette="cyan">SQL</Badge>
            <Badge colorPalette="cyan">MySQL</Badge>
            <Badge colorPalette="cyan">MS SQL</Badge>
            <Badge colorPalette="cyan">T-SQL</Badge>
            <Badge colorPalette="cyan">Spring</Badge>
            <Badge colorPalette="cyan">HTML</Badge>
            <Badge colorPalette="cyan">Agile</Badge>
            <Badge colorPalette="cyan">SCRUM</Badge>
            <Badge colorPalette="cyan">PL/SQL</Badge>
            <Badge colorPalette="cyan">Git</Badge>
            <Badge colorPalette="cyan">Linux</Badge>
            <Badge colorPalette="cyan">MongoDB</Badge>
            <Badge colorPalette="cyan">React</Badge>
            <Badge colorPalette="cyan">Next.js</Badge>
            <Badge colorPalette="cyan">Node.js</Badge>
            <Badge colorPalette="cyan">Salesforce</Badge>
            <Badge colorPalette="cyan">Machine Learning</Badge>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CV;
