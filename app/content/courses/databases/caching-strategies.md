# Caching Strategies

Caching stores frequently used data in a faster location so it can be retrieved more quickly.

It is often used to reduce database load and improve response times.

---

## Why Caching Helps

Some queries are expensive or repeated often.

Caches can help by:

- Serving hot data faster.
- Reducing repeated computation.
- Lowering database pressure.

This is especially useful in read-heavy systems.

---

## Tradeoffs

Caching introduces complexity such as:

- Stale data.
- Invalidation challenges.
- Extra infrastructure.

Not all performance problems should be solved with caching.

---

## Key Takeaways

- Caching can improve speed and reduce load.
- It is most useful for repeated and predictable access patterns.
- Cache invalidation and staleness are important concerns.
- Caching should support, not replace, good database design.
