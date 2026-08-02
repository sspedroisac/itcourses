# GROUP BY and HAVING

`GROUP BY` is used to organize rows into groups before applying aggregate functions.

`HAVING` is used to filter those grouped results.

---

## Why Grouping Matters

Grouping helps answer questions such as:

- How many orders did each customer place?
- What is the total sales amount per month?
- Which categories have more than a certain number of products?

This is common in analytics and reporting work.

---

## WHERE vs HAVING

`WHERE` filters rows before grouping.

`HAVING` filters groups after aggregation.

Understanding the difference is important for writing correct queries.

---

## Key Takeaways

- `GROUP BY` organizes data for aggregation.
- `HAVING` filters grouped results.
- `WHERE` and `HAVING` serve different stages of query processing.
- Grouped queries are essential for summary analysis.
