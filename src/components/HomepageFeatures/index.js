import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Console Library System',
    Svg: require('@site/static/img/biblio.svg').default,
    description: (
      <>
          This project is a Console-Based Library Management System designed to streamline library operations in a simple, 
          non-graphical environment. The system addresses the inefficiencies of manual processes by providing a centralized tool for tracking books, users, and loan transactions.
      </>
    ),
      buttonText: 'Read More',
      buttonLink: '/docs/Console Library System',
  },
  {
    title: 'Concert and Ticket Management System',
    Svg: require('@site/static/img/concert_ticket_management.svg').default,
    description: (
      <>
          RiwiMusic is a console application developed in C# with .NET 8.0 that provides a complete management system for concerts, clients, and ticket sales. The application allows managing musical events, maintaining a client database, and processing ticket sales transactions with advanced query and reporting functionalities.
      </>
    ),
      buttonText: 'Read More',
      buttonLink: '/docs/Console-RiwiMusic/RiwiMusic-Team1',
  },
  {
    title: 'User management system',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The User Management application is a console-based system developed with C# and .NET 8.0, designed to efficiently manage user information in a MySQL database through Entity Framework Core. It enables registering, querying, updating, and deleting users, while leveraging LINQ for flexible data queries and following a layered architecture that ensures scalability and maintainability.
      </>
    ),
      buttonText: 'Read More',
      buttonLink: '/docs/Console-creation_users/User Creation and Management',
  },
];

function Feature({Svg, title, description, buttonText, buttonLink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
          {/* Este código es el que añade el botón */}
          {buttonText && (
              <Link
                  className="button button--secondary button--sm"
                  to={buttonLink}>
                  {buttonText}
              </Link>
          )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
