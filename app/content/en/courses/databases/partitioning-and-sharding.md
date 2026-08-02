# Partitioning and Sharding

As data grows, a single table or database instance may become harder to scale.

Partitioning and sharding are techniques used to manage that growth.

---

## Partitioning

Partitioning divides data within a database into smaller logical pieces.

This can improve manageability and sometimes query performance.

Common partitioning dimensions include time ranges or category boundaries.

---

## Sharding

Sharding distributes data across multiple database instances.

This can help with scale, but it introduces significant complexity in routing, balancing, and operational management.

---

## Key Takeaways

- Partitioning and sharding help large systems handle growth.
- Partitioning usually stays within one database system.
- Sharding spreads data across multiple instances.
- These techniques should be adopted only when scale or workload truly demands them.
