# Integration and End-to-End Testing

Integration and end-to-end tests verify that different parts of a system work together correctly.

They complement unit tests by exercising broader workflows.

---

## Integration Testing

Integration tests focus on how components interact.

Examples include:

- A service calling a database.
- An API endpoint validating and storing data.
- A module communicating with an external dependency.

These tests check boundaries and interactions.

---

## End-to-End Testing

End-to-end tests simulate real user workflows through the full system.

Examples include:

- Signing in and viewing a dashboard.
- Completing a checkout flow.
- Submitting a form and receiving confirmation.

These tests give confidence that the product works from the user's perspective.

---

## Tradeoffs

Broader tests are often slower and more complex to maintain than unit tests.

That means they should be used carefully to protect the most important flows.

---

## Key Takeaways

- Integration tests verify interaction between components.
- End-to-end tests verify full user workflows.
- These tests complement unit tests by covering broader behavior.
- They are valuable for confidence, but usually slower and more expensive to maintain.
