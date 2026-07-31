# Isolation Levels

Isolation levels describe how a database handles concurrent transactions and what kinds of interaction are allowed between them.

They affect both correctness and performance.

---

## Why Isolation Matters

When many users or processes operate on the same data at the same time, problems can occur, such as:

- Dirty reads.
- Non-repeatable reads.
- Phantom reads.

Isolation settings help control these behaviors.

---

## Tradeoffs

Stronger isolation often reduces concurrency or increases overhead.

Weaker isolation may improve throughput but allow more surprising behavior.

Teams choose the right level based on business requirements and tolerance for anomalies.

---

## Key Takeaways

- Isolation levels control how concurrent transactions interact.
- They balance correctness against performance and concurrency.
- Different workloads need different guarantees.
- Understanding isolation is important for reliable multi-user systems.
