# Designing for Read and Write Patterns

Database design should reflect how the application actually uses data.

Read-heavy and write-heavy systems may need different schema choices.

---

## Read Patterns

When reads dominate, teams may optimize for:

- Fast lookup paths.
- Helpful indexes.
- Precomputed summaries.
- Denormalized structures for important queries.

---

## Write Patterns

When writes are frequent, teams may prioritize:

- Efficient inserts and updates.
- Reduced locking or contention.
- Simpler consistency paths.

Understanding workload shape helps avoid designs that look elegant but perform poorly in practice.

---

## Key Takeaways

- Real usage patterns should influence schema design.
- Read-heavy and write-heavy workloads create different tradeoffs.
- Good database design is driven by application behavior.
- Performance decisions are stronger when based on actual access patterns.
