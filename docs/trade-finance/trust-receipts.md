---
id: trust-receipts
title: Trust Receipts (TR)
sidebar_label: Trust Receipts
slug: /trade-finance/trust-receipts
---

# Trust Receipts (TR)

A Trust Receipt (TR) is a short-term trade finance facility that allows a bank's customer (importer/trader) to take possession of goods or shipping documents before payment is made to the bank. The customer holds the goods in trust for the bank and is obligated to sell the goods and repay the TR upon maturity.

## 📌 Key Concepts

| Term | Definition |
|---|---|
| Trust Receipt | Legal document where customer acknowledges holding goods/documents on behalf of the bank |
| TR Tenor | Repayment period — typically 30, 60, or 90 days |
| TR Limit | Credit facility cap on the total TR outstanding at any time |
| Goods Financing | TR used to finance inventory before goods are sold |
| Import Financing | TR drawn to retire import LC documents and take delivery |
| Self-Liquidating | TR is repaid from proceeds of the sale of goods financed |

## 🏦 Purpose & Use Cases

- **Import LC retirement**: Customer draws TR to pay the bank for LC documents, enabling goods pickup without immediate cash outflow
- **Open account trade**: Supplier delivers goods on credit; buyer arranges TR to bridge the payment gap
- **Inventory financing**: Trader draws TR to hold stock; repays when goods are sold
- **Back-to-back**: Customer buys on TR and sells to end buyer; export proceeds repay TR

## 🛠️ TR Drawdown Workflow

1. Shipment arrives; issuing bank receives and examines shipping documents
2. Customer presents TR application requesting documents release
3. Bank checks: TR limit availability, document compliance, customer credit standing
4. Customer signs TR agreement — acknowledging goods held in trust for bank
5. Bank releases documents; customer uses bill of lading to collect goods from port
6. Customer processes / sells goods within TR tenor
7. On maturity date: customer repays TR principal + interest from sales proceeds
8. TR closed in system; limit restored

## 🧮 TR Interest Calculation

**Simple Interest**
```
Interest = Principal x Interest Rate x (Tenor / 360)

Example:
TR amount: SGD 200,000
Interest rate: 4.5% per annum
Tenor: 60 days

Interest = 200,000 x 0.045 x (60 / 360) = SGD 1,500
Total repayment = SGD 201,500 on maturity
```

**TR with Rollover**
```
If customer requests rollover (extension):
New principal = Original TR amount
New interest calculated from rollover date at prevailing rate
Rollover fee may apply (bank-specific policy)
```

## ⚠️ Risk Indicators & Controls

| Risk | Control |
|---|---|
| Goods not sold; customer cannot repay | TR limit sized against customer's working capital cycle; facility review |
| Customer diverts goods proceeds | TR proceeds clause in agreement; account monitoring |
| Collateral (goods) loses value | Goods insurance required; TR haircut applied for specific commodity risks |
| Evergreening | TR age analysis monitored; long-outstanding TRs escalated for review |
| TBML (Trade-Based Money Laundering) | Goods, pricing, and counterparty checks before TR approval |

## 📋 Compliance & Controls

- TR facility approved as part of overall trade finance credit facility; annual review
- AML screening on trade counterparties and countries involved
- Over/under-invoicing checks: invoice price verified against market benchmarks for commodity TRs
- MAS Notice 626 compliance: customer KYC and CDD maintained and updated
- TR agreements signed and archived; copies retained for minimum 5 years
- Non-performing TRs (overdue > 90 days) classified as non-performing advances; provisioning applied
- Regularisation: overdue TRs escalated to credit risk management within defined SLA
