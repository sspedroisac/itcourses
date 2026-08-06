# Testing Types

## 1. What Are Testing Types?

**Testing types** classify software tests according to their purpose.

While **testing levels** indicate **when** and **on which part of the system** tests are performed, **testing types** indicate **what is being evaluated**.

A single testing level may include different testing types.

For example, during system testing, functional, performance, security, and usability tests may all be performed.

---

## 2. Objectives of Testing Types

The main objectives of testing types are:

- Verify that the software meets functional requirements;
- Evaluate the system's non-functional characteristics;
- Detect specific defects;
- Improve software quality;
- Reduce risks before delivery to the customer.

---

## 3. Functional Testing

**Functional testing** verifies whether the software correctly performs the functionalities specified in the requirements.

The focus is on the external behavior of the application, without considering its internal implementation.

These tests answer the following question:

> Does the system do what it is supposed to do?

### 3.1 What Is Evaluated

- Business rules;
- Functionalities;
- Data inputs and outputs;
- System workflows;
- Functional requirements.

### 3.2 Example

In a banking system, a functional test may verify whether a transfer between accounts is completed successfully and whether the account balance is updated after the transaction.

---

## 4. Non-Functional Testing

**Non-functional testing** evaluates the quality attributes of the software.

Its purpose is not to validate functionalities, but to assess how the system behaves under different conditions.

These tests answer the following question:

> Does the system operate with the expected level of quality?

### 4.1 What Can Be Evaluated

- Performance;
- Security;
- Usability;
- Reliability;
- Compatibility;
- Scalability;
- Availability.

---

## 5. Regression Testing

**Regression Testing** verifies whether changes made to the software have introduced new defects into functionalities that previously worked correctly.

This type of testing is performed whenever there is:

- A bug fix;
- A new feature;
- Code refactoring;
- An update to libraries or dependencies.

### 5.1 Objective

Ensure that changes do not introduce unintended side effects.

### 5.2 Example

After fixing a problem on the login screen, tests are executed again on other functionalities, such as user registration and password recovery, to ensure they continue to work correctly.

---

## 6. Smoke Testing

**Smoke Testing** is a small set of tests performed to verify whether a software build is stable enough for more detailed testing.

Its objective is to quickly identify critical failures.

If Smoke Testing fails, further testing is usually suspended.

### 6.1 What Is Verified

- Application startup;
- Login;
- Core functionalities;
- Basic navigation.

### 6.2 Example

After generating a new software build, testers verify that the application starts correctly, allows user login, and performs its essential functions.

---

## 7. Sanity Testing

**Sanity Testing** verifies whether a specific change has resolved the expected issue without affecting related functionalities.

It is more focused than Smoke Testing.

While Smoke Testing evaluates the overall stability of the application, Sanity Testing focuses on a specific functionality.

### 7.1 Example

After fixing an error in the tax calculation module, a Sanity Test is performed only on that functionality to verify that the correction was successful.

---

## 8. Exploratory Testing

**Exploratory Testing** is performed without a rigid execution script.

The tester uses knowledge, experience, and creativity to explore the system in search of defects.

During its execution, learning, planning, and testing occur simultaneously.

### 8.1 Characteristics

- Does not follow detailed test cases;
- Depends on the tester's experience;
- Has a strong ability to uncover unexpected defects;
- Complements planned testing.

---

## 9. Alpha and Beta Testing

**Alpha** and **Beta Testing** are used to validate the software before its final release to users.

### 9.1 Alpha Testing

**Alpha Testing** is performed in a controlled environment, usually at the software developer's facilities.

Participants typically include:

- Developers;
- QA team;
- Customer representatives.

Its objective is to identify defects before the software is made available to external users.

### 9.2 Beta Testing

**Beta Testing** is performed by real users in a real operating environment.

Its objective is to gather feedback about the software before its official release.

Issues identified during this phase help improve the product before its final version.

---

## 10. Relationship Between Testing Levels and Testing Types

Testing levels and testing types are complementary concepts.

Testing levels indicate **at which stage** the software is being tested.

Testing types indicate **which characteristic** is being evaluated.

For example:

| Level       | Possible Testing Types                  |
| ----------- | --------------------------------------- |
| Unit        | Functional, Regression                  |
| Integration | Functional, Regression, Smoke           |
| System      | Functional, Non-Functional, Exploratory |
| Acceptance  | Functional, Alpha, Beta                 |

---

## 11. Best Practices

- Perform functional testing whenever a new feature is implemented.
- Automate regression tests whenever possible.
- Execute Smoke Tests before starting a complete testing cycle.
- Perform Sanity Tests after small fixes.
- Complement planned tests with exploratory testing.
- Involve real users during Beta Testing.

---

## 12. Summary

| Type           | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| Functional     | Validate the system's functionalities.               |
| Non-Functional | Evaluate quality attributes.                         |
| Regression     | Ensure that changes have not introduced new defects. |
| Smoke          | Quickly verify the application's stability.          |
| Sanity         | Validate a specific change.                          |
| Exploratory    | Discover defects through system exploration.         |
| Alpha          | Validate the software in a controlled environment.   |
| Beta           | Validate the software with real users.               |

---

## 13. Conclusion

Testing types classify software tests according to their purpose, allowing different aspects of software quality to be evaluated. While functional testing verifies whether the system performs as specified, non-functional testing evaluates characteristics such as performance, security, and usability.

In addition, Regression, Smoke, Sanity, Exploratory, Alpha, and Beta Testing complement the validation process, increasing the software's reliability before it is delivered to the customer.
