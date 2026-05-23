---
id: mm-deals
title: Money Market Deals
sidebar_label: MM Deals
slug: /treasury-ops/mm-deals
---

# Money Market Deals

Money market deals are short-term borrowing and lending transactions between financial institutions, typically with maturities ranging from overnight to one year. They are used to manage short-term liquidity positions, fund balance sheet requirements, and optimise the bank's cost of funds.

## 💰 Key Characteristics

- Short-term tenors: overnight (O/N), tom-next (T/N), spot-next (S/N), 1 week to 12 months.
- Conducted as unsecured interbank placements or borrowings.
- Rates referenced to benchmark rates: SORA (SGD), SOFR (USD), €STR (EUR).
- No collateral required for unsecured deals — counterparty credit risk applies.
- Placements and borrowings must stay within approved counterparty and currency limits.
- Interest calculated on an actual/360 or actual/365 basis depending on currency.

## 🧾 Deal Types

| Deal Type | Description |
|---|---|
| Interbank Placement | Bank lends excess funds to another bank |
| Interbank Borrowing | Bank raises short-term funds from another bank |
| Call Deposit | Overnight or on-demand deposit with another institution |
| Notice Deposit | Deposit with agreed notice period (e.g., 7 days) before withdrawal |
| Fixed Deposit (Wholesale) | Fixed term deposit between institutions (7 days to 12 months) |
| Certificate of Deposit (CD) | Negotiable short-term paper issued by a bank |

## 🛠️ Operational Workflow

1. Treasury dealer identifies surplus or deficit liquidity position from cash flow forecast
2. Rate agreed with counterparty (direct, via broker, or electronic platform e.g. Bloomberg TPCD)
3. Deal ticket captured in treasury management system (TMS)
4. Confirmation sent via SWIFT MT320 (fixed loan/deposit confirmation)
5. Counterparty confirmation received and matched
6. Payment instructions issued on value date — principal transferred via MEPS+ (SGD) or CHIPS/Fedwire (USD)
7. Interest accrued daily in financial accounting system
8. On maturity: principal + interest received/paid and deal closed in TMS

## 🧮 Example Calculation

**Scenario**: SGD 20,000,000 placed with a counterparty bank for 7 days at SORA + 15 bps.

SORA Rate (overnight) = 3.05%
All-in rate = 3.05% + 0.15% = **3.20% p.a.**

Interest = Principal × Rate × Days / 365
= 20,000,000 × 3.20% × 7 / 365
= **SGD 12,274.52**

Total Maturity Proceeds = SGD 20,000,000 + SGD 12,274.52 = **SGD 20,012,274.52**

## 📋 Compliance & Monitoring

- Counterparty credit limits reviewed and approved annually by credit committee
- Intraday and overnight exposure tracked against limits; breaches escalated immediately
- Daily liquidity coverage ratio (LCR) and net stable funding ratio (NSFR) reporting to MAS
- All MM deals reported to MAS trade repository under MAS Notice SFA 04-N02
- Interest rate risk: sensitivity of MM book to rate movements monitored via PV01
- SORA publication monitored daily — discrepancies from expected levels flagged to risk
- Nostro and settlement account reconciliation performed end of each business day
