# CAP Theorem Basics

CAP is a simplified way to think about tradeoffs in distributed systems.

It highlights tension between consistency, availability, and partition tolerance.

---

## The Three Terms

- **Consistency** means every node sees the same data at the same time.
- **Availability** means every request gets a response.
- **Partition tolerance** means the system continues operating even when network communication is disrupted.

In distributed systems, network partitions must be considered, so tradeoffs become necessary.

---

## Why It Matters

CAP is useful not because it explains every detail, but because it reminds engineers that distributed databases cannot optimize every goal equally under failure conditions.

---

## Key Takeaways

- CAP describes important distributed-system tradeoffs.
- Consistency and availability may conflict during partitions.
- Distributed database design is shaped by failure scenarios.
- Good engineering requires understanding what guarantees matter most.
