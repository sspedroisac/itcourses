# Access Control Models

Once a user has been authenticated, the next step is determining **what they are allowed to access**. This process is known as **access control**.

Access control defines how organizations manage permissions for users, applications, and devices. A well-designed access control system helps protect sensitive information by ensuring that users can access only the resources they need.

Different organizations use different access control models depending on their security requirements.

---

## What Is Access Control?

**Access control** is the process of regulating who or what can access resources and what actions they are allowed to perform.

Resources may include:

- Files
- Databases
- Applications
- Networks
- Cloud services
- Physical facilities

Typical permissions include:

- Read
- Write
- Modify
- Delete
- Execute

Access control is a fundamental component of cybersecurity and helps enforce the **Principle of Least Privilege**.

---

## Why Access Control Matters

Without proper access control:

- Employees may access confidential information unnecessarily.
- Attackers who compromise an account may gain excessive privileges.
- Sensitive data may be accidentally modified or deleted.
- Organizations may fail to meet regulatory or compliance requirements.

Effective access control reduces both accidental and intentional security risks.

---

# Discretionary Access Control (DAC)

**Discretionary Access Control (DAC)** allows the **owner of a resource** to decide who can access it.

The owner can grant or revoke permissions for other users.

### Characteristics

- Resource owners manage permissions.
- Flexible and easy to use.
- Common in personal computers and file-sharing systems.

### Example

A user creates a document and chooses which coworkers can read or edit it.

### Advantages

- Flexible.
- Easy to manage for small environments.
- Users control their own resources.

### Disadvantages

- Difficult to manage in large organizations.
- Users may accidentally grant excessive permissions.
- Higher risk of unauthorized access.

---

# Mandatory Access Control (MAC)

**Mandatory Access Control (MAC)** is a highly restrictive model in which access decisions are made by a central authority rather than individual users.

Users cannot change permissions themselves.

MAC often relies on **security classifications** and **security clearances**.

### Example classifications

- Public
- Confidential
- Secret
- Top Secret

A user can access information only if they have the required clearance.

### Example

A government employee with a **Secret** clearance cannot access documents classified as **Top Secret**.

### Advantages

- Very strong security.
- Centralized administration.
- Ideal for highly sensitive environments.

### Disadvantages

- Less flexible.
- More complex to administer.
- Users cannot share resources freely.

---

# Role-Based Access Control (RBAC)

**Role-Based Access Control (RBAC)** assigns permissions based on a user's role within the organization.

Instead of assigning permissions to each individual, administrators assign permissions to roles.

Users inherit permissions from the roles they are assigned.

### Common roles

- Administrator
- Manager
- HR Specialist
- Accountant
- Employee
- Guest

### Example

Every employee in the Finance department automatically receives access to financial applications because of their role.

### Advantages

- Easy to manage.
- Scales well for large organizations.
- Consistent permission assignments.
- Supports compliance requirements.

### Disadvantages

- Requires careful role design.
- Users with multiple responsibilities may require multiple roles.

RBAC is one of the most widely used access control models in modern organizations.

---

# Attribute-Based Access Control (ABAC)

**Attribute-Based Access Control (ABAC)** makes access decisions using **attributes** rather than fixed roles.

Attributes may include:

- User department
- Job title
- Device type
- Geographic location
- Time of day
- Security clearance
- Resource sensitivity

Access is granted only when the defined policy conditions are satisfied.

### Example

A company policy allows employees to access payroll records only if:

- They belong to the HR department.
- They are using a company-managed device.
- They are connected through the corporate VPN.
- The request occurs during business hours.

### Advantages

- Extremely flexible.
- Supports fine-grained access control.
- Well suited for cloud environments.
- Enables context-aware security policies.

### Disadvantages

- More complex to configure.
- Policies can become difficult to manage as organizations grow.

---

# Rule-Based Access Control

In **Rule-Based Access Control**, access decisions are determined by predefined system rules.

These rules are often based on environmental conditions rather than user roles.

### Examples

- Block logins outside business hours.
- Deny access from specific countries.
- Require MFA when connecting remotely.
- Allow VPN access only from company-managed devices.

Unlike RBAC, which focuses on **who** the user is, rule-based access control focuses on **whether certain conditions are met**.

---

## Comparing Access Control Models

| Model      | Access Based On                              | Best For                                         |
| ---------- | -------------------------------------------- | ------------------------------------------------ |
| DAC        | Resource owner decisions                     | Personal computers, small organizations          |
| MAC        | Security classifications                     | Government, military, highly secure environments |
| RBAC       | User roles                                   | Most businesses and enterprises                  |
| ABAC       | User, resource, and environmental attributes | Cloud services, large enterprises                |
| Rule-Based | System-defined rules                         | Networks and security policies                   |

---

## Choosing the Right Model

Different organizations have different security needs.

For example:

- A small business may use **DAC** because it is simple and flexible.
- A military organization typically uses **MAC** to protect classified information.
- Most companies rely on **RBAC** for day-to-day permission management.
- Cloud providers often implement **ABAC** to support dynamic, context-aware access decisions.
- Security systems commonly combine **rule-based access control** with other models to enforce additional protections.

In practice, many organizations use a combination of access control models rather than relying on just one.

---

## Best Practices

To implement effective access control:

- Follow the Principle of Least Privilege.
- Review user permissions regularly.
- Remove unnecessary access promptly.
- Use Multi-Factor Authentication (MFA).
- Monitor access logs for suspicious activity.
- Grant permissions based on business needs.
- Apply separation of duties where appropriate.

These practices help reduce the risk of unauthorized access and insider threats.

---

## Key Takeaways

- **Access control** determines who can access resources and what actions they can perform.
- **DAC** allows resource owners to manage permissions.
- **MAC** uses centralized security classifications and clearances.
- **RBAC** assigns permissions based on organizational roles and is widely used in businesses.
- **ABAC** uses attributes and contextual information to make dynamic access decisions.
- **Rule-Based Access Control** enforces predefined security rules based on specific conditions.
- Many organizations combine multiple access control models to balance security, flexibility, and operational efficiency.
