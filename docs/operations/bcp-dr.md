---
id: bcp-dr
title: Business Continuity & Disaster Recovery
sidebar_label: BCP & DR
slug: /operations/bcp-dr
---

# Business Continuity & Disaster Recovery

Business Continuity Planning (BCP) and Disaster Recovery (DR) ensure that a bank can continue critical operations and recover IT systems following a disruption — whether from a technology failure, natural disaster, cyber incident, or pandemic.

## 📌 Key Concepts

| Term | Definition |
|---|---|
| BCP | Business Continuity Plan — procedures to maintain critical business functions during a disruption |
| DR | Disaster Recovery — IT-focused plan to restore systems and data after a failure |
| RTO | Recovery Time Objective — maximum acceptable time to restore a system or process after disruption |
| RPO | Recovery Point Objective — maximum acceptable data loss measured in time (e.g. last backup was 4 hours ago) |
| BIA | Business Impact Analysis — identifies critical processes, dependencies, and acceptable downtime |
| Crisis Management Team (CMT) | Senior leadership group activated during a major incident to coordinate response |
| Hot Site | Fully equipped backup data centre ready to take over immediately |
| Warm Site | Backup site with infrastructure ready but requiring some setup time |
| Cold Site | Backup facility with space and power but no pre-installed equipment |

## 🏗️ BCP Framework

**Tier Classification**

| Tier | RTO | RPO | Examples |
|---|---|---|---|
| Tier 1 (Critical) | < 4 hours | < 1 hour | Core banking, MEPS+/FAST payments, internet banking |
| Tier 2 (Important) | < 24 hours | < 4 hours | Trade finance, wealth management platform, corporate internet banking |
| Tier 3 (Normal) | < 72 hours | < 24 hours | Reporting systems, HR, internal tools |

## 🛠️ BCP Activation Workflow

**Minor Disruption (Technology / Process Failure)**

1. Incident reported to IT Service Desk and Business Continuity Officer (BCO)
2. Incident assessed against BCP trigger criteria (e.g. system unavailable > 30 minutes)
3. If triggered: BCP team activated; workaround procedures invoked (manual processing, backup channels)
4. Stakeholders notified: management, affected business units, customer communications if required
5. Recovery actions tracked; system restored within RTO
6. Post-incident review conducted; lessons captured

**Major Disruption (Site Loss / Disaster)**

1. Crisis Management Team (CMT) convened by Group CEO or delegated authority
2. Incident severity assessed; BCP invoked at department / bank-wide level
3. Staff relocated to alternate site (hot/warm site) or WFH arrangements activated
4. DR initiated for affected IT systems: failover to backup data centre
5. Critical business functions restored in priority order (Tier 1 first)
6. MAS notified within required timeframe (see regulatory requirements)
7. Ongoing status updates to CMT; customer and media communications managed
8. Gradual return to primary site once declared safe and stable

## 🧮 RTO / RPO Examples

**Core Banking System**
```
RTO = 4 hours
RPO = 15 minutes (continuous replication to DR site)

If primary data centre fails at 10:00 AM:
- DR site takeover initiated: 10:05 AM
- System available at DR site: 2:00 PM (within 4-hour RTO)
- Data loss: transactions from 9:45 AM onwards may need manual reprocessing
```

**FAST Payment Processing**
```
RTO = 2 hours
RPO = 0 (synchronous replication; no data loss)

Failover to backup payment gateway activates automatically
Manual fallback: hold payments in queue; release when system restored
```

## 🧪 Testing Requirements

| Test Type | Frequency | Scope |
|---|---|---|
| Tabletop Exercise | Annually | CMT and department BCOs walk through scenarios |
| Component DR Test | Annually | Individual system failover tested in isolation |
| Full DR Failover | Every 2 years (minimum) | All Tier 1 systems failed over to DR site simultaneously |
| Staff Alternate Site Test | Annually | Staff work from backup site for 1+ business day |
| Call Tree / Communication Test | Semi-annually | Emergency contact lists verified and tested |

## 📋 Regulatory Requirements

- MAS Technology Risk Management Guidelines: DR requirements for systems supporting critical banking services
- MAS Business Continuity Management Guidelines: BCP framework, testing frequency, CMT structure
- MAS Incident Reporting: Significant technology incidents must be reported within 1 hour of declaration; full report within 14 days
- MAS Notice 124: Outsourced service providers must also have BCP/DR arrangements; bank must audit these
- Annual BCP attestation submitted to MAS confirming testing was completed
- Board Technology Risk Committee reviews BCP/DR test results and approves recovery strategies
