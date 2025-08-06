// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

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
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      logo: {
        alt: 'Bank Rulebook Logo',
        src: 'img/kb-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '� Documentation',
        },
        {
          type: 'dropdown',
          label: '📂 Quick Links',
          position: 'left',
          items: [
            { label: 'Loans', to: '/docs/loans/revolving-credit' },
            { label: 'Payments', to: '/docs/payments/swift-mt103' },
            { label: 'Treasury', to: '/docs/treasury-ops/fx-deals' },
          ],
        },
        {
          to: '/docs/reference/glossary',
          label: '📖 Glossary',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/nezha-system/bank-rulebook',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📌 Quick Access',
          items: [
            { label: 'Loans', to: '/docs/loans/revolving-credit' },
            { label: 'Payments', to: '/docs/payments/swift-mt103' },
            { label: 'Treasury', to: '/docs/treasury-ops/fx-deals' },
          ],
        },
        {
          title: '🏢 Operations',
          items: [
            { label: 'RM Process', to: '/docs/operations/rm-process' },
            { label: 'Loan Ops', to: '/docs/operations/loan-ops' },
            { label: 'Compliance Checks', to: '/docs/operations/compliance-checks' },
          ],
        },
        {
          title: '📚 Reference',
          items: [
            { label: 'Glossary', to: '/docs/reference/glossary' },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/nezha-system/bank-rulebook',
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
        <br />Crafted with ❤️ using <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
