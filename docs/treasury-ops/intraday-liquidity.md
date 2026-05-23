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
| Nostro Account | Bank's SGD account held at MAS (used for MEPS+ settlements) |
| Daylight Overdraft | Intraday credit extended by MAS to banks against eligible collateral |
| Queue Management | Ordering and releasing queued payments to optimise liquidity use |
| Gridlock | Situation where banks cannot settle because each is waiting for another to pay first |
| Peak Liquidity Demand | Time of day when outgoing payment volumes are highest |

## 🏦 Liquidity Sources During the Day

| Source | Description |
|---|---|
| Opening balance | SGD balance in MAS MEPS+ account at start of day |
| Incoming FAST/MEPS+ receipts | Payments received from other banks throughout the day |
| Maturing placements | Interbank or MAS bills maturing intraday |
| Repo / collateral | Collateral pledged to MAS for daylight overdraft facility |
| FX swap proceeds | SGD leg receipts from FX swaps settling intraday |

## 🛠️ Intraday Monitoring Workflow

**Morning Setup**

1. Treasury operations reviews projected intraday cash flow: expected receipts vs. outgoing payments
2. Confirm opening MEPS+ balance; compare against projected peak demand
3. Pre-fund MEPS+ account if opening balance is insufficient (via reverse repo with MAS or interbank borrowing)
4. Queue critical high-value payments for early release

**During the Day**

1. Real-time monitoring of MEPS+ position via bank's payment operations system
2. Priority payments (correspondent bank settlements, large corporate payments) released first
3. Queue management: hold lower-priority payments if liquidity is tight; release when inflows received
4. Escalate to Treasury dealer if position breaches internal intraday warning threshold
5. Utilise daylight overdraft facility (if needed) by pledging eligible collateral to MAS

**End of Day**

1. All MEPS+ queued items must be settled before system close (typically 6:00 PM SGT for customer payments; 8:00 PM for interbank)
2. Residual daylight overdraft must be repaid before MEPS+ close
3. Treasury locks in overnight position; excess funds placed in MAS Standing Facility or interbank overnight
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

**Daylight Overdraft Usage**
```
Max intraday overdraft = Eligible collateral pledged x applicable haircut

Example: SGD T-bills pledged SGD 600M, haircut 2%
Max overdraft = SGD 600M x (1 - 0.02) = SGD 588M
```

## 📋 Regulatory Requirements

- Basel III intraday liquidity monitoring tools (BCBS 248): banks must monitor and report intraday liquidity positions
- MAS expects banks to maintain robust intraday liquidity frameworks with documented stress scenarios
- Internal intraday liquidity limits approved by ALCO; breaches reported to Treasury Head and Risk
- Intraday liquidity data included in monthly liquidity risk reporting to senior management
- Business Continuity Plan (BCP) must address intraday liquidity failures — including contingency access to MAS Standing Facility
