---
id: formulas
title: Formulas Reference
sidebar_label: Formulas
slug: /reference/formulas
---

# Formulas Reference

A quick-reference guide to key mathematical formulas used across banking operations.

---

## Loans

### Equated Monthly Instalment (EMI)

```
EMI = P × [r(1+r)^n] / [(1+r)^n − 1]
```

| Variable | Description |
|---|---|
| P | Principal loan amount |
| r | Monthly interest rate (Annual rate ÷ 12) |
| n | Number of monthly instalments |

**Example**: SGD 100,000 at 8% p.a. for 60 months → EMI ≈ SGD 2,027.64

---

### Simple Interest

```
Interest = P × r × (t / 365)
```

| Variable | Description |
|---|---|
| P | Principal |
| r | Annual interest rate |
| t | Number of days |

**Used for**: Revolving credit, overdrafts, SGD money market deals (act/365).

---

### Compound Interest

```
A = P × (1 + r/n)^(n×t)
```

| Variable | Description |
|---|---|
| A | Final amount |
| P | Principal |
| r | Annual interest rate |
| n | Compounding periods per year |
| t | Time in years |

---

### Debt Service Coverage Ratio (DSCR)

```
DSCR = Net Operating Income / Total Annual Debt Service
```

An acceptable threshold is set by the lender and facility terms; 1.25× is a common illustrative covenant. A value below 1.0× indicates that the defined income measure does not cover the defined debt service.

---

### Loan-to-Value (LTV)

```
LTV (%) = (Loan Amount / Collateral Value) × 100
```

**Example**: SGD 800K loan against SGD 1M property → LTV = 80%

---

## Fixed Income / Bonds

### Bond Price

```
P = Σ [ C / (1+y)^t ] + F / (1+y)^n
```

| Variable | Description |
|---|---|
| C | Coupon payment per period |
| F | Face value (principal) |
| y | Yield per period |
| n | Number of periods |

---

### Current Yield

```
Current Yield (%) = (Annual Coupon / Market Price) × 100
```

**Example**: SGD 1,000 bond paying SGD 50/year, priced at SGD 950 → Current Yield = 5.26%

---

### Macaulay Duration

```
Duration = Σ [ t × PV(Cash Flow at t) ] / Bond Price
```

**Interpretation**: Macaulay duration is a weighted-average timing measure. Modified duration, not Macaulay duration alone, is used to approximate price sensitivity to a small yield change.

---

### Modified Duration

```
Modified Duration = Macaulay Duration / (1 + y)

Estimated price change: ΔP ≈ −Modified Duration × Δy × P
```

---

### PV01 (Dollar Value of 1 Basis Point)

```
PV01 = Modified Duration × Portfolio Value × 0.0001
```

**Example**: Modified Duration = 4.5, Portfolio = SGD 10,000,000 → PV01 = SGD 4,500

---

## Foreign Exchange

### FX Forward Rate

```
Forward Rate = Spot Rate × (1 + r_quote × year fraction) / (1 + r_base × year fraction)
```

| Variable | Description |
|---|---|
| r_quote | Interest rate of the quote currency |
| r_base | Interest rate of the base currency |
| year fraction | Time to maturity calculated using the applicable day-count convention for each currency |

**Example**: USD/SGD spot = 1.3450, USD rate = 5.35%, SGD rate = 3.20%, 90 days → Forward ≈ 1.3378

---

### Forward Points

```
Forward Points ≈ Spot × (r_quote − r_base) × year fraction
```

For a quote expressed as units of quote currency per unit of base currency, positive points increase the forward quotation and negative points decrease it. Always state the currency quotation and day-count conventions.

---

### Cross Rate

```
USD/SGD = USD/EUR ÷ SGD/EUR
```

Used when a direct quote between two currencies is unavailable; derived via a common base (usually USD).

---

## Money Market

### Interbank Interest — SGD (Act/365)

```
Interest = P × r × (t / 365)
```

### Interbank Interest — Common Act/360 Convention

```
Interest = P × r × (t / 360)
```

**Example**: USD 10,000,000 at 5.10% for 30 days on Act/360 → Interest = USD 42,500. Confirm the currency, product and contract convention before applying a basis.

---

## Repo

### Repurchase Price

```
Repurchase Price = Purchase Price × (1 + r × t/360)
```

### Collateral Required (after Haircut)

```
Collateral Market Value = Cash Lent / (1 − Haircut %)
```

**Example**: Cash lent = SGD 50M, Haircut = 2% → Collateral required = SGD 51,020,408

---

## Liquidity Ratios

### Liquidity Coverage Ratio (LCR)

```
LCR = Stock of HQLA / Total Net Cash Outflows (30-day stress)
```

### Net Stable Funding Ratio (NSFR)

```
NSFR = Available Stable Funding (ASF) / Required Stable Funding (RSF)
```

---

## Credit Risk

### Gearing Ratio

```
Gearing = Total Debt / Total Equity
```

### Interest Coverage Ratio (ICR)

```
ICR = EBIT / Interest Expense
```

The acceptable threshold depends on the borrower, industry and credit policy. The ratio measures the defined earnings available to cover interest expense.

---

## Quick Reference Card

| Formula | Used In |
|---|---|
| EMI | Term loans, mortgages |
| Simple Interest (act/365) | Revolving credit, MM deals (SGD) |
| Simple Interest (act/360) | MM deals (USD, EUR) |
| DSCR | Credit assessment |
| LTV | Collateral adequacy |
| Bond Price | Fixed income valuation |
| Modified Duration | Interest rate risk |
| PV01 | Bond portfolio risk |
| Forward Rate | FX hedging |
| Repurchase Price | Repo deals |
| LCR / NSFR | Liquidity reporting |
