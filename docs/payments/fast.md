---
id: fast
title: FAST Payment
sidebar_label: FAST
slug: /payments/fast
---

# FAST Payment

FAST (Fast And Secure Transfers) is Singapore's real-time interbank fund transfer service, enabling individuals and businesses to transfer SGD funds between participating banks almost instantaneously, 24 hours a day, 7 days a week.

## ⚡ Key Characteristics

- Real-time credit (typically within seconds) to the beneficiary account.
- Available 24/7/365, including public holidays.
- Supports SGD transfers only between participating FAST member banks.
- Transaction limits vary by bank; individual transfers capped at SGD 200,000 per transaction (standard retail limit).
- No transfer fee for most retail customers (bank-specific policy).
- Operated by Banking Computer Services (BCS) and governed by MAS.

## 🧾 Supported Transfer Types

| Transfer Type | Description |
|---|---|
| Account-to-Account | Direct transfer using recipient's bank account number |
| PayNow (via FAST rails) | Transfer using NRIC, mobile number, UEN, or VPA |
| GIRO via FAST | Near-real-time GIRO credits processed over FAST |
| Corporate Payroll | Batch salary payments credited in real-time |

## 🛠️ Operational Workflow

1. Initiating bank receives transfer instruction from customer (internet banking, mobile, or API)
2. Transaction screening — AML, sanctions, and transaction limit checks
3. Instruction formatted and transmitted to BCS FAST switch
4. BCS routes instruction to receiving bank in real-time
5. Receiving bank applies credit to beneficiary account
6. Confirmation returned to initiating bank and customer notified
7. Net settlement between banks occurs at end of day via MAS MEPS+

## 🧮 Example Calculation

**Scenario**: Customer transfers SGD 5,000 at 11:45 PM on a Sunday.

- Instruction submitted: 23:45
- BCS processing time: ~2 seconds
- Beneficiary account credited: 23:45:02
- Settlement between banks: next MEPS+ settlement cycle (T+0 intraday or T+1 morning)
- Customer fee: SGD 0 (waived for retail)
- FX conversion: Not applicable (SGD only)

## 📋 Compliance & Monitoring

- Real-time transaction screening against MAS sanctions lists and internal watchlists
- Velocity checks — multiple transfers within short windows flagged for review
- Suspicious transaction reports (STR) filed with the Suspicious Transaction Reporting Office (STRO) where required
- Daily reconciliation of FAST credits and debits against BCS settlement statements
- Adherence to MAS Notice 626 (AML/CFT for banks)
- Participation governed by Association of Banks in Singapore (ABS) FAST rulebook
