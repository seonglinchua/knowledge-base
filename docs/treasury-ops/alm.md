---
id: alm
title: Asset-Liability Management (ALM)
sidebar_label: ALM
slug: /treasury-ops/alm
---

# Asset-Liability Management (ALM)

Asset-Liability Management (ALM) is the process of managing the structural balance sheet risks arising from mismatches between a bank's assets (loans, investments) and liabilities (deposits, borrowings). The ALM function sits within Treasury and reports to the Asset-Liability Committee (ALCO).

## 📌 Key Risks Managed

| Risk | Description |
|---|---|
| Interest Rate Risk in the Banking Book (IRRBB) | Risk that changes in interest rates affect net interest income (NII) or economic value of equity (EVE) |
| Liquidity Risk | Risk of being unable to meet obligations as they fall due |
| Funding Risk | Risk of not being able to refinance maturing liabilities at acceptable cost |
| Basis Risk | Risk from imperfect correlation between asset and liability rate indices |
| Repricing Risk | Mismatch in timing of asset and liability rate resets |

## 🏛️ Governance Structure

- **ALCO** (Asset-Liability Committee): Chaired by CFO or CEO; sets ALM policy and limits; meets monthly
- **Treasury ALM Desk**: Executes hedges, manages the structural book, monitors limits daily
- **Risk Management**: Independent oversight; measures and reports IRRBB and liquidity metrics
- **Internal Audit**: Periodic review of ALM framework and controls

## 🛠️ ALM Workflow

**Monthly ALCO Cycle**

1. Treasury compiles balance sheet projection — expected loan growth, deposit runoff, new funding
2. Risk prepares IRRBB reports: NII sensitivity, EVE sensitivity under rate shock scenarios (+/-100bps, +/-200bps)
3. Liquidity reports prepared: LCR, NSFR, internal stress tests
4. ALCO reviews reports, approves limit utilisation, and decides on hedging actions
5. Decisions documented in ALCO minutes; actions tracked to completion

**Hedging Execution**

1. ALM desk identifies mismatch (e.g. fixed-rate loans funded by floating-rate deposits)
2. Hedge instrument selected (interest rate swap, cross-currency swap, FX forward)
3. Hedge executed with Treasury counterparty or external bank
4. Hedge designated and documented for hedge accounting (if applicable) under FRS 109
5. Effectiveness tested monthly; ineffective portions recognised in P&L

## 🧮 Key Metrics

**Net Interest Income (NII) Sensitivity**
```
NII Sensitivity = Change in NII for a given interest rate shock scenario

Example: +100bps parallel shift
Fixed-rate assets reprice slowly; floating-rate liabilities reprice immediately
NII impact = Sum of (Asset repricing gap x rate change) - Sum of (Liability repricing gap x rate change)
```

**Economic Value of Equity (EVE)**
```
EVE = Present Value of Assets - Present Value of Liabilities

EVE Sensitivity = Change in EVE under rate shock
Measures long-term balance sheet vulnerability

Example: EVE = SGD 4.2B at current rates
Under +200bps shock: EVE = SGD 3.8B → EVE sensitivity = -SGD 400M
```

**Repricing Gap**
```
Repricing Gap = Rate-Sensitive Assets - Rate-Sensitive Liabilities (within a time bucket)

Positive gap: Asset-sensitive; NII rises when rates rise
Negative gap: Liability-sensitive; NII falls when rates rise

Example (0–3 month bucket):
RSA = SGD 10B, RSL = SGD 12B → Gap = -SGD 2B (liability-sensitive)
```

**Net Stable Funding Ratio (NSFR)**
```
NSFR = Available Stable Funding (ASF) / Required Stable Funding (RSF) x 100%

MAS minimum requirement: >= 100%

ASF: Stable deposits, long-term debt, capital
RSF: Loans, investments, undrawn commitments
```

## 📋 Regulatory Requirements

- MAS Notice 637 (Basel III): LCR minimum 100%, NSFR minimum 100%
- MAS Notice 757: Interest Rate Risk in the Banking Book (IRRBB) — outlier test threshold 15% of Tier 1 capital
- Internal limits set by ALCO for NII sensitivity, EVE sensitivity, and repricing gaps
- Stress testing conducted quarterly; results reported to Board Risk Committee
- Transfer pricing framework: Treasury charges/credits business units for funding costs and benefits
