# Working with ORMs

An ORM, or Object-Relational Mapper, helps application code interact with relational databases using programming-language abstractions instead of raw SQL for every operation.

ORMs are widely used, but they should be understood as tools with tradeoffs.

---

## Benefits of ORMs

ORMs can help with:

- Faster development.
- Reduced boilerplate.
- Schema modeling in application code.
- Safer parameter handling.

They are especially useful in common CRUD-style applications.

---

## Limitations

ORMs can hide query behavior.

That means developers still need database knowledge to understand:

- Performance issues.
- Join behavior.
- N+1 query problems.
- Migration implications.

---

## Key Takeaways

- ORMs improve productivity for many application workflows.
- They do not remove the need to understand SQL and schemas.
- Abstractions are helpful only when engineers know what is happening underneath.
- Practical database skill includes knowing when to go beyond the ORM.
