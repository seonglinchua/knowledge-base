---
id: swift-mx-pacs008
title: SWIFT MX pacs.008
sidebar_label: SWIFT MX pacs.008
slug: /payments/swift-mx-pacs008
---

# SWIFT MX pacs.008

The pacs.008 (Financial Institution Credit Transfer) is an ISO 20022 MX message that replaces the legacy SWIFT MT103 for cross-border customer credit transfers. It carries significantly richer structured data, enabling better AML compliance, faster straight-through processing, and improved end-to-end payment transparency.

## 🔄 Key Characteristics

- Based on ISO 20022 XML schema — structured, rich data format.
- Replaces MT103 as part of SWIFT's global migration (completed November 2025 for cross-border payments).
- Supports all currencies and payment corridors via correspondent banking.
- LEI (Legal Entity Identifier) can be included for institutional parties.
- Enables full structured address fields (vs. free-text in MT103).
- Interoperable with domestic ISO 20022 systems (e.g., TIPS in Europe, CIPS in China).
- Coexists with MT103 during migration via SWIFT's translation service.

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
| Address fields | Free text (4 lines) | Structured (street, city, country) |
| IBAN support | Optional | Native element |
| LEI support | Not supported | Supported |
| Remittance data | 4 lines free text | Structured or unstructured (140 chars) |
| End-to-end tracking | Limited | SWIFT GPI UETR native |
| Data richness | Limited | High |

## 📋 Compliance & Monitoring

- All structured party fields (Debtor, Creditor) mandatory — cannot be free text or incomplete
- UETR (Unique End-to-End Transaction Reference) mandatory in all GPI messages for tracking
- Real-time status updates required under SWIFT GPI SLA (credit confirmation within agreed window)
- Sanctions screening on structured address data enables more accurate matching vs. MT103 free text
- ISO 20022 data quality monitored — truncation or unstructured fields flagged as exceptions
- MAS payment data requirements met via structured Debtor/Creditor elements (MAS Notice 626)
- Periodic attestation of SWIFT CSP (Customer Security Programme) compliance
