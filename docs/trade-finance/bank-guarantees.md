---
id: bank-guarantees
title: Bank Guarantees (BG)
sidebar_label: Bank Guarantees
slug: /trade-finance/bank-guarantees
---

# Bank Guarantees (BG)

A Bank Guarantee (BG) is an irrevocable undertaking by a bank to pay a specified sum to a beneficiary if the bank's customer (the principal/applicant) fails to fulfil a contractual obligation. BGs are contingent liabilities — the bank only pays if a valid demand is made.

## 📌 Key Parties

| Party | Role |
|---|---|
| Applicant (Principal) | Customer who requests the BG; the party whose obligation is being guaranteed |
| Issuing Bank | Bank that issues the BG; bears the payment obligation on demand |
| Beneficiary | Party in whose favour the BG is issued; entitled to make a demand |
| Counter-Guaranteeing Bank | In cross-border deals, a local bank may issue against a counter-guarantee from the applicant's bank |

## 📄 BG Types

| Type | Description | Common Use |
|---|---|---|
| Performance Guarantee | Guarantees contractor will complete works per contract | Construction, government tenders |
| Bid Bond / Tender Guarantee | Guarantees tenderer will honour bid if awarded | Government and corporate tenders |
| Advance Payment Guarantee | Protects buyer if seller fails to deliver after advance payment received | Large procurement contracts |
| Financial Guarantee | Guarantees repayment of a financial obligation | Loan security, credit support |
| Retention Money Guarantee | Allows contractor to receive retention monies early | Construction defects period |
| Customs Guarantee | Guarantees payment of customs duties / taxes | Warehousing, re-export |

## 🛠️ BG Issuance Workflow

1. Applicant submits BG application with underlying contract, BG wording required by beneficiary, and supporting KYC documents
2. Credit assessment: BG amount charged against applicant's contingent liability facility
3. Compliance review: beneficiary screening, country risk, purpose check (TBML)
4. BG wording reviewed by bank's legal/trade team; standardised wording used or reviewed if bespoke
5. BG issued — delivered to beneficiary directly (counter-signed hard copy) or via SWIFT MT760 (for bank-to-bank)
6. BG recorded as contingent liability on bank's books; limit utilised
7. BG expires on stated expiry date; limit released if no demand received
8. If demand received: bank validates demand is compliant; pays beneficiary; seeks reimbursement from applicant

## 🧮 BG Fee Calculations

**Commission on Issuance**
```
BG Commission = BG Amount x Commission Rate x (Validity Period in Days / 360)

Example:
BG amount: SGD 1,000,000
Commission: 1.0% per annum
Validity: 365 days

Commission = 1,000,000 x 0.01 x (365/360) = SGD 10,139
```

**Contingent Liability Capital Charge (simplified)**
```
Risk-Weighted Amount = BG Amount x CCF x Risk Weight

CCF (Credit Conversion Factor): 100% for financial guarantees, 50% for performance guarantees
Risk Weight: based on counterparty rating (e.g. 100% for unrated corporates)

Example: Financial BG SGD 1M, risk weight 100%
RWA = 1,000,000 x 100% x 100% = SGD 1,000,000
```

## ⚠️ Demand Under a BG

A BG demand is valid if:
- Made in writing before the BG expiry date
- Accompanied by required documents stated in the BG (e.g. statement of default)
- Signed by authorised signatories of the beneficiary
- Does not exceed the BG amount

**On-Demand vs. Conditional BG**
- **On-Demand**: Bank pays on compliant demand without needing to verify the underlying default. Most BGs are on-demand.
- **Conditional**: Bank requires proof of default before paying. Less common; slower resolution.

**Injunction Risk**: Applicant may seek court injunction to stop payment if they dispute the demand. Bank should seek legal advice immediately if injunction is threatened.

## 📋 Compliance & Controls

- BG facility approved as part of credit review; facility amount, tenor, and purpose approved
- Sanctions and AML screening on applicant and beneficiary before issuance
- Purpose verification: BG must support a legitimate underlying trade or contractual obligation
- Country risk: BGs issued in favour of beneficiaries in high-risk jurisdictions subject to enhanced due diligence
- BG wording reviewed to ensure demand conditions are clear and bank is not exposed to unlimited/open-ended liability
- All issued BGs tracked in trade finance system with expiry monitoring and automated alerts
- Expired BGs: original returned by beneficiary for cancellation; if original not returned, hold-over risk managed
- Records retained for minimum 5 years post-expiry
