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
      label: 'Loans',
      items: [
        'loans/revolving-credit',
        'loans/term-loan',
        'loans/floor-stock-loan',
        'loans/block-discounting-loan',
      ],
    },
    {
      type: 'category',
      label: 'Investments',
      items: [
        'investments/bond-investments',
        'investments/structured-products',
        'investments/wealth-management',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        'payments/swift-mt103',
        'payments/swift-mx-pacs008',
        'payments/fast',
        'payments/giro',
      ],
    },
    {
      type: 'category',
      label: 'Treasury Operations',
      items: [
        'treasury-ops/fx-deals',
        'treasury-ops/mm-deals',
        'treasury-ops/repo-deals',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/rm-process',
        'operations/loan-ops',
        'operations/compliance-checks',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
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
