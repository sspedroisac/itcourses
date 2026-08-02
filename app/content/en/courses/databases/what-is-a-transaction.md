# What Is a Transaction?

A transaction is a group of one or more database operations treated as a single unit of work.

Either all of the operations succeed together, or the system treats the whole unit as unsuccessful.

---

## Why Transactions Matter

Transactions help protect important operations such as:

- Moving money between accounts.
- Creating an order and its items.
- Reserving inventory during checkout.

These activities should not be left in a half-finished state.

---

## Real-World Importance

Without transactions, one step might succeed while another fails, leaving the data inconsistent.

This is especially dangerous in systems involving financial records, inventory, or user permissions.

---

## Key Takeaways

- A transaction groups related operations into one logical unit.
- Transactions protect consistency when multiple steps must succeed together.
- They are essential in systems where partial updates would cause problems.
- Understanding transactions is key to reliable database work.
