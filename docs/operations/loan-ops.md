---
id: loan-ops
title: Loan Operations
sidebar_label: Loan Ops
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
≈ **SGD 6,132.87/month**

| Month | Opening Balance | Interest | Principal | Closing Balance |
|---|---|---|---|---|
| 1 | 200,000.00 | 1,083.33 | 5,049.54 | 194,950.46 |
| 2 | 194,950.46 | 1,055.98 | 5,076.89 | 189,873.57 |
| ... | ... | ... | ... | ... |
| 36 | 6,099.66 | 33.21 | 6,099.66 | 0.00 |

## 📋 Compliance & Monitoring

- Maker-checker control mandatory for all disbursements and material amendments
- Non-performing loan (NPL) classification: 90 days past due triggers NPA status (MAS Notice 612)
- Collateral valuation updated at least annually; re-valuation triggered by market events
- Insurance policies (fire, mortgage reducing) monitored for renewal; lapse triggers force-placed insurance
- All loan documents retained for minimum 5 years post-account closure
- Monthly portfolio report submitted to credit risk management: ageing, NPL ratio, watchlist accounts
- MAS MAS Notice 632 compliance: credit card and unsecured credit limits within prescribed multiples
