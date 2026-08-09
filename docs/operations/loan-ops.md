---
id: loan-ops
title: Loan Operations
sidebar_label: Loan Operations
slug: /operations/loan-ops
---

# Loan Operations

Loan Operations is the back-office function responsible for the end-to-end processing of loan facilities — from documentation and disbursement through to repayment, account maintenance, and closure. Loan Ops ensures accurate and timely execution of all loan-related transactions in the core banking system.

## ⚙️ Key Responsibilities

- Loan documentation verification and system setup.
- Disbursement and drawdown processing.
- Repayment scheduling and instalment collection.
- Interest accrual and billing.
- Collateral maintenance and monitoring.
- Facility amendment, renewal, and restructuring processing.
- Loan account closure and security release.

## 🧾 Loan Lifecycle Stages

| Stage | Activity | System Action |
|---|---|---|
| Pre-disbursement | Documentation check, condition precedent clearance | Loan limit set up in CBS |
| Disbursement | Funds released to borrower account | Debit loan account, credit CASA |
| Servicing | Monthly EMI or interest collection | Auto-debit from linked CASA |
| Amendment | Repricing, limit increase, tenure extension | CBS amendment booking |
| Renewal | Annual review, facility rollover | New facility letter, CBS update |
| Closure | Full repayment, security release | Loan account closed, charge discharged |

## 🛠️ Operational Workflow

**Disbursement Process:**

1. Credit approval received from credit committee
2. Loan Ops receives facility letter signed by borrower
3. Checklist of conditions precedent (CP) verified (insurance, legal charge registration, valuation report)
4. Loan account created in core banking system (CBS)
5. Disbursement instruction authorised by two officers (maker-checker)
6. Funds credited to borrower's CASA or paid directly to third party (e.g., property developer)
7. Disbursement confirmation letter issued to borrower
8. Loan schedule generated and shared with borrower

## 🧮 Example Calculation

**Scenario**: SGD 200,000 term loan, 3 years, 6.5% p.a. fixed, monthly repayment.

Monthly EMI = P × [r(1+r)^n] / [(1+r)^n − 1]
Where: P = 200,000, r = 6.5%/12 = 0.5417%, n = 36 months

EMI = 200,000 × [0.005417 × (1.005417)^36] / [(1.005417)^36 − 1]
≈ **SGD 6,129.80/month**

| Month | Opening Balance | Interest | Principal | Closing Balance |
|---|---|---|---|---|
| 1 | 200,000.00 | 1,083.33 | 5,046.47 | 194,953.53 |
| 2 | 194,953.53 | 1,056.00 | 5,073.80 | 189,879.73 |
| ... | ... | ... | ... | ... |
| 36 | 6,096.78 | 33.02 | 6,096.78 | 0.00 |

## 📋 Compliance & Monitoring

- Maker-checker control mandatory for all disbursements and material amendments
- Credit classification considers days past due together with applicable accounting, prudential and qualitative criteria
- Collateral valuation frequency follows the asset type, risk profile, policy and applicable requirements
- Insurance policies (fire, mortgage reducing) monitored for renewal; lapse triggers force-placed insurance
- Loan documents retained under applicable legal, AML/CFT and institutional retention requirements
- Monthly portfolio report submitted to credit risk management: ageing, NPL ratio, watchlist accounts
- Applicable MAS requirements for unsecured credit and credit cards applied to products and borrowers within scope
