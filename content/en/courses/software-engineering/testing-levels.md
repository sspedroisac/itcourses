# Testing Levels

## 1. What Are Software Testing Levels?

**Software testing levels** represent the different stages at which software is tested throughout its development lifecycle.

Each level has a specific objective and verifies different aspects of the application, ranging from small pieces of code to the validation of the entire system by the customer.

Dividing testing into levels makes it possible to identify defects progressively, reducing costs and improving software quality.

In general, testing is performed in the following order:

```text
Unit Testing
      │
      ▼
Integration Testing
      │
      ▼
System Testing
      │
      ▼
Acceptance Testing
```

The earlier a defect is found, the lower the cost of fixing it.

---

## 2. Objectives of Software Testing Levels

The main objectives of software testing levels are:

- Verify that each part of the software works correctly;
- Detect defects as early as possible;
- Validate the integration between components;
- Ensure that the system behaves as expected;
- Confirm that the customer's requirements have been met.

---

## 3. Unit Testing

**Unit Testing** verifies the smallest testable unit of a software system.

A unit may be:

- a function;
- a method;
- a class;
- an isolated component.

The objective is to ensure that each unit works correctly on its own, without depending on other parts of the system.

This type of testing is usually automated and performed by the developer.

### 3.1 Characteristics

- Tests only a single unit of code;
- Runs in isolation;
- Executes quickly;
- Helps identify logic errors;
- Is commonly part of Continuous Integration (CI).

### 3.2 Examples of Defects Found

- Calculation errors;
- Incorrect conditions;
- Improper exception handling;
- Unexpected function return values.

### 3.3 Example

Consider the following function:

```typescript
function soma(a: number, b: number) {
  return a + b;
}
```

A unit test could verify:

```typescript
expect(soma(2, 3)).toBe(5);
```

In this case, only the function is tested, without accessing a database, APIs, or the user interface.

---

## 4. Integration Testing

After verifying that each unit works correctly, it is necessary to ensure that they also work correctly when integrated.

**Integration Testing** verifies the communication between modules, components, or services.

Its objective is to identify defects that arise from the interaction between different parts of the system.

### 4.1 What Can Be Integrated

- Internal modules;
- APIs;
- Databases;
- Microservices;
- External systems.

### 4.2 Integration Strategies

There are different strategies for performing integration testing.

#### Big Bang

All modules are integrated at once.

**Advantage**

- Simple to implement.

**Disadvantage**

- Difficult to identify the source of defects.

#### Incremental

Modules are integrated gradually.

The main approaches are:

- Top-Down;
- Bottom-Up;
- Hybrid.

This is the strategy most commonly used in real-world projects.

### 4.3 Examples of Defects Found

- APIs returning data in an incorrect format;
- Communication failures between services;
- Database persistence issues;
- Incompatible interfaces between components.

---

## 5. System Testing

**System Testing** verifies the software as a whole.

At this level, all components have already been integrated, and the system is evaluated in an environment similar to production.

The objective is to validate whether all functionalities work correctly together.

This type of testing is typically performed by a Quality Assurance (QA) team.

### 5.1 What Is Evaluated

- Functionalities;
- Complete system workflows;
- User interface;
- Business rules;
- Performance;
- Security;
- Compatibility.

### 5.2 Example

In an e-commerce system, a system test may validate the following workflow:

1. User registration;
2. Login;
3. Product search;
4. Add to cart;
5. Payment;
6. Purchase confirmation.

The entire workflow is executed exactly as an end user would perform it.

### 5.3 Examples of Defects Found

- Broken workflows;
- Incorrect business rules;
- User interface errors;
- Performance issues.

---

## 6. Acceptance Testing

**Acceptance Testing** is the final level of testing.

Its objective is to verify whether the software meets the customer's needs and the project's defined requirements.

Even if the system is technically correct, it may still be rejected if it does not deliver the expected business value.

This type of testing is typically performed by the customer, end users, or business representatives.

### 6.1 Objectives

- Validate functional requirements;
- Confirm business rules;
- Evaluate whether the product is ready for delivery;
- Approve or reject the system.

### 6.2 Example

A bank requires that every transfer above R$10,000 must require additional authentication.

If this rule has not been implemented, the system may be technically correct but will fail acceptance testing.

---

## 7. Software Testing Levels Workflow

```text
Feature Development
          │
          ▼
     Unit Testing
          │
          ▼
 Integration Testing
          │
          ▼
    System Testing
          │
          ▼
 Acceptance Testing
          │
          ▼
 Software Release
```

---

## 8. Best Practices

- Perform unit tests during development.
- Automate tests whenever possible.
- Integrate components gradually.
- Perform system testing in an environment similar to production.
- Involve users and customers in acceptance testing.
- Fix defects before moving on to the next testing level.

---

## 9. Summary

| Level       | Scope                          | Primary Responsibility | Objective                                        |
| ----------- | ------------------------------ | ---------------------- | ------------------------------------------------ |
| Unit        | Functions, methods, or classes | Developer              | Validate small units of code                     |
| Integration | Communication between modules  | Developer or QA        | Verify the integration between components        |
| System      | Entire system                  | QA Team                | Validate the overall behavior of the application |
| Acceptance  | Final product                  | Customer or User       | Confirm that the system meets the requirements   |

---

## 10. Conclusion

Software testing levels organize the software validation process progressively. First, small units of code are verified (**Unit Testing**). Next, communication between components is evaluated (**Integration Testing**). Then, the behavior of the complete system is validated (**System Testing**). Finally, the customer confirms that the product meets the established requirements (**Acceptance Testing**).

This approach reduces correction costs, facilitates defect identification, and improves the quality and reliability of the delivered software.
