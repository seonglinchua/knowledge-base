---
id: bond-investments
title: Bond Investments
sidebar_label: Bond Investments
slug: /investments/bond-investments
---

# Bond Investments

Bonds are fixed-income debt securities where investors lend money to an issuer (government or corporation) for a defined period in exchange for periodic coupon payments and return of principal at maturity. Banks hold bonds in their investment portfolios for liquidity management, income generation, and regulatory capital compliance.

## 📌 Key Characteristics

- Fixed maturity date (except perpetuals)
- Regular coupon payments — typically semi-annual for SGD/USD bonds
- Principal (face value) repaid at maturity
- Credit risk varies by issuer rating (AAA → D)
- Traded in secondary markets; price moves inversely to yield
- Classified under the applicable accounting standard based on the business model and contractual cash-flow characteristics, commonly at amortised cost, FVOCI or FVTPL

## 🧾 Bond Types

| Type | Description | Typical Issuer |
|---|---|---|
| Singapore Government Securities (SGS) | Sovereign debt issued by the Government of Singapore | Singapore Government |
| Corporate Bonds | Issued by companies to fund operations/expansion | Banks, corporates |
| Treasury Bills (T-Bills) | Short-term (< 1 year), zero-coupon, discounted | MAS |
| Zero-Coupon Bonds | No periodic coupons; issued at deep discount | Corporates, governments |
| Perpetual Bonds (Perps) | No maturity; pays coupon indefinitely unless called | Banks (AT1 capital) |
| Green / Sustainability Bonds | Proceeds earmarked for ESG projects | Governments, corporates |
| Floating Rate Notes (FRN) | Coupon resets periodically (e.g. SORA + spread) | Banks, agencies |

## 🛠️ Investment Workflow

1. Portfolio manager identifies investment opportunity within approved mandate
2. Credit analyst reviews issuer — rating, financials, sector outlook, covenant review
3. Investment committee approval for new issuers or large positions
4. Dealer executes trade (primary issuance or secondary market) and captures in treasury system
5. Back office confirms trade, settles via custodian (DVP — Delivery vs Payment)
6. Bond held in custody; coupon payments automatically received on payment dates
7. Valuation and accounting applied according to the instrument's classification, including amortised cost, FVOCI or FVTPL where relevant
8. Maturity: principal received; proceeds reinvested per portfolio strategy

## 🧮 Key Calculations

### Bond Pricing

A bond's fair price equals the present value of all future cash flows discounted at the market yield:

$$
P = \sum_{t=1}^{n} \frac{C}{(1 + y/m)^t} + \frac{FV}{(1 + y/m)^n}
$$

Where: $C$ = periodic coupon, $y$ = annual yield, $m$ = coupon frequency per year, $FV$ = face value, $n$ = total periods.

**Scenario**: SGD 1,000,000 corporate bond, 5% annual coupon (semi-annual), 3-year maturity, market yield 4.5%.

| Period | Cash Flow (SGD) | Discount Factor | PV (SGD) |
|---|---|---|---|
| 1 (6 m) | 25,000 | 1/(1.0225)¹ = 0.9780 | 24,451 |
| 2 (12 m) | 25,000 | 1/(1.0225)² = 0.9565 | 23,913 |
| 3 (18 m) | 25,000 | 0.9355 | 23,388 |
| 4 (24 m) | 25,000 | 0.9150 | 22,875 |
| 5 (30 m) | 25,000 | 0.8950 | 22,375 |
| 6 (36 m) | 1,025,000 | 0.8754 | 897,285 |
| **Total** | | | **SGD 1,014,287** |

**Conclusion**: Bond trades at a **premium** (price > par) because its coupon rate (5%) exceeds the market yield (4.5%).

### Yield to Maturity (YTM)

YTM is the internal rate of return (IRR) if the bond is held to maturity.

**Scenario**: Same bond purchased at **SGD 980,000** (discount to par).

$$
980{,}000 = \sum_{t=1}^{6} \frac{25{,}000}{(1 + y/2)^t} + \frac{1{,}000{,}000}{(1 + y/2)^6}
$$

Solved iteratively: $y \approx 5.75\%$ annual YTM (bond is cheap relative to its coupon — higher yield compensates).

### Macaulay Duration

Duration measures the weighted average time (in years) to receive a bond's cash flows — and thus its price sensitivity to yield changes.

$$
D_{Mac} = \frac{\sum_{t=1}^{n} t \cdot PV(CF_t)}{P}
$$

**Scenario**: 3-year bond, 5% annual coupon, YTM 4.5% (price = SGD 1,014,287 per SGD 1,000,000 face value).

| Year | Cash Flow | PV @ 4.5% | t × PV |
|---|---|---|---|
| 0.5 | 25,000 | 24,451 | 12,226 |
| 1.0 | 25,000 | 23,913 | 23,913 |
| 1.5 | 25,000 | 23,388 | 35,082 |
| 2.0 | 25,000 | 22,875 | 45,750 |
| 2.5 | 25,000 | 22,375 | 55,938 |
| 3.0 | 1,025,000 | 897,285 | 2,691,855 |
| **Sum** | | **1,014,287** | **2,864,764** |

$$
D_{Mac} = \frac{2{,}864{,}764}{1{,}014{,}287} = \mathbf{2.82\ years}
$$

**Modified Duration** (price sensitivity per 1% yield move):

$$
D_{Mod} = \frac{D_{Mac}}{1 + y/m} = \frac{2.82}{1.0225} = 2.758
$$

**Approximate price change** if yield rises by 25 bps (+0.25%):

$$
\Delta P \approx -D_{Mod} \times \Delta y \times P = -2.758 \times 0.0025 \times 1{,}014{,}287 \approx -SGD\ 6{,}998
$$

### Accrued Interest

When a bond is bought between coupon dates, the buyer pays the seller for accrued coupon since the last payment date:

```
Accrued Interest = Face Value × Coupon Rate × (Days Since Last Coupon / 360)

Example: Face Value SGD 1,000,000, coupon 5% p.a., 60 days since last coupon date
Accrued Interest = 1,000,000 × 5% × (60/360) = SGD 8,333
```

**Dirty Price** = Clean Price + Accrued Interest (total cash paid)

## 📋 Risk Management & Monitoring

| Risk Type | Description | Mitigation |
|---|---|---|
| Interest Rate Risk | Bond price falls when yields rise | Duration limits; rate hedging with IRS |
| Credit Risk | Issuer defaults on coupon or principal | Credit limits per issuer; rating triggers |
| Liquidity Risk | Bond difficult to sell in stressed markets | Liquid-asset buffers and approved haircut policy |
| Valuation Risk | Changes in market inputs affect fair value and, depending on classification, profit or loss or OCI | Independent valuation controls and portfolio limits |
| Reinvestment Risk | Coupons reinvested at lower rates | Laddered maturity profile |

- Daily mark-to-market valuation; price sourced from Bloomberg/Reuters or dealer quotes
- Credit rating downgrades below investment grade (BBB-) trigger mandatory review
- DV01 (dollar value of 1 basis point) monitored against approved limits
- Concentration limits: single issuer cap, sector cap per investment policy
- Regulatory capital and reporting treatment applied according to the institution and instrument
- Stress tests cover approved interest-rate and credit-spread scenarios at the frequency set by policy

---
