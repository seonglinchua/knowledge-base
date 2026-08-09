// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knowledge Base',
  tagline: 'Your Comprehensive Guide to Banking Operations',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://seonglinchua.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/knowledge-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seonglinchua', // Usually your GitHub org/user name.
  projectName: 'knowledge-base', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/seonglinchua/knowledge-base/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Knowledge Base',
      hideOnScroll: true,
      logo: {
        alt: 'Bank Rulebook Logo',
        src: 'img/kb-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Topics',
          position: 'left',
          items: [
            { label: 'Loans & Credit', to: '/docs/loans' },
            { label: 'Payments', to: '/docs/payments' },
            { label: 'Treasury Operations', to: '/docs/treasury-operations' },
            { label: 'Trade Finance', to: '/docs/trade-finance' },
            { label: 'Investments', to: '/docs/investments' },
            { label: 'Operations', to: '/docs/operations' },
            { label: 'Reference', to: '/docs/reference' },
          ],
        },
        {
          to: '/docs/reference/glossary',
          label: 'Glossary',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Lending & Trade',
          items: [
            { label: 'Loans & Credit Overview', to: '/docs/loans' },
            { label: 'Trade Finance Overview', to: '/docs/trade-finance' },
            { label: 'Revolving Credit', to: '/docs/loans/revolving-credit' },
            { label: 'Letters of Credit', to: '/docs/trade-finance/letters-of-credit' },
          ],
        },
        {
          title: 'Payments & Treasury',
          items: [
            { label: 'Payments Overview', to: '/docs/payments' },
            { label: 'Treasury Operations Overview', to: '/docs/treasury-operations' },
            { label: 'FAST', to: '/docs/payments/fast' },
            { label: 'FX Deals', to: '/docs/treasury-ops/fx-deals' },
          ],
        },
        {
          title: 'Investments & Operations',
          items: [
            { label: 'Investments Overview', to: '/docs/investments' },
            { label: 'Operations Overview', to: '/docs/operations' },
            { label: 'Bond Investments', to: '/docs/investments/bond-investments' },
            { label: 'Compliance Checks', to: '/docs/operations/compliance-checks' },
          ],
        },
        {
          title: 'Reference & Resources',
          items: [
            { label: 'Reference Overview', to: '/docs/reference' },
            { label: 'Glossary', to: '/docs/reference/glossary' },
            { label: 'Formulas', to: '/docs/reference/formulas' },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/seonglinchua/knowledge-base',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Bank Rulebook Logo',
      //   src: 'img/bank-logo.svg',
      //   href: '/',
      // },
      copyright: `
        <strong>© ${new Date().getFullYear()} Knowledge Base</strong>. All rights reserved.
        <br />Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a> for banking operations reference.
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
