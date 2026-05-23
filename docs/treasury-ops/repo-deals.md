---
id: repo-deals
title: Repo Deals
sidebar_label: Repo Deals
slug: /treasury-ops/repo-deals
---

# Repo Deals

A repurchase agreement (repo) is a form of short-term secured borrowing where one party sells securities to another with an agreement to repurchase them at a specified price on a future date. The difference between the sale price and repurchase price represents the implied interest (repo rate).

## 🔐 Key Characteristics

- Economically equivalent to a collateralised loan — the seller receives cash; the buyer holds securities as collateral.
- The seller is said to do a **repo** (borrowing cash); the buyer is doing a **reverse repo** (lending cash).
- Collateral is typically high-quality liquid assets (HQLA): government bonds, MAS bills.
- Haircut applied to collateral value to absorb price volatility risk.
- Short-term tenors: overnight to 3 months (term repos can extend to 1 year).
- Governed by Global Master Repurchase Agreement (GMRA) between counterparties.

## 🧾 Deal Types

| Deal Type | Party | Cash Flow | Securities Flow |
|---|---|---|---|
| Repo | Borrower (cash receiver) | Receives cash at start; repays at maturity | Delivers securities at start; receives back at maturity |
| Reverse Repo | Lender (cash provider) | Pays cash at start; receives back at maturity | Receives securities at start; returns at maturity |
| Open Repo | Either | No fixed maturity; rolled daily | Collateral returned on demand |
| Tri-Party Repo | Either | Via custodian intermediary | Custodian manages collateral selection and substitution |

## 🛠️ Operational Workflow

1. Dealer agrees repo rate, term, collateral type, and haircut with counterparty
2. Deal booked in TMS — both legs (start and end) captured
3. GMRA confirmation sent to counterparty
4. On start date: securities delivered via DVP (Delivery vs Payment) through MAS SGS system or Euroclear
5. Cash leg settled via MEPS+ (SGD) or correspondent (USD)
6. Daily margining: if collateral market value falls below threshold, margin call issued
7. On maturity date: securities returned; cash principal + repo interest paid
8. Deal closed in TMS; P&L accrual booked

## 🧮 Example Calculation

**Scenario**: SGD 50,000,000 repo for 14 days, using SGS bonds as collateral at 2% haircut, repo rate 3.10% p.a.

| Item | Calculation | Value |
|---|---|---|
| Collateral market value | — | SGD 51,020,408 |
| Haircut (2%) | SGD 51,020,408 × 2% | SGD 1,020,408 |
| Cash lent (after haircut) | SGD 51,020,408 − 1,020,408 | **SGD 50,000,000** |
| Repo interest | 50,000,000 × 3.10% × 14/365 | **SGD 59,452.05** |
| Repurchase price | 50,000,000 + 59,452.05 | **SGD 50,059,452.05** |

## 📋 Compliance & Monitoring

- All repo counterparties must have a signed GMRA in place before trading
- Collateral eligibility checked daily — only MAS-approved HQLA accepted
- Daily mark-to-market of collateral; margin calls issued if value drops below maintenance threshold
- Repo positions reported to MAS trade repository under MAS Notice SFA 04-N02
- Concentration risk: no single collateral issuer to exceed 25% of total repo book
- Open repos reviewed daily — early termination option exercised if counterparty risk deteriorates
- Repo book contributes to LCR calculation: reverse repos as HQLA, repos as secured funding