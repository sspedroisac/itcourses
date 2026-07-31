# SQL Injection Prevention

SQL injection happens when untrusted input is allowed to alter the meaning of a database query.

It is one of the most well-known database-related security risks.

---

## Why It Is Dangerous

SQL injection can allow attackers to:

- Read data they should not access.
- Modify or delete records.
- Bypass authentication.
- Damage application integrity.

---

## Prevention Basics

Common prevention techniques include:

- Parameterized queries.
- Prepared statements.
- Input validation.
- Least-privilege database accounts.

String-building queries with raw user input is especially risky.

---

## Key Takeaways

- SQL injection is a serious security risk.
- Safer query construction is essential.
- Parameterization is one of the strongest defenses.
- Database security depends on secure application behavior as well.
