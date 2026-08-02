# Views

A view is a saved query that behaves like a virtual table.

It can simplify access to commonly used logic without duplicating query text everywhere.

---

## Why Views Are Useful

Views can help teams:

- Reuse complex query logic.
- Hide implementation details.
- Present safer or simpler interfaces to consumers.

This is especially helpful in reporting and internal data access layers.

---

## Limitations

Views do not eliminate the need to understand the underlying data model.

Some views can also become difficult to maintain if they grow too complex.

---

## Key Takeaways

- Views act like virtual tables based on saved queries.
- They can improve reuse and simplify common access patterns.
- Views should remain understandable and purposeful.
- Good abstraction can reduce duplication in database work.
