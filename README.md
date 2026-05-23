# Banking Operations Knowledge Base

An internal reference site covering banking products, processes, and operational workflows — built with [Docusaurus v3](https://docusaurus.io/) and deployed to GitHub Pages.

**Live site:** https://seonglinchua.github.io/knowledge-base/

---

## Contents

| Section | Topics |
|---|---|
| **Loans** | Term Loan, Revolving Credit, Floor Stock Loan, Block Discounting |
| **Investments** | Bond Investments, Structured Products, Wealth Management, Equities, Unit Trusts & Funds |
| **Payments** | FAST, GIRO, SWIFT MT103, SWIFT MX pacs.008, PayNow |
| **Treasury Operations** | FX Deals, Money Market Deals, Repo Deals, ALM, Intraday Liquidity |
| **Trade Finance** | Letters of Credit, Trust Receipts, Bank Guarantees |
| **Operations** | RM Process, Loan Ops, Compliance Checks, Complaints & Grievance, BCP & DR |
| **Reference** | Formula Reference, Glossary |

---

## Local Development

```bash
npm install
npm start
```

Opens a local dev server at `http://localhost:3000/knowledge-base/`. Most changes are reflected live without restarting.

## Build

```bash
npm run build
```

Generates static output into the `build/` directory.

## Deployment

Deployment is automatic. Pushing to `main` triggers a GitHub Actions workflow that builds and publishes the site to GitHub Pages — no manual steps required.
