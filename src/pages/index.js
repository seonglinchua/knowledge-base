import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  BookOpen,
  ChartNoAxesCombined,
  ClipboardList,
  CreditCard,
  Folders,
  Landmark,
  Settings,
  ShieldCheck,
  Ship,
} from 'lucide-react';
import styles from './index.module.css';

const categories = [
  {
    icon: Landmark,
    title: 'Loans & Credit',
    description:
      'Term loans, revolving credit, floor stock, and block discounting — credit assessment workflows, EMI calculations, and monitoring.',
    link: '/docs/loans',
    count: 4,
  },
  {
    icon: CreditCard,
    title: 'Payments',
    description:
      'SWIFT MT103/MX pacs.008, FAST, GIRO, and PayNow — payment messaging standards, STP flows, and MAS compliance.',
    link: '/docs/payments',
    count: 5,
  },
  {
    icon: ArrowRightLeft,
    title: 'Treasury Operations',
    description:
      'FX deals, money market, repo transactions, ALM, and intraday liquidity management with mark-to-market examples.',
    link: '/docs/treasury-operations',
    count: 5,
  },
  {
    icon: Ship,
    title: 'Trade Finance',
    description:
      'Letters of credit (UCP 600), trust receipts, and bank guarantees (URDG 758) — issuance, document examination, and settlement.',
    link: '/docs/trade-finance',
    count: 3,
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Investments',
    description:
      'Bonds, equities, unit trusts, structured products, and wealth management — suitability, valuations, and portfolio ops.',
    link: '/docs/investments',
    count: 5,
  },
  {
    icon: Settings,
    title: 'Operations',
    description:
      'RM onboarding workflows, loan ops, AML/compliance checks, complaints handling, and BCP/DR procedures.',
    link: '/docs/operations',
    count: 5,
  },
  {
    icon: BookOpen,
    title: 'Reference',
    description:
      'A comprehensive glossary of banking terms and a formula library covering key ratios, bond maths, and payment calculations.',
    link: '/docs/reference',
    count: 2,
    featured: true,
  },
];

export default function Home() {
  return (
    <Layout
      title="Banking Operations Knowledge Base"
      description="Your comprehensive guide to banking procedures, guidelines, and best practices"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroText}>
              <div className={styles.heroBadge}>Procedures · Controls · Examples</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Banking Operations</span>
                <span className={styles.heroTitleAccent}>Knowledge Base</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Practical procedures, compliance checklists, and worked examples
                across key banking functions—from lending and payments to treasury,
                trade finance, and investments.
              </p>
              <div className={styles.buttons}>
                <Link
                  className={`button button--secondary button--lg ${styles.heroCtaBtn}`}
                  to="/docs/loans/revolving-credit"
                >
                  Explore loan procedures
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  className={styles.ghostButton}
                  to="/docs/reference/formulas"
                >
                  View formulas
                </Link>
              </div>
            </div>
            <nav className={styles.heroTopics} aria-labelledby="hero-topics-title">
              <p className={styles.heroGridLabel} id="hero-topics-title">Browse topics</p>
              <div className={styles.heroGrid}>
                {categories.slice(0, 6).map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link key={cat.title} className={styles.heroMiniCard} to={cat.link}>
                      <Icon className={styles.heroMiniIcon} aria-hidden="true" />
                      <span className={styles.heroMiniTitle}>{cat.title}</span>
                      <span className={styles.heroMiniCount} aria-label={`${cat.count} articles`}>
                        {cat.count}
                      </span>
                      <ArrowRight className={styles.heroMiniArrow} aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {[
                { icon: Folders, value: '7', label: 'Topic Areas' },
                { icon: ClipboardList, value: '29', label: 'Procedures' },
                { icon: ShieldCheck, value: 'MAS', label: 'Regulatory Guidance' },
                { icon: BarChart3, value: 'SGX', label: 'Market Conventions' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={styles.statItem}>
                    <Icon className={styles.statIcon} aria-hidden="true" />
                    <span className={styles.statNumber}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Browse by Category</h2>
              <p className={styles.sectionSubtitle}>
                Select a category to explore standard operating procedures,
                compliance requirements, and worked examples.
              </p>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.title}
                    className={`${styles.categoryCard} ${cat.featured ? styles.referenceCard : ''}`}
                    to={cat.link}
                  >
                    <Icon className={styles.categoryIcon} aria-hidden="true" />
                    <div className={styles.categoryContent}>
                      <h3 className={styles.categoryTitle}>{cat.title}</h3>
                      <p className={styles.categoryDesc}>{cat.description}</p>
                    </div>
                    <div className={styles.categoryFooter}>
                      <span className={styles.categoryCount}>{cat.count} articles</span>
                      <ArrowRight className={styles.categoryArrow} aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
