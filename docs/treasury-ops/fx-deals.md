---
id: fx-deals
title: FX Deals
sidebar_label: FX Deals
slug: /treasury-ops/fx-deals
---

# FX Deals

Foreign exchange (FX) deals involve the buying or selling of one currency against another. Banks conduct FX transactions for customers (corporate and retail) and on a proprietary basis for liquidity management and trading.

## 💱 Key Characteristics

- FX trades settle in two main conventions: Spot (T+2) or same-day/next-day (TOD/TOM).
- Forward FX contracts lock in an exchange rate for a future settlement date.
- FX swaps combine a spot deal and an offsetting forward deal to manage liquidity across currencies.
- Trades are conducted Over-The-Counter (OTC) between counterparties, not exchange-traded.
- Counterparty credit risk managed via ISDA Master Agreement and Credit Support Annex (CSA).
- FX positions reported to MAS under the daily FX survey (MAS FX survey).

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
3. Confirmation sent to counterparty via SWIFT MT300 (FX confirmation) within 30 minutes
4. Counterparty confirmation matched via SWIFT Accord or manual comparison
5. Nostro account instructions sent for settlement (SWIFT MT202 for bank-to-bank, MT103 for customer)
6. Settlement on value date — payment legs exchanged via correspondent banks
7. Nostro reconciliation performed end of day
8. Open position revalued daily (mark-to-market) at WM Reuters fixing rate

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
= −0.0072 (USD at forward premium to SGD)

3-Month Forward Rate = 1.3450 − 0.0072 = **1.3378**

## 📋 Compliance & Monitoring

- All FX deals against counterparties covered by signed ISDA Master Agreement
- Counterparty credit exposure monitored against approved credit limits (pre-settlement and settlement risk)
- FX position limits (intraday and overnight) enforced by risk management
- Daily P&L and mark-to-market revaluation reported to treasury management
- MAS FX survey submission on business days by 11:00 AM
- Compliance with MAS Notice SFA 04-N02 for OTC derivatives reporting (MAS Trade Repository)
- Large FX deals (> USD 5M equivalent) require senior dealer or head of treasury approval
