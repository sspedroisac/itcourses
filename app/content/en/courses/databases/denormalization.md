# Denormalization

Denormalization means intentionally adding some redundancy to a schema in order to improve performance or simplify access patterns.

It is often used after a normalized design proves too expensive for important queries.

---

## Why Teams Denormalize

Denormalization may help when:

- Too many joins slow critical queries.
- Read-heavy workloads need faster access.
- Precomputed values reduce repeated work.

It is a tradeoff, not a default goal.

---

## Risks

Denormalized schemas can make:

- Updates more complex.
- Data consistency harder to maintain.
- Business logic more error-prone.

This is why denormalization should be intentional and justified by real needs.

---

## Key Takeaways

- Denormalization adds controlled redundancy for practical reasons.
- It often improves read performance but can complicate writes.
- The decision should be guided by real workload patterns.
- Good engineering balances simplicity, consistency, and speed.
