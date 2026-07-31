# Indexes

An index is a database structure that helps queries find data more efficiently.

Indexes often improve read performance significantly, but they also come with tradeoffs.

---

## Why Indexes Help

Without an index, the database may need to scan many rows to find matching data.

With the right index, it can often locate relevant rows much faster.

This is especially useful for:

- Frequent lookups.
- Filtering.
- Sorting.
- Joining.

---

## Tradeoffs

Indexes are not free.

They can:

- Use extra storage.
- Slow down writes.
- Add maintenance overhead.

This is why indexes should match real query patterns.

---

## Key Takeaways

- Indexes improve query speed by making lookup paths more efficient.
- They are valuable for common filters, joins, and sorts.
- Too many indexes can hurt write performance.
- Index design should follow actual workload needs.
