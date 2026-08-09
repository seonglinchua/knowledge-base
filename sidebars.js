// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Loans & Credit',
      link: {
        type: 'generated-index',
        title: 'Loans & Credit',
        description: 'Credit products, lending structures, calculations, and operating procedures.',
        slug: '/loans',
      },
      items: [
        'loans/revolving-credit',
        'loans/term-loan',
        'loans/floor-stock-loan',
        'loans/block-discounting-loan',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      link: {
        type: 'generated-index',
        title: 'Payments',
        description: 'Domestic and international payment systems, message standards, and operating controls.',
        slug: '/payments',
      },
      items: [
        'payments/fast',
        'payments/paynow',
        'payments/giro',
        'payments/swift-mt103',
        'payments/swift-mx-pacs008',
      ],
    },
    {
      type: 'category',
      label: 'Treasury Operations',
      link: {
        type: 'generated-index',
        title: 'Treasury Operations',
        description: 'Foreign exchange, money markets, liquidity, and balance-sheet management procedures.',
        slug: '/treasury-operations',
      },
      items: [
        'treasury-ops/fx-deals',
        'treasury-ops/mm-deals',
        'treasury-ops/repo-deals',
        'treasury-ops/alm',
        'treasury-ops/intraday-liquidity',
      ],
    },
    {
      type: 'category',
      label: 'Trade Finance',
      link: {
        type: 'generated-index',
        title: 'Trade Finance',
        description: 'Documentary trade products, guarantees, settlement, and examination procedures.',
        slug: '/trade-finance',
      },
      items: [
        'trade-finance/letters-of-credit',
        'trade-finance/trust-receipts',
        'trade-finance/bank-guarantees',
      ],
    },
    {
      type: 'category',
      label: 'Investments',
      link: {
        type: 'generated-index',
        title: 'Investments',
        description: 'Investment products, suitability, valuation, and wealth-management operations.',
        slug: '/investments',
      },
      items: [
        'investments/equities',
        'investments/bond-investments',
        'investments/unit-trusts',
        'investments/structured-products',
        'investments/wealth-management',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      link: {
        type: 'generated-index',
        title: 'Operations',
        description: 'Customer, credit, compliance, complaints, and business-continuity processes.',
        slug: '/operations',
      },
      items: [
        'operations/rm-process',
        'operations/loan-ops',
        'operations/compliance-checks',
        'operations/complaints',
        'operations/bcp-dr',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'Banking terminology, formulas, ratios, and calculation references.',
        slug: '/reference',
      },
      items: [
        'reference/glossary',
        'reference/formulas',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
