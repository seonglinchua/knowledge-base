---
id: intraday-liquidity
title: Intraday Liquidity Management
sidebar_label: Intraday Liquidity
slug: /treasury-ops/intraday-liquidity
---

# Intraday Liquidity Management

Intraday liquidity management ensures a bank has sufficient liquid funds at every point during the business day to meet payment and settlement obligations as they arise — across MEPS+, FAST, SWIFT, and other payment systems.

## 📌 Key Concepts

| Term | Definition |
|---|---|
| Intraday Liquidity | Cash or liquid assets available within the business day to fund payments |
| MEPS+ | MAS Electronic Payment System — Singapore's RTGS for interbank SGD settlements |
| RTGS | Real-Time Gross Settlement — each payment settled individually and immediately |
| Settlement Account | Bank's SGD account used to settle obligations in MEPS+ |
| Intraday Liquidity Facility | Eligible intraday liquidity made available under the payment system's rules and collateral arrangements |
| Queue Management | Ordering and releasing queued payments to optimise liquidity use |
| Gridlock | Situation where banks cannot settle because each is waiting for another to pay first |
| Peak Liquidity Demand | Time of day when outgoing payment volumes are highest |

## 🏦 Liquidity Sources During the Day

| Source | Description |
|---|---|
| Opening balance | SGD balance in MAS MEPS+ account at start of day |
| Incoming FAST/MEPS+ receipts | Payments received from other banks throughout the day |
| Maturing placements | Interbank or MAS bills maturing intraday |
| Eligible collateral or secured funding | Liquidity raised under available central-bank or market facilities |
| FX swap proceeds | SGD leg receipts from FX swaps settling intraday |

## 🛠️ Intraday Monitoring Workflow

**Morning Setup**

1. Treasury operations reviews projected intraday cash flow: expected receipts vs. outgoing payments
2. Confirm opening MEPS+ balance; compare against projected peak demand
3. Pre-fund the settlement account if projected liquidity is insufficient, using an approved funding source
4. Queue critical high-value payments for early release

**During the Day**

1. Real-time monitoring of MEPS+ position via bank's payment operations system
2. Priority payments (correspondent bank settlements, large corporate payments) released first
3. Queue management: hold lower-priority payments if liquidity is tight; release when inflows received
4. Escalate to Treasury dealer if position breaches internal intraday warning threshold
5. Use available intraday liquidity facilities, where eligible and permitted

**End of Day**

1. Resolve or cancel queued items before the applicable payment-system cut-off
2. Repay intraday credit before the applicable deadline
3. Treasury establishes the required overnight position using approved facilities or market transactions
4. EOD reconciliation: MEPS+ statement vs. internal nostro ledger
5. Intraday liquidity report filed for management and regulatory reporting

## 🧮 Key Metrics

**Intraday Liquidity Buffer**
```
Buffer = Available Intraday Liquidity - Peak Intraday Requirement (observed or stressed)

Example:
Available: Opening balance SGD 800M + Repo facility SGD 500M = SGD 1,300M
Peak observed outflow: SGD 900M
Buffer = SGD 400M
```

**Time-of-Day Payment Profile**
```
Monitor cumulative outflows by hour to identify peak windows.

Example:
09:00–10:00: SGD 300M out (SWIFT batches)
10:00–12:00: SGD 250M out (corporate settlements)
14:00–15:00: SGD 200M out (FX settlements)
Peak window: 09:00–10:00 → pre-fund accordingly
```

**Illustrative collateral capacity**
```
Available secured liquidity = Eligible collateral pledged × (1 − applicable haircut)

Example: SGD T-bills pledged SGD 600M, haircut 2%
Available secured liquidity = SGD 600M × (1 − 0.02) = SGD 588M
```

## 📋 Regulatory Requirements

- BCBS 248 intraday liquidity monitoring tools apply to internationally active banks, with national supervisors determining broader application
- MAS expects banks to maintain robust intraday liquidity frameworks with documented stress scenarios
- Internal intraday liquidity limits approved by ALCO; breaches reported to Treasury Head and Risk
- Intraday liquidity data reported internally and to supervisors at the applicable frequency
- Business Continuity Plan (BCP) must address intraday liquidity failures — including contingency access to MAS Standing Facility
