---
id: giro
title: GIRO
sidebar_label: GIRO
slug: /payments/giro
---

# GIRO

GIRO (General Interbank Recurring Order) is Singapore's electronic interbank payment system for batch processing of low-value, high-volume fund transfers including direct debits (bill payments) and direct credits (payroll, government disbursements).

## 🔄 Key Characteristics

- Batch processing system — not real-time; transactions are aggregated and settled in cycles.
- Supports both direct debit (pull) and direct credit (push) transactions.
- Widely used for recurring payments: utilities, insurance premiums, mortgage instalments, income tax.
- Operated by Banking Computer Services (BCS).
- Processing and settlement timing depend on the submission cycle, participating banks, and applicable non-business days.
- Governed by ABS GIRO Operating Procedures.

## 🧾 Transaction Types

| Transaction Type | Direction | Common Use Cases |
|---|---|---|
| Direct Debit | Pull from payer | Utility bills, insurance premiums, loan repayments |
| Direct Credit | Push to payee | Payroll, CPF contributions, government grants |
| GIRO Deduction Authority | Authorisation | Mandate permitting an approved billing organisation to initiate direct debits |

## 🛠️ Operational Workflow

**Direct Debit (Bill Payment):**

1. Biller submits batch debit file to their bank on agreed schedule
2. Originating bank validates file format (ABS GIRO file specifications)
3. File submitted to BCS for interbank routing
4. Receiving (debiting) bank processes debit against customer accounts
5. Failed transactions (insufficient funds, account closed) returned to originating bank
6. Interbank obligations settled under the GIRO processing timetable
7. Biller receives credit advice and exception report

## 🧮 Example Calculation

**Illustrative scenario**: A monthly mortgage GIRO deduction of SGD 3,200 is submitted for processing on the 25th of the month.

| Timeline | Event |
|---|---|
| Before the applicable cut-off | Biller submits the batch debit file |
| Processing cycle | File is validated and routed to the debiting bank |
| Value date | Debit is attempted and interbank obligations are settled |
| After processing | Biller receives the outcome and exception report |

Actual cut-off times, value dates and return handling depend on the participating bank and billing arrangement.

## 📋 Compliance & Monitoring

- GIRO mandates and transaction records retained in accordance with applicable law and the institution's retention policy
- Unauthorised debit disputes investigated under the participating bank's complaint and dispute procedures
- Daily balancing of GIRO credits and debits against BCS settlement reports
- Failed transaction (return) rate monitored; high return rates may result in biller suspension
- AML screening on large GIRO credit batches before processing
- Compliance with MAS Notice 626 and ABS GIRO Operating Procedures
