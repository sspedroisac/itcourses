# Authentication vs. Authorization

People often use the terms **authentication** and **authorization** interchangeably, but they refer to two different security processes.

In simple terms:

- **Authentication** answers the question: **"Who are you?"**
- **Authorization** answers the question: **"What are you allowed to do?"**

Both are essential for protecting systems and ensuring that users can access only the resources they are permitted to use.

---

## What Is Authentication?

**Authentication** is the process of verifying the identity of a user, device, or system.

Its purpose is to confirm that someone is who they claim to be before granting access.

Common authentication methods include:

- Usernames and passwords
- Multi-Factor Authentication (MFA)
- Fingerprint recognition
- Facial recognition
- Smart cards
- Security keys

If authentication fails, access is denied.

---

## What Is Authorization?

**Authorization** is the process of determining what an authenticated user is allowed to access or perform.

After a user's identity has been verified, the system checks their permissions.

Authorization determines whether a user can:

- Read files
- Edit documents
- Delete records
- Access administrative features
- View confidential information

Two users may successfully authenticate but have very different levels of access.

---

## Authentication Comes First

Authentication and authorization occur in a specific order.

1. The user proves their identity (**authentication**).
2. The system verifies the user's permissions (**authorization**).
3. Access is granted only to authorized resources.

Without successful authentication, authorization cannot occur.

---

## Real-World Example

Imagine entering a corporate office.

### Authentication

You show your employee ID card at the entrance.

The security guard verifies your identity.

---

### Authorization

After entering the building, your ID badge determines which areas you may access.

For example:

- Employees may enter general office areas.
- IT administrators may enter the server room.
- Visitors may only access meeting rooms.

Everyone authenticates, but not everyone is authorized to access the same locations.

---

## Online Banking Example

Consider an online banking application.

### Authentication

You sign in using:

- Username
- Password
- One-time verification code (MFA)

The bank confirms your identity.

---

### Authorization

Once logged in, the system determines what you are allowed to do.

For example, you may be authorized to:

- View your account balance.
- Transfer money from your own accounts.
- Pay bills.

However, you are **not** authorized to access another customer's accounts.

---

## Common Authorization Models

Organizations use different models to manage permissions.

### Role-Based Access Control (RBAC)

Permissions are assigned based on a user's role.

Examples:

- Administrator
- Manager
- Employee
- Guest

Instead of assigning permissions individually, users inherit the permissions associated with their role.

RBAC is one of the most widely used authorization models.

---

### Principle of Least Privilege

The **Principle of Least Privilege (PoLP)** states that users should receive only the permissions necessary to perform their jobs.

For example:

- An accountant does not need administrator access to company servers.
- A software developer does not need access to payroll records.

Limiting permissions reduces the impact of compromised accounts and insider threats.

---

## Authentication Methods vs. Authorization Controls

| Authentication                    | Authorization                    |
| --------------------------------- | -------------------------------- |
| Passwords                         | User roles                       |
| Multi-Factor Authentication (MFA) | Access Control Lists (ACLs)      |
| Biometrics                        | File permissions                 |
| Security keys                     | Security policies                |
| Smart cards                       | Role-Based Access Control (RBAC) |

Authentication verifies identity, while authorization enforces permissions.

---

## Authentication vs. Authorization

| Authentication              | Authorization                |
| --------------------------- | ---------------------------- |
| Verifies identity           | Determines permissions       |
| Happens first               | Happens after authentication |
| Answers "Who are you?"      | Answers "What can you do?"   |
| Uses credentials            | Uses access policies         |
| Grants access to the system | Grants access to resources   |

---

## Common Misconceptions

### "Logging in gives me access to everything."

Authentication only proves who you are.

Authorization determines which resources you can actually use.

---

### "Authentication and authorization are the same."

They are closely related but serve different purposes.

A user can successfully authenticate and still be denied access to a particular resource because they lack the required permissions.

---

## Best Practices

Organizations should:

- Require strong authentication using MFA.
- Apply the Principle of Least Privilege.
- Use Role-Based Access Control (RBAC).
- Regularly review user permissions.
- Remove unnecessary access promptly.
- Monitor authentication and authorization events.

These practices reduce the risk of unauthorized access and limit the impact of compromised accounts.

---

## Key Takeaways

- **Authentication** verifies a user's identity.
- **Authorization** determines what that user is allowed to access.
- Authentication always occurs before authorization.
- Authentication answers **"Who are you?"**, while authorization answers **"What are you allowed to do?"**
- Role-Based Access Control (RBAC) and the Principle of Least Privilege help organizations manage permissions securely.
- Both authentication and authorization are essential components of modern access control.
