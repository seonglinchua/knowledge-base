import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Knowledge Base"
      description="Your Comprehensive Guide to Banking Operations"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>Banking Operations Knowledge Base</h1>
          <p className={styles.heroSubtitle}>
            Your comprehensive resource for banking procedures, guidelines, and best practices
          </p>
          <div className={styles.buttons}>
            <a className="button button--secondary button--lg" href="/docs/loans/revolving-credit">
              Explore Documentation →
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Loans & Credit</h3>
                  <p>
                    Access detailed documentation on loan products, credit facilities,
                    and standardized lending processes. Stay updated with the latest
                    credit assessment guidelines.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Payment Systems</h3>
                  <p>
                    Master SWIFT messaging protocols, domestic payment systems,
                    and international transfer procedures. Learn about compliance
                    requirements and settlement processes.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Treasury Operations</h3>
                  <p>
                    Navigate through FX dealings, money market operations, and
                    repo transactions with comprehensive guides and standard
                    operating procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}