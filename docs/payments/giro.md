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
- Settlement occurs via MAS MEPS+ on the next business day (T+1).
- Governed by ABS GIRO Operating Procedures.

## 🧾 Transaction Types

| Transaction Type | Direction | Common Use Cases |
|---|---|---|
| Direct Debit | Pull from payer | Utility bills, insurance premiums, loan repayments |
| Direct Credit | Push to payee | Payroll, CPF contributions, government grants |
| GIRO Deduction Authority | Pull authorisation | Standing instruction set up by payer with biller |
| Interbank GIRO (IBG) | Push (customer-initiated) | One-time bank transfers (slower, lower cost alternative to FAST) |

## 🛠️ Operational Workflow

**Direct Debit (Bill Payment):**

1. Biller submits batch debit file to their bank on agreed schedule
2. Originating bank validates file format (ABS GIRO file specifications)
3. File submitted to BCS for interbank routing
4. Receiving (debiting) bank processes debit against customer accounts
5. Failed transactions (insufficient funds, account closed) returned to originating bank
6. Net settlement via MEPS+ on T+1
7. Biller receives credit advice and exception report

## 🧮 Example Calculation

**Scenario**: Monthly mortgage GIRO deduction of SGD 3,200 submitted on 25th of the month.

| Timeline | Event |
|---|---|
| 25th, 11:59 PM | Biller submits batch debit file |
| 26th, 02:00 AM | BCS processes and routes to debiting bank |
| 26th, 06:00 AM | Debiting bank applies debit to customer account |
| 26th, 09:00 AM | Settlement via MEPS+ |
| 26th, 10:00 AM | Exception report for failed debits returned to biller |

Return rate target: < 0.5% of transactions

## 📋 Compliance & Monitoring

- GIRO deduction authority forms retained for minimum 5 years post-termination
- Unauthorised debit dispute resolution within 10 business days (ABS guidelines)
- Daily balancing of GIRO credits and debits against BCS settlement reports
- Failed transaction (return) rate monitored; high return rates may result in biller suspension
- AML screening on large GIRO credit batches before processing
- Compliance with MAS Notice 626 and ABS GIRO Operating Procedures
