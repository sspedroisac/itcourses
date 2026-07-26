# The CIA Triad

The **CIA Triad** is the foundation of Information Security. It defines the three primary objectives that security professionals strive to achieve when protecting information and systems.

Despite its name, the CIA Triad has **no connection to the Central Intelligence Agency (CIA)**. The acronym stands for:

- **Confidentiality**
- **Integrity**
- **Availability**

Every security policy, technology, and best practice aims to support one or more of these three principles.

---

## Why Is the CIA Triad Important?

The CIA Triad provides a framework for evaluating the security of information systems.

Whenever a new security measure is implemented, it should answer questions such as:

- Does it protect sensitive information from unauthorized access?
- Does it ensure data remains accurate and trustworthy?
- Does it keep systems available when users need them?

Balancing these three principles is essential for effective security.

---

# Confidentiality

**Confidentiality** ensures that information is only accessible to authorized individuals.

Sensitive information should never be exposed to people who do not have permission to view it.

Examples include:

- Medical records
- Employee salaries
- Customer information
- Business contracts
- Passwords

### How Confidentiality Is Protected

Common security controls include:

- Strong passwords
- Multi-Factor Authentication (MFA)
- Encryption
- Access control
- User permissions
- Secure communication (HTTPS)

### Example

A company's payroll system should only be accessible to authorized Human Resources employees.

If an unauthorized employee can view salary information, confidentiality has been compromised.

---

# Integrity

**Integrity** ensures that information remains accurate, complete, and unaltered unless modified by an authorized user.

Users must be able to trust that the information they access is correct.

### How Integrity Is Protected

Organizations maintain integrity through:

- File permissions
- Version control
- Hash functions
- Digital signatures
- Audit logs
- Backups

### Example

Imagine a banking system where an account balance changes from **$500** to **$5,000** without authorization.

Even if no data is stolen, the integrity of the information has been violated.

---

# Availability

**Availability** ensures that authorized users can access information and systems whenever they are needed.

Even perfectly protected information has little value if it cannot be accessed.

### How Availability Is Protected

Availability is supported by:

- Regular backups
- Redundant servers
- Disaster recovery plans
- Load balancing
- System monitoring
- Hardware maintenance

### Example

An online shopping website becomes unavailable during a major sales event because its servers cannot handle the traffic.

Although customer data remains secure, users cannot complete purchases because availability has been lost.

---

# Balancing the Three Principles

The three principles work together.

Focusing too much on one principle may negatively affect another.

For example:

- Extremely strict security controls may reduce system availability.
- Making information easily accessible may reduce confidentiality.
- Poor change management may compromise data integrity.

Security professionals must find the right balance based on the organization's needs.

---

## Real-World Examples

| Scenario                                                    | Confidentiality | Integrity | Availability |
| ----------------------------------------------------------- | :-------------: | :-------: | :----------: |
| A hacker steals customer passwords.                         |       ❌        |    ✅     |      ✅      |
| An attacker changes financial records.                      |       ✅        |    ❌     |      ✅      |
| A ransomware attack encrypts company files.                 |       ❌        |    ❌     |      ❌      |
| A website crashes during peak traffic.                      |       ✅        |    ✅     |      ❌      |
| An employee accesses confidential files without permission. |       ❌        |    ✅     |      ✅      |

---

## Remember the CIA Triad

A simple way to remember the three principles is:

- **Confidentiality** → Keep information **secret**.
- **Integrity** → Keep information **correct**.
- **Availability** → Keep information **accessible**.

---

## Key Takeaways

- The CIA Triad is the foundation of Information Security.
- Confidentiality protects information from unauthorized access.
- Integrity ensures information remains accurate and trustworthy.
- Availability ensures information and systems remain accessible.
- Every security control supports one or more principles of the CIA Triad.
- Effective security requires balancing all three principles.

---

## Summary

The CIA Triad provides a simple but powerful model for understanding Information Security. Whether protecting personal information, securing business systems, or designing applications, every security decision should consider Confidentiality, Integrity, and Availability.

These three principles form the basis for nearly every security framework, standard, and best practice used in the cybersecurity industry.
