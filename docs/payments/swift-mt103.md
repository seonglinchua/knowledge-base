---
id: swift-mt103
title: SWIFT MT103
sidebar_label: SWIFT MT103
slug: /payments/swift-mt103
---

# SWIFT MT103

The MT103 is a SWIFT standard message type used to instruct a cross-border single customer credit transfer. It is one of the most widely used SWIFT messages globally, enabling banks to send payment instructions on behalf of their customers to correspondent banks worldwide.

## 🌐 Key Characteristics

- Used for international wire transfers in any currency.
- Transmitted over the SWIFT network (Society for Worldwide Interbank Financial Telecommunication).
- Supports both serial (payment travels through chain of intermediaries) and cover payment methods.
- STP (Straight-Through Processing) flag (`/STP`) enables automated processing at receiving banks.
- Carries full ordering customer and beneficiary customer details for AML compliance.
- Being phased out in favour of ISO 20022 MX messages (pacs.008) by November 2025 under SWIFT's migration roadmap.

## 📝 Key Message Fields

| Field | Tag | Description |
|---|---|---|
| Sender's Reference | :20: | Unique reference of the sending bank |
| Bank Operation Code | :23B: | Must be `CRED` for credit transfers |
| Value Date / Currency / Amount | :32A: | Settlement date, currency, amount |
| Ordering Customer | :50K: or :50A: | Payer name and account/address |
| Ordering Institution | :52A: | Sending bank BIC |
| Account With Institution | :57A: | Beneficiary's bank BIC |
| Beneficiary Customer | :59: or :59A: | Payee IBAN / account and name |
| Details of Charges | :71A: | `OUR`, `BEN`, or `SHA` |
| Remittance Information | :70: | Payment reference / invoice details |
| Regulatory Reporting | :77B: | AML / OFAC regulatory fields |

## 🛠️ Operational Workflow

1. Customer submits wire transfer instruction (branch, internet banking, or corporate API)
2. Payment operations team validates details — beneficiary, IBAN, BIC, purpose of payment
3. AML screening and sanctions check (OFAC, MAS, EU lists)
4. MT103 message constructed and authenticated via SWIFT Alliance
5. Message transmitted to correspondent/cover bank
6. Correspondent bank credits the beneficiary's bank
7. Beneficiary bank credits end customer account
8. SWIFT acknowledgement (ACK) received; payment marked as sent
9. Nostro reconciliation performed end of day

## 🧮 Example Calculation

**Scenario**: SGD 50,000 wire to a USD account in New York, charges `SHA`.

| Component | Value |
|---|---|
| Transfer amount | SGD 50,000 |
| Exchange rate | 1 USD = 1.3450 SGD |
| USD amount sent | USD 37,175.09 |
| Sending bank fee (local) | SGD 30.00 |
| Correspondent bank charge | USD 15.00 (deducted from amount, SHA) |
| Net amount received by beneficiary | USD 37,160.09 |
| SWIFT message generated | :32A: 260522USD37175,09 |

## 📋 Compliance & Monitoring

- All MT103 messages screened against OFAC, UN, MAS, and EU sanctions lists before transmission
- SWIFT Customer Security Programme (CSP) mandatory attestation annually
- Nostro account reconciliation daily — unmatched entries escalated within 24 hours
- Payment investigations (MT195/MT199) tracked to resolution within 5 business days
- Retention of all SWIFT messages for minimum 5 years (MAS Notice 626)
- Wire transfer data requirements per MAS Notice 626 (ordering and beneficiary information mandatory)
