# Reading Query Plans

When a database executes a query, it chooses a plan for how to retrieve the requested data.

Reading query plans helps engineers understand why a query is fast or slow.

---

## What a Query Plan Shows

A plan may reveal:

- Whether indexes are being used.
- Whether full scans are happening.
- The order of joins.
- Estimated row counts.
- Expensive sorting or aggregation steps.

This visibility is useful for performance analysis.

---

## Why It Matters

Performance tuning is stronger when guided by evidence instead of guesswork.

Query plans provide that evidence.

---

## Key Takeaways

- Query plans explain how the database intends to execute a query.
- They help identify bottlenecks and missed optimization opportunities.
- Reading plans is a core skill in database performance work.
- Good tuning begins with observation, not assumptions.
