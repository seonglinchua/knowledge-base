import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/knowledge-base/__docusaurus/debug',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug', '156'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/config',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/config', '529'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/content',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/content', 'd5f'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/globalData',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/globalData', '69e'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/metadata',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/metadata', '9cf'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/registry',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/registry', 'b4f'),
    exact: true
  },
  {
    path: '/knowledge-base/__docusaurus/debug/routes',
    component: ComponentCreator('/knowledge-base/__docusaurus/debug/routes', '84a'),
    exact: true
  },
  {
    path: '/knowledge-base/markdown-page',
    component: ComponentCreator('/knowledge-base/markdown-page', '168'),
    exact: true
  },
  {
    path: '/knowledge-base/docs',
    component: ComponentCreator('/knowledge-base/docs', 'fb9'),
    routes: [
      {
        path: '/knowledge-base/docs',
        component: ComponentCreator('/knowledge-base/docs', '156'),
        routes: [
          {
            path: '/knowledge-base/docs',
            component: ComponentCreator('/knowledge-base/docs', '3b9'),
            routes: [
              {
                path: '/knowledge-base/docs/intro',
                component: ComponentCreator('/knowledge-base/docs/intro', '9dd'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/investments/bond-investments',
                component: ComponentCreator('/knowledge-base/docs/investments/bond-investments', '0c1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/investments/structured-products',
                component: ComponentCreator('/knowledge-base/docs/investments/structured-products', '657'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/investments/wealth-management',
                component: ComponentCreator('/knowledge-base/docs/investments/wealth-management', '899'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/loans/block-discounting-loan',
                component: ComponentCreator('/knowledge-base/docs/loans/block-discounting-loan', 'f37'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/loans/floor-stock-loan',
                component: ComponentCreator('/knowledge-base/docs/loans/floor-stock-loan', '294'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/loans/revolving-credit',
                component: ComponentCreator('/knowledge-base/docs/loans/revolving-credit', 'caf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/loans/term-loan',
                component: ComponentCreator('/knowledge-base/docs/loans/term-loan', '950'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/operations/compliance-checks',
                component: ComponentCreator('/knowledge-base/docs/operations/compliance-checks', '600'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/operations/loan-ops',
                component: ComponentCreator('/knowledge-base/docs/operations/loan-ops', 'e42'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/operations/rm-process',
                component: ComponentCreator('/knowledge-base/docs/operations/rm-process', 'df5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/payments/fast',
                component: ComponentCreator('/knowledge-base/docs/payments/fast', '552'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/payments/giro',
                component: ComponentCreator('/knowledge-base/docs/payments/giro', 'a73'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/payments/swift-mt103',
                component: ComponentCreator('/knowledge-base/docs/payments/swift-mt103', 'b57'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/payments/swift-mx-pacs008',
                component: ComponentCreator('/knowledge-base/docs/payments/swift-mx-pacs008', 'cf8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/reference/formulas',
                component: ComponentCreator('/knowledge-base/docs/reference/formulas', '08e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/reference/glossary',
                component: ComponentCreator('/knowledge-base/docs/reference/glossary', 'f8c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/treasury-ops/fx-deals',
                component: ComponentCreator('/knowledge-base/docs/treasury-ops/fx-deals', 'bd6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/treasury-ops/mm-deals',
                component: ComponentCreator('/knowledge-base/docs/treasury-ops/mm-deals', 'b21'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/treasury-ops/repo-deals',
                component: ComponentCreator('/knowledge-base/docs/treasury-ops/repo-deals', '4f0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/congratulations', '881'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/create-a-blog-post', '811'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/create-a-document', 'b4a'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/create-a-page', '7f8'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/deploy-your-site', '7e2'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/knowledge-base/docs/tutorial-basics/markdown-features', '2d8'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/knowledge-base/docs/tutorial-extras/manage-docs-versions', 'b0f'),
                exact: true
              },
              {
                path: '/knowledge-base/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/knowledge-base/docs/tutorial-extras/translate-your-site', 'c22'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/knowledge-base/',
    component: ComponentCreator('/knowledge-base/', 'f5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
