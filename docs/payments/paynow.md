---
id: paynow
title: PayNow
sidebar_label: PayNow
slug: /payments/paynow
---

# PayNow

PayNow is Singapore's peer-to-peer fund transfer service that allows individuals and businesses to send and receive SGD instantly using proxy identifiers — eliminating the need to know the recipient's bank account number. It runs on top of the FAST infrastructure.

## ⚡ Key Characteristics

- Real-time credit, 24/7/365.
- Transfers using proxy identifiers instead of account numbers.
- SGD only; no cross-currency support.
- Fees and transaction limits are determined by the participating institution.
- Operated under the banking industry's PayNow framework using the FAST infrastructure.
- Supports both retail (PayNow Personal) and corporate (PayNow Corporate) participants.

## 🪪 Supported Proxy Types

| Proxy Type | Used By | Description |
|---|---|---|
| NRIC / FIN | Individuals | Singapore national ID or foreign ID number |
| Mobile Number | Individuals | Singapore (+65) mobile number |
| UEN | Businesses | Unique Entity Number assigned by ACRA |
| VPA | Eligible non-bank financial institution customers | Virtual Payment Address issued under the participating institution's service |

## 🛠️ Operational Workflow

**Sending a PayNow Transfer**

1. Customer enters proxy identifier (e.g. mobile number) in banking app
2. Initiating bank queries the PayNow proxy registry to resolve proxy to bank + account
3. Transfer instruction formatted and sent via FAST rails to BCS switch
4. BCS routes to receiving bank; account credited in real-time
5. Confirmation sent to both sender and receiver
6. Interbank settlement via MAS MEPS+ at end of day

**Registering a Proxy**

1. Customer links proxy (NRIC / mobile / UEN) to bank account via online/mobile banking
2. Bank submits registration to the central PayNow proxy registry (maintained by BCS)
3. Registry validates uniqueness and stores the mapping
4. Customer may link one proxy to only one bank account at a time (deregistration required to switch)

## 💡 PayNow QR (SGQR)

PayNow QR follows the Singapore Quick Response Code (SGQR) standard, which consolidates multiple payment schemes into a single QR label.

- Merchant displays a single SGQR label; customer scans with any participating bank app.
- QR encodes: proxy type, proxy value, and optionally a fixed or variable amount.
- Used at F&B, retail, hawker centres, and government service counters.

## 🧮 Example

**Illustrative scenario**: A finance team pays a registered business SGD 2,500 using its UEN.

- The payer enters the beneficiary's registered UEN.
- The payer verifies the beneficiary name returned before authorising the transfer.
- The beneficiary account is normally credited almost immediately, subject to screening and system availability.
- Any fee is determined by the payer's financial institution.

## 📋 Compliance & Monitoring

- Real-time AML and sanctions screening on each transaction
- Proxy registration subject to KYC checks at participating bank
- Suspicious transactions flagged and STR filed with STRO if warranted
- Proxy registry access audited; banks must report anomalies to BCS
- Adherence to MAS Notice 626 and ABS PayNow Participation Rules
- Corporate PayNow transactions subject to additional velocity and fraud monitoring
