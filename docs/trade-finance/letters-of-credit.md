---
id: letters-of-credit
title: Letters of Credit (LC)
sidebar_label: Letters of Credit
slug: /trade-finance/letters-of-credit
---

# Letters of Credit (LC)

A Letter of Credit (LC) is a bank-issued instrument that guarantees payment to an exporter (beneficiary) on behalf of an importer (applicant), provided the exporter presents compliant documents within the stipulated terms. LCs are governed by ICC Uniform Customs and Practice for Documentary Credits (UCP 600).

## 📌 Key Parties

| Party | Role |
|---|---|
| Applicant | Importer who requests the bank to issue the LC |
| Issuing Bank | Applicant's bank; issues the LC and bears payment obligation |
| Beneficiary | Exporter who receives payment upon compliant document presentation |
| Advising Bank | Beneficiary's bank; authenticates and forwards the LC to the beneficiary |
| Confirming Bank | Adds its own payment guarantee to the LC (used when issuing bank risk is a concern) |
| Negotiating Bank | Examines documents and may advance funds to beneficiary before payment from issuing bank |

## 📄 LC Types

| Type | Description |
|---|---|
| Sight LC | Payment due immediately upon presentation of compliant documents |
| Usance (Tenor) LC | Deferred payment — e.g. 60 days, 90 days after sight or bill of lading date |
| Revolving LC | Reinstates automatically for repeat shipments |
| Transferable LC | Beneficiary can transfer LC rights to a third party (e.g. supplier) |
| Standby LC | Functions as a guarantee; drawn only if applicant defaults (similar to a bank guarantee) |
| Back-to-Back LC | New LC issued using an existing LC as collateral; common in middleman trade |

## 🛠️ LC Issuance Workflow

**Import LC (Issuing Bank's Perspective)**

1. Applicant submits LC application with trade contract, pro-forma invoice, and credit facility details
2. Bank assesses credit risk; LC amount charged against applicant's trade finance line
3. LC drafted and issued via SWIFT MT700 to the advising bank in the exporter's country
4. Advising bank authenticates LC and delivers to beneficiary
5. Beneficiary ships goods and presents documents (bill of lading, invoice, packing list, certificate of origin, etc.) to negotiating/advising bank
6. Presenting bank examines documents for compliance with LC terms (5 business day window under UCP 600)
7. Compliant documents forwarded to issuing bank via SWIFT MT750/MT754
8. Issuing bank re-examines documents; if compliant, pays beneficiary (or accepts draft for usance LC)
9. Issuing bank releases documents to applicant upon payment or acceptance
10. Applicant uses documents to take delivery of goods from shipping company

## 🧮 LC Financial Calculations

**LC Commission (Issuance Fee)**
```
LC Commission = LC Amount x Commission Rate x (Tenor / 360)

Example: LC amount USD 500,000, commission 0.5% per quarter, tenor 90 days
Commission = 500,000 x 0.005 x (90/90) = USD 2,500
```

**Usance LC — Deferred Payment**
```
Payment Date = Bill of Lading Date + Usance Tenor

Example: B/L date 15 Jan, usance 60 days
Payment due: 16 Mar

Discounting option:
Discount Amount = Face Value / (1 + Discount Rate x Days/360)
= USD 500,000 / (1 + 0.04 x 60/360) = USD 496,672
```

## ⚠️ Document Discrepancies

Common discrepancy reasons that can delay or block payment:
- Late presentation (beyond LC expiry or 21-day presentation period)
- Bill of lading not endorsed or consigned correctly
- Invoice amount or description does not match LC terms
- Partial shipment or transshipment not permitted but evidenced in documents
- Missing or incorrect certificates (e.g. inspection certificate, certificate of origin)

Discrepant documents: presenting bank notifies issuing bank; issuing bank seeks applicant's waiver. If waiver granted, payment proceeds. If refused, documents returned.

## 📋 Compliance & Controls

- Sanctions screening on all LC parties (applicant, beneficiary, advising bank, country) before issuance
- Trade-Based Money Laundering (TBML) checks: verify goods, quantity, and pricing plausibility
- Over/under-invoicing red flags reviewed against market price benchmarks
- Know Your Customer (KYC) and Customer Due Diligence (CDD) on applicant
- Compliance with MAS Notice 626 (AML/CFT) and Monetary Authority of Singapore regulations
- Documentation archived for minimum 5 years
