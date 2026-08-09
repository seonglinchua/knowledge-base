---
id: swift-mx-pacs008
title: SWIFT MX pacs.008
sidebar_label: SWIFT MX pacs.008
slug: /payments/swift-mx-pacs008
---

# SWIFT MX pacs.008

The pacs.008 (FI-to-FI Customer Credit Transfer) is an ISO 20022 MX message used between financial institutions for customer credit transfers. It carries richer structured data that can improve screening, straight-through processing, reconciliation, and payment transparency.

## 🔄 Key Characteristics

- Based on ISO 20022 XML schema — structured, rich data format.
- Is the principal ISO 20022 message for in-scope cross-border customer credit transfers following the end of coexistence in November 2025.
- Supports all currencies and payment corridors via correspondent banking.
- LEI (Legal Entity Identifier) can be included for institutional parties.
- Supports structured, hybrid and permitted unstructured address data according to the applicable implementation phase and usage guidelines.
- Interoperable with domestic ISO 20022 systems (e.g., TIPS in Europe, CIPS in China).
- Limited contingency conversion and defined scope exceptions may apply under Swift's post-migration roadmap.

## 📝 Key Message Elements

| XML Element | Description |
|---|---|
| `GrpHdr/MsgId` | Unique message identifier |
| `GrpHdr/CreDtTm` | Message creation date and time |
| `GrpHdr/SttlmInf/SttlmMtd` | Settlement method (INDA, INGA, COVE, CLRG) |
| `CdtTrfTxInf/IntrBkSttlmAmt` | Interbank settlement currency and amount |
| `CdtTrfTxInf/IntrBkSttlmDt` | Value date |
| `CdtTrfTxInf/Dbtr` | Ordering customer (structured name and address) |
| `CdtTrfTxInf/DbtrAgt` | Ordering institution BIC |
| `CdtTrfTxInf/CdtrAgt` | Beneficiary's bank BIC |
| `CdtTrfTxInf/Cdtr` | Beneficiary customer (structured) |
| `CdtTrfTxInf/CdtrAcct/Id/IBAN` | Beneficiary IBAN |
| `CdtTrfTxInf/RmtInf/Ustrd` | Unstructured remittance information |
| `CdtTrfTxInf/ChrgBr` | Charge bearer (DEBT=OUR, CRED=BEN, SHAR=SHA) |

## 🛠️ Operational Workflow

1. Payment instruction received from customer via online banking or corporate API
2. Core banking system constructs ISO 20022 pacs.008 XML payload
3. Schema validation against ISO 20022 XSD (rejected if malformed)
4. AML and sanctions screening on all structured parties
5. Message signed and transmitted via SWIFT Alliance or API gateway
6. Correspondent bank receives pacs.008, processes and forwards or credits beneficiary
7. pacs.002 (payment status report) received confirming acceptance or rejection
8. End-to-end tracking via SWIFT GPI (gpi Tracker — unique end-to-end transaction reference UETR)
9. Nostro reconciliation and pacs.009 cover payment matching

## 🧮 Comparison: MT103 vs pacs.008

| Feature | MT103 | pacs.008 |
|---|---|---|
| Format | SWIFT FIN (proprietary) | ISO 20022 XML |
| Address fields | Primarily free-text options | Structured or permitted hybrid data under current usage guidelines |
| IBAN support | Optional | Native element |
| LEI support | Not supported | Supported |
| Remittance data | Limited free text | Richer structured and unstructured elements, subject to usage guidelines |
| End-to-end tracking | Limited | SWIFT GPI UETR native |
| Data richness | Limited | High |

## 📋 Compliance & Monitoring

- Mandatory data elements and address formats follow the applicable CBPR+ usage guidelines and implementation date
- UETR and tracking requirements are applied where required by the relevant Swift service and message flow
- Status and confirmation messages are handled under the applicable service rules
- Sanctions screening on structured address data enables more accurate matching vs. MT103 free text
- ISO 20022 data quality monitored — truncation or unstructured fields flagged as exceptions
- MAS payment data requirements met via structured Debtor/Creditor elements (MAS Notice 626)
- Periodic attestation of SWIFT CSP (Customer Security Programme) compliance
