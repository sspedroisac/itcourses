# SQL Injection

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what SQL Injection (SQLi) is.
- Explain how SQL Injection attacks occur.
- Recognize the potential impact of SQL Injection.
- Learn common prevention techniques.
- Understand why secure coding practices are essential for database security.

---

# What Is SQL Injection?

**SQL Injection (SQLi)** is a web application vulnerability that occurs when an attacker is able to insert malicious SQL commands into an application's database query.

If user input is not properly handled, the application may execute the attacker's SQL code instead of treating it as ordinary data.

SQL Injection is one of the most well-known and dangerous application security vulnerabilities and is included in the **OWASP Top 10** under the **Injection** category.

---

# What Is SQL?

**Structured Query Language (SQL)** is the standard language used to interact with relational databases.

Applications use SQL to:

- Retrieve data
- Insert records
- Update information
- Delete records
- Manage database objects

For example, a login page may use a SQL query to verify a user's credentials.

---

# How SQL Injection Works

Many applications accept user input through:

- Login forms
- Search boxes
- Contact forms
- URL parameters
- API requests

If this input is directly inserted into a SQL query without proper protection, an attacker may manipulate the query.

For example, instead of searching for a username, the attacker attempts to alter the query's logic.

The database cannot distinguish between trusted SQL commands and malicious input unless the application prevents it.

---

# Why SQL Injection Is Dangerous

Successful SQL Injection attacks can allow attackers to:

- Read confidential data.
- Modify database records.
- Delete information.
- Bypass authentication.
- Execute administrative operations.
- Compromise the entire application.

In severe cases, attackers may gain complete control over the application's database.

---

# Common Attack Scenarios

Attackers commonly target:

- Login forms
- Search functionality
- Product filters
- URL query parameters
- Administrative panels
- Web APIs

Any feature that interacts with a database can become vulnerable if user input is handled insecurely.

---

# Example of an Insecure Query

Consider an application that builds a SQL query by directly combining user input with SQL commands.

Example:

```sql
SELECT * FROM users
WHERE username = '<user_input>';
```

If the application inserts user input directly into the query, an attacker may alter the query's intended behavior.

The problem is **not** SQL itself—the problem is allowing untrusted input to become part of the SQL command.

---

# Root Cause

SQL Injection occurs because the application fails to separate:

- SQL commands
- User-supplied data

Instead of treating input purely as data, the application unintentionally allows it to influence the structure of the SQL query.

This is a secure coding problem rather than a database problem.

---

# Types of SQL Injection

There are several forms of SQL Injection.

## In-Band SQL Injection

The attacker sends malicious input and receives results through the same communication channel.

This is the most common type.

---

## Blind SQL Injection

The application does not display database errors or query results.

Instead, attackers infer information by observing differences in the application's behavior or response times.

---

## Out-of-Band SQL Injection

Information is retrieved through an alternative communication channel.

This type is less common and depends on specific database capabilities.

---

# Preventing SQL Injection

The most effective defense is to ensure that user input is never interpreted as SQL commands.

Developers should use secure programming techniques that clearly separate application data from SQL statements.

---

# Parameterized Queries

**Parameterized queries** (also called **prepared statements**) are the recommended defense against SQL Injection.

Instead of embedding user input directly into SQL commands, the application sends:

- The SQL statement
- The user input

as separate components.

This allows the database to treat user input strictly as data rather than executable SQL.

Parameterized queries are supported by virtually all modern programming languages and database libraries.

---

# Input Validation

Applications should validate user input before processing it.

Validation may include:

- Expected data types
- Maximum length
- Allowed characters
- Accepted value ranges

Input validation improves security but should **not** replace parameterized queries.

Both should be used together.

---

# Least Privilege

Applications should connect to databases using accounts with only the permissions they require.

For example:

- Read-only applications should not have permission to delete data.
- Public websites should rarely use database administrator accounts.

Limiting database privileges reduces the impact of a successful attack.

---

# Secure Error Handling

Detailed database error messages may reveal valuable information to attackers.

Applications should:

- Display generic error messages to users.
- Record detailed errors in secure logs for administrators.

This prevents attackers from learning about the database structure.

---

# Additional Security Measures

Organizations should also:

- Keep database software updated.
- Apply security patches promptly.
- Monitor database activity.
- Use Web Application Firewalls (WAFs).
- Perform regular security testing.
- Review application source code.

These controls complement secure coding practices.

---

# Common Misconceptions

## SQL Injection Is Not Caused by the Database

Databases execute the queries they receive.

The vulnerability exists because the application constructs SQL queries insecurely.

The database is behaving exactly as instructed.

---

## Input Validation Alone Is Not Enough

Some developers believe validating user input completely prevents SQL Injection.

While validation is important, it is not sufficient by itself.

Parameterized queries remain the primary defense.

---

# Best Practices

To prevent SQL Injection:

- Use parameterized queries or prepared statements.
- Never concatenate untrusted input into SQL statements.
- Validate all user input.
- Apply the Principle of Least Privilege.
- Keep database software updated.
- Handle database errors securely.
- Perform regular security testing.
- Review code for insecure database access.

---

# Why SQL Injection Matters

SQL Injection has been responsible for numerous real-world data breaches.

A single vulnerable application can expose:

- Customer information
- Financial records
- Authentication credentials
- Business data

Preventing SQL Injection is one of the most fundamental responsibilities of secure software development.

---

# Key Takeaways

- SQL Injection occurs when user input is interpreted as part of a SQL command.
- It is one of the most serious web application vulnerabilities.
- Successful attacks can expose, modify, or delete sensitive data.
- Parameterized queries are the most effective defense.
- Input validation complements—but does not replace—parameterized queries.
- The Principle of Least Privilege limits the impact of successful attacks.
- Secure coding practices are essential for protecting database-driven applications.
