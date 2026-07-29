# Backup and Disaster Recovery

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand the difference between backup and disaster recovery.
- Explain why organizations need recovery strategies.
- Identify common disaster scenarios.
- Learn important recovery concepts such as RTO and RPO.
- Understand best practices for creating resilient recovery plans.

---

# What Is Backup?

A **backup** is a copy of data stored separately from the original source so it can be restored after data loss or corruption.

Backups protect against events such as:

- Accidental deletion
- Hardware failures
- Malware infections
- Ransomware attacks
- Data corruption
- Device loss

The purpose of a backup is to preserve information so it can be recovered when needed.

---

# What Is Disaster Recovery?

**Disaster Recovery (DR)** is the process of restoring IT systems, applications, and operations after a disruptive event.

While backups focus mainly on protecting data, disaster recovery focuses on restoring the entire technology environment.

Disaster recovery may include:

- Restoring servers
- Recovering applications
- Rebuilding infrastructure
- Restoring network services
- Recovering user access
- Returning business operations to normal

---

# Backup vs Disaster Recovery

Although related, backup and disaster recovery are not the same.

| Backup                            | Disaster Recovery                                        |
| --------------------------------- | -------------------------------------------------------- |
| Protects copies of data.          | Restores complete IT operations.                         |
| Focuses on data recovery.         | Focuses on business continuity.                          |
| Usually happens regularly.        | Activated after a major disruption.                      |
| Example: Restoring deleted files. | Example: Recovering systems after a data center failure. |

Backups are a critical component of disaster recovery, but they are only one part of the overall strategy.

---

# Why Disaster Recovery Matters

Organizations depend on technology to operate.

A major disruption can cause:

- Lost revenue
- Service downtime
- Data loss
- Customer dissatisfaction
- Regulatory issues
- Damage to reputation

A disaster recovery plan helps organizations restore important services as quickly as possible.

---

# Common Disaster Scenarios

Disasters can happen for many reasons.

## Hardware Failures

Examples include:

- Failed storage devices
- Server crashes
- Network equipment failures

Regular backups and redundant systems reduce the impact of hardware problems.

---

## Cybersecurity Incidents

Cyberattacks can disrupt operations.

Examples include:

- Ransomware
- Data breaches
- Malware infections
- Account compromise

Recovery strategies help organizations restore systems after security incidents.

---

## Natural Disasters

Examples include:

- Floods
- Fires
- Earthquakes
- Severe storms

Organizations often use geographically separate backup locations to reduce these risks.

---

## Human Errors

People may accidentally:

- Delete important files
- Misconfigure systems
- Disable services
- Overwrite data

Good backup and recovery processes help minimize the impact of mistakes.

---

# Disaster Recovery Plan (DRP)

A **Disaster Recovery Plan (DRP)** is a documented strategy that explains how an organization will respond to and recover from disruptions.

A DRP typically includes:

- Critical systems identification
- Recovery procedures
- Roles and responsibilities
- Communication plans
- Backup strategies
- Recovery priorities

A plan should be tested regularly to ensure it works when needed.

---

# Recovery Time Objective (RTO)

**Recovery Time Objective (RTO)** defines the maximum acceptable time a system can be unavailable after a disruption.

Example:

A company may define an RTO of four hours for an online service.

This means the service should be restored within four hours after an incident.

A shorter RTO usually requires:

- More investment
- More redundancy
- Faster recovery technologies

---

# Recovery Point Objective (RPO)

**Recovery Point Objective (RPO)** defines the maximum acceptable amount of data loss measured in time.

Example:

An organization with an RPO of one hour can tolerate losing up to one hour of data.

A smaller RPO requires:

- More frequent backups
- Continuous replication
- Additional storage resources

---

# RTO vs RPO

| Concept | Question Answered                 | Example                               |
| ------- | --------------------------------- | ------------------------------------- |
| RTO     | How quickly must systems recover? | Restore service within 2 hours.       |
| RPO     | How much data loss is acceptable? | Lose no more than 30 minutes of data. |

Both metrics help organizations design appropriate recovery strategies.

---

# Types of Disaster Recovery

Organizations may use different recovery approaches.

## Backup and Restore

The organization restores systems using available backups.

Advantages:

- Simple approach
- Lower cost

Disadvantages:

- May take longer to recover

---

## Pilot Light

A minimal version of the environment is always running.

During a disaster, additional resources are activated.

Advantages:

- Faster recovery than basic backups

Disadvantages:

- Requires additional infrastructure

---

## Warm Standby

A partially operational backup environment is maintained.

Advantages:

- Faster recovery
- Reduced downtime

Disadvantages:

- Higher cost than pilot light solutions

---

## Hot Site

A fully operational duplicate environment is maintained and ready for immediate use.

Advantages:

- Very fast recovery

Disadvantages:

- Expensive to maintain

---

# Backup Strategies for Disaster Recovery

A strong disaster recovery strategy may include:

- Regular backups
- Off-site storage
- Cloud backups
- Encryption
- Backup testing
- Version history
- Immutable backups

No single backup location should be the only protection against disaster.

---

# The 3-2-1 Backup Strategy

A widely recommended approach is the **3-2-1 backup rule**:

- Keep **3 copies** of important data.
- Store them on **2 different types of media**.
- Keep **1 copy off-site or offline**.

Example:

- Original files on a workstation.
- Backup on a local storage device.
- Backup stored in a separate cloud environment.

This protects against many types of failures.

---

# Testing Disaster Recovery Plans

A recovery plan that has never been tested may fail during a real emergency.

Organizations should perform:

- Backup restoration tests
- Recovery simulations
- Tabletop exercises
- Failover tests

Testing helps identify:

- Missing procedures
- Incorrect configurations
- Recovery delays
- Communication problems

---

# Business Continuity

**Business Continuity (BC)** focuses on keeping essential operations running during and after a disruption.

Disaster recovery is a component of business continuity.

Business continuity may include:

- Alternative work locations
- Communication strategies
- Manual processes
- Employee safety procedures
- Critical business priorities

---

# Best Practices

To improve backup and disaster recovery:

- Identify critical systems and data.
- Define RTO and RPO requirements.
- Maintain regular backups.
- Store backups separately from production systems.
- Encrypt backup data.
- Test recovery procedures regularly.
- Protect backups from ransomware.
- Document recovery responsibilities.
- Update plans as technology changes.

---

# Why Backup and Disaster Recovery Matter

Cybersecurity is not only about preventing attacks.

Organizations must also be prepared to recover when prevention fails.

Effective backup and disaster recovery strategies help:

- Restore operations quickly.
- Reduce downtime.
- Protect important data.
- Minimize financial impact.
- Improve organizational resilience.

A strong recovery capability is an essential part of modern information security.

---

# Key Takeaways

- Backups protect copies of data, while disaster recovery restores complete IT operations.
- Disaster recovery plans define how organizations respond to major disruptions.
- RTO measures acceptable downtime, while RPO measures acceptable data loss.
- The 3-2-1 backup strategy improves resilience against data loss.
- Recovery plans must be tested regularly to ensure effectiveness.
- Business continuity and disaster recovery work together to maintain operations during crises.
- A strong recovery strategy helps organizations survive and recover from cybersecurity incidents and other disasters.
