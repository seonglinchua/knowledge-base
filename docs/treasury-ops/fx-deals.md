---
id: fx-deals
title: FX Deals
sidebar_label: FX Deals
slug: /treasury-ops/fx-deals
---

# FX Deals

Foreign exchange (FX) deals involve the buying or selling of one currency against another. Banks conduct FX transactions for customers (corporate and retail) and on a proprietary basis for liquidity management and trading.

## 💱 Key Characteristics

- Spot settlement is commonly T+2, but conventions vary by currency pair and market holiday calendar; same-day and next-day settlement may also be agreed.
- Forward FX contracts lock in an exchange rate for a future settlement date.
- FX swaps combine a spot deal and an offsetting forward deal to manage liquidity across currencies.
- Trades are conducted Over-The-Counter (OTC) between counterparties, not exchange-traded.
- Counterparty credit risk is managed through approved limits and, where relevant, master agreements and collateral arrangements.
- Regulatory and statistical reports are submitted when the institution and transaction fall within scope.

## 🧾 Deal Types

| Deal Type | Description | Typical Use |
|---|---|---|
| FX Spot | Buy/sell currency for settlement in 2 business days | Customer FX conversion, trade settlement |
| FX Forward Outright | Agreed rate for future delivery date | Hedging customer export/import receivables |
| FX Swap | Simultaneous spot buy + forward sell (or vice versa) | Liquidity management, rolling forward positions |
| FX Option | Right (not obligation) to buy/sell at agreed rate | Hedging with downside protection |
| Non-Deliverable Forward (NDF) | Cash-settled forward on restricted currencies | Hedging exposure to CNY, INR, etc. |

## 🛠️ Operational Workflow

1. Dealer agrees rate with counterparty or customer (phone/Bloomberg/electronic platform)
2. Trade captured in treasury management system (TMS) — deal ticket generated
3. Confirmation sent using the agreed electronic or documented confirmation channel
4. Counterparty confirmation matched and discrepancies investigated
5. Nostro account instructions sent for settlement (SWIFT MT202 for bank-to-bank, MT103 for customer)
6. Settlement on value date — payment legs exchanged via correspondent banks
7. Nostro reconciliation performed end of day
8. Open positions revalued using the institution's approved independent market-data sources

## 🧮 Example Calculation

**Scenario**: Bank buys USD 1,000,000 against SGD spot at 1.3450.

| Leg | Currency | Amount |
|---|---|---|
| Buy (receive) | USD | 1,000,000.00 |
| Sell (pay) | SGD | 1,345,000.00 |
| Value Date | T+2 | 26 May 2026 |

**Forward premium calculation** (3-month forward, USD/SGD):

Forward Points = Spot × (SGD rate − USD rate) × Days / 360
= 1.3450 × (3.20% − 5.35%) × 90 / 360
= approximately −0.0072 under this simplified convention

3-Month Forward Rate = 1.3450 − 0.0072 = **1.3378**

## 📋 Compliance & Monitoring

- Master agreements and collateral documentation completed where required for the product and counterparty
- Counterparty credit exposure monitored against approved credit limits (pre-settlement and settlement risk)
- FX position limits (intraday and overnight) enforced by risk management
- Daily P&L and mark-to-market revaluation reported to treasury management
- Applicable MAS statistical and transaction reports submitted within their prescribed scope and timetable
- OTC derivatives reported where required under the Securities and Futures reporting framework
- Transaction approvals follow documented dealer mandates and escalation thresholds
