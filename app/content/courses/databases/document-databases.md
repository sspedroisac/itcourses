# Document Databases

Document databases store data as self-contained documents, often in formats similar to JSON.

They are a common type of NoSQL database.

---

## Why Teams Use Them

Document databases are useful when:

- Data structures vary between records.
- Nested objects are common.
- Rapid schema evolution is important.

They can be a good fit for content systems, catalogs, and some application backends.

---

## Tradeoffs

Document databases may reduce the need for joins, but they can also create duplication or weaken relational guarantees depending on how they are used.

---

## Key Takeaways

- Document databases store flexible document-shaped data.
- They are useful for evolving or nested structures.
- They trade strict relational structure for flexibility.
- Good use depends on data shape and query needs.
