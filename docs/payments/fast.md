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
- Transaction limits and fees are set by each participating institution and customer channel.
- Operated by Banking Computer Services (BCS), a designated payment system operator regulated by MAS.

## 🧾 Supported Transfer Types

| Transfer Type | Description |
|---|---|
| Account-to-Account | Direct transfer using recipient's bank account number |
| PayNow (via FAST rails) | Transfer using NRIC, mobile number, UEN, or VPA |

## 🛠️ Operational Workflow

1. Initiating bank receives transfer instruction from customer (internet banking, mobile, or API)
2. Transaction screening — AML, sanctions, and transaction limit checks
3. Instruction formatted and transmitted to BCS FAST switch
4. BCS routes instruction to receiving bank in real-time
5. Receiving bank applies credit to beneficiary account
6. Confirmation returned to initiating bank and customer notified
7. Interbank obligations are settled through the scheme's settlement arrangements

## 🧮 Example Calculation

**Illustrative scenario**: A customer transfers SGD 5,000 at 11:45 PM on a Sunday.

- Instruction submitted: 23:45
- Beneficiary account credited: normally almost immediately, subject to screening and system availability
- Interbank settlement: processed under the FAST settlement timetable
- Customer fee: determined by the initiating institution
- FX conversion: Not applicable (SGD only)

## 📋 Compliance & Monitoring

- Real-time transaction screening against MAS sanctions lists and internal watchlists
- Velocity checks — multiple transfers within short windows flagged for review
- Suspicious transaction reports (STR) filed with the Suspicious Transaction Reporting Office (STRO) where required
- Daily reconciliation of FAST credits and debits against BCS settlement statements
- Adherence to MAS Notice 626 (AML/CFT for banks)
- Participation governed by Association of Banks in Singapore (ABS) FAST rulebook
